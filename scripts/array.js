"use strict"
let arrayNum = [3,4,2,12,4234,334,7,3,55,4554,3677,8,4,45,4767,978];

/* sum array */
function arraySum(array){
	let sum = 0;
	for (var i = array.length - 1; i >= 0; i--) {
		sum+=array[i];
	}
	return sum;
}
console.log(`A sum of the array numbers is: ${arraySum(arrayNum)}`);

/* average number */
function averageNumber (array){
	return arraySum(array)/array.length;
}
console.log(`average number is: ${averageNumber(arrayNum)}`);

/* max number */
function maxNumber (array){
	let max = 0;
	array.forEach(function(val){
		if (val>max) {
			max = val;
		}
	});
	return max;
}
console.log(`max number is: ${maxNumber(arrayNum)}`);

/* odd number */
function oddNumber (array){
	let hasOdd = false;
	array.forEach(function(val){
		if(hasOdd!==true){
			if (val%2 === 1) {
				console.log(`The array has odd numbers`);
				hasOdd = true;
			}
		}
	});
	return hasOdd;
}
oddNumber(arrayNum);

/* Every even number */
function everyEvenNumber (array){
	let everyEven = true;
	array.forEach(function(val){
		if(everyEven!==true){
			return false;
		}
		if (val%2 === 1) {
			everyEven = false;
		}
	});
	if (everyEven) {
		console.log("Every number is even");
	} else console.log("The array has odd numbers!!!!");
	return everyEven;
}
everyEvenNumber(arrayNum);