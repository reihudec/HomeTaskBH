var a = 10,
    b = 20,
    c,
    d = false,
    a1 = '123';
function f1(e,f) {return e + f};

console.log(a > b);
console.log(a < 10);
console.log(a >= b);
console.log(a <= b);
console.log(a == 10);
console.log(d == 0);
console.log(d == f1(a,b)); //можно сравнивать с функцией
console.log(a === b);
console.log(a === 0);
console.log(a != b);
console.log(f1(a,b));
console.log (typeof(a1) == '');

/* при сравнении  ==  значения типа undefined, null, bool будет проводится неявное преобразование типов!! false == 0 -> true!!!
при сравнении  ===  учитывается и тип данных! false === 0 -> false!!!*/

