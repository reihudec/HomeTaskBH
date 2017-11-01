var a = 20,
    b = 15,
    c = 30;

if (a > b) {
    console.log('true');
} else if (a < b){
    console.log('false');
} else {
    console.log('same');
}

if (a > b && b > 10 && c == 20) {
    console.log('true');
} else {
    console.log('false');
}

if (a > b || b > 10 || c == 20) {
    console.log('true');
} else {
    console.log('false');
}

if (a > b || b > 10 && c == 20) {
    console.log('true');
} else {
    console.log('false');
}