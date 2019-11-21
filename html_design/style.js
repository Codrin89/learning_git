
$('#calendar').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: 
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
});
let arrayOfImages = ["img/14-1@2x.png","img/17-2@2x.png","img/21-3@2x.png","img/2-2.png",'img/a.jpg', 'img/b.jpg', 'img/c.jpg', 'img/d.jpg']; 
arrayOfImages.forEach(function(image) {  
    let imgA = document.createElement('img'); 
    imgA.src = image;           
    imgA.className = "column";   
    imgA.className = "newImag";  
    imgA.dat
    document.getElementById("carousel-img").appendChild(imgA); 
 })
function showSlides() {
    mainImage.setAttribute("src",arrayOfImages[imageIndex]);
    imageIndex++;
    if(imageIndex >= arrayOfImages.length) {
        imageIndex = 0;
    }
}
function getTranslateX() {
    let myElement = document.querySelector('#carousel-img');
    let style = window.getComputedStyle(myElement);
    let matrix = new WebKitCSSMatrix(style.webkitTransform);
    return matrix.m41;
}
function prevBtn(){
    if( getTranslateX() * -1 >0 ) {
        document.getElementById("carousel-img").style.webkitTransform = "translateX(" +(getTranslateX() +282 )+"px)";
    }
}; 
function nextBtn(){
    if ((arrayOfImages.length - 4) * 282 > getTranslateX() * -1) {
        document.getElementById("carousel-img").style.WebkitTransform = "translateX(" +(getTranslateX() -282 )+"px)";
    }
}; 
$(function() {
    $( "#datepick1" ).datepicker();
});
function show_dp_in(){
    $( "#datepick1" ).datepicker('show');
 }
$(function() {
    $( "#datepick2" ).datepicker();
});
    function show_dp_out(){
    $( "#datepick2" ).datepicker('show');
}

$(function() {
    $( "#datepick3" ).datepicker();
});
function show_dp_in1(){
    $( "#datepick3" ).datepicker('show');
 }
$(function() {
    $( "#datepick4" ).datepicker();
});
    function show_dp_out1(){
    $( "#datepick4" ).datepicker('show');
}

