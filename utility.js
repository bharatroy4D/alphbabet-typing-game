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
