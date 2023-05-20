function photographerFactory(data) {
    const { name, portrait, id, tagline, city, country, price } = data;

    const picture = `assets/photographers/${portrait}`;

    //afficher les informations des photographes dans la mosaque d'accueil
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' )
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const location = document.createElement( 'p' );
        const citation = document.createElement( 'p' );


        a.setAttribute("href",`./photographer.html?user=${id}`);
        img.setAttribute("src", picture)
        location.setAttribute("class", "location")
        citation.setAttribute("class", "citation")


        h2.textContent = name;
        location.textContent = `${city}, ${country}`;
        citation.textContent = `${tagline}`;




        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(citation);


        return (a);
    }

    //afficher les informations des photographes dans le header de profil 
    function getHeaderUserDOM(){
        const container = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        const h1 = document.createElement( 'h1' );
        const h2 = document.createElement( 'h2' );
        const p = document.createElement( 'p' );

        container.setAttribute("class", "header-container")
        img.setAttribute("src", picture)
        p.setAttribute("class", 'citation')

        h1.textContent = name;
        h2.innerHTML = `${city}, ${country}`;
        p.textContent = tagline;

        container.appendChild(img)
        container.appendChild(h1)
        container.appendChild(h2)
        container.appendChild(p)

        return container
    }
    return { name, picture, getUserCardDOM, getHeaderUserDOM }
}