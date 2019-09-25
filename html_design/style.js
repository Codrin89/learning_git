// imagApart=[
// {
// 	img:"14-1@2x.png"
// },
// {
// 	img:"17-2@2x.png"
// },
// {
// 	img:"21-3@2x.png"
// },
// {
// 	img:"2-2.png"
// },
// {
// 	img:"a.jpg"
// },
// {
// 	img:"b.jpg"
// },
// {
// 	img:"c.jpg"
// },
// {
// 	img:"d.jpg"
// }
// ];

// function apartList(imagApart){
// 	document.getElementsByClassName('list-ap')[0].innerHtml = "";
// 	if(imagApart){
// 		imagApart.map((element,index) =>{
// 			let containerImg = '<div class="row"> <div>'
// 			+element.img+'</div> <button class="btn-prev" data-id="'
// 			+index+'"> Prev </button> <button class="btn-next"data-id="'
// 			+index+'"> Next </button> </div>';
// 			document.getElementsByClassName('list-ap')[0].innerHtml +=containerImg;
// 		}
// 	}
// }

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "http://lorempixel.com/400/200/animals";
images[1] = "http://lorempixel.com/400/200/sports";
images[2] = "http://lorempixel.com/400/200/food";
images[3] = "http://lorempixel.com/400/200/people";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;