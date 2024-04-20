let numberFirst=document.getElementById('first');
let numberSecond=document.getElementById('second');
let input=document.getElementById('input');
let button=document.getElementById('buttun');
let result=document.getElementById('result');

function getRandomNumber(){
    return Math.floor(Math.random()*11);
}
const randomFirst=getRandomNumber();
const randomSecond=getRandomNumber();
numberFirst.textContent=randomFirst;
numberSecond.textContent=randomSecond;
function checkAnswer(){
    const answer=parseInt(input.value);
    const subpraction=randomFirst - randomSecond;
    if(answer===subpraction){
        result.textContent='верно';
    }else{
        result.textContent=''
    }
    if(answer!=subpraction){
        result.textContent='неверно'
    }
}