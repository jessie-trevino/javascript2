submitData(); {
    let balance = Number(calculaterForm.balance.value);
    let interestRate = Number(calculaterForm.interestRate.value);
    let duration = Number(calculaterForm.duration.value);
    console.log(balance);
    console.log(interestRate);
    console.log(duration);

    if(balance == "" || interestRate == "" || duration == ""){
        let value = "All fields must be filled in.";
        let color = "red";
        updateDOM(value, color);

        return false;
    }
    investmentCalculater(balance, annualRate, months);
    return false;
}
function updateDOM(value, color) {
    document.getElementById("output").innerHTML = value;
    document.getElementById("output").style.color = color;
}

updateDOM(value, color); {

}
computeFutureValue(balance, annualRate, months)