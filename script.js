console.log('Hello World');
alert("Hello World");

console.log('---------STRINGS OUTPUT-----------------------------------------');
let fname = "    Neil Gabriel Verzosa     ";
console.log('1. How to UpperCase and LowerCase strings');
alert(fname.toUpperCase());
console.log(fname.toLowerCase());

////////////////////////////////////////////////////////////////////////
console.log('2. How to use trim');
console.log('a ' + fname.trim() + ' a'); //trim at start and end of sting
console.log(fname.trimEnd());   // trim at end of string
console.log(fname.trimStart()); //trim at start of sting

////////////////////////////////////////////////////////////////////////
console.log('3. String methods - replace vs replaceAll vs slice vs backticks');
//replaces first matching word on a string
let method1 = 'I have dog. This is the second dog';
method1 = method1.replace('dog', 'cat')
console.log('---REPLACE---');
console.log(method1);

//replaces all matching word on a string
let method2 = 'I have elephant. This is the second elephant';
method2 = method2.replaceAll('elephant', 'cat')
console.log('---REPLACEALL---');
console.log(method2);

//gets a part of a string by specifying the start and end index
console.log('---SLICE---');
console.log(fname)
console.log(fname.slice(2,10));

//backticks `` - use to add an expresssion inside a string suuch as 
//variables or mathematical expression
console.log('---BACKTICKS---');
console.log(`Hi, ${fname}`);
console.log('Hi,' + fname + '.') //same as above - use of backticks
console.log('---------END OF STRINGS OUTPUT-----------------------------------');


console.log('------------------------ARAYS OUTPUT-----------------------------');
let arrayNames = ['Alenere', 'David', 'Gab', 'Neil'];
let arrayNo = [3, 6.5, 9.35, 12.75, 2];
let arrayMixed = ['Gab', 99, 'Neil', true, 3.99];
let dummy = ['Neil', 'Gab', 1, 2, 3, 4, 69];

console.log(arrayNames[3]);
console.log(arrayNo[arrayNo.length-2]);

console.log('---Updating Arrays---');
console.log('Original: ' + arrayNo[2]);
arrayNo[2] = 69;
console.log('Updated: ' + arrayNo[2]);

console.log('---LENGTH, PUSH, UNSHIFT---');
console.log('This is the original: ' + arrayMixed);

//length - use as an index to add an element to the last index
console.log('---Length---');
arrayMixed[arrayMixed.length] = 'Added';
console.log(arrayMixed);

//puush- adds an element on the last index
arrayMixed.push('End');
console.log(arrayMixed);

//unshift - adds an element on the start of index
arrayMixed.unshift('Start');
console.log(arrayMixed);

////////////////////////////////////////////////////////

console.log('---DELETING ARRAYS---');
//Length - Change length to desired number
console.log('Length - Change length to desired number');
arrayMixed.length = 2;
console.log(arrayMixed);
//pop - deletes the last element
console.log('Pop - deletes the last element');
arrayMixed.pop();
console.log(arrayMixed);
//shift - deletes the first element
console.log('Shift - deletes the first element');
console.log(arrayNo);
arrayNo.shift();
console.log(arrayNo);
//slice - gets a part of the array
console.log('Slice - gets a part of the array');
console.log(arrayNames);
arrayNames = arrayNames.slice(2,4);
console.log(arrayNames);

console.log('-----------------------END OF ARAYS OUTPUT-----------------------');

console.log('----------------CONDITIIONAL STATEMENTS OUTPUT--------------------');
let x = 5;
// === Equal Value and Type
console.log('----== and === and != and !==----');
console.log(x == '5'); //true
console.log(x === '5'); //false
// !== Not Equal Value and Type
console.log(x != '5');  //false
console.log(x !== '5'); //true

///////////////////////////////////////////////////////////////////////////////

console.log('----IF AND ELSE AND ELSE IF STATEMENT----');
let age = 19;
if (age >= 40 && age > 18) {
    console.log('Adult');
}
else if (age >= 18 && age < 40) {
    console.log('Legal Age');
}
else if (age <= 0){
    console.log('Invalid Age');
}
else {
    console.log('Minor Age');
}

