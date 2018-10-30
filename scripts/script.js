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
		//adding showing new element
		newP.style.opacity = "0";
		let i = 1; 
		let intervalId = setInterval (function(){
				newP.style.opacity = `${0.1*i}`;
				i++;
				if (i >= 10) {
					clearInterval(intervalId);
					console.log("clear Interval");
				};
			}, 100);

		
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