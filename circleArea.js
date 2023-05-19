let unit = "inches";
let radius = prompt("Enter a radius");
let circleArea = Math.PI * radius * radius;

let userRoundPreference = prompt("Would you like to round? (y/n)");

if (userRoundPreference === "y") {
    circleArea = circleArea.toFixed();
}

if (userRoundPreference === "y" || userRoundPreference === "Y") {
    circleArea = circleArea.toFixed();
}

alert("The area is " + circleArea + ".");
 