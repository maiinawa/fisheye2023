//ecoute évènement clique sur select
//set active l'element select au clic
//si ID actif, faire filtre array media lié à ID


function sortByDate(a,b){
    return new Date(a.date).valueOf() - new Date(b.date).valueOf(); //timestamps    }
}

function sortByTitle(a,b){
    if (a.title > b.title) {
        return 1;
      } else if (b.name > a.name) {
        return -1;
      } else {
        return 0;
      }
}
function sortByLikes(a,b){
    if (a.likes > b.likes) {
        return 1;
      } else if (b.likes > a.likes) {
        return -1;
      } else {
        return 0;
      }
}
const select = document.querySelector('select');
select.addEventListener('change', function() {s
    const mediaModel = mediasFactory(media);
    const sortByDate = mediaModel.sortDate();
    const media = await getMedias();

    const selectedValue = [].filter
        .call(select.options, option => option.selected)
        .map(option => option.value);
    if(selectedValue == 'date'){
        console.log('este')
    };
    return selectedValue
});