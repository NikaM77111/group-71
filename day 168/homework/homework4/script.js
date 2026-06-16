// 4) გამოიყენე Dog API (https://dog.ceo/api/breeds/image/random).
// წამოიღე სურათის ლინკი, შექმენი HTML-ში <img> თეგი და ეს ლინკი ჩაუსვი src ატრიბუტად, რომ სურათი ეკრანზე გამოჩნდეს.


fetch("https://dog.ceo/api/breeds/image/random")

.then(response => response.json())
.then(data => {
    const img = document.getElementById("dogImage");
    img.src = data.message;
})
.catch(error => console.log(error));

