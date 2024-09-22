// Déclaration du module contenat le menu de ntre site web

export const AfficheMenu = () => {
    let menu = document.querySelector(".header");

    //Tester si le div existe 
    if(menu) {
        menu.innerHTML = `
                  <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
                        <div class="container-fluid">
                        <a class="navbar-brand" href="/">ElectroShop</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarColor01">
                            <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="index.html">ACCUEIL
                                <span class="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="commande.html">ACHAT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="detail-prd.html">DETAILS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="inventaire.html">INVENTAIRE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="inscription.html">INSCRIPTION</a>
                            </li>
                            </ul>
                            <form class="d-flex">
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit"><a class="nav-link" href="connexion.html">CONNEXION</a></button>
                            </form>
                        </div>
                        </div>
                    </nav>
        `
    }
} 