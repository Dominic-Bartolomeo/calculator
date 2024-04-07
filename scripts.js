let path = "";
// Add
function add(n1,n2){
    let num = n1 + n2;
    return Math.round(num * 1000) / 1000;
}

// Subtract
function subtract(n1,n2){
    let num = n1 - n2;
    return Math.round(num * 1000) / 1000;
}

// Multiply
function multiply(n1,n2){
    let num = n1 * n2;
    return Math.round(num * 1000) / 1000;
}

// Divide
function divide(n1,n2){
    if (n2 === 0){
        return "Nice try! Can't do that..."
    }else{
        let num = n1 / n2;
        return Math.round(num * 1000) / 1000;
    }   
}

// Operate
function operate(equation){
    console.log("EQUATION: " + equation)
    let split_equation = equation.split(" ");
    // split_equation.splice(-1);
    let result = 0;
    let n1, n2, tempresult;
    let done = false;
    let tempDone = false;
    console.log("SPLIT: " + split_equation)
    for(let i = 0; i<split_equation.length;i++){
        if(tempDone){
            console.log("Second n1")
            n1 = tempresult;     
        }else{
            console.log("First n1")
            n1 = parseFloat(split_equation[i]);
            console.log("N1: " + n1 + " i: " + i);
            i++    
        }
        
        let op = split_equation[i];
        console.log("OP: " + op + " i: " + i);
        i++
        n2 = parseFloat(split_equation[i]);
        console.log("N2: " + n2 + " i: " + i);
        if (op == "+") {
            result = add(n1,n2);
        }else if(op == "-"){
            result = subtract(n1,n2);
        }else if(op == "*") {
            result = multiply(n1,n2)
        }else if(op =="/"){
            result = divide(n1,n2)
        }else{
            return "Failure to operate."
        }
        tempDone = true;
        tempresult = result;
    }
    
    return result;
}

// selecting buttons
let oneBtn = document.querySelector("#one");
let twoBtn = document.querySelector("#two");
let threeBtn = document.querySelector("#three");
let fourBtn = document.querySelector("#four");
let fiveBtn = document.querySelector("#five");
let sixBtn = document.querySelector("#six");
let sevenBtn = document.querySelector("#seven");
let eightBtn = document.querySelector("#eight");
let nineBtn = document.querySelector("#nine");
let zeroBtn = document.querySelector("#zero");
let dotBtn = document.querySelector("#dot");
let equalBtn = document.querySelector("#equal");
let plusBtn = document.querySelector("#plus");
let minusBtn = document.querySelector("#minus");
let multiplyBtn = document.querySelector("#multiply");
let divideBtn = document.querySelector("#divide");
let clearBtn = document.querySelector("#clear");
let calcText = document.querySelector("#calc-text");

oneBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","1");
    path += "1";
})
twoBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","2");
    path += "2";
})
threeBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","3");
    path += "3";
})
fourBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","4");
    path += "4";
})
fiveBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","5");
    path += "5";
})
sixBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","6");
    path += "6";
})
sevenBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","7");
    path += "7";
})
eightBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","8");
    path += "8";
})
nineBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","9");
    path += "9";
})
zeroBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","0");
    path += "0";
})
dotBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend",".");
    path += ".";
})
equalBtn.addEventListener("click", () => {
    calcText.innerHTML = "";
    console.log("PATH GOING IN: " + path);
    calcText.insertAdjacentText("beforeend", operate(path));
})
plusBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","+");
    path += " + ";
})
minusBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","-");
    path += " - ";
})
divideBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","/");
    path += " / ";
})
multiplyBtn.addEventListener("click", () => {
    calcText.insertAdjacentText("beforeend","*");
    path += " * ";
})
clearBtn.addEventListener("click", () => {
    document.location.reload()
})
