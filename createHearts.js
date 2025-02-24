function createFlyingHeart() {
    const heart = document.createElement('div');
    heart.className = 'flying-heart';
    heart.textContent = '❤️';
    document.body.appendChild(heart);

    const button = document.getElementById('calculate-button');
    const buttonRect = button.getBoundingClientRect();
    const buttonPadding = 100;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let startX, startY;

    do {
        startX = Math.random() * windowWidth;
        startY = Math.random() * windowHeight;
    } while (
        startX > buttonRect.left - buttonPadding &&
        startX < buttonRect.right + buttonPadding &&
        startY > buttonRect.top - buttonPadding &&
        startY < buttonRect.bottom + buttonPadding
    );

    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;

    const randomAngle = Math.random() * 360;
    const randomDistance = Math.random() * 300 + 150;
    const endX = Math.cos(randomAngle * (Math.PI / 180)) * randomDistance;
    const endY = Math.sin(randomAngle * (Math.PI / 180)) * randomDistance;

    heart.style.setProperty('--end-x', `${endX}px`);
    heart.style.setProperty('--end-y', `${endY}px`);

    setTimeout(() => heart.remove(), 1500);
}

document.getElementById('calculate-button').addEventListener('click', () => {
    const animationDuration = 2000;
    const interval = 10;

    const animationInterval = setInterval(createFlyingHeart, interval);
    setTimeout(() => clearInterval(animationInterval), animationDuration);
});