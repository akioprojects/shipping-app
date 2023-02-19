
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
function quest(){
	console.log(username + " is logged in!!!" + alert("welcome") + myhide() + mycontent())
}

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
// for main after update button is pressed
function mymain() {
	var x = document.getElementById("main");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }


// +++++++++++++++++++++BOOTSTRAP CODE
rootUrl = 'http://localhost:9091/';



function retailurelogin() {
	console.log('Charlotte show/hide default');
	document.getElementById('login').style.display ="none";
	document.getElementById('LogOut').style.display ="";
	document.getElementById('lastOrder').style.display ="";
	document.getElementById('basket').style.display ="";
	document.getElementById('Shopping').style.display ="";
	document.getElementById('home').style.display ="none";
	
	
}

function logout(){
	var x = document.getElementById("hide");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
	var x = document.getElementById("content");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function shopping(){
	console.log('Charlotte show/hide shopping');
	document.getElementById('Shopping').style.display ="none";
	document.getElementById('addStock').style.display ="";
	console.log(alert("update button pressed") + mymain())
}
function login(){
	console.log('Charlotte show/hide shopping');
	document.getElementById('Shopping').style.display ="none";
	document.getElementById('addStock').style.display ="";
}

addclothes = function() {

	console.log('addclothes');
	$.ajax({
		type: 'POST',
		contentType: 'application/json',
		url: rootUrl + 'clothes',
		dataType: 'json',
		data: formToJSON(),
		success: function(data, textStatus, jpXHR) {
			alert('Clothes created successfully');
			findAll();

		},

		error: function(jpXHR, textStatus, errorThrown) {

			alert('addClothes error' + textStatus);
		
		}

	});
	}
	function mysearch() {
		var input, filter, table, tr, td, i, txtValue;
		input = document.getElementById("myInput");
		filter = input.value.toUpperCase();
		table = document.getElementById("myTable");
		tr = table.getElementsByTagName("tr");
		for (i = 0; i < tr.length; i++) {
		  td = tr[i].getElementsByTagName("td")[0];
		  if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }       
		}
	  }

// Accordion 
function myAccFunc() {
	var x = document.getElementById("demoAcc");
	if (x.className.indexOf("w3-show") == -1) {
	  x.className += " w3-show";
	} else {
	  x.className = x.className.replace(" w3-show", "");
	}
  }
  
  // Click on the "Jeans" link on page load to open the accordion for demo purposes
  document.getElementById("myBtn").click();
  
  
  // Open and close sidebar
  function w3_open() {
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
	document.getElementById("mySidebar").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
  }