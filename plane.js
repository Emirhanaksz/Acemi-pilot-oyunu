class Plane {
    constructor() {
        this.x = 200;
        this.y = 400;
        this.vx = 0;
        this.width = 20;
        this.height = 20;
        this.weight = 1;
        this.kenar = 10;
    }
    update() {

        if (this.x >= canvas.width - (this.kenar * 3)) {
            xlocation = this.x;
            this.x = 200;
            this.vx = 0;
            a += 1;
        }

        if (this.x <= 0 + (this.kenar * 3)) {
            xlocation = this.x - 50;
            this.x = 200;
            this.vx = 0;
            a += 1;
        }


        if (soltus && this.x > this.kenar * 3) this.sol();
        if (sagtus && this.x > this.kenar * 3) this.sag();
    }
    draw() {

        ctx.drawImage(planee, this.x, this.y, this.width, this.height);
    }
    sag() {
        this.vx += this.weight;
        this.vx *= 2;
        this.x += this.vx;
        this.vx = 0;
    }
    sol() {
        this.vx += this.weight;
        this.vx *= 2;
        this.x -= this.vx;
        this.vx = 0;
    }

}
const plane = new Plane();