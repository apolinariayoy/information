let words = [
    { word: "weather", translate: "погода" },
    { word: "cold", translate: "простуда" },
    { word: "warden", translate: "смотритель" },
    { word: "point", translate: "смысл" },
    { word: "flat", translate: "квартира" },
    { word: "garden", translate: "сад" },
    { word: "world", translate: "мир" },
    { word: "Earth", translate: "Земля" },
    { word: "cloud", translate: "облако" },
    { word: "friend", translate: "друг" },
    { word: "solution", translate: "решение" },
    { word: "satellite", translate: "спутник" }
];
let inputs = [
    document.getElementById('one'),
    document.getElementById('two'),
    document.getElementById('three'),
    document.getElementById('four'),
    document.getElementById('five'),
    document.getElementById('six')
];
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let shuffledWords = shuffle([...words]);

for (let i = 0; i < 3; i++) {
    inputs[i * 2].textContent = shuffledWords[i].word;
    inputs[i * 2 + 1].textContent = shuffledWords[i].translate;
}

const selectedInputs = [];

function chekMatch() {
    if (selectedInputs.length === 2) {
        const wordfirst = selectedInputs[0].textContent;
        const wordSecond = selectedInputs[1].textContent;

        const mathchedWord = words.find(obj => obj.word === wordfirst && obj.translate === wordSecond);
        if (mathchedWord) {
            selectedInputs.forEach(input => {
                input.classList.add('green');
                input.removeEventListener('click', selectInput);
            });
            selectedInputs.length = 0;
        } else {
            selectedInputs.forEach(input => {
                input.classList.add('red');
                setTimeout(() => {
                    input.classList.remove('red');
                    input.classList.remove('blue');
                }, 1000);
            });
            selectedInputs.length = 0;
        }
    }
}
function selectInput(){
    inputs.forEach(input => input.classList.remove('blue'));
    this.classList.add('blue');
    selectedInputs.push(this);
    chekMatch();
}

inputs.forEach(input => {
    input.addEventListener('click', selectInput);
});