function renderList() {  
	const carteLista = JSON.parse(localStorage.getItem('book-info'));
	if(carteLista) {
		carteLista.map((element, index) => {
			let container = '<div class="row"><div>'+element.denumireCarte+'</div><div>'+element.autor+'</div><div>'+element.anPublicatie+'</div><button id="btn-update" data-id="'+index+'">Update</btn><button id="btn-delete" data-id="'+index+'">Delete</button></div>';
			document.getElementsByClassName('list')[0].innerHTML += container;
		});
	}
function addlistener() {
	document.getElementById('btn-update').addEventListener('click', (e) => {
		const id =  $target.data('id');
		const carteLista = JSON.parse(localStorage.getItem('book-info'));
			carteLista[id].updateAn=document.getElementById('update-an').value;
			carteLista[id].updateAutor = document.getElementById('update-autor').value;
			carteLista[id].updateDenumire = document.getElementById('update-name').value;
		localStorage.setItem('book-info', JSON.stringify(carteLista));
					})
	document.getElementById('btn-delete').addEventListener('click',() =>{
		const id = event.currentTarget.getAttribute('data-id');
		if(carteLista === null) {
		carteLista = [];}
	return carteLista.splice(id,1);
			localStorage.setItem('book-info', JSON.stringify(carteLista));
	})}}

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


// document.getElementById('update-add').addEventListener('click',() =>{
// 	const carteLista = JSON.parse(localStorage.getItem('book-info'));
// 	const objectUpdate = {
// 		"updateAn": document.getElementById('update-an').value,
// 		"updateAutor": document.getElementById('update-autor').value,
// 		"updateDenumire": document.getElementById('update-name').value
// 	};
// 	if(carteLista === null) {
// 		carteLista = [];
// 	}
// 	carteLista.push(objectUpdate);
// 	localStorage.setItem('book-info', JSON.stringify(carteLista));
// 	window.location.reload();
// });


// let x = document.getElementById('btn-delete').addEventListener('click', deletebook) ;
//  const carteLista = JSON.parse(localStorage.getItem('book-info'));
// function deletebook(){
// 	if(carteLista === null) {
// 		carteLista = [];
// 	}
// 	carteLista.splice('data-id',1)
// }


// let clear = document.getElementById('clear');
//     clear.addEventListener('click', () => {
//     	if(carteLista === null) {
// 		carteLista = [];
// 	}
// 	carteLista.push(objectAddd);
//       carteLista.splice(id,1);
//     })

