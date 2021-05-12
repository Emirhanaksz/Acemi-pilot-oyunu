const obstaclesArray = [];

class Obstacle {
    constructor() {
        this.top = Math.floor(Math.random() * 200) + 20;
        this.bottom = Math.floor(Math.random() * (genislik - (this.top + aralik))) + 20;
        this.y = 0;
        this.height = 20;

        this.counted = false;
    }
    draw() {

        ctx.drawImage(pipesol, 0, this.y, this.top, this.height);
        ctx.drawImage(pipesag, canvas.width - this.bottom, this.y, this.bottom, this.height);
    }
    update() {
        this.y += gamespeed;
        if (!this.counted && this.y < plane.y) {
            score++;
            this.counted = true;
        }
        this.draw();
    }
}

function handleObstacles() {
    if (frame % 150 === 0) {
        obstaclesArray.unshift(new Obstacle)

    }
    for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();

    }
    if (obstaclesArray.length > 20) {
        obstaclesArray.pop(obstaclesArray[0]);

    }

}