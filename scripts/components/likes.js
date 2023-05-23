const likeBtn = document.querySelector('.fa-heart-o')

likeBtn.onclick= ( ) => {
    localStorage.setItem("likeRate")
}