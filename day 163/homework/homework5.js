//5) შექმენი ცვლადი progress = 0. ყოველ 200 მილიწამში გაზარდე ის 5-ით და დაბეჭდე 
// (მაგ: "Loading: 5%"). როცა 100%-ს მიაღწევს, დაწერე "Done!" და გააჩერე.



let progress = 0;

let loading = setInterval(() => {
progress += 5;

console.log(`Loading: ${progress}%`);

if (progress >= 100) {
    console.log("Done!");
    clearInterval(loading);
}
}, 200);