var lg = console.log;

var tab = [20, 12, 30, 2];
// accéder à un élément du tableau
var premierElement = tab[0];
lg(premierElement);

tab[0] = 9;
lg(tab);


tab.forEach(function (val, index, tableau) {
    lg(val, index);
});

var tabSup15 = [];

tab.forEach(function (val, index, tableau) {
    if (val > 15) {
        tabSup15.push(val);
    }
});
lg("-----");


var afficher = function (val, index) {
    lg(val, index);
};


tabSup15.forEach(afficher);

var tabSup15bis = tab.filter(function (val) {
    return val > 15;
});
lg("-----");
tabSup15bis.forEach(afficher);


var fn1 = function (a) {
    return a * a;
}
var fn2 = function (a) {
    return a * a * a;
}

var tabFn = [fn1, fn2];