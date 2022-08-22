const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOneEl = document.getElementById(`passwordOne-el`);
const passwordTwoEl = document.getElementById(`passwordTwo-el`);
let passwordOne = "";
let passwordTwo = "";

let passwordLength = 15

function generate() {
    if (passwordOne === "" && passwordTwo === "") {
        generateRandomPasswords();
    } else {
        passwordOne = "";
        passwordTwo = "";
        generateRandomPasswords();   
    }
}

function generateRandomPasswords() {
    for (let i = 0; i < passwordLength; i++) {
        passwordOne += characters[Math.floor(Math.random() * characters.length)];
        passwordOneEl.textContent = passwordOne;
        passwordTwo += characters[Math.floor(Math.random() * characters.length)];
        passwordTwoEl.textContent = passwordTwo;
    }

}

//Copy password to clipboard on when clicked

function copy() {
  navigator.clipboard.writeText(passwordOneEl.textContent);
  navigator.clipboard.writeText(passwordTwoEl.textContent);
  alert("Password copied to clipboard");
}





