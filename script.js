let bill = document.querySelector("#bills");
let customTip =document.querySelector("#custom-tip");
let numberOfPersons = document.querySelector("#persons");
let calculate = document.querySelector("#calculate");
let tipPerson = document.querySelector("#tip");
let totalPerson = document.querySelector("#total");
let radioArr = ["five","ten","fifteen","twenty-five","fifty"];
let radioBtnArr = [];
for (let i = 0; i < 5; i++) {
    radioBtnArr.push(document.querySelector("#"+radioArr[i]));
}

function calculateTip() {
    let billValue = parseInt(bill.value);
    let personsValue = parseInt(numberOfPersons.value);
    let customTipValue = customTip.value;
    if (customTipValue === "") {
        let isChecked =false;
        radioBtnArr.forEach(radio => {
            if (radio.checked) {
                isChecked = true;
                calculation(radio.value,billValue,personsValue);
            }
        });
        if (isChecked === false) {
            alert("please select tip or enter manually")
        }
    } else {
        let isChecked =false;
        radioBtnArr.forEach(radio => {
            if (radio.checked) {
                isChecked = true;
            }
        });
        if (isChecked) {
            alert("you cant selet tip and enter manually at same time")
        } else {
            calculation(customTipValue,billValue,personsValue);
        }
    }
    calculate.innerHTML = "RESET";
    calculate.removeEventListener("click",calculateTip);
    calculate.addEventListener("click",reset);
}

function calculation(x,billValue,personsValue) {
    let tip = billValue * (parseInt(x)/100);
    let total = billValue + tip;
    let tipPerPerson = tip/personsValue;
    let totalPerPerson = total/personsValue;
    updateValues(tipPerPerson,totalPerPerson);
}
function updateValues(tip,total) {
    tipPerson.innerHTML = parseFloat(tip).toFixed(2);
    totalPerson.innerHTML = parseFloat(total).toFixed(2);
}

function reset() {
    tipPerson.innerHTML = "00.00";
    totalPerson.innerHTML = "00.00";
    calculate.innerHTML = "CALCULATE";
    bill.value = "";
    customTip.value = "";
    numberOfPersons.value = "";
    calculate.removeEventListener("click",reset);
    calculate.addEventListener("click",calculateTip);
}
calculate.addEventListener("click",calculateTip);