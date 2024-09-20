// Exercice 1

const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");

celsiusInput.addEventListener("keyup", () => {
    if (!celsiusInput.value) return fahrenheitInput.value = "";

    const value = Number(celsiusInput.value || 0);
    fahrenheitInput.value = value * 9 / 5 + 32;
});

fahrenheitInput.addEventListener("keyup", () => {
    if (!fahrenheitInput.value) return celsiusInput.value = "";

    const value = Number(fahrenheitInput.value);
    celsiusInput.value = (value - 32) / (9 / 5);
});


// Exercice 2

const longueurInput = document.getElementById("longueur");
const largeurInput = document.getElementById("largeur");
const aireElem = document.getElementById("aire");

function updateAire() {
    if (longueurInput.value && largeurInput.value) {
        aireElem.textContent = Number(longueurInput.value) * Number(largeurInput.value);
    } else {
        aireElem.textContent = "";
    }
}

longueurInput.addEventListener("keyup", updateAire);
largeurInput.addEventListener("keyup", updateAire);


// Exercice 3

const prenomInput = document.getElementById("prenom");
const nomInput = document.getElementById("nom");
const nomCompletElem = document.getElementById("nom_complet");

function updateNom() {
    nomCompletElem.textContent = `${prenomInput.value} ${nomInput.value}`;
}

prenomInput.addEventListener("keyup", updateNom);
nomInput.addEventListener("keyup", updateNom);


// Exercice 4

const montantHTInput = document.getElementById("montant_ht");
const montantTVAElem = document.getElementById("montant_tva");
const montantTTCElem = document.getElementById("montant_ttc");

// 20 %
const montantTVA = 0.2;

montantTVAElem.textContent = `${montantTVA * 100} %`;

montantHTInput.addEventListener("keyup", () => {
    if (!montantHTInput.value) return montantTTCElem.value = "";

    const montantHT = Number(montantHTInput.value);

    montantTTCElem.textContent = montantHT + montantHT * montantTVA;
});


// Exercice 5

document.getElementById("resultat").textContent = ((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true);


// Exercice 6

const poidsInput = document.getElementById("poids");
const tailleInput = document.getElementById("taille");
const IMCElem = document.getElementById("imc");

function updateIMC() {
    if (poidsInput.value && tailleInput.value) {
        const poids = Number(poidsInput.value),
              taille = Number(tailleInput.value),
              imc = poids / (taille * taille);

        IMCElem.textContent = imc.toFixed(2);
    } else {
        IMCElem.textContent = "";
    }
}

poidsInput.addEventListener("keyup", updateIMC);
tailleInput.addEventListener("keyup", updateIMC);


// Exercice 7

const montantMinElem = document.getElementById("montant_min");
const montantTotalInput = document.getElementById("montant_total");
const livraisonElem = document.getElementById("livraison");

// constante du montant minimum pour la livraison gratuite
const montantMin = 20;

montantMinElem.textContent = `${montantMin} €`;

montantTotalInput.addEventListener("keyup", () => {
    if (!montantTotalInput.value) return livraisonElem.textContent = "";

    const montantTotal = Number(montantTotalInput.value);

    livraisonElem.textContent = montantTotal >= montantMin ? "Livraison gratuite !" : `Frais de livraison : ${montantTotal} euros`;
});


// Exercice 8

const nombreBinaireInput = document.getElementById("nombre_binaire");
const nombreEntierElem = document.getElementById("nombre_entier");

nombreBinaireInput.addEventListener("keyup", () => {
    if (!nombreBinaireInput.value) return nombreEntierElem.textContent = "";

    const nombreEntier = parseInt(nombreBinaireInput.value, 2);

    nombreEntierElem.textContent = nombreEntier;
});