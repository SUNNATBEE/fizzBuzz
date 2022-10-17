var elFrom = document.querySelector(".form-submit");
var elInput = document.querySelector(".inputs-info");
var elFizzText = document.querySelector(".fizz");
var elBuzzText = document.querySelector(".buzz");
var elFizzBuzzText = document.querySelector(".fizzbuzz");
var elAlert = document.querySelector(".alert");
var elBtnReset = document.querySelector(".btn-reset");

var Fizz = [];
var Buzz = [];
var FizzBuzz = [];

elFrom.addEventListener("submit" , function(evt){
    evt.preventDefault()
    
    var elInputValue = Number(elInput.value);
    if (elInputValue % 3 == 0 && elInputValue % 5 == 0){
        FizzBuzz.push(elInputValue);
        Buzz.push(elInputValue);
        Fizz.push(elInputValue);
        elBuzzText.textContent = Buzz;
        elFizzText.textContent = Fizz;
        elFizzBuzzText.textContent = FizzBuzz;
        elAlert.classList.remove("d-block")
        elAlert.classList.add("d-none");
        elFizzBuzzText.style.backgroundColor = "yellow"
        elFizzText.style.backgroundColor = "yellow";
        elBuzzText.style.backgroundColor = "yellow";
        elFrom.reset();
        
    }
    else if(elInputValue %  3 == 0){
        Fizz.push(elInputValue);
        elFizzText.textContent = Fizz;
        elAlert.classList.remove("d-block");
        elAlert.classList.add("d-none");
        elFizzText.style.backgroundColor = "yellow";
        elFrom.reset();
        elFizzText.textContent = "";
    }else if (elInputValue % 5 == 0){
        Buzz.push(elInputValue);
        elBuzzText.textContent = Buzz;
        elAlert.classList.remove("d-block");
        elAlert.classList.add("d-none");
        elBuzzText.style.backgroundColor = "yellow"
        elFrom.reset();
         
    }
    else{
        elAlert.classList.remove("d-none");
        elAlert.classList.add("d-block");
        elAlert.textContent = elInputValue + "  " + " soni bolinmaydi"
        elAlert.style.fontWeight = "900";
        elAlert.style.fontSize = "30px"
        elFrom.reset();
        
    }
})
elBtnReset.addEventListener("click", function(){
    elBuzzText.textContent = ""
    elFizzBuzzText.textContent = ""
    elFizzText.textContent = ""
})