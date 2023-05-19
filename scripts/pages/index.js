    async function getPhotographers() {

        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        const response =  await fetch("data/photographers.json")
        if(response.status === 404 || response.status === 400){
            console.log('not found')
        } else {
            const data = await response.json()
            return data
        }
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
