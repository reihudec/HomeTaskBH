var a = 'a',
    b = 10,
    c = 30;

while (a > b) {
    console.log(b);
    b++;
}

console.log('----------');
b = 10;
do {
    console.log(b);
    b++;
} while (a > b);

console.log('----------');
for (var i = 1; i <=10; i++) {
    console.log(i*i);
}

console.log('----------');
for (var i = 10; i >=1; i--) {
    console.log(i*i);
}

console.log('----------');
for (var i = 10; i >=1; i = i - 2) {
    console.log(i*i);
}

console.log('----------');
for (var i = 10, j = 1; i >=1; i--, j++) {
    console.log(i*j);
} // возможно использование сразу 2-х счетчиков

console.log('----------');
switch (a){
    case 'a': console.log('a'); break;
    case 'b': console.log('b'); break;
    case 'c': console.log('c'); break;
    default: console.log('didn\'t find'); break;
}

console.log('----------');
var a = 'Привет1';
//alert(a);
//alert("Привет2")
var result1, result2;
//result1 = prompt('Enter number', '100');
//result2 = prompt('Enter number');
console.log(result1);
//console.log(result2);

/*console.log('----------');
console.log(+result1);
console.log(result1);

if (isNaN(+result1)){
    console.log('!number')
}

if (result1 == null) {
    console.log('Cancelled')
}*/

var a;
a = confirm("Are you OK?");
console.log(a);

var a = 10,
    b = 20,
    c;
c = a > b ? 'true' : 'false';

console.log(c);
c = a > b ? b + 10 : b + 100;

console.log(c);

if (a < b){
    c = b + 10;
} else {
    c = b + 100;
}

