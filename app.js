const allBtns = document.querySelectorAll(".row > div");
const output = document.querySelector('.screen p');
let number = "";
let numberFinal = 0;

allBtns.forEach((btn, index) =>{
    if(index === allBtns.length-1 || index === allBtns.length-2 || index === 3 ){
        return;
    }else{
        btn.addEventListener('click', write)

    }
})
// write 
function write(){
    let val = this.dataset.val;
   number+= val;
   output.innerHTML = number;
}
// get equation result
function getResult(){
    if(number ===""){
        setTimeout(() =>{
            output.innerHTML = "";
            number = "";
        },500)
    }else{
        number = eval(number).toString()
        output.innerHTML = number;
    }

}
// delete last char
function deletee(){
    number = number.split('').splice(0,number.length-1).join('')
    output.innerHTML = number;
}
// reset all
function reset(){
number = "";
output.innerHTML = "";
}

allBtns[3].addEventListener('click', deletee);

allBtns[allBtns.length-1].addEventListener('click',getResult)
allBtns[allBtns.length-2].addEventListener('click',reset)

// theme toggle
const themeBtn = document.querySelector('.button');
const themeBtnToggle = document.querySelector('.button > div');
const header = document.querySelector('header');
const screen = document.querySelector('.screen');
const keyboard = document.querySelector('.keyboard');
const rows = document.querySelectorAll(".row");
let allElement = [themeBtn, themeBtnToggle, header,screen, keyboard,...rows,document.body,allBtns[3],allBtns[16],allBtns[17]];
console.log(allElement)
let index = 0;
let themeClasses = ["first","mid", "last"];

function removeClass(element){
    element.classList.remove('mid')
    element.classList.remove('last')
}

themeBtn.onclick = function(){
    if(index ==2){
        index = 0;
    }else{
        index++;
    }
for(let i = 0; i < allElement.length; i++){
    removeClass(allElement[i])
    allElement[i].classList.add(themeClasses[index]);
}
}