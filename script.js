document.getElementById('reveal-button').addEventListener('click', function() {
    var surprise = document.getElementById('surprise');
    var poem = document.getElementById('poem');
    var clock = document.getElementById('birthday-clock');

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
        clock.innerHTML = `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`;
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
});