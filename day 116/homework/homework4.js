let passsword;

while (true) {
    passsword = prompt("Enter Password:");

if (passsword.toLowerCase() === "admin123") {
    console.log("Acces Granted")
    break;
} else {
    console.log("wrong passsword, try again")
}
}