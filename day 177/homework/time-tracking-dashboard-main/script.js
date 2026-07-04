const cardsContainer = document.getElementById("cards");
const tabs = document.querySelectorAll(".tab");

let dataStore = [];
let activeType = "weekly";

async function loadData() {
try {
    const res = await fetch("./data.json");
    dataStore = await res.json();
    renderCards();
} catch (error) {
    console.log("Error loading data:", error);
    cardsContainer.innerHTML = "<p>Failed to load dashboard</p>";
}
}


function renderCards() {
cardsContainer.innerHTML = "";
  dataStore.forEach(item => {
    const time = item.timeframes[activeType];
    let iconName = "";
    if (item.title === "Work") iconName = "work";
    if (item.title === "Play") iconName = "play";
    if (item.title === "Study") iconName = "study";
    if (item.title === "Exercise") iconName = "exercise";
    if (item.title === "Social") iconName = "social";
    if (item.title === "Self Care") iconName = "self-care";

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class="card-header ${iconName}">
        <img src="assets/icon-${iconName}.svg" alt="">
    </div>

    <div class="card-body">
        <div class="card-title">
    <span>${item.title}</span>
    <span>...</span>
        </div>
        <div class="time">${time.current}hrs</div>
        <div class="prev">Last ${activeType} - ${time.previous}hrs</div>
    </div>
    `;
    cardsContainer.appendChild(card);
});
}

tabs.forEach(tab => {  
    tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    activeType = tab.dataset.type;
    renderCards();
  });
});

loadData();