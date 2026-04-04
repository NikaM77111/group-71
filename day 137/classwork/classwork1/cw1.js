let photos = [
    "https://de.cinefile.ch/image/scene400/content/images/c1nef1l32012a37c-8ef3-43cc-a9c6-435ccaa2567d.jpg",
    "https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_1440:810,f_auto,q_auto,g_auto/shape/cover/sport/558094-universal-pictures-home-ent-dbd825712aadfaa5df6f69825a258cac.jpg",
    "https://d13jj08vfqimqg.cloudfront.net/uploads/article/header_marquee/2781/large_abronxtale.jpg",
    "https://www.disappointmentmedia.com/uploads/4/7/9/1/47919861/a-bronx-tale-2_orig.jpeg",
    "https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg"
]

let prev = document.getElementById("prev")
let next = document.getElementById("next")
let img = document.getElementById("slider-image")


let index = 0;

next.addEventListener("click", () => {
    index++;

    if(index >= photos.length) {
        index = 0;
    }
    img.src = photos[index]
})

prev.addEventListener("click", () => {
    index--;

    if(index < 0){
        index = photos.length -1;
    }
    img.src = photos[index]
})

