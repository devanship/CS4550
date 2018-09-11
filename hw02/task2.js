function currentValue() {
	var x = document.getElementById("heading").innerHTML;
	alert("Current value is: " + x);
}

function increment() {
	var currVal = document.getElementById("heading").innerHTML;
	document.getElementById("heading").innerHTML = Number(currVal) + 1;
}

//https://www.w3schools.com/jsref/prop_doc_body.asp
function append() {
	var currVal = document.getElementById("heading").innerHTML;
	var para = document.createElement("p");

	para.append(currVal);

	document.body.append(para);
}