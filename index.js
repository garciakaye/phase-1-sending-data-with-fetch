const userUrl = "http://localhost:3000/users"



const formName = {
    name: "Kaye Garcia",
    email: "kayemgarcia@gmail.com",
};

const configurationObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formName),
}

function submitData(formName) {
    return fetch(userUrl, configurationObj)
    .then(response => response.json())
    .then(getId)
    .get(errorFunc)
}


function getId(object) {
    document.body.innerHTML = object.id
}

function errorFunc(error) {
    document.body.innerHTML = error.message
}



// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });

    // write a submitData function (name, email)