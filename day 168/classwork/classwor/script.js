//1) წამოიღეთ user-ები Promise-ებით. (გაჰენდლეთ then & catch-ით) 
// https://jsonplaceholder.typicode.com/users

// function fetchAPI(API){
//     return fetch(API)
//         .then((data) => {
//             console.log(data.json())
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//         console.log(fetchAPI)
// }

// fetchAPI("https://jsonplaceholder.typicode.com/users")


// 2) წამოიღეთ post-ები Async/Await. (გაჰენდვლის გარეშე)
//https://jsonplaceholder.typicode.com/posts

async function fetchAPI(API){
    let result = await fetch(API)
    let data = await result.json()
    console.log(data)
}

fetchAPI("https://jsonplaceholder.typicode.com/posts")