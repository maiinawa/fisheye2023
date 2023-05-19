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

async function getUsers() {
    // Récupère fichier photographes
    const data = await fetch('/data/photographers.json')
    .then(response => response.json())
    .then(data => data.photographers)
    // Retourner le tableau photographers seulement une fois
    return data
}

async function getProfile(){
    //Utilise le paramètre dans l'url et repère l'id identique dans les datas photographes
    const photographHeader = document.querySelector(".photograph-header");
    if (photographHeader){
        const params = getParams()
        const users = await getUsers()
        const profile = users.filter(photographer => photographer.id == params)
        console.log(profile)
        return profile
    }
}

getProfile()