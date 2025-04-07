// task1
let hour = new Date().getHours();
let message = 
  hour >= 6 && hour < 12 ? "Sabahiniz xeyir" :
  hour >= 12 && hour < 18 ? "Gunortaniz xeyir" :
  hour >= 18 && hour < 24 ? "Axsaminiz xeyir" :"Yaxsi geceler";
  console.log(message);

// task2
const employee = {
  name: "Farid Ali",
  department: "Engineering",
  contact: {
    email: "farid.ali@example.com",
    phone: "555-1234",
    emergencyContact: {
      name: "Far For",
      relation: "Spouse"
    }
  }
};

let {name,department,contact:{email,phone,emergencyContact:{name:eC,relation}}}=employee;
console.log("name:", name + ",", "department:", department + ",", "email:", email + ",", "phone:", phone + ",", "emergencyContactName:", eC + ",", "emergencyContactName:", relation);

// task3
const apiResponse = [
  {
    id: 1,
    title: "JavaScript əsasları",
    author: "Səid Məmmədov",
    stats: [2500, 150, 30]      
  },
  {
    id: 2,
    title: "Array Destructuring",
    author: "Leyla Əliyeva",
    stats: [1800, 220, 45]
  },
  {
    id: 3,
    title: "Müasir JavaScript",
    author: "Tural Həsənli",
    stats: [3200, 380, 70]
  }
];
// 1ci
let [, arr2] = apiResponse;
console.log(arr2);
// 2ci
let [oxunma, bəyənmə, şərhlər] = arr2.stats;
console.log(oxunma, bəyənmə, şərhlər)
// 3cu
console.log(`Məqalə:${arr2.title},Müəllif:${arr2.author},${oxunma} oxunma,${bəyənmə} bəyənmə,${şərhlər} şərh`);


// task4
function renderUserProfile(userData) {

    return {
        username: userData?.user?.username ?? "Qonaq",
        profil: userData?.user?.profile?.avatar ?? "/default-avatar.png",
        bio: userData?.user?.profile?.bio ?? "Məlumat yoxdur",
        email: userData?.user?.contact?.email ?? "təyin edilməyib",
        premium: userData?.user?.account?.premium ?? false
    };
}

console.log(renderUserProfile({
    user: {
        username: "tahir2023",
        profile: {
            avatar: "/users/tahir.jpg",
            bio: "JavaScript developer",
        },
        contact: {
            email: "tahir@example.com"
        },
        account: {
            premium: true
        }
    }
}));

console.log(renderUserProfile({
    user: {
        username: "aynur",
        profile: {
            bio: ""
        },
        contact: {}
    }
}));

console.log(renderUserProfile({
    user: {
        username: null
    }
}));

console.log(renderUserProfile({}));