
// function nextMoveby() {
//     if (player1 == 'X') {
//         nextTurn = 'O';
//     } else {
//         nextTurn = 'X';
//     }
// }


let winners = new Array();
let player1Selections = new Array();
let player2Selections = new Array();
let timer;
let numberOfPlayers = 2;
let currentPlayer = 0;
let points1 = 0;    
let points2 = 0;    
let size = 3;

// function setFigureXO(id) {
//   if (id === 'x') {
//     player1Selections = '<span class="fa fa-times"></span>';
//     player2Selections = '<span class="fa fa-circle-o"></span>';
//   } else if (id === 'o') {
//     player1Selections = '<span class="fa fa-circle-o"></span>';
//     player2Selections = '<span class="fa fa-times"></span>';
//   }
// }
function addFigure() {
    let Parent = document.getElementById("game");
    let counter = 1;
    
    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    for (s = 0; s < 3; s++) {
        let row = document.createElement("tr");
        
        for (r = 0; r < 3; r++) {
        	
            let col = document.createElement("td");
            col.id = counter;

            let handler = function(e) {
                if (currentPlayer == 0) {
                    this.innerHTML = '<span class="fa fa-times"></span>';
                    player1Selections.push(parseInt(this.id));
                    player1Selections.sort(function(a, b) { return a - b });
                    returnID('player1').classList.remove('selected');
                    returnID('player2').classList.add('selected');
                }

                else {
                    this.innerHTML ='<span class="fa fa-circle-o"></span>';
                    player2Selections.push(parseInt(this.id));
                    player2Selections.sort(function(a, b) { return a - b });
                    returnID('player1').classList.add('selected');
                    returnID('player2').classList.remove('selected');
                }

                if (checkWinner())
                {
                    if(currentPlayer == 0)
                        points1++;
                    else
                        points2++;

                    document.getElementById("player1").innerHTML = points1;
                    document.getElementById("player2").innerHTML = points2;

                    reset();
                    addFigure();
                }

                else if (player2Selections.length + player1Selections.length == 9){
                    reset();
                    addFigure();
                }
                else {
                    if (currentPlayer == 0)
                        currentPlayer = 1;
                    else
                        currentPlayer = 0;
                  
                }
            };
            col.addEventListener('click', handler);

            row.appendChild(col);
            counter++;
        }
        Parent.appendChild(row);
    }
    loadAnswers();
}
function returnID(id)
{
    let el = document.getElementById(id);
    return el;
}
function reset(){
    currentPlayer = 0;
    player1Selections = new Array();
    player2Selections = new Array();
    returnID('player1').classList.add('selected');
    returnID('player2').classList.remove('selected');

}


function loadAnswers(){
    winners.push([1, 2, 3]);
    winners.push([4, 5, 6]);
    winners.push([7, 8, 9]);
    winners.push([1, 4, 7]);
    winners.push([2, 5, 8]);
    winners.push([3, 6, 9]);
    winners.push([1, 5, 9]);
    winners.push([3, 5, 7]);
}

function checkWinner() {
    let win = false;
    let playerSelections = new Array();
    if (currentPlayer == 0)
        playerSelections = player1Selections;
    else
	playerSelections = player2Selections;
    if (playerSelections.length >= size) {
        for (i = 0; i < winners.length; i++) {
            let sets = winners[i];  
            let setFound = true;
            for (r = 0; r < sets.length; r++) {
                let found = false;
                for (s = 0; s < playerSelections.length; s++) {
                    if (sets[r] == playerSelections[s]) {
                        found = true;
                        break;
                    }
                }
                if (found == false) {
                    setFound = false;
                    break;
                }
            }
            if (setFound == true) {
                win = true;
                break;
            }
        }
    }
    return win;
} 

window.addEventListener('load', addFigure);
function iconX() {
    let circlePlayer2 = document.getElementById('player2-circle');
    let timesPlayer1 = document.getElementById('player1-times');
    let circlePlayer1 = document.getElementById('player1-circle');
    let timesPlayer2 = document.getElementById('player2-times');
    if (timesPlayer1.style.display === "none") {
        timesPlayer1.style.display = "block";
        circlePlayer2.style.display = "block";
        circlePlayer1.style.display = "none";
        timesPlayer2.style.display = "none"
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
        timesPlayer1.style.display = "none"
        circlePlayer2.style.display = "none";
    }
}