var a1 = 2;
console.log(a1);

// créer une fonction
function additionner(e1, e2) {
    return e1 + e2;
}

// exécuter une fonction
var resultat = additionner(10, 20);
console.log(resultat);

var add = additionner;

var carre = function (e1) {
    return e1 * e1;
}

var r1 = add(20, 30);

function exec(nb1, fn1) {
    console.log('nb1=', nb1, ' resultat=', fn1(nb1));
    return function (e) {
        return fn1(e) * 2000;
    };
}

var fn = exec(10, carre);

var resu = fn(20);

console.log(resu);

console.log(exec(10, carre)(90));

exec(10, function (e) {
    return e * 1000;
});