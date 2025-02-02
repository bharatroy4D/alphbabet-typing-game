// handle keyboard button pressed
function handleKeyboardButtonPress(Event){
    const playerPress = Event.key;

    // expected alphabet
    const currentAlphabetElement = document.getElementById('display-latter');
    const currentAlphabet = currentAlphabetElement.innerText;
    const alphabet = currentAlphabet.toLowerCase(currentAlphabet);
    
    continueGame();
    
    if(playerPress === alphabet){
        removeBackgroundColor(alphabet)
    }
    else{
        console.log('you are rang')
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    const alphabets = getRandomAlphabet();
    const displayLatter = document.getElementById('display-latter');
    displayLatter.innerText = alphabets;
    // set background color
    setBackgroundColor(alphabets);
}
// play function
function play() {
    hideElementById('home-screen');
    showElementById('play-ground')
    continueGame();
}