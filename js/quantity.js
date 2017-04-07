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
function message(z){
	if(z === 0){
		
		alert("Thank You Enter Email For Newsletter!");
	}
	
}