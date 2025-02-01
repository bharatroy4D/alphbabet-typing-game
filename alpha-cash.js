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