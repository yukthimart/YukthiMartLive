function myFunction() 
	{
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") 
		{
			x.className += " responsive";
		} else 
		{
			x.className = "topnav";
		}
	}


function navprod1(id1, id2)
{
	document.getElementById(id1).style.display = "block";
	document.getElementById(id2).style.display = "none";
}

function navprod2(id1, id2)
{
	document.getElementById(id1).style.display = "none";
	document.getElementById(id2).style.display = "block";
}




function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var tempi = 2000;
function addtocart(pname,pcode,psize,pcolor1,pcolor2,pcolor3,pqty,pprice)
{
	var table = document.getElementById("cartlist");
	var row = table.insertRow(1);
	row.id = tempi;
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	
	var valc1 = document.getElementById(pcolor1).value;
	var valc2 = document.getElementById(pcolor2).value;
	var valc3 = document.getElementById(pcolor3).value;

	if(valc2 != 'No COLOR' && valc3 != 'No COLOR')
	{
		valc = valc1 + ' + ' + valc2 + ' + ' + valc3;
	}
	else if(valc2 != 'No COLOR')
	{
		valc = valc1 + ' + ' + valc2;
	}
	else 
	{
		valc = valc1;
	}
	
	cell1.innerHTML = document.getElementById(pname).innerHTML + " - " + document.getElementById(pcode).innerHTML;
	
	if(document.getElementById("getselectcust").value == "1")
	{
		cell2.innerHTML = document.getElementById(psize).value;
		cell3.innerHTML = valc;
		cell4.innerHTML = document.getElementById(pqty).value;
		cell5.innerHTML = document.getElementById(pprice).innerHTML.slice(2);
	}
	else if(document.getElementById("getselectcust").value == "2")
	{
		cell2.innerHTML = "-";
		cell3.innerHTML = "-";
		cell4.innerHTML = document.getElementById("manualcustval").value;
		cell5.innerHTML = "Custom";
	}
	cell6.innerHTML = "❌";
	var functionname = 'deletecart('+tempi+')';
	cell6.setAttribute('onclick', functionname);
	tempi = tempi + 1;
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
	
	pricesumvalue();
	alert("Item Added to cart");
	
}	
function itemdiff()
{
	var cartqty = document.getElementById("cartquantity").innerHTML;
	document.getElementById("cartquantity").innerHTML = parseInt(cartqty)-1;
	pricesumvalue();
}	

function pricesumvalue()
{
	var totalvalue = 0;
	var tempiiter;
	
	var noofrow = document.getElementById("cartlist").rows.length;
	console.log(noofrow);
	
	
	if(noofrow == 1)
	{
		totalvalue = 0;
	}
	else if(noofrow > 1)
	{
		for (iiter = 0; iiter < noofrow-1; iiter++)
		{
			tempiiter = iiter + 1;
			var priceval = document.getElementById("cartlist").rows[tempiiter].cells[4].innerHTML;
			priceval = parseInt(priceval) || 0;
			totalvalue = parseInt(totalvalue) + parseInt(priceval);
		}
	}
	
	console.log(totalvalue);
	document.getElementById("ptotalvalue").innerHTML = totalvalue;
}

function openpay()
{
	/* var totalvalcheck = document.getElementById("ptotalvalue").innerHTML;
	
	if(parseInt(totalvalcheck) > 0)
	{
		document.getElementById("pdetails").style.display = "block";
		document.getElementById("proceedcheckout").disabled = true;
		document.getElementById("proceedcheckout").style.backgroundColor ="grey";
	}
	else
	{
		alert("Purchase some products before Checkout");
	} */
	
	var totalvalcheck = document.getElementById("cartlist").rows.length;
	console.log(totalvalcheck);
	
	if(parseInt(totalvalcheck) > 1)
	{
		document.getElementById("pdetails").style.display = "block";
		document.getElementById("proceedcheckout").disabled = true;
		document.getElementById("proceedcheckout").style.backgroundColor ="grey";
	}
	else
	{
		alert("Purchase some products before Checkout");
	}
}
function checkvalue()
{
	document.getElementById("errorId").style.display = "none";
	var usernameVal = document.getElementById("username").value;
	var emailVal = document.getElementById("email").value;
	var addressVal = document.getElementById("address").value;
	var numberVal = document.getElementById("phone").value;
	console.log(usernameVal);
	console.log(emailVal);
	console.log(addressVal);
	console.log(numberVal);
	if(usernameVal == "" || emailVal == "" || numberVal == "" || addressVal == "")
		{
			document.getElementById("errorId").style.display = "block";
		}
	else
		{
			var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if(numberVal.length != 10)
			{
				document.getElementById("errorId").style.display = "none";
				document.getElementById("EerrorId").style.display = "none";
				document.getElementById("NerrorId").style.display = "block";
			}
			
			else if(emailVal.match(mailformat))
			{
				document.getElementById("errorId").style.display = "none";
				document.getElementById("NerrorId").style.display = "none";
				document.getElementById("EerrorId").style.display = "none";

				sendformdetails();
			}
			else
			{
				document.getElementById("NerrorId").style.display = "none";

				document.getElementById("EerrorId").style.display = "block";
			}
		}
}