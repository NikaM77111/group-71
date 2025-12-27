let username = "";

if (!username) {
  console.log("Username is required");
} else if (username.length < 4) {
  console.log("Username is too short");
} else {
  console.log("Username accepted");
}
