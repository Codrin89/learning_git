
 function renderList(carteLista) {  
	document.getElementsByClassName('list')[0].innerHTML="";
	if(carteLista) {
		carteLista.map((element, index) => {
			let container = '<div class="row"><div>'
			+element.denumireCarte+'</div><div>'
			+element.autor+'</div><div>'
			+element.anPublicatie+'</div><div>'
			+element.tipCarte+'</div>  <button class="btn-update"  data-id="'
			+index+'">Update</btn><button class="btn-delete" data-id="'
			+index+'">Delete</button></div>';
			document.getElementsByClassName('list')[0].innerHTML += container;
		});
	}

	let itemSearch = JSON.parse(localStorage.getItem('bookInfoSearch'));
	 if ( itemSearch.length > 0 ){
   	console.log(itemSearch)
		document.getElementsByClassName ('list').innerHTML = localStorage.getItem('bookInfoSearch');
	} 


	addlistener();
}
	

function addlistener() {
	const updateBtns = document.getElementsByClassName('btn-update');
	for(let i = 0; i < updateBtns.length; i++) {
		updateBtns[i].addEventListener('click', function(e){
			const carteLista = JSON.parse(localStorage.getItem('book-info'));
			const id =  parseInt(this.dataset.id);
			document.getElementById('save-update').setAttribute('data-id',id)
			document.getElementsByClassName('add-pop-up')[0].classList.add('displayNone');
			document.getElementsByClassName('update-pop-up')[0].classList.remove('displayNone');
			document.getElementById('update-name').value = carteLista[id].denumireCarte;
			document.getElementById('update-autor').value = carteLista[id].autor;
			document.getElementById('update-an').value = carteLista[id].anPublicatie;
			document.getElementById('update-tip').value = carteLista[id].tipCarte
	 	});
	};
	const deleteBtns = document.getElementsByClassName('btn-delete');
	for(let i = 0; i < deleteBtns.length; i++) {
		document.getElementsByClassName('btn-delete')[i].innerHTML += ` X`;
		deleteBtns[i].addEventListener('click',function(e){
		const carteLista = JSON.parse(localStorage.getItem('book-info'));
			const id =  parseInt(this.dataset.id);
			if(carteLista !== null) {
				carteLista.splice(id,1);
			}
			
			localStorage.setItem('book-info', JSON.stringify(carteLista));
			window.location.reload();
		});
	};
}
const carteLista = JSON.parse(localStorage.getItem('book-info'));

renderList(carteLista);

document.getElementById('add-book').addEventListener('click', () => {
	document.getElementsByClassName('add-pop-up')[0].classList.remove('displayNone');
	document.getElementsByClassName('update-pop-up')[0].classList.add('displayNone');

});

document.getElementById('cancel-add').addEventListener('click', () => {
	document.getElementsByClassName('add-pop-up')[0].classList.add('displayNone');
});


document.getElementById('cancel-update').addEventListener('click', () => {
	document.getElementsByClassName('update-pop-up')[0].classList.add('displayNone');
});


document.getElementById('save-add').addEventListener('click', function() {
	if(!validateForm()) {
		alert('something wrong with form!');
		return false;
	}
	if(validateName()) {
		alert('The name already exists');
		return false;
	}
	let carteLista = JSON.parse(localStorage.getItem('book-info'));
	const objectAddd = {
		"anPublicatie": document.getElementById('add-an').value,
		"autor": document.getElementById('add-autor').value,
		"denumireCarte": document.getElementById('add-name').value,
		"tipCarte": document.getElementById('add-tip').value
	};
	if(carteLista === null ) {
		 carteLista = [];
	}
	carteLista.push(objectAddd);	
	localStorage.setItem('book-info', JSON.stringify(carteLista));
	window.location.reload();})

document.getElementById('save-update').addEventListener('click', function() {

if(!validateFormUp()) {
		alert('something wrong with form!');
		return false;
	}
	if(validateNameUp()) {
		alert('The name already exists');
		return false;
	}
	const carteLista = JSON.parse(localStorage.getItem('book-info'));

	carteLista[this.dataset.id] = {
		"denumireCarte": document.getElementById('update-name').value,
		"autor": document.getElementById('update-autor').value,
		"anPublicatie": document.getElementById('update-an').value,
		"tipCarte": document.getElementById('update-tip').value
	}
	localStorage.setItem('book-info', JSON.stringify(carteLista));
		window.location.reload();
});


function validateForm(){  
	const name = document.getElementById("add-name").value;  
	const autor = document.getElementById("add-autor").value;  
	const year = document.getElementById("add-an").value;  
	if(name.length < 1 && name.split(' ').join('').length < 1) {
		return false;
	}
	if(autor.length < 1 && autor.split(' ').join('').length < 1) {
		return false;
	}
	if(year.match(/^(19|20)\d{2}$/g) === null) {
		return false;
	}
	return true;
}



function validateFormUp(){  
	const name = document.getElementById("update-name").value;  
	const autor = document.getElementById("update-autor").value;  
	const year = document.getElementById("update-an").value;  
	if(name.length < 1 && name.split(' ').join('').length < 1) {
		return false;
	}
	if(autor.length < 1 && autor.split(' ').join('').length < 1) {
		return false;
	}
	if(year.match(/^(19|20)\d{2}$/g) === null) {
		return false;
	}
	return true;
}

