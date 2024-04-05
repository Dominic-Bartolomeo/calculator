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
    console.log(n1)
    console.log(n2)
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
    let split_equation = equation.split("");
    let result = 0;
    // console.log(split_equation)
    // let test_arry = [];
    for(let i = 0; i < split_equation.length; i++){
        let n1 = parseFloat(split_equation[i++]);
        // console.log("String Num:" + n1);
        let op = split_equation[i++];
        // console.log("Operator:" + op);
        let n2 = parseFloat(split_equation[i]);
        // console.log("String Num:" + n2);
        // test_arry.push(n1)
        // test_arry.push(op)
        // test_arry.push(n2)
        // console.log(test_arry);

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
    }
    return result;
}