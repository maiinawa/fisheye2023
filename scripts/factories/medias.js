function mediasFactory(data){
    const { id, photographerId, title, video, date, likes, price, image } = data;
    const picture = `assets/images/images/${photographerId}/${image}`;
    const movie = `assets/images/images/${photographerId}/${video}`;

    function displayMedias(){
        if (image){
            const card = document.createElement('div');
            const img = document.createElement('img');
            const titre = document.createElement('span');
            const heart = document.createElement('i');
            const jaime = document.createElement('span');

            img.setAttribute("src", picture);
            jaime.setAttribute("id", id);
            heart.setAttribute("class", "fa fa-heart-o");

            titre.textContent = title
            jaime.textContent = likes
            heart.setAttribute("id",`${id}`)
                
            card.appendChild(img)
            card.appendChild(titre)
            card.appendChild(jaime)
            card.appendChild(heart)
            return card
    
        } else if (video){
            const card = document.createElement('div');
            const videoContainer = document.createElement('video');
            const titre = document.createElement('span');
            const jaime = document.createElement('span');
            const heart = document.createElement('i');
    
            videoContainer.setAttribute("width", 320);
            videoContainer.setAttribute("height", 240);
            videoContainer.setAttribute("src", movie);
            heart.setAttribute("class", "fa fa-heart-o");
            jaime.setAttribute("id", id);
            
            titre.textContent = title
            jaime.textContent = likes
            heart.setAttribute("id",`${id}`)
                
            card.appendChild(videoContainer)
            card.appendChild(titre)
            card.appendChild(jaime)
            card.appendChild(heart)

            return card
        }
    }
    //editer via params URL sort=title
    function sortByDate(a,b){
        return new Date(a.date).valueOf() - new Date(b.date).valueOf(); //timestamps    }
    }
    
    function sortByTitle(a,b){
        if (a.title > b.title) {
            return 1;
          } else if (b.title > a.title) {
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

    function addALike(){   
    }

    function lightbox(){

    }
    
    return {id, photographerId, displayMedias, sortByDate, sortByTitle, sortByLikes}


}