function incrementValueKids(){
    let value = parseInt(document.getElementById('kids').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('kids').value = value;
}
function incrementValueGuests(){
    let value = parseInt(document.getElementById('guests').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('guests').value = value;
}
function incrementValueKids1(){
    event.preventDefault();
    let value = parseInt(document.getElementById('kids1').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('kids1').value = value;
}
function incrementValueGuests1(){
    let value = parseInt(document.getElementById('guests1').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('guests1').value = value;
}
function showDiv(div_number) {
    document.getElementById('contact_div_1').style.display = 'none';
    document.getElementById('contact_div_2').style.display = 'none';
    document.getElementById('contact_div_3').style.display = 'none';
    document.getElementById('contact_div_'+div_number).style.display = 'block';
}
function showSectionSearch(div_number) {
    document.getElementById('search_div_1').style.display = 'none';
    document.getElementById('search_div_2').style.display = 'none';
    document.getElementById('search_div_3').style.display = 'none';
    document.getElementById('search_div_'+div_number).style.display = 'block';
}
$(document).ready(function() {  
});
$(".nav-toggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay-boxify").toggleClass("open")
});
$(".overlay ul li a").click(function() {
    $(".nav-toggle").toggleClass("active");
    $(".overlay-boxify").toggleClass("open")
});
$(".overlay").click(function() {
    $(".nav-toggle").toggleClass("active");
    $(".overlay-boxify").toggleClass("open")  
});
$('.house-build-link').on('click', function() {
  $('.dropdown-nav').toggle();
  $(this).find('i').toggleClass('fa-long-arrow-down fa-long-arrow-up drop-arrow-up');
});
function hideClose() {
    let search = document.getElementById('btn-icon');
    let close = document.getElementById('dia');
    let x = document.getElementById("modal-search-icon")
        if (search.style.display === "block") {
        search.style.display = "none";
        close.style.display = "block";
  }
}

// function hideSearch() {
//     let search = document.getElementById('diana');
//     let close = document.getElementById('dia');
//   if (close.style.display === "block") {
//     close.style.display = "none";
//     search.style.display = "block";

//   } else {
//     close.style.display = "block";
//     search.style.display = "none";
//   }
// }
$(document).ready(function() {
  $('#btn-icon').on('click', function() {
    $("#favIcon").toggleClass('fa-search fa-times');
  });
});





// <!-- <!DOCTYPE html>
//     <html>
//     <head>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
//         <meta name="viewport" content="width=device-width, initial-scale=1">
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
//         <link rel="stylesheet" type="text/css" href="tictac.css">
//         <meta name="viewport" content="width=device-width, initial-scale=1">
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
//         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
//         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
//         <title>
//             Tic Tac Toe
//         </title>
//     </head>
//     <body>
//         <div class="container tictactoe">
//             <p class="tictactoe-title">Tic Tac Toe</p>
//             <div class="nav container">
//                 <div class="choose ">
//                     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
//                         Choose ypur figure
//                     </button>
//                     <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
//                         <div class="modal-dialog">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h4 class="modal-title text-center">Tic Tac Toe Game</h4>
//                                     <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//                                 </div>
//                                 <div class="modal-body">
//                                     <p>It’s time to choose your figure.</p>
//                                     <p id="test"></p>
//                                 </div>
//                                 <div class="modal-footer">
//                                     <button type="button" id="x" class="btn" data-dismiss="modal" onClick="setFigureXO(this.id)"><span class="fa fa-times"></span></button>
//                                     <button type="button" id="o" class="btn" data-dismiss="modal" onClick="setFigureXO(this.id)"><span class="fa fa-circle-o"></span></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="reset" >
//                     <button class="reset-btn" > 
//                         Reset game
//                     </button>
//                 </div>
//             </div>
//             <div class="game container row">
//                 <div class=" mini col-4" id="div11"  onclick="myFunction1()"> &nbsp;</div>
//                 <div class=" mini col-4" id="div12"  onclick="myFunction2()"> &nbsp;</div>
//                 <div class=" mini col-4" id="div13"  onclick="myFunction3()">  &nbsp;</div>
//                 <p style="clear:both"></p>
//                 <div class=" mini col-4" id="div11"  onclick="myFunction1()">  &nbsp;</div>
//                 <div class=" mini col-4" id="div12"  onclick="myFunction2()">  &nbsp;</div>
//                 <div class=" mini col-4" id="div13"  onclick="myFunction3()">  &nbsp;</div>
//                 <p style="clear:both"></p>
//                 <div class=" mini col-4" id="div11"  onclick="myFunction1()">  &nbsp;</div>
//                 <div class=" mini col-4" id="div12"  onclick="myFunction2()">  &nbsp;</div>
//                 <div class=" mini col-4" id="div13 "  onclick="myFunction3()">  &nbsp;</div>
//             </div>

//             <div class="next-move">
//                 <p> Next move by: </p>
//             </div>
//             <div class="Results">

//             </div>
//         </div>
//     </body>
//     <script type="tictac.js"></script>
//     </html> -->


// let winners = new Array();
// let player1Selections = new Array();
// let player2Selections = new Array();
// let timer;
// let numberOfPlayers = 2;
// let currentPlayer = 0;
// let move = 0;
// let points1 = 0;    
// let points2 = 0;    
// let size = 3;

// function setFigureXO(id) {
//   if (id === 'x') {
//     player1Selections = '<span class="fa fa-times"></span>';
//     player2Selections = '<span class="fa fa-circle-o"></span>';
//   } else if (id === '0') {
//     player1Selections = '<span class="fa fa-circle-o"></span>';
//     player2Selections = '<span class="fa fa-times"></span>';
//   }
// }
// function addFigure() {
//     let Parent = document.getElementById("game");
//     let counter = 1;
    
//     while (Parent.hasChildNodes()) {
//         Parent.removeChild(Parent.firstChild);
//     }

//     for (s = 0; s < 3; s++) {
//         let row = document.createElement("tr");
        
//         for (r = 0; r < 3; r++) {
//             let col = document.createElement("td");
//             col.id = counter;

//             let handler = function(e) {
//                 if (currentPlayer == 0) {
//                     this.innerHTML =  "X"
//                     player1Selections.push(parseInt(this.id));
//                     player1Selections.sort(function(a, b) { return a - b });
//                     returnID('player1').classList.remove('selected');
//                     returnID('player2').classList.add('selected');
//                 }

//                 else {
             
//                     this.innerHTML =  "<i class='fa fa-circle-o' aria-hidden='true'></i>";
//                     player2Selections.push(parseInt(this.id));
//                     player2Selections.sort(function(a, b) { return a - b });
//                     returnID('player1').classList.add('selected');
//                     returnID('player2').classList.remove('selected');
//                 }

//                 if (checkWinner())
//                 {
//                     if(currentPlayer == 0)
//                         points1++;
//                     else
//                         points2++;

//                     document.getElementById("player1").innerHTML = points1;
//                     document.getElementById("player2").innerHTML = points2;

//                     reset();
//                     addFigure();
//                 }

//                 else if (player2Selections.length + player1Selections.length == 9){
//                     reset();
//                     addFigure();
//                 }
//                 else {
//                     if (currentPlayer == 0)
//                         currentPlayer = 1;
//                     else
//                         currentPlayer = 0;
                  
//                 }
//             };
//             col.addEventListener('click', handler);

//             row.appendChild(col);
//             counter++;
//         }
//         Parent.appendChild(row);
//     }
//     loadAnswers();
// }
// function returnID(id)
// {
//     let el = document.getElementById(id);
//     return el;
// }
// function reset(){
//     currentPlayer = 0;
//     player1Selections = new Array();
//     player2Selections = new Array();
//     returnID('player1').classList.add('selected');
//     returnID('player2').classList.remove('selected');
// }


// function loadAnswers(){
//     winners.push([1, 2, 3]);
//     winners.push([4, 5, 6]);
//     winners.push([7, 8, 9]);
//     winners.push([1, 4, 7]);
//     winners.push([2, 5, 8]);
//     winners.push([3, 6, 9]);
//     winners.push([1, 5, 9]);
//     winners.push([3, 5, 7]);
// }

// function checkWinner() {
//     let win = false;
//     let playerSelections = new Array();
//     if (currentPlayer == 0)
//         playerSelections = player1Selections;
//     else
//     playerSelections = player2Selections;
//     if (playerSelections.length >= size) {
//         for (i = 0; i < winners.length; i++) {
//             let sets = winners[i];  
//             let setFound = true;
//             for (r = 0; r < sets.length; r++) {
//                 let found = false;
//                 for (s = 0; s < playerSelections.length; s++) {
//                     if (sets[r] == playerSelections[s]) {
//                         found = true;
//                         break;
//                     }
//                 }
//                 if (found == false) {
//                     setFound = false;
//                     break;
//                 }
//             }
//             if (setFound == true) {
//                 win = true;
//                 break;
//             }
//         }
//     }
//     return win;
// } 

// window.addEventListener('load', addFigure);

// function iconX() {
//     let circlePlayer2 = document.getElementById('player2-circle');
//     let timesPlayer1 = document.getElementById('player1-times');
//     if (timesPlayer1.style.display === "none") {
//     timesPlayer1.style.display = "block";
//     circlePlayer2.style.display = "block";
//     }
// }


// function iconO() {
//     let circlePlayer1 = document.getElementById('player1-circle');
//     let timesPlayer2 = document.getElementById('player2-times');
//     if (circlePlayer1.style.display === "none") {
//             circlePlayer1.style.display = "block";
//             timesPlayer2.style.display = "block";
//     }
// }



