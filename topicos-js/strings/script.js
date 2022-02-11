/*
console.log("um string literal pode ficar entre aspas duplas");
console.log('um string literal pode ficar entre aspas simples');
console.log(`um string literal pode ficar entre crases`);

console.log("Concatenação e interpolação: ");
const num = 14.5;
console.log("O valor do produto é " + num);
console.log('O valor do produto é ' + num);
console.log(`O valor do produto é ${num}`);
*/

/*
const num = 14.5;
console.log("conversão entre number e string");

const str1 = num.toString();
console.log(`O tipo de ${str1}: ${typeof str1}`);

const str2 = num.toFixed(2);
console.log(`O tipo de ${str2}: ${typeof str2}`);

const num1 = Number("14.5");
console.log(`O tipo de ${num1}: ${typeof num1}`);

const num2 = parseInt("21", 10);
console.log(`O tipo de ${num2}: ${typeof num2}`);

const num3 = parseInt("21", 16);
console.log(`O tipo de ${num3}: ${typeof num3}`);

const num4 = parseFloat("21.34", 10);
console.log(`O tipo de ${num4}: ${typeof num4}`);
*/

const str = "Maria Silva  ";

console.log(`const str = "Maria Silva   "`);

console.log(`ToLowerCase: ${str.toLowerCase()}`);
console.log(`toUpperCase: ${str.toUpperCase()}`);

console.log(`charAt: ${str.charAt(3)}`);

console.log(`replace: ${str.replace("i", "$")}`);
console.log(`replace: ${str.replace(/i/g, "$")}`);

console.log(`replace: ${str.length}`);

console.log(`indexOf: ${str.indexOf("i")}`);
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);

console.log(`substring: ${str.substring(3, 8)}`);

console.log(`trim: ${str.trim()}`);


