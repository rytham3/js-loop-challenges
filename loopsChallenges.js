/*
1. Write a `while` loop that calculates the sum of all
   numbers from 1 to 5 and stores the result in a variable
   named `sum`.
*/
let sum = 0
let i = 0

while (i <= 5) {
    sum = sum + i;
    i++
}
console.log(sum);





/*
2. Write a `while` loop that counts down from 5 to 1 and
   stores the numbers in an array named `countdown`.
*/
let countdown = [];
let j = 5;

while (j>=1) {
    countdown.push(j)
    j--;
}
console.log(countdown);




/*
3. Write a `do while` loop that prompts a user to enter
   their favorite tea type until they enter `"stop"`.
   Store each tea type in an array named `teaCollection`.
*/

let teaCollection = [];
let x;

do {
    x = prompt('Enter your favourite tea type (type "stop" to exit');

    if(x !== "stop"){
        teaCollection.push(x);
    }


} while (x !== "stop");

console.log(teaCollection);






/*
4. Write a `do while` loop that adds numbers from 1 to 3
and stores the result in a variable named `total`.
*/

let total = 0;
let num = 1;

do {
    total = total + num;
    num++;

} while (num<=3);
console.log(total);







/*
5. Write a `for` loop that multiplies each element in the
array `[2, 4, 6]` by 2 and stores the results in a new
array named `multipliedNumbers`.
*/

let arr = [2,4,6];
let multipliedNumbers = [];

for (let i=0 ; i<arr.length ; i++){
    multipliedNumbers.push(arr[i]*2);
}
console.log(multipliedNumbers);




/*
6. Write a `for` loop that lists all the cities in the 
array `["Paris", "New York", "Tokyo", "London"]` and 
stores each city in a new array named `cityList`.
*/

let cities = ["Paris","New York", "Tokyo", "London"];
let cityList = [];

for(let i=0; i<cities.length; i++){
    cityList.push(cities[i]);
}
console.log(cityList);


