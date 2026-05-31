// 5) წარმოიდგინე, რომ საიტს სჭირდება ყოველ 3 წამში შეამოწმოს, არის თუ არა ახლა სამუშაო დრო. 
// setInterval-ში Date ობიექტის გამოყენებით გაიგე მიმდინარე საათი (getHours()). თუ საათი არის 
// 9:00-დან 18:00-მდე, ეკრანზე დაწერე "The site is active". მაგრამ,
//  თუ საათმა გადააჭარბა 18:00-ს, ეკრანზე გამოიტანე "The working hours are over on this site." და გააჩერე ინტერვალი


const workChecker = setInterval(() => {
const now = new Date();
const hour = now.getHours();

if (hour >= 9 && hour <= 18) {
    console.log("The site is active");
} else if (hour > 18) {
    console.log("The working hours are over on this site.");
    clearInterval(workChecker);
}
}, 3000);