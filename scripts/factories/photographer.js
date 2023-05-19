function photographerFactory(data) {
    const { name, portrait, id, tagline, city, country, price } = data;

    const picture = `assets/photographers/${portrait}`;

    //afficher les informations des photographes dans la mosaque d'accueil
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' )
        a.setAttribute("href",`./photographer.html?user=${id}`);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        return (a);
    }

    //afficher les informations des photographes dans le header de profil 
    function getHeaderUserDOM(){

    }
    return { name, picture, getUserCardDOM }
}