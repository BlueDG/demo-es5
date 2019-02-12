var lg = console.log;

// syntaxe littérale

// objet vide
var obj1 = {};

// objet non vide
var obj2 = {
    nom: 'Oddet',
    prenom: 'Rossi'
};

//lg(obj2);

obj2.age = 20;

obj2.toString = function () {
    return this.nom + ' ' + this.prenom;
}

lg(obj2.toString());

//lg(obj2)

// option fonction constructeur

function Pizza(nom) {
    // déclarer une propriété avec this
    this.nom = nom;
}

var pep = new Pizza('Pépéroni');

lg(pep.nom)