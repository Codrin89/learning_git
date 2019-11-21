let canv = document.getElementById('canvas');
let cnv = canv.getContext("2d");

function init(){
	leftP();
	rightP();
	moveCircle();
	drawDashedLine();
}

window.onload = init;
let radius = 5;
let positionX = 150;
let positionY = 75;
let vX = 3;
let vY = 3;
let canvasWidth = canv.width;
let canvasHeight = canv.height;

function drawCircle() {
    cnv.clearRect(0, 0, 600, 300);
    cnv.beginPath();
    cnv.fillStyle = "white";
    cnv.arc(positionX, positionY, radius, 0, Math.PI * 2, false);
    cnv.fill();
    cnv.closePath();
}
function incremScore1(){
	let score1 = document.getElementById('score1');
	let score1Win = score1.innerHTML;
	score1Win++;
	score1.innerHTML = score1Win;
}
function incremScore2(){
	let score2 = document.getElementById('score2');
	let score2Win = score2.innerHTML;
	score2Win++;
	score2.innerHTML = score2Win;
}
function moveCircle() {
	if (positionY >= canvasHeight - radius || positionY <= radius ) {
	    vY = -vY;
	}
	if (positionX > canvasWidth - radius || positionX < radius) {
		if(positionX > canvasWidth/2){
			console.log('dreapta a pierdut');
			incremScore1();
   		}
   		else{
			console.log('stanga a pierdut');
			incremScore2();
		}
		vX *= -1;
	}
	if ((positionX >= objectR.x - radius && positionY >= objectR.y && positionY <= objectR.y + objectR.height) ||
		(positionX <= objectL.x +objectL.width + radius &&  positionY >= objectL.y && positionY <= objectL.y + objectL.height)){
	    vX *= -1;
	}
	positionX += vX;
	positionY += vY;
	drawCircle();
	leftP();
	rightP();
	requestAnimationFrame(moveCircle);
} 
let objectL = {
	height: 40,
	width: 6,
	x: 1,
	y: 10, 
};
document.addEventListener('keydown', function(event) {
	if(event.keyCode == 38 && objectL.y > 0 ) {
		objectL.y -= 5;
	}
	if(event.keyCode == 40 && objectL.y < 110 ) {
		objectL.y += 5;
	}
	requestAnimationFrame(leftP);
});
function leftP(){
	cnv.fillStyle = "white";
	cnv.fillRect(objectL.x, objectL.y, objectL.width, objectL.height);
};
let objectR = {
	height: 40,
	width: 6,
	x: 293,
	y: 10, 
};
document.addEventListener('keydown', function(event) {
	if(event.keyCode == 87 & objectR.y > 0 ) {
		objectR.y -= 5;
	}
	if(event.keyCode == 83 & objectR.y < 110 ) {
		objectR.y += 5;
	}
	requestAnimationFrame(rightP);
});
function rightP(){
	cnv.fillStyle = "white";
	cnv.fillRect(objectR.x, objectR.y, objectR.width, objectR.height);
}
function reset_tbn(){
	window.location.reload(true);
}
