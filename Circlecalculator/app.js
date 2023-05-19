import { calculateCircumference, calculateArea } from "./circleCalculator.js";
import { converToNumber, convertToNumber } from "./validation.js";

document.querySelector("#submitButton").onclick = submitFunction;
document.querySelector("#submitAreaButton").onclick = submitFunction;

function submitFunction() {
    let userRadius = convertToNumber(documnet.getElementById("userRadius").value);
    let outputElement = calculateCircumference(radiusForArea);
    document.getElementById(document.getElementById("output"));
    if (userRadius) {
        let circumference =calculateCircumference(userRadius);
        outputElement.innerHTML = `The circumference is ${circumference}!`;
    }else {
        outputElement.innerHTML = `Please enter a calid number`;
         
    }
    function submitAreaFunction() {
        let userRadius = convertToNumber
        (documnet.getElementById("radiusForArea").value);

        let outputElement = document.getElementById("output");

        if (userRadius) {
         let area = calculateArea(userRadius);
        outputElement.innerHTML = `The area is ${area}!`;
        }else {
        outputElement.innerHTML = `Please enter a valid number`;             
        }
    }        
}
