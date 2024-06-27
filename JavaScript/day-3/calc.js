let input1 = document.getElementById('value1');
let input2 = document.getElementById("value2");
let resultTag = document.getElementById("result");

function getValues() {
    return {
        val1: +input1.value,
        val2: +input2.value
    };
}

function add() {
    let {val1, val2} = getValues();
    resultTag.innerHTML = `${val1} + ${val2} = ${val1 + val2}`;
}

function subtract() {
    let {val1, val2} = getValues();
    resultTag.innerHTML = `${val1} - ${val2} = ${val1 - val2}`;
}

function multiply() {
    let {val1, val2} = getValues();
    resultTag.innerHTML = `${val1} × ${val2} = ${val1 * val2}`;
}

function divide() {
    let {val1, val2} = getValues();
    resultTag.innerHTML = `${val1} / ${val2} = ${val1 / val2}`;
}