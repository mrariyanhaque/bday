function handleCandleClick() {
    var surprise = document.getElementById('surprise');
    var confetti = document.getElementById('confetti');
    var poem = document.getElementById('poem');
    var extraParagraphs = document.getElementById('extra-paragraphs');
    var clock = document.getElementById('birthday-clock');

    // Show the confetti
    confetti.classList.remove('hidden');
    confetti.style.display = 'block';
    
    // Play the music
    var music = document.getElementById('background-music');
    music.play();

    // Show the surprise content
    surprise.classList.remove('hidden');

    // Create the clock to display age
    var birthday = new Date('2010-11-10T00:00:00'); // Mohua's birth date
    function updateClock() {
        var now = new Date();
        var ageInMs = now - birthday;

        var years = Math.floor(ageInMs / (1000 * 60 * 60 * 24 * 365.25)); // Include leap years
        var days = Math.floor((ageInMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((ageInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((ageInMs % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((ageInMs % (1000 * 60)) / 1000);

        clock.innerHTML = `⏳ Age: ${years} Years, ${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Reveal the poem line-by-line
    var poemLines = poem.getElementsByTagName('p');
    let i = 0;
    function revealLine() {
        if (i < poemLines.length) {
            poemLines[i].style.display = 'block';
            i++;
            setTimeout(revealLine, 2000);  // Reveal each line every 2 seconds
        } else {
            // Show all extra paragraphs at once after the poem is fully revealed
            extraParagraphs.classList.remove('hidden');
        }
    }
    setTimeout(() => {
        poem.classList.remove('hidden');
        revealLine();
    }, 2000);
}

// Attach the click handler to all candles
document.querySelectorAll('.candle').forEach(candle => {
    candle.addEventListener('click', handleCandleClick);
});