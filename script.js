// Le mode 'use strict' impose une qualité de code
`use strict`;

console.log("test en console pour vérifier la connexion au  fichier html :");
console.log("Ho yeah !");

// commentaire monoligne
/*
commentaire sur 
plusieurs 
lignes
*/

/*
            ---LES VARIABLES ---
*/
let maVariable1 = 1;
const maVariable2 = 2;
var maVariable3 = 3;
console.log("-- Variable déclarée à = 1 -- resultat :");
console.log(maVariable1);
// changer une valeur pas besoin de let ou var (impossble pour const) :
console.log("-- Variable modifiée à = 3 -- resultat :");
maVariable1 = 3;
console.log(maVariable1);

/*
            ---LES TYPES DE VARIABLES / DE DONNEES---
*/

// Booléan
let maVariableTrue = true;
let maVariableFalse = false;
// Null
let maVariableNull = null;
// Undefined
let maVariableUndefined = undefined;
// Number
let maVariableNumber1 = 123;
let maVariableNumber2 = 123.123;
// BigInt (trop grand pour etre représenté)
let maVariableBigInt = BigInt(9007199254740991);
// String
let maVariableString = "123";
let maVariableStringPX = "123px";
let maVariableStringVirgule = "123.123";

// 123 n'est pas équivalent à "123"
// 123 + "123" = "123132"
// 123 - "123" = 0 car le -, le / et le * convertissent le string en nombre

console.log("-- Calcul de '123' + 123 :");
console.log(maVariableNumber1 + maVariableString);
let calculNumberString = maVariableNumber1 + maVariableString;
console.log("type du resultat de '123' + 123 :");
console.log(typeof (maVariableNumber1 + maVariableString));
/*
            ---LES CONVERTIONS POSSIBLES---
*/
// Convertir en Number ou String
console.log("-- Convertion d'une string en number :");
console.log(Number(maVariableString));
console.log("-- Convertion d'un number en string :");
console.log(String(maVariableString));
console.log("-- Convertion d'une true en number :");
console.log(Number(maVariableTrue));
console.log("-- Convertion d'un undefined en number :");
console.log(Number(maVariableUndefined));
console.log("-- Convertion d'un true en string :");
console.log(String(maVariableTrue));
console.log(maVariableNumber1.toString());
console.log("-- Recupération des number dans un string (123px) : ");
console.log(parseInt(maVariableStringPX));
console.log("-- couper un number à la virgule (123.123) : ");
console.log(parseInt(maVariableNumber2));
console.log("-- convertir un string en number à la virgule '123.123' : ");
console.log(parseFloat(maVariableStringVirgule));
/*
            ---LES KEYWORDS - mots réservé à javascript---
*/
//Exemple
console.log("-- Exemple de keywords en javascript : ");
console.log(`
await	
break	
case	
catch	
class
const	
continue	
debugger	
default	
delete
do	
else	
enum	
export	
extends
false	
finally	
for	
function	
if
implements	
import	
in	
instanceof	
interface
let	
new	
null	
package	
private
protected	
public	
return	
super	
switch
static	
this	
throw	
try	
true
typeof	
var	
void	
while	
with
yield 
`);

/*
            ---OPERATEURS MATHEMATIQUE---
*/
console.log("Calcul simple avec +, -, /, * et ** ");
console.log("10 + 10 :");
console.log(10 + 10);
console.log("10 - 10 :");
console.log(10 - 10);
console.log("100 ** 10 :");
console.log(100 / 10);
console.log("10 * 10 :");
console.log(10 * 10);
console.log("10 ** 10 :");
console.log(10 ** 10);
/*
            ---ASSIGNEMENT---
*/
let maVariable10 = 10;
console.log("10 += 1 :");
console.log((maVariable10 += 1));
console.log("10 -= 10 :");
console.log((maVariable10 -= 10));
console.log("10 *= :");
console.log((maVariable10 *= 100));
console.log("++100");
console.log(++maVariable10);
console.log("--101");
console.log(--maVariable10);
/*
            ---LES CONDITIONS---
*/
let maCondition1 = true;
let maCondition2 = 4;
let maCondition3 = 2;
console.log("Condition valable ? : ");
if (maCondition1 == true) {
  console.log("It's true");
}
// si ma condition n'est pas plus petit que 3
// < > <= >= == ===

if (!maCondition2 < 3) {
  console.log("It's true");
}
if (!maCondition2 < 3 && maCondition3 === 2) {
  console.log("It's true");
}
if (!maCondition2 < 3 || maCondition3 === 2) {
  console.log("It's true");
}

// Les maths avant la comparaison

// concaténation :
console.log(`avec les ${maVariable10 + maCondition1} et les ${maVariableString}`);
// opération dans une variable
let maVariable4 = maVariable10 + maCondition1;
console.log(maVariable4);

/*
            ---LES STRUCTURES CONDITIONNELLES ---
*/

