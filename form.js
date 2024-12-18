// Make a form which collect a person name, university and age and console.log() an object containing all the details.

// let name = document.getElementById("names");
// let uni = document.getElementById("university")
// let age = document.getElementById("age")
// let obj = {}
// let submit = document.getElementById("submit");

// submit.addEventListener("click", function(e){
//   e.preventDefault()
//   obj = {
//     names: name.value,
//     university: uni.value,
//     age: age.value,
//   }
//   console.log(obj)
// })

//dom transversal
// the element interface and its properties and methods
// accessing a URL(BOM)


let calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener("click", function(e){
  e.preventDefault()
  let firstVal = +document.getElementById("value1").value;
  let secondVal = +document.getElementById("value2").value;
  let operator = document.getElementById("operator").value;
  if(operator === "+"){
    console.log(firstVal + secondVal);
  }else if(operator === "-"){
    console.log(firstVal - secondVal);
  }else if(operator === "*"){
    console.log(firstVal * secondVal);
  }else if (operator === "/" && secondVal !== 0){
    console.log(firstVal / secondVal);
  }else{
    console.log("Invalid operator. Please use +, -, *, or /.");
  }
})




