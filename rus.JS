let words = [
    {correct:"палисадник", incorrect:"полесадник"},
    {correct:"иллюстрированный", incorrect:"илюстрированный"},
    {correct:"декларировать", incorrect:"диклорировать"},
    {correct:"дискуссия", incorrect:"дескуссия"},
    {correct:"депутат", incorrect:"дипутат"},
    {correct:"искусство", incorrect:"искуство"},
    {correct:"искусный", incorrect:"искуссный"},
    {correct:"беллетристика", incorrect:"белетристика"},
    {correct:"палисадник", incorrect:"полесадник"},
    {correct:"донельзя", incorrect:"до нельзя"},
    {correct:"пьедестал", incorrect:"педистал"},
    {correct:"поскользнуться", incorrect:"подскользнуться"},
    {correct:"приоритет", incorrect:"преоритет"}
];
let firstword = document.getElementById('firstword');
let secondword = document.getElementById('secondword');
let input = document.getElementById('input');
let button = document.getElementById('buttun');
let result = document.getElementById('result');
let index=0;

function displayWords(){
if(index<words.length){
   let random = Math.random();
   if(random<0.5){
    firstword.textContent = words[index].correct;
    secondword.textContent = words[index].incorrect;
   }else{
    firstword.textContent = words[index].incorrect;
    secondword.textContent = words[index].correct;
   } 

}
}
 displayWords();
function checkWord(){
let userInput = input.value.toLowerCase();
let wordobgact = words[index];
if(userInput===wordobgact.correct){
    result.textContent="правильно";
    index++;
    displayWords();
}else{
    result.textContent="неправильно";
}

}
button.addEventListener("click",checkWord);