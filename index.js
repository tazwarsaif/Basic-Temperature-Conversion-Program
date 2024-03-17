const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const temperature = document.getElementById("temp");
const final = document.getElementById("final");

let x;

function convert(event){
    if(toF.checked){
        x = Number(temperature.value);
        x = x*(9/5) + 32;
        final.textContent = x.toFixed(1) + "°F";
    }
    else if(toC.checked){
        x = Number(temperature.value);
        x = (x-32)*(5/9);
        final.textContent = x.toFixed(1) + "°C";
    }
    else{
        final.textContent = `select a unit`;
    }
}