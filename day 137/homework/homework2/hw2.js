let images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIS-IA1uAUv0kNTI_S9QwO6ZwXQhDJh5GBA&s",
    "https://i.pinimg.com/736x/21/67/17/21671739d7ab8cda661c47af6880f86a.jpg",
    "https://imgc.allpostersimages.com/img/posters/the-silence-of-the-lambs-1991-directed-by-jonathan-demme_u-L-Q1H92350.jpg",
    "https://multimedia2018.kinowelt.de/boc/charlieunddieschokoladenfabrik/plakat_highlight/CharlieunddieSchokoladenfabrik_DE_A3-72dpi_webdetail_300.jpg"
]

let img = document.getElementById("slider-image")
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let title = document.getElementById("title")

let index = 0;

function nextSlide() {
    index++;

    if(index >= images.length){
        index = 0;
        }
    img.src = images[index]
}

function prevSlide() {
    index--;

    if(index < 0){
        index = images.length - 1;
        }
    img.src = images[index]
}

next.addEventListener("click", nextSlide)
prev.addEventListener("click", prevSlide)