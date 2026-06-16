// 5) დაწერე ასინქრონული ფუნქცია (async/await), რომელიც წამოიღებს პოსტებს ლინკიდან: https://jsonplaceholder.typicode.com/posts.
// გაფილტრე მიღებული მასივი და კონსოლში დაბეჭდე მხოლოდ ის პოსტები, რომელთა userId არის 10-სა და 30-ს შორის.


async function getPosts() {
try {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    const posts = await response.json();

    const filteredPosts = posts.filter(
        post => post.userId >= 10 && post.userId <= 30
    );

    console.log(filteredPosts);

} catch (error) {
    console.log(error);
}
}

getPosts();