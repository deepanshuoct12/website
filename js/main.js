const activeImage = document.querySelector(".active-work img");
const images = document.querySelectorAll(".img-card img");
const activeDesc = document.querySelector(".active-img-desc");
// event listner for each image

images.forEach(image =>(image.addEventListener("click",changeImage)));

function changeImage(e){
    activeImage.src=e.target.src;
    activeDesc.innerHTML=e.target.nextElementSibling.innerText;
}