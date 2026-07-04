const testimonials = document.querySelectorAll(".testimonial");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let current = 0;

function showSlide(index) {
    testimonials[current].classList.remove("active");
    current = index;
    testimonials[current].classList.add("active");
}


nextBtn.addEventListener("click", function() {
    if (current < testimonials.length - 1) {
        showSlide(current + 1);
    } else {
        showSlide(0);
    }
});

prevBtn.addEventListener("click", function() {
    if (current > 0) {
        showSlide(current - 1);
    } else {
        showSlide(testimonials.length - 1);
    }
});