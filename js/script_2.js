//задание 1
function f1(a){
    return a.pop();
}
var a=[1,2,3,4,5];
console.log(f1(a));

//задание 2
var a = ['Джаз','Блюз'];
a.push('Рок-н-Ролл');
console.log(a);
a.splice(a.length - 2,1,'Классика');
console.log(a);
alert(a.shift());
console.log(a);
a.unshift('Рэп','Регги');
console.log(a);


//задание 3
var a = [];
var b = 0;
var i=0;
do 
{      
    a[i] = prompt('Введите значение');
    if (a[i]!=null && a[i]!=undefined && a[i]!='')
        {
            b = b + Number(a[i]);
        }
    i++;
    
} while (a[i-1]!=null && a[i-1]!=undefined && a[i-1]!='');
console.log(a);
console.log(b);


//задание 4
var a = [1,2,3,4,5,6,7,8,9,10,20];
function find(arr, value){
    var b;
    for (var i = 0; i < arr.length; i++)
        { 
            if (arr[i] == value)
            {   
                b = i+1;
                break;
            }
            else b = -1;
        }
    console.log(b);
}
console.log(a);
find(a,3);
find(a,15);
find(a,0);
find(a,17);
find(a,4);
find(a,8);
find(a,20);

//задание 5
var obj = {
    className: 'open menu'
}
var a = (obj.className).split(' ');
console.log(obj.className);
console.log(a);
function addClass(obj, cls){
    var a = (obj.className).split(' ');
    for (var i=0; i < a.length; i++)
        {
            if (a[i] == cls)
                {
                    break;
                }
            else {
                a.push(cls);
                break;
            }
            
        }
    var b = a.join(' ');
    obj.className = b;
    console.log(obj.className);
}
addClass(obj,'new');
addClass(obj,'open');
addClass(obj,'me');

//задание 6
var obj = {
    className: 'open menu'
}
var a = (obj.className).split(' ');
console.log(obj.className);
console.log(a);
function removeClass(obj, cls){
    var a = (obj.className).split(' ');
    for (var i=0; i < a.length; i++)
        {
            if (a[i] == cls)
                {
                    a.splice(i,1);
                }
        }
    var b = a.join(' ');
    obj.className = b;
    console.log(obj.className);
}
removeClass(obj,'open');
removeClass(obj,'blablabla');
console.log(obj);

