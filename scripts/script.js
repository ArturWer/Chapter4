let main = function (event) {
	'use striсt';
	let btn = document.querySelector('.comment-input button');
	btn.addEventListener('click', function(){
		console.log(btn);
	}, false);
	
};
$(document).ready(main);