const textBox = document.getElementById("textbox");
const toFah = document.getElementById("toFahrenheit");
const toCel = document.getElementById("toCelcius");
const result = document.getElementById("result")

let temp;

function convert(){

    if(toFah.checked){
        temp = Number(textBox.value);
        temp = ((9/5)*temp) + 32;
        result.innerHTML = `<span style = "font-size: 1.3em">${temp.toFixed(2)} <sup>o</sup>F</span>`;
    }else if(toCel.checked){
        temp = Number(textBox.value);
        temp = (temp - 32)*(5/9);
        result.innerHTML = `<span style = "font-size: 1.3em">${temp.toFixed(2)} <sup>o</sup>C</span>`;
    }else{
        result.textContent = `Select a unit`;
    }
}