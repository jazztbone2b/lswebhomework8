/*  For today's homework your job is to write functions
 *  that make the following invocations work.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  var greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */


// Write a function called firstItem that passes the first item of the given array to the callback function
// test array: var foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

firstItem(foods, (firstItem) => {
  console.log('The first item is ' + firstItem);
});

function firstItem(arr, cb){
	var foodOne = arr[0];
	cb(arr[0]);
}

// Write a function called getLength that passes the length of the array into the callback

var foods = ['apple', 'pear', 'banana']

getLength(foods, (length) => {
  console.log('The length of the array is ' + length);
});

function getLength(arr, length){
  length(arr.length);
}

// Write a function called last which passes the last item of the array into the callback

// test array: var foods = ['apple', 'pear', 'banana'];

last(foods, (lastItem) => {
  console.log('The last item in the array is ' + lastItem);
});

function last (arr, lastItem){
  lastItem(arr.pop());
}

// Write a function called sumNums that adds two numbers and passes the result to the callback

sumNums(5, 10, (sum) => {
  console.log('The sum is ' + sum);
});

function sumNums(num1, num2, cb){
  var sum = num1 + num2;
  cb(sum);
}

// Write a function called multiplyNums that adds two numbers and passes the result to the callback

multiplyNums(5, 10, (product) => {
  console.log('The product is ' + product);
});

function multiplyNums(num1, num2, cb){
  var product = num1 * num2;
  cb(product);
}

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

// test array: var foods = ['chicken', 'ribeye', 'hamburger', 'panini']

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

function contains(arr, item, cb){
  cb(arr.indexOf(item));
  
}

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
// test array: var foods = ['chicken', 'hamburgers', 'chicken', 'hotdogs']

removeDuplicates(foods, (uniqueFoods) => {
  console.log('foods with duplicates removed: ' + uniqueFoods);
});

function removeDuplicates(arr, cb){
  var uniqueFoods = [];
  for (var i = 0; i < arr.length; i++);
  if(uniqueFoods.indexOf(arr[i]) === -1){
    uniqueFoods.push(arr[i]);
  }
cb(uniqueFoods);
};

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.

// test code var foods = ['hotdog', 'corn', 'meat', 'cheese']

forEach(foods, (value, index) => {
  console.log('${value} is at index ' + index);
});

function forEach(arr, cb){
  for (var i = 0; i < arr.length; i++){
    var val = arr[i];
    var index = i;
    cb(val, index);
  }
}

