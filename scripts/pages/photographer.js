function getParamValue(param){
    // Récupère le paramètre dans l'URL
    const params = new URLSearchParams(window.location.search);
    const valueOfParam = params.get(param)
    return valueOfParam
}

function getParams() {
    // Récupère la valeur du paramètre ID lié au photographe choisi
    const params = getParamValue('user')
    return params
}

async function getDatas() {
    // Récupère les données photographes
    const data = await fetch('/data/photographers.json')
    .then(response => response.json())
    .then(data => data)
    // Retourner le tableau photographers seulement une fois
    return data
}

async function getProfile(){
    //Utilise la valeur du paramètre "ID" dans l'url et repère l'ID identique dans les datas photographes pour
    //ressortir les données
    const photographHeader = document.querySelector(".photograph-header");
    if (photographHeader){
        const params = getParams()
        const { photographers } = await getDatas()
        const profile = photographers.filter(photographer => photographer.id == params)
        return profile
    }
}

async function displayHeader(data){
    const photographHeader = document.querySelector(".photograph-header");

    data.forEach((media) => {
        const headerModel = photographerFactory(media);
        const headerDOM = headerModel.getHeaderUserDOM();
        photographHeader.appendChild(headerDOM); 
        return headerDOM
    });
}

async function getMedias(){
    //Utilise la valeur du paramètre "ID" dans l'url et repère l'ID identique dans les datas photographes pour
    //ressortir le profil à afficher
    const mediaContainer = document.querySelector(".mosaic-container");
    if (mediaContainer){
        const params = getParams()
        const { media } = await getDatas()
        const medias = media.filter(media => media.photographerId == params)
        return medias
    }
}

async function displayGallery(data) {
    const mediaSection = document.querySelector(".mosaic-container");

    data.forEach((media) => {
        const mediaModel = mediasFactory(media);
        const mediaCardDOM = mediaModel.displayMedias();
        mediaSection.appendChild(mediaCardDOM); 
        return mediaCardDOM
    });
};



async function initmedias() {
    // Récupère les datas des photographes
    const media = await getMedias();
    const user = await getProfile();
    console.log(user)
    console.log(media)

    displayGallery(media);
    displayHeader(user)
};

initmedias()


