//задание 1
var admin, 
    name = 'Василий';
admin = name;
console.log(admin);

//задание 2
var result;
result = prompt('Enter number','0');
if (isNaN(+result)){
    alert('undefined');
}
else if (result === null) {
    alert('null');
}
else if (+result > 0){
    alert('Значение больше нуля');
}        
else if (+result < 0){
    alert('Значение меньше нуля');
}
else {
    alert('Значение равно нулю');
}

//задание 3
var login,
    password;
login = prompt('Введите логин');
if (login == 'Админ'){
    password = prompt('Введите пароль');
}
else if (login === null){
    alert('Вход отменён');
}
else {
    alert('Пользователь не найден');
}
if (password == '123321'){
        alert('Добро пожаловать!');
}
else if (password === undefined){
        alert('Вход отменён');
}
else {
        alert('Пароль неверен');
}

//задание 4
var age;
age = prompt('Введите возраст');
if (age === null || age === undefined)
    {
    alert('Значение не определено');   
}
else if (age>=14 && age<=90){
    alert('Возраст от 14 до 90');   
}
else if (age<0) 
{
    alert('Возраст не может быть отрицательным');   
}
else {
    alert('Возраст вне промежутка от 14 до 90');   
}

//задание 5
for (var i=1; i<=10; i++){
    if (i%2 == 0)
        {
            console.log(i);
        }
}

//задание 6
var number;
do {
    number = prompt('Введите число больше 100');
    console.log(+number);
    if (isNaN(+number)){
        number = prompt('Введите число');
        }
} while (+number <= 100 && number!=null)

//Доп.задание 6
var a, b, c;
a = prompt('Введите a');
b = prompt('Введите b');
console.log(+a);
console.log(+b);
c = (+a + +b < 4) ? 'Мало':'Много';
console.log(c);

//Доп.задание 7
var i = 0;
while (i<3){
    alert( "номер " + i + "!" );
    i++;
}

//Доп.задание 8
var a;
a = prompt('Browser');
if (a == 'IE'){
    alert( 'О, да у вас IE!' );
}
else if (a == 'Chrome' || a == 'Firefox' ||a == 'Safari' ||a == 'Opera'){
     alert( 'Да, и эти браузеры мы поддерживаем' );
}
else {
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}
