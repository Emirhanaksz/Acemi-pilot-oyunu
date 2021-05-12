const particlesArray = [];
class Particles {
    constructor() {
        this.x = plane.x + 10;
        this.y = plane.y + 20;
        this.size = Math.random() * 7 + 3;
        this.speedX = (Math.random() * 1) - 0.5;
        this.color = 'gray';

    }
    update() {
        this.X -= this.speedX;
        this.y += gamespeed;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 3.14 * 2);
        ctx.fill();
    }
}

function handleParticles() {
    particlesArray.unshift(new Particles);
    for (i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();

    }
    if (particlesArray.length > 50) {
        for (let i = 0; i < 20; i++) {
            particlesArray.pop(particlesArray[i]);
        }
    }
}