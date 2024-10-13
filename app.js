var array = [12, 21, 73, 44, 59]

// add 15
function add15(x) {
    return x + 15;
}

function clickAdd15() {
    newArray = array.map(add15);
    document.getElementById("plus15").innerHTML = newArray;
}

// minus 15
function minus15(x) {
    return x - 15;
}

function clickMinus15() {
    newArray = array.map(minus15);
    document.getElementById("sub15").innerHTML = newArray;
}

// multiply 15
function multiply15(x) {
    return x * 15;
}

function clickMultiply15() {
    newArray = array.map(multiply15);
    document.getElementById("product15").innerHTML = newArray;
}

// divide 15
function divide15(x) {
    return x/15;
}

function clickDivide15(){
    newArray = array.map(divide15);
    document.getElementById("quotient15").innerHTML = newArray;
}