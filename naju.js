function createHeart() {
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * (window.innerHeight * 2);
    heart.style.left = randomX + 'px';
    heart.style.top = randomY + 'px';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, parseFloat(heart.style.animationDuration) * 1000);  
}

setInterval(createHeart, 300);