// IF
// pas besoin de { } si if seulement :
if (maVariable4 == 101) console.log("Ha ok ");
if (maVariable4 == 101) {
  console.log("Ha ok ");
}
// IF ELSE
if (!maVariable4 == 101) {
  console.log("Ha ok ");
} else {
  console.log("Ha non ");
}
//IF - ELSE IF - ELSE
if (!maVariable4 == 101) {
  console.log("Ha ok ");
} else if (!maVariable3 == 101) {
  console.log("Ha non ");
} else {
  console.log("Ha HA ");
}
// SWITCH - BREAK - DEFAULT
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  // sans le breack le code ne s'arrete pas
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
/*
            ---LA FONCTION ---
*/

// les arguments sont comme des variables locales
function maSuperFonctionDeLaMort1(argument1) {
  argument1 = "OH lala !";
  console.log(argument1);
}
// Appel de la fonction
maSuperFonctionDeLaMort1();

// argument 2 = valeur par défaut !
function maSuperFonctionDeLaMort2(argument1, argument2 = 2) {
  argument1 = "OH lala !";
  console.log(argument1, argument2);
  const laVariableDeMaFonction = `Je stoque ${argument1} et ${argument2}`;
  return laVariableDeMaFonction;
}
// Appel de la fonction
maSuperFonctionDeLaMort2();
// Récupération du return de ma fonction
let recuperationDeLaVariableDeLaFonction = maSuperFonctionDeLaMort2();
console.log(recuperationDeLaVariableDeLaFonction);

/*
            ---LES DIFFRENTS TYPES DE FONCTIONS ---
*/

// Déclaration d'une fonction
function calculSimple1(choisirUnNombre) {
  return choisirUnNombre - 1;
}
const resultat1 = calculSimple1(10);
// Expression d'une fonction (dans une variable)
const calculSimple2 = function (choisirUnNombre) {
  return choisirUnNombre - 1;
};
const resultat2 = calculSimple2(10);
// Fonction félché (=> ce que nous voulons retourné)
calculSimple3 = (nummeroChoisi) => nummeroChoisi - 1;
const resultat3 = calculSimple3(10);
//Affichage des résultat :
console.log(resultat1, resultat2, resultat3);

/*
            ---LES TABLEAUX ---
*/

let quatre = 4;
let monTableau1 = [1, "deux", 3, quatre];
let monTableau2 = new Array(1, "deux", 3, quatre);
// les deux tableaux sont identiques
console.log(monTableau1);
console.log(monTableau2);
// l'index d'un tableau commence à 0
console.log(monTableau1[0]);
// la taille d'un tableau commence à 1  !!! gth  à la fin
console.log(monTableau1.length);
// réassignation d'un élément
monTableau1[3] = "NONNNN";
// length -1 est équivalent à la fin du tableau
console.log(monTableau1[monTableau1.length - 1]);
// Tableau dans un tableau
let monTableau3 = [
  [1, 2, 3],
  [4, 5, 6, 7, 8],
  [9, 10],
];
//acceder à 5 (deuxcieme élément du deuxieme élément)
console.log(monTableau3[1][1]);
// Les objets sont des tableaux avec des clefs et des valeurs
let maVoiture = new Object();
maVoiture.fabricant = "Ford";
maVoiture.modele = "Mustang";
maVoiture.annee = 1969;
console.log(maVoiture);
// destructuration ou debalage d'un tableau
const arrayTest = [2, 3, 4];
const aTest = arrayTest[0];
const bTest = arrayTest[1];
const cTest = arrayTest[2];
const [xTest, yTest, zTest] = arrayTest;

// affiche le tableau
console.log(arrayTest);
console.log(yTest); // 3

// valeurs par défauts
const [p = 2, q = 6, r = 7] = [8, 9];
console.log(p, q, r);

//spread operator ...
const tableauAAjouter = [10, 20, 30];
const spreadPratique = [3, 2, 8, ...tableauAAjouter];
// sans les ... c'est un tableau dans un tableau
const tableauDansTableau = [3, 2, 8, tableauAAjouter];
console.log(spreadPratique);
console.log(tableauDansTableau);
// rest operator
const [aa, bb, cc, ...reste] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reste);
// dans une fonction met dans un tableau
function mettreDansUnTableau(...argument11) {
  console.log(argument11);
}
mettreDansUnTableau(11, 22, 33, 44, 55);
// une partie dans un tableau
function mettreDansUnTableau1(aaa, bbb, ...argument11) {
  console.log(aaa, bbb, argument11);
}
mettreDansUnTableau1(11, 22, 33, 44, 55, 222);

/*
            ---LES FONCTIONS RELATIVES AUX TABLEAUX ---
*/
let tableauPourFonctions = [18, 50, 62, 3, 548, 625, 69523];
let tableau2DPourFonctions = [18, 50, 62, [3, 548, 625, 69523], 548, 625, 69523];

