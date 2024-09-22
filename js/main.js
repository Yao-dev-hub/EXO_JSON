//Importation du menu de ntre site web dans main

import { AfficheMenu } from "./menu.js";


// importation du tableau listProduit

import { listProduits } from "./liste_prd.js";

// importation de la liste des produits dans la page accueil

import { accueilPrd } from "./accueil-prd.js"

// Importation de la fonction permettant d'afficher quelque produit sur la page accueil

import {ShowAccueilProduit} from "./show-prd-accueil.js";


// Importationdu module affichant les détails de chaque produit
import { ShowDetailProduit } from "./show-prd-detail.js";








AfficheMenu();
ShowAccueilProduit(accueilPrd);
console.log(ShowDetailProduit(accueilPrd));
