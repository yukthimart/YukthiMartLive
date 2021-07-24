function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var tempi = 2000;
function addtocart(pname,pcode,pprice,pqty,ptprice)
{
	var table = document.getElementById("cartlist");
	var row = table.insertRow(1);
	row.id = tempi;
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell4 = row.insertCell(2);
	var cell6 = row.insertCell(3);
	
	var valueprice = prodpricelisting[pprice-1]
	
	cell1.innerHTML = document.getElementById(pname).innerHTML;
	cell2.innerHTML = document.getElementById(pcode).innerHTML;
	cell4.innerHTML = document.getElementById(pqty).value;
	cell6.innerHTML = "❌";
	var functionname = 'deletecart('+tempi+')';
	cell6.setAttribute('onclick', functionname);
	tempi = tempi + 1;
	console.log(tempi);
}


function deletecart(rowvali)
{
	//document.getElementById("cartlist").deleteRow(document.getElementById(rowvali));
	var rowval = document.getElementById(rowvali);
	rowval.parentNode.removeChild(rowval);
	itemdiff();
}

function itemadd()
{
	var cartqty = document.getElementById("cartquantity").innerHTML;
	document.getElementById("cartquantity").innerHTML = parseInt(cartqty)+1;
	
	alert("Item Added to cart");
	
}	
function itemdiff()
{
	var cartqty = document.getElementById("cartquantity").innerHTML;
	document.getElementById("cartquantity").innerHTML = parseInt(cartqty)-1;

}	