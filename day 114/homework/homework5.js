let series = ["breaking bad", "Peaky blinders", "stranger things", "Prison Break", "Sopranos"]

console.log(series.at(0))
console.log(series.at(-1))

series.splice(4, 1); // ვშლით მეოთხე ინდექსს
series.splice(2, 1); // ვშლით მეორე ინდექსს

console.log(series)