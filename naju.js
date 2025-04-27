let heartCount = 0;
const maxHearts = 50;

function createHeart() {
    if (heartCount >= maxHearts) return;

    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';

    const randomX = Math.random() * (window.innerWidth - 50);
    const randomY = Math.random() * (window.innerHeight - 50);

    heart.style.left = randomX + 'px';
    heart.style.top = randomY + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; // 3-5s
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';

    document.body.appendChild(heart);
    heartCount++;

    setTimeout(() => {
        heart.remove();
        heartCount--;
    }, parseFloat(heart.style.animationDuration) * 1000);  
}

function startCreatingHearts() {
    setInterval(() => {
        if (heartCount < maxHearts) {
            createHeart();
        }
    }, 300);
}

startCreatingHearts();

// Efeito de digitação
const text = `Obrigado por ser a melhor pessoa do mundo 💖
Não se importe muito com a estrutura desse "site", codei com sono em menos de 1h 😴
Vou fazer algo mais elaborado, mas queria demonstrar um pouco o quanto você é especial pra mim ✨
Eu te amo, meu bb. 💘`;

let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typedText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}
typeWriter();

function atualizarContador() {
    const dataPrimeiroBeijo = new Date(2025, 2, 14); // Março é mês 2 (Janeiro = 0)
    const hoje = new Date();

    const diferenca = hoje - dataPrimeiroBeijo;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const contadorDiv = document.getElementById('contadorDias');
    contadorDiv.innerHTML = `💞 Estamos juntos há <strong>${dias}</strong> dias desde nosso primeiro beijo! Eu te amo, meu amor 💞`;
}

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('ativo');
        if (i === index) slide.classList.add('ativo');
    });
}

function mudarSlide(direcao) {
    slideIndex += direcao;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    mostrarSlide(slideIndex);
}

mostrarSlide(slideIndex);

// 🔁 AUTO-SLIDE 
setInterval(() => {
    mudarSlide(1);
}, 3000); 

atualizarContador();
