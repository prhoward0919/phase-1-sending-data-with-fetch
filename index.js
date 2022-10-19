// Add your code here
const newobj = {
    name: "Steve",
    email: "steve@steve.com",
}

const requestBody = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(newobj),
};
function submitData() {
    return fetch("http://localhost:3000/users", requestBody)
        .then(function (response) {
            return response.json();
        })
        .then(function (newobj) {
            console.log(newobj);
        })
        .catch(function (error) {
            alert("Unauthorized Access");
            console.log(error.message);
        });
    };

 

