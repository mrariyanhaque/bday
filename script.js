// Function to handle candle clicks
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

    // Create the clock
    var birthday = new Date('2010-11-10T00:00:00');
    function updateClock() {
        var now = new Date();
        var diff = new Date(now - birthday);
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);
        clock.innerHTML = `⏳ Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Reveal the poem
    var poemLines = poem.getElementsByTagName('p');
    let i = 0;
    function revealLine() {
        if (i < poemLines.length) {
            poemLines[i].style.display = 'block';
            i++;
            setTimeout(revealLine, 2000);
        }
    }
    setTimeout(() => {
        poem.classList.remove('hidden');
        revealLine();
    }, 2000);

    // Reveal additional paragraphs
    var extraLines = extraParagraphs.getElementsByTagName('p');
    let j = 0;
    function revealExtraLine() {
        if (j < extraLines.length) {
            extraLines[j].style.display = 'block';
            j++;
            setTimeout(revealExtraLine, 2000);
        }
    }
    setTimeout(() => {
        extraParagraphs.classList.remove('hidden');
        revealExtraLine();
    }, 14000);
}

// Attach click event listeners to all candles
var candles = document.querySelectorAll('.candle');
candles.forEach(candle => {
    candle.addEventListener('click', handleCandleClick);
});