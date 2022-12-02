"use strict";

// POO
class Vehicule {
  constructor(marque, modele, annee, nbRoue, nbPorte) {
    this.marque = marque;
    (this.modele = modele), (this.annee = annee), (this.nbRoue = nbRoue), (this.nbPorte = nbPorte);
  }
}

class Moto extends Vehicule {
  constructor(marque, modele, annee) {
    super(marque, modele, annee, 2, 0);
  }
}

class Voiture extends Vehicule {
  constructor(marque, modele, annee) {
    super(marque, modele, annee, 3, 2);
  }
}

let voiture = new Voiture("Renault", "Picasso", "2005");
// affiche le nombre de roues alors qu'on lui à pas indiqué en paramettre car héritage du constructeur
console.log(voiture.nbRoue);

// Le constructeu commence toujours par une majuscule

const Personne = function (nom, prenom, datdDeNaissance) {
  this.nom = nom;
  this.prenom = prenom;
  this.datdDeNaissance = datdDeNaissance;

  // Ne pas faire ceci
  //   this.clalculAge = function () {
  //     console.log(2022 - this.datdDeNaissance);
  //   };
};
const Keke = new Personne("Kevin", "Ozkaraca", 1984);

console.log(Keke);

// Faire ceci
Personne.prototype.calculAge = function () {
  console.log(2022 - this.datdDeNaissance);
};
Keke.calculAge();
console.log(Keke.__proto__ === Personne.prototype); // true
console.log(Personne.prototype.isPrototypeOf(Keke)); // true
