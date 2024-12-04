let outputDiv = document.getElementById("output");
let passwordInput = document.getElementById("passwordInput");
let submitButton = document.getElementById("submitButton");

const correctPassword = "12345";
outputDiv.innerHTML += "<h2>Using a password prompt</h2>";

submitButton.addEventListener("click", () =>{
    let password; 
    let attempt = 0;

    do{
        password = passwordInput.value;

        if(password === correctPassword){
            outputDiv.innerHTML += "Access Granted!<br>";
            passwordInput.disabled = true;
            submitButton.disabled = true; 
            break;
        }else{
            outputDiv.innerHTML += "Incorrect password. Attempt ${++attempt}. Try again.<br>";
            passwordInput.value = ";"
        }
    } while (password !== correctPassword && !passwordInput.disabled);
});

