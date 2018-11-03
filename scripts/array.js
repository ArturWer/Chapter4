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

/* array strings */
let strArray = ['food', 'milk', 'letter', 'monkey'];
function stringArrayCheck (strArray, string){
	let isEqual,
		result;
	strArray.forEach(function(value){
		if (string === value) 
			isEqual = true;
	});
	result = (isEqual) ? true : false;
	console.log(`Array contains the word \"${string}\" one time  ${result}`);
	return result;
};
stringArrayCheck(strArray, "milk");
stringArrayCheck(strArray, "pigeon");
stringArrayCheck(strArray, "monkey");

/* array strings 2nd exercise*/
strArray = ['water', 'food', 'milk', 'letter', 'monkey', 'food', 'milk', 'letter', 'monkey', 'food'];
function stringArrayCheckDouble (strArray, string){
	let isEqual = 0,
		result;
	strArray.forEach(function(value){
		if (string === value) 
			isEqual ++;
	});
	result = (isEqual == 2) ? true : false;
	console.log(`Array 2 times contains the word \"${string}\" ${result}`);
	return result;
};
stringArrayCheckDouble(strArray, "milk");
stringArrayCheckDouble(strArray, "pigeon");
stringArrayCheckDouble(strArray, "food");
stringArrayCheckDouble(strArray, "water");

/* array strings n-times exercise*/
function arrayContainsNTimes (array, string, nTimes){
	let count = 0;
	array.forEach(function(value){
		if (value === string) {
			count++;
		}
	});
	if (count >= nTimes) {
		return true;
	} else return false;
}
arrayContainsNTimes(strArray, "letter", 2);
arrayContainsNTimes(strArray, "letter", 3);
arrayContainsNTimes(strArray, "letter", 4);
arrayContainsNTimes(strArray, "letter", 5);