tableauPourFonctions.push(52);
console.log(tableauPourFonctions); // 52 est ajouté
tableauPourFonctions.pop(); // supprime le dernier element
console.log(tableauPourFonctions);
console.log(tableauPourFonctions.indexOf(50)); //1
console.log(tableauPourFonctions.includes(50)); // est ce que l'élément est présent
console.log(tableauPourFonctions.join("aaa")); // join les éléments du tableau avec un aaa
console.log(tableauPourFonctions.slice(2)); // découpe le tableau à partir de l'index 2
console.log(tableauPourFonctions.slice(2, 4)); // déoupe le tableau a partir de 2 sans le 4 et sa suite
console.log(tableauPourFonctions.slice(-2)); // les deux derniers
console.log(tableauPourFonctions.reverse()); // retourne le sens du tableau
console.log(tableauPourFonctions.concat(tableau2DPourFonctions)); // concaténation des tableaux
let resultatIdentiqueQueConcat = [...tableauPourFonctions, ...tableau2DPourFonctions]; // concaténation des tableaux comme le précédent
console.log(resultatIdentiqueQueConcat);
// La fonction map() permet de refaire un tableau en modifiant ses éléments
// 1er méthode map()
const sweetArray0 = [2, 3, 4, 5, 35];
const sweeterArray0 = sweetArray0.map((sweetItem0) => {
  return sweetItem0 * 2;
});
console.log(sweeterArray0);
// 2eme méthode map()
// Fonction + tableau
const makeSweeter = (sweetItem1) => sweetItem1 * 2;
const sweetArray1 = [2, 3, 4, 5, 35];
const sweeterArray1 = sweetArray1.map(makeSweeter);
console.log(sweeterArray1);
// Méthode filter (filtre les mots de plus de 6 lettres)
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);
// Fonction reduce
let array11 = [11, 12, 13, 14];
// prendre chaque élément aaa bbb et les additionner
let sum = array11.reduce((aaa, bbb) => aaa + bbb);
console.log(sum);
// identique à réduce
console.log(11 + 12 + 13 + 14);
// fonction find() retourne le premier élement trouvé
const array10 = [5, 12, 8, 130, 44];
// findIndex revoie l'index pas l'élément
const found = array10.find((element) => element > 10);
console.log(found);
// Fonction some() Retourne true si un des éléments du tableau est validé par la fonction de test.
function isBig(val) {
  if (val >= 10) {
    return true;
  }
  return false;
}
var tab1 = [10, 15, 9, 25, 0, 50];
var tab2 = [8, Math.PI, 3, 9];
console.log(tab1.some(isBig)); /* Retourne true */
console.log(tab2.some(isBig)); /* Retourne false */
// Every() informe si tous les elements ont la condition demande
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// Flat() ecrase un tableau a multi dimension
testDeFlat = tableau2DPourFonctions.flat();
console.log(testDeFlat);
// sort() tri le tableau par ordre alphabetique ou numérique
// 40 est plus grand que 300 ??
tableauSort = [12, 9, 50, 60, 1, 20, 300, 40, 50, 80, 7, 21, 321, 21];
tableauSort.sort();
console.log(tableauSort);
/*
            ---LES OBJETS - DICTIONNAIRE ---
*/
let maVoiture1 = new Object();
maVoiture1.fabricant = "Ford";
maVoiture1.modele = "Mustang";
maVoiture1.annee = 1969;
// identique
let maVoiture2 = {
  fabricant: "Ford",
  modele: "Mustang",
  annee: 1969,
};
// resultat identique
console.log(maVoiture1);
console.log(maVoiture2);
// Ajouter dans l'object
maVoiture1["compte"] = "@moncompte";
console.log(maVoiture1);
//parcourir l'objet
console.log(maVoiture1.compte);
// Info : Il est pôssible de mettre des fonctions dans l'objet
/*
            --- Les sets ---
*/
//Un objet Set permet de stocker un ensemble de valeurs uniques de n'importe quel type, qu'il s'agisse de valeurs primitives ou d'objets.
const monSet = new Set();
monSet.add(1); // { 1 }
monSet.add(5); // { 1, 5 }
monSet.add(5); // { 1, 5 }
monSet.add("du texte"); // { 1, 5, 'du texte' }
console.log(monSet);
const o = { a: 1, b: 2 };
monSet.add(o);
console.log(monSet);
monSet.add({ a: 1, b: 2 });
console.log(monSet);
/*
            --- Les maps ---
*/
// La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
const array125 = [1, 4, 9, 16];
const map1 = array125.map((x) => x * 2);
console.log(map1);
/*
            --- Les fonctions sur les chaines de caractères ---
*/
let chaineDeCara = "hdklfhdsjkfgdjkmsqghouidqmshbvlkxwcbvkjuzeatgeiudhbvcjklhdbsqgjkfhsdqkljhflkqjsdhgfo";
// les chaines de caractère peuvent se travailler comme un tableau :
let bouDeChaine = chaineDeCara[2];
console.log(bouDeChaine);
