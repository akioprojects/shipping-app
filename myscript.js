
var objPeople = [
	{ // Object @ 0 index
		username: "cmk",
		password: "love"
	},
	{ // Object @ 1 index
		username: "admin",
		password: "admin"
	},
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!" + alert("welcome") + myhide() + mycontent())
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
	alert("incorrect username or password")
}
// for hiding page before log in 
function myhide() {
	var x = document.getElementById("hide");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

// for hiding page before log in 
function mycontent() {
	var x = document.getElementById("content");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }