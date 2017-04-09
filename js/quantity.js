function quantityCtrl(x) {
	var y = document.getElementById("qty").innerHTML;
	if (x === 0) {
		if (y <= 1) {
			// do nothing
		} else {
			y--;
			document.getElementById("qty").innerHTML = y;
			var x = parseInt(document.getElementById("itemPrice").innerHTML);
			document.getElementById("displayPrice").innerHTML = (x * y).toLocaleString();
		}
	} else if (x === 1) {
		if (y < 15) {
			y++;
			document.getElementById("qty").innerHTML = y;
			var x = parseInt(document.getElementById("itemPrice").innerHTML);
			document.getElementById("displayPrice").innerHTML = (x * y).toLocaleString();
		}
	}
}

function validateForm(){
	var x = document.forms["newsletterform"]["Email"].value;
	if (x === ""){
		alert("Please enter your email!")
	}else{
		alert("Thank You Enter Email For Newsletter!");
	}
	
}

function submittedForm(){
	document.getElementById('submitid').value = 'Commented'; 
	document.getElementById('submitid').disabled = true;
	
	
}