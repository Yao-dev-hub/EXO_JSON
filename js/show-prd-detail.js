//Moddule de détails de chaque produit

export const ShowDetailProduit = (accueilPrd) => {

    let div = document.querySelector('.detail');

        //Récupérons les paramètres de l'url du navigateur
        let id = new URLSearchParams(window.location.search).get("id");

    if(div){


        let details = accueilPrd.find(el => {
            if(Number(el.id) === Number(id)){
                
                let {designation,brief_description,description,prix,quantite_restante,reduction,montant_acquis,image} = el;

                div.innerHTML = `
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <div class="card">
                                                <img src="${image}" alt="" srcset="">
                                            </div>
                                        </div>
                                        <div class="col-lg-7">
                                            <div class="row">
                                                <h2>${designation}</h2>
                                                <p>Catégorie : Electromenagers</p>
                                                <p>${brief_description}</p>
                                                <p>${description}</p>
                                                <p>prix : ${prix}</p>
                                                <p>Quantité restante : ${quantite_restante}</p>
                                                <p>reduction : ${reduction}</p>
                                            </div>
                                            <div class="row my-2">
                                                    <button type="button" class="btn btn-danger my-2 rounded"><a href="inscription.html?id=${id}">ACHETER</a></button>
                                                    <button type="button" class="btn btn-danger my-2 rounded"><a href="inscription.html?id=${id}">AJOUT AJOUT AU PANIER</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                `;

            }
        });
    }
}
