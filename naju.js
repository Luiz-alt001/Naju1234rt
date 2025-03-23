let heartCount = 0;
const maxHearts = 50;
let isCreating = false;

function createHeart() {
    if (isCreating || heartCount >= maxHearts) return;

    isCreating = true;

    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';

    const randomX = Math.random() * (window.innerWidth - 50);
    const randomY = Math.random() * (window.innerHeight - 50);

    heart.style.left = randomX + 'px';
    heart.style.top = randomY + 'px';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';

    document.body.appendChild(heart);
    heartCount++;

    setTimeout(() => {
        heart.remove();
        heartCount--;
        isCreating = false;
    }, parseFloat(heart.style.animationDuration) * 1000);  
}

function startCreatingHearts() {
    if (heartCount < maxHearts) {
        createHeart();
    }
    requestAnimationFrame(startCreatingHearts);
}

startCreatingHearts();
