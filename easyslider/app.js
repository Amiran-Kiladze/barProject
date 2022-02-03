const img = document.querySelector(".sliderimg")


let i = 0;
const images = [];
let time = 3000;

images[0] = "easyslider/slides/1.jpg";
images[1] = "easyslider/slides/2.jpg";
images[2] = "easyslider/slides/3.jpg";
images[3] = "easyslider/slides/4.jpg";


function changeImg () {
    img.src = images[i];

    if (i <images.length - 1) {
        i++
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);

}

window.onload = changeImg