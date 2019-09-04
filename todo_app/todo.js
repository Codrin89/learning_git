const carteLista = [
	{	
		denumireCarte:'Sub aceeasi steaa',
		autor:'Jhon Green',
		anPublicatie:2019,
	},
	{	denumireCarte:'Insomniii',
		autor:'Irina Binder',
		anPublicatie:2018
	},
	{	
		denumireCarte:'Amintiri diin viitor',
		autor:'Andreea Russo',
		anPublicatie:2015
	},
	{	
		denumireCarte:'În umbra pașiilor tăi',
		autor:'Vitali Cipileaga',
		anPublicatie:2015
	},
	{	
		denumireCarte:'Homeworik',
		autor:'Nicolae Dabija',
		anPublicatie:2012
	},
	{	
		denumireCarte:'Ce ne spunejydrjnbim',
		autor:'Chris Simion',
		anPublicatie:2011
	}
];


function renderList() {
	// get localstorage

	const carteLista = JSON.parse(localStorage.getItem('book-info'));
	if(carteLista) {
		carteLista.map((element) => {
			let container = '<div class="row"><div>'+element.denumireCarte+'</div><div>'+element.autor+'</div><div>'+element.anPublicatie+'</div></div>';
			document.getElementsByClassName('list')[0].innerHTML += container;
		});
	}
	
}
renderList();

document.getElementById('add-book').addEventListener('click', () => {
	document.getElementsByClassName('add-pop-up')[0].classList.remove('displayNone');
});

document.getElementById('cancel-add').addEventListener('click', () => {
	document.getElementsByClassName('add-pop-up')[0].classList.add('displayNone');
});



document.getElementById('save-add').addEventListener('click', () => {
	const carteLista = JSON.parse(localStorage.getItem('book-info'));
	const objectAddd = {
		"anPublicatie": document.getElementById('add-an').value,
		"autor": document.getElementById('add-autor').value,
		"denumireCarte": document.getElementById('add-name').value
	};


let carteListaNoua =[];
	carteListaNoua.push(objectAddd);
	localStorage.setItem('book-info', JSON.stringify(carteListaNoua));
	window.location.reload();
});


 // function validateForm() {
 //  if (anPublicatie.value== null || anPublicatie== "", add-autor.value == null || add-autor.value == "", anPublicatie.value == null || anPublicatie.value == "") {
 //      alert("Comppleteaza");
 //      return false;
 //    }
 //  }


function removeAll(){
let containerId = document.getElementById("container");

containerId.innerHTML = "";
}


function validateform(){  
let a = document.myForm.add-name.value;  
let b = document.myForm.add-autor.value;  
let c = document.myForm.add-an.value;  
  
if (a == null || a == ""){  
  alert("obligatoriu");  
  return false;  
}else if (b == null || b == ""){  
  alert("obligatoriu");  
  return false;  
  }  else (c == null || c == "") {
  alert("obligatoriu");  
  return false;  
  }
}  