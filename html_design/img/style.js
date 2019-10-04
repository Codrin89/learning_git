
let arrayOfImages = ["14-1@2x.png","17-2@2x.png","21-3@2x.png","2-2.png",'a.jpg', 'b.jpg', 'c.jpg', 'd.jpg']; 

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
  			var style = window.getComputedStyle(myElement);
  			var matrix = new WebKitCSSMatrix(style.webkitTransform);
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



function validateCarousel(){
	const imgAA = document.querySelector(".newImag");
  		if (imgAA[i] !== undefined && imgAA[i] !== null && imgAA[i] !== ""){
       getTranslateX()
   		}
}