console.log('-----------END OF CONDITIIONAL STATEMENTS OUTPUT--------------------');


console.log('----------------LOGICAL OPERATORS OUTPUT--------------------');
console.log('----AND && NOT || NOT ! ----');
let hasDegree = true;
let experience = 3;

console.log('AND &&');
console.log(hasDegree && experience > 2); //true
console.log(hasDegree && experience > 4); //false
console.log('OR ||');
console.log(hasDegree || experience > 2); //true
console.log(hasDegree || experience > 4); //true
console.log('Not !');
console.log(!hasDegree ); //false
console.log(!(experience > 1)); //false

console.log('------------END OF LOGICAL OPERATORS OUTPUT--------------------');

console.log('----------------------SWITCH OUTPUT---------------------------');
let difficulty = 1;

switch (difficulty) {
    case 1:
        console.log('Easy');
        break;
    case 2:
        console.log('Medium');
        break;
    case 3:
        console.log('Hard');
        break;
    default:
        console.log('Invalid');
        break;
}

let letter = 'a';
switch (letter) {
    case 'a':
    case 'A':
        console.log('A');
        break;
    case 'b':
    case 'B':
        console.log('B');
        break;
    case 'c':
    case 'C':
        console.log('C');
        break;
    default:
        console.log('Invalid');
        break;
}
console.log('---------------------END OF SWITCH OUTPUT--------------------');


console.log('-----------WHILE AND DO-WHILE LOOP OUTPUT---------------------');
console.log('WHILE LOOP');
let i = 0;
let search = 'Gab';

while (dummy[i]) {
    if (dummy[i] === search) {
        console.log(dummy[i]);
        break;
    }
    else {
        i++;
    }
}
let n = 0;
while (dummy[n]) {
    console.log(dummy[n]);
    n++;
    if (n == 4) {
        break;
    }

}

console.log('DO WHILE');
let numberArray = [0, 1, 2, 3, 4];
let sum = 0;
let y = 0;

do {
    sum = numberArray[y] + sum
    y++;
} while (y < numberArray.length);
console.log(sum);

console.log('---------END OF WHILE AND DO-WHILE LOOP OUTPUT-----------------');

console.log('---------------------FOR LOOP OUTPUT---------------------------');
console.log('FOR Loop - used to execute a block of code, WHILE the condition is met/true');
for(let h = 0;h < 5;h++) {
    console.log('Hello');
}

console.log('---ITERATE Array---');
let team = ['Neil', 'Gab', 'Gabby', 'Verzosa', 'Pogi']
for(let t = 0; t < team.length; t++) {
    console.log(team[t]);
}

console.log('');
console.log('PRACTICE-----------');
let searchteam = 'gab';
let isFound = false;
for (let g = 0; g < team.length; g++){
    if (team[g].toLowerCase() === searchteam.toLowerCase()){
        isFound = true;
        console.log(`Found ${team[g]}`);
        break;
    }
}
if(!isFound) console.log('Not Found');

console.log('');
console.log('FOR Loop - used when the number of iterations are known');
console.log('WHILE Loop - used when the number of iterations are unknown');

let t = 4;
while(team[t]){
    console.log(team[t]);
    t--;
    if(t === 2){
        break;
    }
}

console.log('');
console.log('FOR/IN Loop - used for iterating over JSONs or Arrays. It returns the key or index of each item');
for(let y in team){
    console.log(team[y]);
}

console.log('');
console.log('FOR/OF Loop - used for iterating over Arrays. It returns the value of each element.');
for (let k of team){
    console.log(k);
}

console.log('');
for (let s in team){
    console.log(`${parseInt(s)+1}. ${team[s]}`);
}

let d = 1;
for (let mates of team){
    console.log(`${d}. ${mates}`);
    d++;
}






console.log('-----------------END OF FOR LOOP OUTPUT-----------------------');

console.log('');