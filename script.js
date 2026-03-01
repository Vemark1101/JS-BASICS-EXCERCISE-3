const input = document.getElementById("numInput");
const numbersDisplay = document.getElementById("numbers");
const sumDisplay = document.getElementById("sum");
const highestDisplay = document.getElementById("highest");
const lowestDisplay = document.getElementById("lowest");

let arr = [];

function insertNumber(){
    let value = parseInt(input.value);

    if(input.value === "") return;

    arr.push(value);

    updateDisplay();
    input.value = "";
}

function deleteAll(){
    arr = [];
    updateDisplay();
}

function updateDisplay(){

    numbersDisplay.innerHTML = arr.join("<br>");

    if(arr.length === 0){
        sumDisplay.innerHTML = "";
        highestDisplay.innerHTML = "";
        lowestDisplay.innerHTML = "";
        return;
    }

    let sum = 0;
    let highest = arr[0];
    let lowest = arr[0];

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];

        if(arr[i] > highest){
            highest = arr[i];
        }

        if(arr[i] < lowest){
            lowest = arr[i];
        }
    }

    sumDisplay.innerHTML = sum;
    highestDisplay.innerHTML = highest;
    lowestDisplay.innerHTML = lowest;
}