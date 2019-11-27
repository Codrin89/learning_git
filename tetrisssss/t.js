const canvas = document.getElementById('tetris');
const canv = canvas.getContext('2d');
const ROW = 20;
const COL = 10;
const cell_size  = 30;
const emptyCell = "Ivory   ";
const iObject = [
    [
        [0,0, 1, 0, 0],
        [0,0, 1, 0, 0],
        [0,0, 1, 0, 0],
        [0,0, 1, 0, 0],
    ]
];
const jObject = [
    [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ]
];
const lObject = [
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ]
];
const oObject = [
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ]
];
const sObject = [
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ]
];
const tObject = [
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
   ]
];
const zObject = [
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ]
];

function drawSquare(x,y,color){
    canv.fillStyle = color;
    canv.fillRect(x*cell_size,y*cell_size,cell_size,cell_size);
    canv.strokeStyle = "BLACK";
    canv.strokeRect(x*cell_size,y*cell_size,cell_size,cell_size);
}

let board = [];
for( r = 0; r < ROW; r++){
    board[r] = [];
    for(c = 0; c < COL; c++){
        board[r][c] = emptyCell;
    }
}

function drawBoard(){
    for( r = 0; r < ROW; r++){
        for(c = 0; c < COL; c++){
            drawSquare(c,r,board[r][c]);
        }
    }
}
drawBoard();

const shapes = [
	[zObject,'red'],
	[sObject,'blue'],
	[iObject,'green'],
	[lObject,'yellow'],
	[jObject,'pink'],
	[oObject,'purple'],
	[tObject,'cyan']
]

function randomShape(){
	  let r = randomN = Math.floor(Math.random() * shapes.length) 
    return new shape( shapes[r][0],shapes[r][1]);
}
 
let p = randomShape();

function shape(figure,color){
    this.figure = figure;
    this.color = color;
    this.figure_n = 0;
    this.activeFigure = this.figure[this.figure_n];
    this.x = 3;
    this.y = -2;
}

shape.prototype.fill = function(color){
    for( r = 0; r < this.activeFigure.length; r++){
        for(c = 0; c < this.activeFigure.length; c++){
            if( this.activeFigure[r][c]){
                drawSquare(this.x + c,this.y + r, color);
            }
        }
    }
}
shape.prototype.drawFigure = function(){
    this.fill(this.color);
}
shape.prototype.setEmptyCell = function(){
    this.fill(emptyCell);
}

shape.prototype.mDown = function(){
    if(!this.collision(0,1,this.activeFigure)){
        this.setEmptyCell();
        this.y++;
        this.drawFigure();
       console.log()
    }else{
    randomPiece();
    }
}
shape.prototype.mLeft = function(){
    if(!this.collision(1,0,this.activeFigure)){
        this.setEmptyCell();
        this.x--;
        this.drawFigure();
    }
}
shape.prototype.mRight = function(){
    if(!this.collision(1,0,this.activeFigure)){
        this.setEmptyCell();
        this.x++;
        this.drawFigure();

    }
}

function reset_btn(){
 window.location.reload(true);
}

shape.prototype.collision = function(x,y,shape){
    for( r = 0; r < shape.length; r++){
        for(c = 0; c < shape.length; c++){
            if(!shape[r][c]){
                continue;
            }
            let newX = this.x + c + x;
            let newY = this.y + r + y;
        }
    }
    return false;
}

document.addEventListener("keydown",keyboardMove);

function keyboardMove(event){
    if(event.keyCode == 37){
        p.mLeft();
        dropStart = Date.now();
    }else if(event.keyCode == 39){
        p.mRight();
        dropStart = Date.now();
    }else if(event.keyCode == 40){
        p.mDown();
    }
}

let frame_ID = undefined;
let dropStart = Date.now();
let endGame = false;
function animateDropFigure(){
    let now = Date.now();
    let moment_drop = now - dropStart;
    if(moment_drop > 1000){
        p.mDown();
        dropStart = Date.now();
    }
        window.requestAnimationFrame(animateDropFigure);
}

animateDropFigure();

