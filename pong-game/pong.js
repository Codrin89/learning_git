let canv = document.getElementById('canvas');
let cnv = canv.getContext("2d");
let reset_ball = false ;
let undefined_ID = undefined;
let endGame = false ;
function init(){
	leftP();
	rightP();
	moveCircle();
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
function addText(){
	cnv.font = 'italic 32px sans-serif';
	cnv.fillText('HTML5 Canvas Tutorial', 10, 50);
}
function incremScore(player){
	let score = document.getElementById('score'+player);
	let scoreWin = score.innerHTML;
	scoreWin++;
	score.innerHTML = scoreWin;
	if (scoreWin > 2) {
		endGame = true;
	}	
}
function moveCircle() {
	if (positionY >= canvasHeight - radius || positionY <= radius ) {
	    vY = -vY;
	}
	if (positionX > canvasWidth - radius || positionX < radius) {
		if(positionX > canvasWidth/2){
			console.log('dreapta a pierdut');
			incremScore(1);
			reset_ball = true;
   		}
   		else{
			console.log('stanga a pierdut');
			incremScore(2);
			reset_ball = true;
		}
	}
	if ((positionX > objectR.x - radius && positionY >= objectR.y && positionY  <= objectR.y + objectR.height) ||
		(positionX < objectL.x + objectL.width + radius &&  positionY >= objectL.y && positionY <= objectL.y + objectL.height)){
	    vX *= -1;
	}
	positionX += vX;
	positionY += vY;
	if(reset_ball){
	 	positionX = 80;
 		positionY = 30;
 		reset_ball = false;
	}
	drawCircle();
	leftP();
	rightP();
    undefined_ID = window.requestAnimationFrame(moveCircle);
	if(endGame){
		if (undefined_ID) {
	        window.cancelAnimationFrame(undefined_ID);
	        undefined_ID = undefined;
      		cnv.font = "bold 30px Courier New";
      		cnv.fillStyle = "red";
			cnv.fillText("Game end", 70, 70);
    	}
	}
} 

let objectL = {
	height: 40,
	width: 3,
	x: 1,
	y: 55, 
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
	width: 3,
	x: 296,
	y: 55, 
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
function reset_btn(){
	window.location.reload(true);
}

