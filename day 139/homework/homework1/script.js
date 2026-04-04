document.getElementById("registrationForm").addEventListener("submit", function(e){
  e.preventDefault();


  let old = document.getElementsByClassName("error");
  while(old.length > 0){
    old[0].remove();
  }


  let name = document.getElementById("name");
  let pass = document.getElementById("password");
  let confirm = document.getElementById("confirmPassword");


  if(name.value.length < 5) {
    let p = document.createElement("p");
    p.innerText = "Name & Surname should be at least 5 letters";
    p.style.color = "red";
    p.className = "error";
    name.after(p);
  }


  if(pass.value != confirm.value){
    let p1 = document.createElement("p");
    p1.innerText = "Passwords do not match";
    p1.style.color = "red";
    p1.className = "error";
    pass.after(p1);

    let p2 = document.createElement("p");
    p2.innerText = "Passwords do not match";
    p2.style.color = "red";
    p2.className = "error";
    confirm.after(p2);
  }
});
