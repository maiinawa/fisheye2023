function photographerFactory(data) {
  const { name, portrait, id, tagline, city, country, price } = data;

  const picture = `assets/photographers/${portrait}`;

  //afficher les informations des photographes dans la mosaque d'accueil
  function getUserCardDOM() {
    const article = document.createElement("article");
    const a = document.createElement("a");
    a.setAttribute("href", `./photographer.html?user=${id}`);
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    a.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    return a;
  }

  function getUserTags() {
    const li = document.createElement("li");
    tagline.map((tag) => (li.innerHTML = `#${tag}`));
    return li;
  }
  //afficher les informations des photographes dans le header de profil
  function getHeaderUserDOM() {
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const ul = document.createElement("ul");

    img.setAttribute("src", picture);
    h1.textContent = name;
    h2.innerHTML = `${city}, ${country}`;
    p.textContent = tagline;

    headerContainer.appendChild(h1);
    headerContainer.appendChild(h2);
    headerContainer.appendChild(p);
    headerContainer.appendChild(ul);
    ul.appendChild(getUserTags());
  }
  return { name, picture, getUserCardDOM, getHeaderUserDOM };
}
