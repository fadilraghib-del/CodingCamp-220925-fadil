welcomemassage();

function welcomemassage() {
    let username = prompt("Enter your name");
    if (username && username.trim() !== "") {
       if (document.getElementById("username")){
        document.getElementById("username").innerHTML = username;
        
    } 
    alert("Welcome" + username + " to our website");
 } else {       
        alert("Welcome to our website"); 

    }
}

function validateForm() {
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    console.log(name, email, message);

    if (name === "" || email === "" || message === "") {
        alert("please fill in all fields")
    } else {
        alert('Thank you, for your message! We will get back to you soon.');

        }   
     }