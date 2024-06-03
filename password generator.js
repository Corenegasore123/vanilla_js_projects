//RANDOM PASSWORD GENERATOR
let result = document.getElementById("result");
const btn = document.getElementById("generate");

btn.onclick = function(){

function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijkmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=,.";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(passwordLength <= 0){
        return `Password length must be atleast 1`;
    }
    if(allowedChars.length === 0){
        return `Atleast 1 set of characters needs to be selected`
    }

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

let passwordLength = document.getElementById("passwordLength").value;
passwordLength = Number(passwordLength);
let includeLowercase;
let includeUppercase;
let includeNumbers;
let includeSymbols;

document.getElementById("lowercase").checked ? includeLowercase = true : includeLowercase = false;
document.getElementById("uppercase").checked ? includeUppercase = true : includeUppercase = false;
document.getElementById("numbers").checked ? includeNumbers = true : includeNumbers = false;
document.getElementById("symbols").checked ? includeSymbols = true : includeSymbols = false;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

result.innerHTML = `Generated Password: <span style= "color: green">${password}</span>`;

}
