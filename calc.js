let equal_pressed=0;
//Refer all buttons excluding AC and DE
let button_input = document.querySelectorAll(".input-button");
//Refer input,equal,clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () =>{
    input.value = "";
};

//Access each class using forEach
button_input.forEach((button) => {
    button.addEventListener("click", () =>{
        if(equal_pressed == 1) {
            input.value = "";
            equal_pressed = 0;
        }
        //display value of each button
        input.value += button.value;
    });
});

//Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try{
        //evaluate user's input
        let solution = eval(inp_val);
        //True for natural numbers
        //False for decimals
        if(Number.isInteger(solution)){
            input.value = solution;
        }
        else{
            input.value = solution.toFixed(2);
        }
    }
    catch(err){
        //if user has entered invalid input
        alert("Invalid Input");
    }
});

//Clear whole input
clear.addEventListener("click", () => {
    input.value = " ";
});

//Erase single input
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
})