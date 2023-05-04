function calculate() {
	var item1 = parseInt(document.getElementById("item1").value);
	var item2 = parseInt(document.getElementById("item2").value);
	var item3 = parseInt(document.getElementById("item3").value);
	var total = item1 + item2 + item3;
	document.getElementById("total").innerHTML = "$" + total;
}
