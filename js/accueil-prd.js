// Importation de la liste des produits dans accueil

export let accueilPrd = [
    { 
        id: 1, 
        designation: "Réfrigérateur", 
        brief_description: "Réfrigérateur à grande capacité", 
        description: "Réfrigérateur de 300L avec congélateur intégré, système de dégivrage automatique.", 
        prix: 800, 
        quantite_initiale: 10, 
        quantite_achetee: 0, 
        quantite_restante: 10, 
        reduction: 10, 
        montant_acquis: 0,
        image : "./images/prd1.webp",
    }, 
    { 
        id: 2, 
        designation: "Lave-linge", 
        brief_description: "Lave-linge à chargement frontal", 
        description: "Capacité de 8kg, plusieurs programmes de lavage, efficacité énergétique A+++.", 
        prix: 500, 
        quantite_initiale: 15, 
        quantite_achetee: 0, 
        quantite_restante: 15, 
        reduction: 5, 
        montant_acquis: 0,
        image : "images/prd2.webp",
    }, 
    { 
        id: 3, 
        designation: "Micro-ondes", 
        brief_description: "Micro-ondes avec fonction grill", 
        description: "Micro-ondes de 25L, grill intégré, multiples fonctions de cuisson.", 
        prix: 200, 
        quantite_initiale: 20, 
        quantite_achetee: 0, 
        quantite_restante: 20, 
        reduction: 0, 
        montant_acquis: 0,
        image : "images/prd3.jpg",
    },
    { 
        id: 4, 
        designation: "Aspirateur", 
        brief_description: "Aspirateur sans sac", 
        description: "Aspirateur sans sac, filtre HEPA, idéal pour les sols durs et les tapis.", 
        prix: 150, 
        quantite_initiale: 12, 
        quantite_achetee: 0, 
        quantite_restante: 12, 
        reduction: 5, 
        montant_acquis : 0,
        image : "./images/prd4.jpg",
    }
]