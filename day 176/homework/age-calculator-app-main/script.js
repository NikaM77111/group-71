const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const btn = document.getElementById("btn");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const message = document.getElementById("message");


btn.addEventListener("click", calculateAge) 

function calculateAge() {
    message.textContent = "";
    let day = Number(dayInput.value);
    let month = Number(monthInput.value);
    let year = Number(yearInput.value);

    if(day === 0 || month === 0 || year === 0){
        message.textContent = "Please fill all fields"
        return
    }
    if(day > 31 || day < 1){
        message.textContent = "Invalid day"
        return;
    }
    if(month > 12 || month < 1){
        message.textContent = "Invalid month"
        return;
    }

    let birthDate = new Date(year, month, day);
    let today = new Date();
    if(birthDate > today){
        message.textContent = "Birth date cannot be in the future"
        return;
    }
    let ageYears = today.getFullYear() - birthDate.getFullYear()
    let ageMonths = today.getMonth() - birthDate.getMonth()
    let ageDays = today.getDate() - birthDate.getDate()
    if(ageDays < 0){
        ageMonths--;
        ageDays += 30;
    }
    if(ageMonths < 0){
        ageYears--;
        ageMonths += 12;
    }
    years.textContent = ageYears;
    months.textContent = ageMonths;
    days.textContent = ageDays;
}