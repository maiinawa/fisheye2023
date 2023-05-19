function mediasFactory(data){
    const { id, photographerId, title, video, date, likes, price, image } = data;


    function imageDisplay(){
        console.log("image")
    }
    function videoDisplay(){
        console.log("video")

    }
    
    if (image){
        return imageDisplay()
    } else if (video){
        return videoDisplay()
    }


}