let clickCount = 0;

const randomButton = document.getElementById('randomButton');

randomButton.addEventListener('click', () => {
    clickCount++;
    if (clickCount < 3) {
        moveButton();
    } else {
        window.location.href = 'index.html'; // Rediriger vers index.html après 3 clics
    }
});

function moveButton() {
    const randomX = Math.floor(Math.random() * 200) - 100; // Déplacement aléatoire en X
    const randomY = Math.floor(Math.random() * 200) - 100; // Déplacement aléatoire en Y
    randomButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.addEventListener('click', () => {
        // Changer la couleur de fond de la bulle au hasard
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        bubble.style.backgroundColor = randomColor;
    });
});