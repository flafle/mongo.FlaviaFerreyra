
//Primero predetermino mi canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");//una variable para graficos 2d
let ballRadius = 10;

let x = canvas.width/50;
let y = canvas.height/50;
let dx = 3;
let dy = -2;

//-----------------conntroles del usarix:------------------//
let paddleHeight = 20;
let paddleWidth = 60;
let paddleX = (canvas.width-paddleWidth)/2;
let rightPressed = false;   
let leftPressed = false;    
let score = 0;
let vidas = 3;
let playing= true;


          

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
};


function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
};


function drawBall() { 
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}
function drawScore () {
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + score, 8, 20);
    ctx.font = "16px Arial";

};

function drawVidas () {
    ctx.fillStyle = "green"
    ctx.fillText("Vidas: "+vidas, canvas.width-65, 20);
};
function start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawScore();
    drawVidas();
    requestAnimationFrame(start); 
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
   
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
            score +=10;
    
        }else 
           { vidas--
            if(!vidas ) {
                Swal.fire("GAME OVER");
        { dx = -dx;}
           window.location.reload();
        }
        else {
            x = canvas.width/2;
            y= canvas.height-30;
            dx = 3;
            dy = -3;
            paddleX = (canvas.width-paddleWidth)/2;
        
        }
      }
    };
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
    
}
start();

