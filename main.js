const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 600;

let sagtus = false;
let soltus = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 4;
let gameover = false;
let xlocation = 0;
let aralik = 75;
let genislik = 400;
let menu = 0;
let a = 0;

const bang = new Image();
bang.src = 'images/bang.png';

const bg = new Image();
bg.src = 'images/bg.jpg';

const pipesag = new Image();
pipesag.src = 'images/pipesag.png';

const pipesol = new Image();
pipesol.src = 'images/pipesol.png';

const planee = new Image();
planee.src = 'images/plane.png';

const startbutton = new Image();
startbutton.src = 'images/startbutton.png';

const git = new Image();
git.src = 'images/git.png';





const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop('0.4', '#fff');
gradient.addColorStop('0.5', '#000');
gradient.addColorStop('0.55', '#4040ff');
gradient.addColorStop('0.6', '#000');
gradient.addColorStop('0.9', '#fff');


window.addEventListener('keydown', function(e) {
    if (e.keyCode === 37) soltus = true;
    if (e.keyCode === 39) sagtus = true;

});
window.addEventListener('keyup', function(e) {
    if (e.keyCode === 37) soltus = false;
    if (e.keyCode === 39) sagtus = false;
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawbg();
    handleObstacles();
    handleParticles();
    plane.update();
    plane.draw();
    ctx.fillStyle = gradient;
    ctx.font = '90px Georgia';
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70)
    handleCollisions();
    if (!gameover) {
        requestAnimationFrame(animate);
    }
    angle += 0.12;
    hue++;
    frame++;
}


function drawbg() {
    ctx.drawImage(bg, 0, 0, 400, 600, 0, 0, 400, 600);
}





function handleCollisions() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (plane.y < obstaclesArray[i].y + obstaclesArray[i].height &&
            plane.y + plane.height > obstaclesArray[i].y &&
            ((plane.x < 0 + obstaclesArray[i].top && plane.x + plane.width > 0) ||
                (plane.x + 20 > canvas.width - obstaclesArray[i].bottom &&
                    plane.x + plane.width < canvas.width))) {
            // carpma tespit

            ctx.drawImage(bang, plane.x, plane.y, 50, 50);

            ctx.font = "25px Georgia";
            ctx.fillStyle = 'white';
            ctx.fillText('Kaybettin', 150, 275);
            ctx.fillText('Skorun : ' + score, 150, 300);
            gameover = true;

        }


    }
    if (a) {
        ctx.drawImage(bang, xlocation, plane.y, 50, 50);
        ctx.font = "25px Georgia";
        ctx.fillStyle = 'white';
        ctx.fillText('Kaybettin', 150, 275);
        ctx.fillText('Skorun : ' + score, 150, 300);
        gameover = true;


    }
}

function collisions(first, second) {
    if (!(first.x > second.x + second.width ||
            first.x + first.width < second.x ||
            first.y > second.y + second.height ||
            first.y + first.height < second.y
        )) {
        return true;
    };
};
const mouse = {
    x: 10,
    y: 10,
    width: 0.20,
    height: 0.20,
    clicked: false,
}

canvas.addEventListener('mousedown', function() {
    mouse.clicked = true;
});

canvas.addEventListener('mouseup', function() {
    mouse.clicked = false;
});

let canvasposition = canvas.getBoundingClientRect();
canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.x - canvasposition.left;
    mouse.y = e.y - canvasposition.top;
});

canvas.addEventListener('mouseleave', function() {
    mouse.x = undefined;
    mouse.y = undefined;
});
const basla = {
    x: 175,
    y: 275,
    width: 50,
    height: 50
}
const github = {
    x: 175,
    y: 350,
    width: 50,
    height: 50
}

function giris() {
    if (collisions(mouse, basla) && mouse.clicked) {
        menu = 1;
    } else if (collisions(mouse, github) && mouse.clicked) {
        menu = 4;
    }
    ctx.drawImage(startbutton, basla.x, basla.y, basla.width, basla.height);
    ctx.drawImage(git, github.x, github.y, github.width, github.height);
}

function handlegiris() {
    if (menu == 1) {
        menu = 0;
        animate();
    } else if (menu == 4) {
        window.location = "https://github.com/Emirhanaksz/Emirhanaksz";
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawbg();
        requestAnimationFrame(handlegiris);
    }
    giris();

}
handlegiris();