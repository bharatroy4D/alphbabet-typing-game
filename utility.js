// hidden element id
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
// show element id
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// set background-color
function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500')
}
// remove background-color
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500')
}
function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementTextValue = element.innerText;
    const value = parseInt(elementTextValue);
    return value;

}
function setTextElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getRandomAlphabet(){
    // random alphabet
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')

    // random number
    const randomNumbers = Math.random() * 25;
    const index = Math.round(randomNumbers);
    const alphabet = alphabets[index];
    return alphabet;

}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score')

   const displayScore = getTextElementById('display-score')
   displayScore.innerText = '50';

}
