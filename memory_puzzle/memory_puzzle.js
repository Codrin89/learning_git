
const ncardList = [{
	'name': '1',
	'img': 'https://media.tmicdn.com/catalog/product/cache/393572b8c1f13fa8b2ac03b51a17cd45/n/u/number-1-temporary-tattoo_5035.jpg',
},
{
	'name': '2'	,
	'img': 'https://images-na.ssl-images-amazon.com/images/I/814x6GWAgEL._SY606_.jpg',
},
{
	'name': '3',
	'img':'https://cdn.shopify.com/s/files/1/0947/6426/products/3_siffror-lampa.png?v=1499086890',
},
{
	'name': '4',	
	'img':'https://secureservercdn.net/166.62.112.199/smt.db9.myftpupload.com/wp-content/uploads/2012/06/Number-4-on-fire.png',
},
{
	'name': '5',	
	'img':'https://printables.space/files/uploads/download-and-print/large-printable-numbers/5-a4-1200x1697.jpg',
},
{
	'name': '6',
	'img':'https://printables.space/files/uploads/download-and-print/large-printable-numbers/6-a4-1200x1697.jpg',
},
{
	'name': '7',
	'img':'https://thesecretofthetarot.com/wp-content/uploads/2017/10/number-2084160_1280.png'	,
},
{
	'name': '8',
	'img':'https://image.shutterstock.com/image-illustration/number-8-260nw-637209367.jpg',
},
{
	'name': '9',	
	'img':'https://i.pinimg.com/originals/9b/f1/d9/9bf1d99896cc3336d2b046ce1061681d.png',
},
{
	'name': '10',
	'img':'https://www.clipartbay.com/cliparts/number-10-clipart-8e4w1ov.png',
},
{
	'name': '11',
	'img':'https://i.pinimg.com/originals/e1/7c/b1/e17cb14829e3fbdaa806ca9fcab79f41.jpg',
},
{
	'name': '12',
	'img':'https://secureservercdn.net/166.62.112.199/smt.db9.myftpupload.com/wp-content/uploads/2012/07/number-12.jpg',
},
{
	'name': '13',
	'img':'https://www.worldnumerology.com/images/13.png',
},
{
	'name': '14',
	'img':'https://i.pinimg.com/236x/bd/9a/b9/bd9ab921aeb491a2801a5facd73a2858--valentine-ideas-valentines-day.jpg'	,
},
{
	'name': '15',
	'img':'https://rlv.zcache.com/elegant_bright_gold_faux_metallic_number_15_table_number-rf34eabd1f71c4d11b7f49cbce184636a_i40g8_8byvr_540.jpg',
},
{
	'name': '16',
	'img':'https://images-na.ssl-images-amazon.com/images/I/61bfNztONDL.jpg',
},
{
	'name': '17',
	'img':'http://numerologystars.com/wp-content/uploads/2011/12/number-17-2.jpg',
},
{
	'name': '18',
	'img':'https://cdn.shopify.com/s/files/1/0034/1282/products/number-18-cookie_263x263.png?v=1483412685',
},
{
	'name': '19',
	'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7DxDBK3XMt0SAm_bhHVXj7NXNakKiCde5YK3s9P3P5Qfyt0Wow&s',
},
{
	'name': '20',
	'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-Uad64yjXiymi77ZXOSu987NlzFiweQpYuv7fzA9EWi4AGVTLg&s',
},
// {
// 	'name': '21',
// 	'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7DxDBK3XMt0SAm_bhHVXj7NXNakKiCde5YK3s9P3P5Qfyt0Wow&s',
// },
];

const container_with_card = ncardList
  .concat(ncardList)
  .sort(() => 0.5 - Math.random());


const carContainer = document.getElementById('carContainer');
const mini_card_cont = document.createElement('div');
mini_card_cont.setAttribute('class', 'mini_card_cont');
carContainer.appendChild(mini_card_cont);

container_with_card.forEach(item => {
	const { name, img } = item;

	const card = document.createElement('div');
	card.classList.add('card');

	card.dataset.name = name;

	const front = document.createElement('div');
	front.classList.add('front');

	const back = document.createElement('div');
	back.classList.add('back');
	back.style.backgroundImage = 'url(' + img + ')';

	mini_card_cont.appendChild(card);
	card.appendChild(front);
	card.appendChild(back);
});

function reset(){
	window.location.reload(true);
}
function matchDuplicateCard() {
	const selectedCard = document.getElementsByClassName('select');
// 	selectedCard.forEach(card =>{
// 		card.classList.add('matchDuplicateCard');
// 	})
// }
// for(let i = 0; i < selectedCard.length; i++){
// 	selectedCard.classList.add('match');
  const selected = document.querySelectorAll('.select');
  selected.forEach(card => {
    card.classList.add('match')
})
 resetClick()}
function resetClick() {
	// let selectcard = container_with_card.map((item) => {
	// 	return item.select
	// });
 // 	selectcard.forEach(card =>{
	// 	card.classList.remove('select');
	// })
let selected = document.querySelectorAll('.select');
selected.forEach(card => {
card.classList.remove('select');
firstClick = "";
secondClick = "";
count = 0 ;
 })}


let count = 0;
let firstClick;
let secondClick;
let time = 1000;
mini_card_cont.onclick = function(){
	let click = event.target;
	let containerC = document.getElementsByClassName('mini_card_cont');
	if (click === containerC ){
		return ;
	}
	if (count < 2) {
		count ++
		if(count === 1) {
			firstClick = click.parentElement.dataset.name;
			click.parentElement.classList.add('select');
		}	
		else{
			secondClick = click.parentElement.dataset.name;
			click.parentElement.classList.add('select');
		}
		validationDuplicate()
	}
}
function validationDuplicate(){
if (firstClick && secondClick){
	if(firstClick === secondClick){
		setTimeout(matchDuplicateCard, time);
		}
		else {
			setTimeout(resetClick, time);
		}
	}		
}
// function duplicateCard(){
// 	if(firstClick.event.target && secondClick.event.target){
// 		if(firstClick.event.target === secondClick.event.target){
// 		alert ('duplicate')
// 	}
// 	else {
// 		resetClick();
// 		}
// 	}
// }

// function duplicate(){

// const containerValue = container_with_card.map((item) => {
// 	return item.name;
// });console.log(containerValue)
// let valueDuplicate = containerValue.every(function(item,idx){
// 	return containerValue.indexOf(item) == idx;
// })
// console.log(valueDuplicate);

// }
// function dup(){
// 	let array = document.getElementsByClassName('card')
// for(let secondClick of array){
// 	for(let firstClick of array){
// 		if(secondClick == firstClick)
// 			continue;
// 		if(secondClick.name === secondClick.name ){
// 			console.log(obj);
// 			break;
// 		}
// 	}}
// }
