let main = function (event) {
	'use striсt';
	let btn = document.querySelector(".comment-input button");
	btn.addEventListener('click', function(){
		let msg = "It's a new comment";
		let newP = document.createElement("p");
		let newContent = document.createTextNode(msg);
		newP.appendChild(newContent);
		let commentsSection = document.querySelector(".comments");
		commentsSection.appendChild(newP);

	}, false);
	
};
$(document).ready(main);