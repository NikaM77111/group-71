// Date ობიექტის, setInterval-ის და clearInterval-ის გამოყენებით შექმენით პროგრამა, რომელიც ყოველ 2 წამში საიტზე 
// ვიზუალურად გამოიტანს ამჟამინდელ თარიღს (წამებში, როგორც გაკვეძთილზე გავაკეთეთ). Interval-ი უნდა გაჩერდეთ 8 წამის შემდეგ.


const dateBox = document.getElementById("dateBox")

function mytimer(){
    const date = Date.now();

    dateBox.textContent = date
}

const myInterval = setInterval(mytimer, 2000)

function myStopper(){
    clearInterval(myInterval)
    console.log("Timer stopped!")
    dateBox.textContent = ("Timer stopped!")
}

setTimeout(myStopper, 8000)