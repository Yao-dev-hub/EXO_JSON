//Création du module pour afficher quelque produit de la page d'accueil

export const ShowAccueilProduit = (accueilPrd) => {
    let div = document.querySelector(".produits");

    if(div){

        accueilPrd.forEach(el => {
            let {id,designation,brief_description,prix,image} = el ;

            div.innerHTML += `
                        <div class="col-lg-3 py-3 ">
                                <div class="row my-1">
                                        <div class="card rounded p-2 ">
                                            <img src="${image}" alt="">
                                                <div class="card-body">
                                                    <h5>${designation}</h5>
                                                    <p>${brief_description}</p>
                                                    <p>Prix : ${prix} fcfa</p>
                                                    <a class="btn btn-danger" href="detail-prd.html?id=${id}">ACHETER</a>
                                                </div>
                                        </div>
                                </div>
                        </div>
        `;
        });

    }
}