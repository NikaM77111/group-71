let headings = document.getElementsByClassName('heading');


for (let i = 0; i < headings.length; i++) {
    let heading = headings[i];

    console.log('Text Content:', heading.textContent); 
    console.log('Parent Node:', heading.parentNode); 

    heading.style.color = "blue"; 
}