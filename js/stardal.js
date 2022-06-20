const images = document.querySelectorAll(".img-roww img");
images.forEach((item) => item.addEventListener("click", handleZoomImage));
function handleZoomImage(event) {
    console.log(event.target);
    const image = event.target.getAttribute("src");
    const template = `<div class="lightbox">
    <div class="lightbox-content">
    <i class="fa-solid fa-angle-left lightbox-prev"></i>
    <img src="${image}" alt="" class="lightbox-image">
    <i class="fa-solid fa-angle-right lightbox-next"></i>

</div>
</div>`;
    document.body.insertAdjacentHTML("beforeend", template);
}
let index = 0;
document.body.addEventListener("click", function (event) {
    const lightImage = document.querySelector(".lightbox-image");
    let lightSrc = "";
    if (event.target.matches(".lightbox")) {
        event.target.parentNode.removeChild(event.target);
    } else if ( event.target.matches(".lightbox-next")) {
        lightSrc = lightImage.getAttribute("src");
        index = [...images].findIndex(
            (item) => item.getAttribute("src") === lightSrc
        );
        index = index + 1;
        if (index > images.length - 1) {
            index = 0;
        }
        const newSrc = [...images][index].getAttribute("src");
        lightImage.setAttribute("src", newSrc);
    }else if (event.target.matches(".lightbox-prev")){
        lightSrc = lightImage.getAttribute("src");
        index = [...images].findIndex(
            (item) => item.getAttribute("src") === lightSrc
        );
        index = index - 1;
        if (index < 0) {
            index = images.length - 1;
        }
        const newSrc = [...images][index].getAttribute("src");
        lightImage.setAttribute("src", newSrc);

    }

});