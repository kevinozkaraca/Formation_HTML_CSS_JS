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
