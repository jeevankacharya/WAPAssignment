function calcTip() {
	//var subtotalElem = 
	//var tipElem = 
	var totalElem = document.getElementById('total');
    var subtotal = document.getElementById('subtotal').value;

    console.log("subtotal" + subtotal);

    var tip = document.getElementById('tip').value;
    console.log("tip" + tip);

	var total = eval(subtotal) + eval(subtotal*tip/100);
	totalElem.innerHTML = '$' + total;
}
