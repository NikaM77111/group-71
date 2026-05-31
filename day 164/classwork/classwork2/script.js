let images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkY4rUFXwE-2YFStWTGYxcFjeJPI6KfL4YDQ&s",
    "https://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwo1xsLO1tSCKn7r2gfggm6YQACh3yaAzWg&s",
]

const sliderImage = document.getElementById("slider-image")

let index = 0;

setInterval(() => {
    index++;

    if(index >= images.length) {
        index = 0
    } 
    sliderImage.src = images[index]
}, 4000)