function drop() {
  	const dropDown = document.getElementById('update-tip');
	for(let i = 0; i < dropDown.length; i++) {
		dropDown[i].addEventListener('click', function(e){
			const carteLista = JSON.parse(localStorage.getItem('book-info'));
			const id =  parseInt(this.dataset.id);
			document.getElementById('update-save').setAttribute('data-id',id)

		})
	}
	localStorage.setItem('book-info', JSON.stringify(carteLista));
}

function validateName(){
	const nameV = document.getElementById("add-name").value;
	const carteLista = JSON.parse(localStorage.getItem('book-info'));
 	for (let i = 0; i < carteLista.length; i++) {
		if (carteLista[i].denumireCarte === nameV) {
	    	return true
   	 }
   	}
  	localStorage.setItem('book-info', JSON.stringify(carteLista));
};
function validateNameUp(){
	const nameV = document.getElementById("update-name").value;
	const carteLista = JSON.parse(localStorage.getItem('book-info'));
 	for (let i = 0; i < carteLista.length; i++) {
		if (carteLista[i].denumireCarte === nameV) {
	    	return true
   	 }
   	}
  	localStorage.setItem('book-info', JSON.stringify(carteLista));
}

document.getElementById('sortByName').addEventListener("click", sortByNameFunction,true);
document.getElementById('sortByAutor').addEventListener("click", sortByAutorFunction,true);
document.getElementById('sortByAn').addEventListener("click", sortByAnFunction,true);
document.getElementById('sortByTip').addEventListener("click", sortByTipFunction,true);

function show_hide() {
	let click = document.getElementById('ordonareul');
	if(click.style.display === 'none') {
		click.style.display = 'block';
	}else {
		click.style.display = ' none'
	}}

var ordCrescator  = false;
function sortByNameFunction(){
	ordCrescator = !ordCrescator;
	const carteLista = JSON.parse(localStorage.getItem('book-info'));
	let lista = carteLista.sort(function(a, b) {
		let nameA = a.denumireCarte.toUpperCase(); 
		let nameB = b.denumireCarte.toUpperCase(); 
		if (nameA < nameB) {
			return ordCrescator ? -1 : 1;
		}
		if (nameA > nameB) {
			return ordCrescator ? 1 : -1;
		}

		return 0;
	}); 
	localStorage.setItem('book-info', JSON.stringify(lista));
	renderList(lista);

};




var ordCrescator  = false;
function sortByAutorFunction(){
	ordCrescator = !ordCrescator;
	let carteLista = JSON.parse(localStorage.getItem('book-info'));
	let lista = carteLista.sort(function(a, b) {
		let autorA = a.autor.toUpperCase(); 
		let autorB = b.autor.toUpperCase(); 
		if (autorA < autorB) {
			return ordCrescator ? -1 : 1;
		}
		if (autorA > autorB) {
			return ordCrescator ? 1 : -1;
		}

		return 0;
	}); 
	localStorage.setItem('book-info', JSON.stringify(lista));
	renderList(lista)

};

function sortByAnFunction(){
	const carteLista = JSON.parse(localStorage.getItem('book-info'));
	let lista = carteLista.sort(function(a,b) {
		return parseInt(a.anPublicatie) - parseInt(b.anPublicatie);
	});
	localStorage.setItem('book-info', JSON.stringify(lista));
	renderList(lista);

}


var ordCrescator  = false;
function sortByTipFunction(){
	ordCrescator = !ordCrescator;
	const carteLista = JSON.parse(localStorage.getItem('book-info'));
	let lista = carteLista.sort(function(a, b) {
		let tipA = a.tipCarte.toUpperCase(); 
		let tipB = b.tipCarte.toUpperCase(); 
		if (tipA < tipB) {
			return ordCrescator ? -1 : 1;
		}
		if (tipA > tipB) {
			return ordCrescator ? 1 : -1;
		}

		return 0;
	}); 
	localStorage.setItem('book-info', JSON.stringify(lista));
	renderList(lista);
};

document.getElementById("search_name").addEventListener("input", searchName,true);

function searchName() {
    let value = document.getElementById("search_name").value;
  	const carteLista = JSON.parse(localStorage.getItem('book-info'));
    let itemSearch = carteLista.filter(item => item.denumireCarte.toLowerCase().indexOf(value.toLowerCase()) > -1);
  
	let itemS;
	if(localStorage.getItem('bookInfoSearch') === null){
	itemS = []
	}
	else{
		itemS = JSON.parse(localStorage.getItem('bookInfoSearch'))
	}
	itemS.push(itemSearch);
; 
	renderList(itemSearch);
};

function getTranslateX() {
	let myElement = document.querySelector('#carousel-img');
  			var style = window.getComputedStyle(myElement);
  			var matrix = new WebKitCSSMatrix(style.webkitTransform);
  				return matrix.m41;
}

function prevBtn(){

	if((arrayOfImages.length -5) * -282 < getTranslateX() *1 ) {
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


