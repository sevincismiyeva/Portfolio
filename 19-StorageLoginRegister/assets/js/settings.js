document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("#settingsForm");
    let newUsername = document.querySelector("#newUsername");
    let newPassword = document.querySelector("#newPassword");
    let logoutBtn = document.querySelector("#logout");
    let yaddasaxla = document.querySelector("#yaddasaxla");
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users.find(user => user.isLogined);
  
    if (!currentUser) {
      toast("Daxil olmamısınız");
      window.location.href = "login.html";
      return;
    }
  
    
    newUsername.value = currentUser.username;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      let usernameValue = newUsername.value;
      let passwordValue = newPassword.value;
  
      if (!usernameValue) {
        toast("İstifadəçi adı boş ola bilmez");
        return;
      }
  
      if (passwordValue && !yoxlaPassword(passwordValue)) {
        toast("Yeni şifre zəifdir");
        return;
      }
  
      
      users = users.map(user => {
        if (user.username === currentUser.username) {
          user.username = usernameValue;
          if (passwordValue){
            user.password = passwordValue;
          user.isLogined = true;
          } 
        }
        return user;
      });
  
      localStorage.setItem("users", JSON.stringify(users));
      toast("Məlumatlar uğurla yeniləndi");
    });
  
    logoutBtn.addEventListener("click", () => {
      users = users.map(user => {
        user.isLogined = false;
        return user;
      });
      localStorage.setItem("users", JSON.stringify(users));
      toast("Çıxış edildi");
  
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    });
  
    function yoxlaPassword(value) {
      if (!value || value.length < 8) {
        return false;
      }
    
      let kicikHerf,boyukHerf,reqem,simvol = false;
      let specialChars = "@#$%!^&*";
    
      for (let i = 0; i < value.length; i++) {
        let char = value[i];
    
        if (char >= "a" && char <= "z") {
          kicikHerf = true;
        }
        else if (char >= "A" && char <= "Z"){
          boyukHerf = true;
        } 
        else if (char >= "0" && char <= "9"){
          reqem = true;
        } 
        else if (specialChars.includes(char)){
          simvol = true;
        } 
      }
    
      return kicikHerf && boyukHerf && reqem && simvol;
    }
  
    let toast= (text) => {
        Toastify({
            text:`${text}`,
            duration: 3000,
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #00b09b,rgb(87, 132, 183))",
              padding: "10px 20px",
              maxWidth: "250px", 
            },
            
            onClick: function(){} 
          }).showToast();
    };
  });
  