let turn = "X";
let movescount = 0;
let y = 0;

function clickH(currentCell){
	if (currentCell.innerText == "") {
		currentCell.innerText = turn;
		movescount += 1;
	if((movescount < 9) && (y == 0)){
		switch_player();
		cheackwin();
		}
		else{
			alert ('bad');
			reset();
		}
	}
}
function switch_player(){
	if (y == 0) {
		if (turn == "X") 
		turn = "O";
			else {
			turn = "X";
		}
	}
}
function cheackwin(){
	let x0 = document.getElementById('cell_00').innerText;
	let x1 = document.getElementById('cell_01').innerText;
	let x2 = document.getElementById('cell_02').innerText;
	let x3 = document.getElementById('cell_10').innerText;
	let x4 = document.getElementById('cell_11').innerText;
	let x5 = document.getElementById('cell_12').innerText;
	let x6 = document.getElementById('cell_20').innerText;
	let x7 = document.getElementById('cell_21').innerText;
	let x8 = document.getElementById('cell_22').innerText;
		if(
			(x0 == x1 && x1 == x2 && x0 !="" && x1 !=""  && x2 !="" ) ||

			(x3 == x4 && x4 == x5 && x3 !="" && x4 !=""  && x5 !="" ) || 

			(x6 == x7 && x7 == x8 && x6 !="" && x7 !=""  && x8 !="" ) ||

			(x0 == x3 && x3 == x6 && x3 !="" && x6 !=""  && x0 !="" ) || 

			(x1 == x4 && x4 == x7 && x1 !="" && x4 !=""  && x7 !="" ) || 

			(x2 == x8 && x8 == x5 && x8 !="" && x2 !=""  && x5 !="" ) ||

			(x0 == x8 && x8 == x4 && x8 !="" && x0 !=""  && x4 !="" ) ||

			(x2 == x4 && x6 == x4 && x6 !="" && x2 !=""  && x4 !="" )){
				y = 1;
				alert ('you win');
				reset();
	}
}

function iconX() {
    let circlePlayer2 = document.getElementById('player2-circle');
    let timesPlayer1 = document.getElementById('player1-times');
    let circlePlayer1 = document.getElementById('player1-circle');
    let timesPlayer2 = document.getElementById('player2-times');
    if (timesPlayer1.style.display === "none") {
	    timesPlayer1.style.display = "block";
	    circlePlayer2.style.display = "block";
	    circlePlayer1.style.display = "none";
	    timesPlayer2.style.display = "none";
    }
}

function iconO() {
    let circlePlayer2 = document.getElementById('player2-circle');
    let timesPlayer1 = document.getElementById('player1-times');
    let circlePlayer1 = document.getElementById('player1-circle');
    let timesPlayer2 = document.getElementById('player2-times');
    if (circlePlayer1.style.display === "none") {
        circlePlayer1.style.display = "block";
        timesPlayer2.style.display = "block";
        timesPlayer1.style.display = "none";
        circlePlayer2.style.display = "none";
    }
}
function reset(){
	window.location.reload(true);
}

let word = document.getElementById('word'),
    originalStory = document.getElementById('story'),
    button = document.getElementById("submitButton");

button.onclick = function(){
    replaceStory(word.value);
};

let replaceStory = function(userWord) {
    let story = ("Player 2 : " + userWord + " ");
    return originalStory.innerHTML = story;
    word.style.display = "none";
};


// let word1 = document.getElementById('word1'),
//     originalStory1 = document.getElementById('story1'),
//     butto1n = document.getElementById("submitButton1");

// button.onclick = function(){
//     replaceStory(word1.value);
// };

// let replaceStory1 = function(userWord) {
//     let story1 = ("Player 1: " + userWord + " ");
//     return originalStory.innerHTML = story1;
//     word.style.display = "none";
// };