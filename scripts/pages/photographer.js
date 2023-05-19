const getParamValue = (param) => {
    const params = new URLSearchParams(window.location.search);
    const valueOfParam = params.get(param)
    return valueOfParam
}

function getParams() {
    // Récupère les paramètres dans l'url afin d'afficher les données sur un photographes
    const params = getParamValue('user')
    return params
}

async function getDatas() {
    // Récupère fichier photographes
    const data = await fetch('/data/photographers.json')
    .then(response => response.json())
    .then(data => data)
    // Retourner les données une fois
    return data
}

//header user page
async function getProfile(){
    //Utilise le paramètre dans l'url et repère l'id identique dans les datas photographes
    const photographHeader = document.querySelector(".photograph-header");
    if (photographHeader){
        const params = getParams()
        const { photographers } = await getDatas()
        const profile = photographers.filter(photographer => photographer.id == params)
        console.log(profile)
        return profile
    }
}

async function getMedias(){
    //Utilise le paramètre dans l'url et repère l'id identique dans les datas photographes
    const mosaicContainer = document.querySelector(".mosaic-container");
    if (mosaicContainer){
        const params = getParams()
        const { media } = await getDatas()
        const medias = media.filter(media => media.id == params)
        console.log(medias)
        return medias
    }
}

//header user page /w mediasFactory and photographerFactory
async function displayUserData(){
    const userModel = photographerFactory(data)
    const userCardDOM = userModel.getUserCardDOM(data)
    const user = await getProfile()
    const header = userCardDOM(user)
    const mosaic
    return {header} 
}
//mosaic
getProfile()