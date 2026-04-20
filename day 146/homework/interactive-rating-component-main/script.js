const buttons = document.querySelectorAll(".rate");
const submitBtn = document.getElementById("submit-btn");
const ratingState = document.getElementById("rating-state");
const thankState = document.getElementById("thank-state");
const selectedText = document.getElementById("selected-rating");

let selectedRating = 0;

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].className = "rate";
        }

        buttons[i].className = "rate active";
        selectedRating = buttons[i].textContent;
    });
}

submitBtn.addEventListener("click", function () {

    if (selectedRating === 0 || selectedRating === "") {
        return;
    }

    selectedText.textContent = "You selected " + selectedRating + " out of 5";

    ratingState.style.display = "none";
    thankState.style.display = "block";
});
