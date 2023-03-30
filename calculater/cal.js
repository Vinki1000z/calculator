console.log("this is calculater");
let btn=document.querySelectorAll("button");
let screen=document.getElementById("text");
screenValue='';
console.log(btn);
for(items of btn){
items.addEventListener("click",(e)=>{
    buttonText = e.target.innerText;
    console.log('Button text is ', buttonText);
    if (buttonText == 'X') {
        buttonText = '*';
        screenValue += buttonText;
        screen.value = screenValue;
    }
    else if (buttonText == 'C') {
        screenValue = "";
        screen.value = screenValue;
    }
    else if (buttonText == '=') {
        screen.value = eval(screenValue);
    }
    else {
        screenValue += buttonText;
        screen.value = screenValue;
    }
     

    // screen.value=buttonText;
})
}