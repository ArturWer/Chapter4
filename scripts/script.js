let main = function (event) {
	'use striсt';
	let btn = document.querySelector(".comment-input button");
	btn.addEventListener("click", function(){
		let userComment = document.querySelector(".comment-input input").value;
		if (userComment !== "") {
			let newP = document.createElement("p");
			let newContent = document.createTextNode(userComment);
			newP.appendChild(newContent);
			let commentsSection = document.querySelector(".comments");
			commentsSection.appendChild(newP);
			document.querySelector(".comment-input input").value = "";
		};
		

	}, false);
	
};
$(document).ready(main);