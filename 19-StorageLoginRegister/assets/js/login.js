document.addEventListener("DOMContentLoaded", () => {
  let users = JSON.parse(localStorage.getItem("users"));

  let form = document.querySelector('form')
  let username = document.querySelector("#username");
  let password = document.querySelector("#password")

  form.addEventListener("submit", login);

  function login(e) {
    e.preventDefault();


    let inputUsername = username.value;
    let inputPassword = password.value;

    if (!inputUsername || !inputPassword) {
      toast("Bütün saheleri doldurun");
      return;
    }

    let giriş = JSON.parse(localStorage.getItem("giriş")) || {};

    let now = new Date().getTime();
    let block = giriş.block;

    if (block && now < block) {
      let remaining = Math.ceil((block - now) / 60000);
      toast(`Hesab ${remaining} dəqiqəlik bloklanıb`);
      return;
    }


    if (!yoxlaPassword(inputPassword)) {
      toast("İstifadəçi adı və ya password düzgün formatda deyil");
      return;
    }


    if (!users) {
      toast("User not found");
    }

    let isLoginedUser = users.find(
      (user) => user.username == username.value && user.password == password.value);

    if (isLoginedUser) {
      isLoginedUser.isLogined = true;
      localStorage.setItem("users", JSON.stringify(users));
      

      localStorage.removeItem("giriş");

      toast("User login successfuly");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
    } else {
      toast("Username and password incorrect");

      giriş.count = (giriş.count || 0) + 1;

      if (giriş.count >= 3) {
        giriş.block = now + 1 * 60 * 1000; 
        toast("Çoxlu səhv cəhd. Hesab 1 dəqiqəlik bloklanıb.");
      }

      localStorage.setItem("giriş", JSON.stringify(giriş));
    }

  };


  function yoxlaPassword(value) {
    if (!value || value.length < 8) {
      return false;
    }

    let kicikHerf, boyukHerf, reqem, simvol = false;
    let specialChars = "@#$%!^&*";

    for (let i = 0; i < value.length; i++) {
      let char = value[i];

      if (char >= "a" && char <= "z") {
        kicikHerf = true;
      }
      else if (char >= "A" && char <= "Z") {
        boyukHerf = true;
      }
      else if (char >= "0" && char <= "9") {
        reqem = true;
      }
      else if (specialChars.includes(char)) {
        simvol = true;
      }
    }

    return kicikHerf && boyukHerf && reqem && simvol;
  }

});

let toast = (text) => {
  Toastify({
    text: `${text}`,
    duration: 3000,
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b,rgb(87, 132, 183))",
    },

    onClick: function () { }
  }).showToast();
};