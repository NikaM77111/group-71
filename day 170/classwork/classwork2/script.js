// Random country API დან წამოიღეთ მონაცემები. დააკონსოლოგეთ ისეთი ქვეყნების
//  სახელები რომლებიც იწყება ასო "G" ზე გამოიყენეთ async/await და გაჰენდლეთ try/catch-ით
// https://countriesnow.space/api/v0.1/countries/population/cities


async function getCountries() {
    try {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries/population/cities")

        if (!response.ok) {
            throw new Error("Failed to fetch data")
        }

        const data = await response.json()

        data.data.forEach( item => {
            if (item.country[0] === "G") {
                console.log(item.country)
            }
        });
    }
    catch (error) {
        console.log(error)
    }
}

getCountries()