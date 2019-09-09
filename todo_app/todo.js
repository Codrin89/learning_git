function renderList() {  
	document.getElementsByClassName('list')[0].innerHTML="";
	const carteLista = JSON.parse(localStorage.getItem('book-info'));
	if(carteLista) {
		carteLista.map((element, index) => {
			let container = '<div class="row"><div>'+element.denumireCarte+'</div><div>'+element.updateDenumire+'</div><div>'+element.autor+'</div><div>'+element.updateAutor+'</div><div>'+element.anPublicatie+'</div><div>'+element.updateAn+'</div><div class="buttonDeUp" ><button class="btn-update" data-id="'+index+'">Update</btn><button class="btn-delete" data-id="'+index+'">Delete</button></div></div>';
			document.getElementsByClassName('list')[0].innerHTML += container;
		});
	}
	addlistener();
}

function addlistener() {
	const updateBtns = document.getElementsByClassName('btn-update');
	for(let i = 0; i < updateBtns.length; i++) {
		updateBtns[i].addEventListener('click', function(e){
			const id =  parseInt(this.dataset.id);
			const carteLista = JSON.parse(localStorage.getItem('book-info'));
			// const objectUpdate ={
			// carteLista[id].updateAn=document.getElementById('add-an').value;
			// carteLista[id].updateAutor = document.getElementById('add-autor').value;
			// carteLista[id].updateDenumire = document.getElementById('add-name').value;}
				const objectUpdate = {
		"updateAn": document.getElementById('add-an').value,
		"updateAutor": document.getElementById('add-autor').value,
		"updateDenumire": document.getElementById('add-name').value
	};
		if(carteLista !== null) {
		carteLista.push(objectUpdate);
	} });
	localStorage.setItem('book-info', JSON.stringify(carteLista));

	};
	
	const deleteBtns = document.getElementsByClassName('btn-delete');
	for(let i = 0; i < deleteBtns.length; i++) {
		deleteBtns[i].addEventListener('click',function(e){
		const id =  parseInt(this.dataset.id);
		const carteLista = JSON.parse(localStorage.getItem('book-info'));
		if(carteLista !== null) {
			carteLista.splice(id,1);
			}
		localStorage.setItem('book-info', JSON.stringify(carteLista));
		renderList();
		
		})
	};
}
renderList();

document.getElementById('add-book').addEventListener('click', () => {
	document.getElementsByClassName('add-pop-up')[0].classList.remove('displayNone');
});

document.getElementById('cancel-add').addEventListener('click', () => {
	document.getElementsByClassName('add-pop-up')[0].classList.add('displayNone');
});

document.getElementById('save-add').addEventListener('click', () => {
	if(!validateform()) {
		alert('something wrong with form!');
		return false;
	}
	const carteLista = JSON.parse(localStorage.getItem('book-info'));
	const objectAddd = {
		"anPublicatie": document.getElementById('add-an').value,
		"autor": document.getElementById('add-autor').value,
		"denumireCarte": document.getElementById('add-name').value
	};
	if(carteLista === null) {
		carteLista = [];
	}
	carteLista.push(objectAddd);
	localStorage.setItem('book-info', JSON.stringify(carteLista));
	window.location.reload();
});



function validateform(){  
	const name = document.getElementById("add-name").value;  
	const autor = document.getElementById("add-autor").value;  
	const year = document.getElementById("add-an").value;  
	if(name.length < 1 && name.split(' ').join('').length < 1) {
		return false;
	}
	if(autor.length < 1 && autor.split(' ').join('').length < 1) {
		return false;
	}
	if(year.length < 4) {
		return false;
	}
	return true;
}