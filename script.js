function startSurprise() {
    // Hide the button
    var button = document.querySelector('button');
    button.style.display = 'none';

    // Display and animate the heart
    var heart = document.getElementById('heart');
    heart.style.display = 'block';

    // Start falling petals
    setInterval(createPetal, 300);

    // Play the Dandelions song
    var audio = document.getElementById('dandelions-song');
    audio.play();
}


function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${Math.random() * 3 + 2}s`;
    petal.style.animationName = Math.random() > 0.5 ? 'fall, sway' : 'fall, sway-left';
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 5000);
}

