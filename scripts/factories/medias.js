function mediasFactory(data){
    const { id, photographerId, title, video, date, likes, price, image } = data;
    const picture = `assets/images/images/${image}`;
    const movie = `assets/images/images/${video}`;


    function imageDisplay(){
        const card = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('span');
        const likes = document.createElement('span');
        const heart = document.createElement('i');

        img.setAttribute("src", picture);

        console.log("image")
    }
    function videoDisplay(){
        const card = document.createElement('div');
        const videoContainer = document.createElement('video');
        const video = document.createElement('source');
        const titre = document.createElement('span');
        const jaime = document.createElement('span');
        const heart = document.createElement('i');

        videoContainer.setAttribute("width", 320);
        videoContainer.setAttribute("height", 240);
        video.setAttribute("src", movie);
        
        titre.textContent = title
        jaime.textContent = likes
        heart.setAttribute("id",`${id}`)

        console.log("video")

    }
    
    if (image){
        return imageDisplay()
    } else if (video){
        return videoDisplay()
    }


}