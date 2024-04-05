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
    let split_equation = equation.split(" ");
    let result = 0;
    let n1, n2, tempresult;
    let done = false;
    let tempDone = false;

    for(let i = 0; i<split_equation.length;i++){
        if(tempDone){
            console.log("Second n1")
            n1 = tempresult;     
        }else{
            console.log("First n1")
            n1 = parseFloat(split_equation[i]);
            i++    
        }
   
        let op = split_equation[i];
        i++
        n2 = parseFloat(split_equation[i]);
    
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