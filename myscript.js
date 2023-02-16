
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
	console.log('Charlotte show/hide logout');
	document.getElementById('LogOut').style.display ="none";
	document.getElementById('lastOrder').style.display ="none";
	document.getElementById('basket').style.display ="none";
	document.getElementById('Shopping').style.display ="none";
	document.getElementById('home').style.display ="";
	document.getElementById('login').style.display ="";
	
}

function shopping(){
	console.log('Charlotte show/hide shopping');
	document.getElementById('Shopping').style.display ="none";
	document.getElementById('addStock').style.display ="";
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