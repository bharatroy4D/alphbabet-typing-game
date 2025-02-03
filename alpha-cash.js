// handle keyboard button pressed
function handleKeyboardButtonPress(Event) {
    const playerPress = Event.key;

    // expected alphabet
    const currentAlphabetElement = document.getElementById('display-latter');
    const currentAlphabet = currentAlphabetElement.innerText;
    const alphabet = currentAlphabet.toLowerCase(currentAlphabet);

    continueGame();

    if (playerPress === alphabet) {
        removeBackgroundColor(alphabet)
        // score updated
        const currentScore = getTextElementById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementById('current-score', updatedScore);
    }
    else {
     
        const currentLife = getTextElementById('current-life');
        console.log(currentLife)
        const updatedLife = currentLife - 1;
        setTextElementById('current-life', updatedLife);
        
        if(updatedLife === 0){
            gameOver();
        }
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