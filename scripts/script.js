let main = function (event) {
	'use striсt';
	let userInput = document.querySelector(".comment-input input");
	let btn = document.querySelector(".comment-input button");

	function addNewComment(){		
		let userComment = userInput.value;
		let newP = document.createElement("p");
		let newContent = document.createTextNode(userComment);
		newP.appendChild(newContent);
		let commentsSection = document.querySelector(".comments");
		commentsSection.appendChild(newP);
		userInput.value = "";
	};
	function checkNewComment(){
		if (userInput.value !== "") {
			addNewComment();
		};
	};

	btn.addEventListener("click", checkNewComment, false);
	
	userInput.addEventListener("keypress", function(event){
		if (event.keyCode === 13) {
			console.log("Enter");
			checkNewComment();
		}
	}, false);

};
$(document).ready(main);