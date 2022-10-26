console.log('test en console pour vérifier la connexion au  fichier html :');
console.log('Ho yeah !');

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
console.log('-- Variable déclarée à = 1 -- resultat :');
console.log(maVariable1);
// changer une valeur pas besoin de let ou var (impossble pour const) :
console.log('-- Variable modifiée à = 3 -- resultat :');
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
let maVariableString = '123';
let maVariableStringPX = '123px';
let maVariableStringVirgule = '123.123';

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
console.log('-- Recupération des number dans un string (123px) : ');
console.log(parseInt(maVariableStringPX));
console.log('-- couper un number à la virgule (123.123) : ');
console.log(parseInt(maVariableNumber2));
console.log("-- convertir un string en number à la virgule '123.123' : ");
console.log(parseFloat(maVariableStringVirgule));
/*
            ---LES KEYWORDS - mots réservé à javascript---
*/
//Exemple
console.log('-- Exemple de keywords en javascript : ');
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
console.log('Calcul simple avec +, -, /, * et ** ');
console.log('10 + 10 :');
console.log(10 + 10);
console.log('10 - 10 :');
console.log(10 - 10);
console.log('100 ** 10 :');
console.log(100 / 10);
console.log('10 * 10 :');
console.log(10 * 10);
console.log('10 ** 10 :');
console.log(10 ** 10);
/*
            ---ASSIGNEMENT---
*/
let maVariable10 = 10;
console.log('10 += 1 :');
console.log((maVariable10 += 1));
console.log('10 -= 10 :');
console.log((maVariable10 -= 10));
console.log('10 *= :');
console.log((maVariable10 *= 100));
console.log('++100');
console.log(++maVariable10);
console.log('--101');
console.log(--maVariable10);
/*
            ---LES CONDITIONS---
*/
let maCondition1 = true;
let maCondition2 = 4;
let maCondition3 = 2;
console.log('Condition valable ? : ');
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
