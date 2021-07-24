function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  //window.history.pushState({"html":"","pageTitle":""},"", "?");
  enableScroll();
}

function proddescp()
{
	document.getElementById("pdesc").style.display = "block";
	document.getElementById("lockclick").style.display = "block";
	document.getElementById("mancust1").style.display = "none";
	document.getElementById("getselectcust").value="1";
}
/* function defcust()
{
	document.getElementById("lockclick").style.display = "block";
	document.getElementById("pdesc").style.display = "none";
	document.getElementById("mancust1").style.display = "none";
	document.getElementById("getselectcust").value="1";
} */
function mancust()
{
	document.getElementById("mancust1").style.display = "block";
	document.getElementById("lockclick").style.display = "none";
	document.getElementById("pdesc").style.display = "none";
	document.getElementById("getselectcust").value="2";
}

function prod1js2()
{
	document.getElementById("prodimgsmall1").style.opacity="1";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="block";
	document.getElementById("prodimg2").style.display="none";
	document.getElementById("closeimg").style.display="block";
	document.getElementById("mainoverlayimg").style.display="block";
}

function prod2js2()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimgsmall2").style.opacity="1";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimg2").style.display="block";
	document.getElementById("closeimg").style.display="block";
	document.getElementById("mainoverlayimg").style.display="block";
}
function prodsj2()
{
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimg2").style.display="none";
	document.getElementById("closeimg").style.display="none";
	document.getElementById("mainoverlayimg").style.display="none";
}

var flagalert = 0;
function prodsizes()
{
	document.getElementById("ssize").style.opacity="1";
	document.getElementById("ssize").style.border="2px solid black";
	document.getElementById("msize").style.opacity="0.5";
	document.getElementById("msize").style.border="none";
	document.getElementById("lsize").style.opacity="0.5";
	document.getElementById("lsize").style.border="none";
	document.getElementById("valsize").value = "S";
	document.getElementById("sizedesc").innerHTML = document.getElementById("ssizedesc").innerHTML;
	document.getElementById("pricedisplay").innerHTML = "₹ " + document.getElementById("ssize").value;
	document.getElementById("pricedisplay").value = document.getElementById("ssize").value;
	console.log("inc1");
}

function prodsizem()
{
	/* if (flagalert == 0)
	{
		alert("Customize Product - 'Hope you have customized the product as per your needs. The price and shipping time may vary. Kindly proceed for Confirmation'");
	} */
	document.getElementById("ssize").style.opacity="0.5";
	document.getElementById("ssize").style.border="none";
	document.getElementById("msize").style.opacity="1";
	document.getElementById("msize").style.border="2px solid black";
	document.getElementById("lsize").style.opacity="0.5";
	document.getElementById("lsize").style.border="none";
	document.getElementById("valsize").value = "M";
	document.getElementById("sizedesc").innerHTML = document.getElementById("msizedesc").innerHTML;
	flagalert = 1;
	document.getElementById("pricedisplay").innerHTML = "₹ " + document.getElementById("msize").value;
	document.getElementById("pricedisplay").value = document.getElementById("msize").value;
	console.log("m");
}
function prodsizel()
{
	/* if (flagalert == 0)
	{
		alert("Customize Product - 'Hope you have customized the product as per your needs. The price and shipping time may vary. Kindly proceed for Confirmation'");
	} */
	document.getElementById("ssize").style.opacity="0.5";
	document.getElementById("ssize").style.border="none";
	document.getElementById("msize").style.opacity="0.5";
	document.getElementById("msize").style.border="none";
	document.getElementById("lsize").style.opacity="1";
	document.getElementById("lsize").style.border="2px solid black";
	document.getElementById("valsize").value = "L";
	document.getElementById("sizedesc").innerHTML = document.getElementById("lsizedesc").innerHTML;
	flagalert = 1;
	document.getElementById("pricedisplay").innerHTML = "₹ " + document.getElementById("lsize").value;
	document.getElementById("pricedisplay").value = document.getElementById("lsize").value;
	console.log("l");
}

function prodcolors()
{
	document.getElementById("scolor").style.opacity="1";
	document.getElementById("scolor").style.border="2px solid black";
	document.getElementById("mcolor").style.opacity="0.5";
	document.getElementById("mcolor").style.border="none";
	document.getElementById("lcolor").style.opacity="0.5";
	document.getElementById("lcolor").style.border="none";
	document.getElementById("valcolor").value = document.getElementById("scolor").innerHTML;
	document.getElementById("pricedisplay").innerHTML = "₹ " + document.getElementById("pricedisplay").value;
	document.getElementById("sizedesc").innerHTML = "₹ " + document.getElementById("pricedisplay").value;
	console.log("inc1");
}

function prodcolorm()
{
	/* if (flagalert == 0)
	{
		alert("Customize Product - 'Hope you have customized the product as per your needs. The price and shipping time may vary. Kindly proceed for Confirmation'");
	} */
	document.getElementById("scolor").style.opacity="0.5";
	document.getElementById("scolor").style.border="none";
	document.getElementById("mcolor").style.opacity="1";
	document.getElementById("mcolor").style.border="2px solid black";
	document.getElementById("lcolor").style.opacity="0.5";
	document.getElementById("lcolor").style.border="none";
	document.getElementById("valcolor").value = document.getElementById("mcolor").innerHTML;
	flagalert = 1;
	document.getElementById("pricedisplay").innerHTML = "₹ Custom";
	console.log("m");
}
function prodcolorl()
{
	/* if (flagalert == 0)
	{
		alert("Customize Product - 'Hope you have customized the product as per your needs. The price and shipping time may vary. Kindly proceed for Confirmation'");
	} */
	document.getElementById("scolor").style.opacity="0.5";
	document.getElementById("scolor").style.border="none";
	document.getElementById("mcolor").style.opacity="0.5";
	document.getElementById("mcolor").style.border="none";
	document.getElementById("lcolor").style.opacity="1";
	document.getElementById("lcolor").style.border="2px solid black";
	document.getElementById("valcolor").value = document.getElementById("lcolor").innerHTML;
	flagalert = 1;
	document.getElementById("pricedisplay").innerHTML = "₹ Custom";
	console.log("l");
}
function colorpick(getcol)
{
	if (getcol == 'colorp1')
	{
		document.getElementById("colorp1").style.display = "block";
		document.getElementById("colorp2").style.display = "none";
		document.getElementById("colorp3").style.display = "none";
		document.getElementById("buttoncp1").style.border = "2px solid black";
		document.getElementById("buttoncp2").style.border = "none";
		document.getElementById("buttoncp3").style.border = "none";
	}
	else if (getcol == 'colorp2')
	{
		document.getElementById("colorp2").style.display = "block";
		document.getElementById("colorp1").style.display = "none";
		document.getElementById("colorp3").style.display = "none";
		document.getElementById("buttoncp2").style.border = "2px solid black";
		document.getElementById("buttoncp1").style.border = "none";
		document.getElementById("buttoncp3").style.border = "none";
	}
	else if (getcol == 'colorp3')
	{
		document.getElementById("colorp3").style.display = "block";
		document.getElementById("colorp1").style.display = "none";
		document.getElementById("colorp2").style.display = "none";
		document.getElementById("buttoncp3").style.border = "2px solid black";
		document.getElementById("buttoncp2").style.border = "none";
		document.getElementById("buttoncp1").style.border = "none";
	}
	else
	{
		document.getElementById("colorp3").style.display = "none";
		document.getElementById("colorp1").style.display = "none";
		document.getElementById("colorp2").style.display = "none";
		document.getElementById("buttoncp1").style.border = "none";
		document.getElementById("buttoncp2").style.border = "none";
		document.getElementById("buttoncp3").style.border = "none";
	}
}
function colorsel(getbutid1, getid1, getcol1)
{
	document.getElementById(getbutid1).value = getcol1;
	document.getElementById(getbutid1).innerHTML = getcol1;
	document.getElementById(getid1).style.display = "none";
}


function qtyinc(qtyid,priceid,prodindex)
{
	/* if (flagalert == 0)
	{
		alert("Customize Product - 'Hope you have customized the product as per your needs. The price and shipping time may vary. Kindly proceed for Confirmation'");
	} */
	flagalert = 1;
	var qtyvalue = document.getElementById(qtyid).value;
	qtyincrvalue = parseInt(qtyvalue) + 1;
	document.getElementById(qtyid).value = qtyincrvalue;
	
	var valueprice = parseInt(document.getElementById("pricedisplay").value)*qtyincrvalue;
	document.getElementById("pricedisplay").innerHTML = "₹ " + valueprice.toString();
	
	/* if(qtyincrvalue > 1)
	{
		document.getElementById("pricedisplay").innerHTML = "₹ Custom";
		console.log("inc>1");
	}
	else if (qtyincrvalue == 1)
	{
		document.getElementById("pricedisplay").innerHTML = "₹ " + document.getElementById("pricedisplay").value;
		console.log("inc1");
	} */
	
}

function qtydec(qtyid,priceid,prodindex)
{

	var qtyvalue = document.getElementById(qtyid).value;
	if(parseInt(qtyvalue) != 1)
	{
		qtyincrvalue = parseInt(qtyvalue) - 1;
		document.getElementById(qtyid).value = qtyincrvalue;
		
		var valueprice = parseInt(document.getElementById("pricedisplay").value)*qtyincrvalue;
		document.getElementById("pricedisplay").innerHTML = "₹ " +  valueprice.toString();
	}
	/* if(qtyincrvalue > 1)
	{
		document.getElementById("pricedisplay").innerHTML = "₹ Custom";
		console.log("inc>1");
	}
	else if (qtyincrvalue == 1)
	{
		document.getElementById("pricedisplay").innerHTML = "₹ " + document.getElementById("pricedisplay").value;
		console.log("inc1");
	} */
}

function colorpallete()
{
	document.getElementById("colorpallete").style.display = "block";
}

function Loaddesc(getid,getcolor)
{
	proddescp();
	document.getElementById("prodimg1").src = "products/"+getid+"/1.jpg";
	document.getElementById("prodimg2").src = "products/"+getid+"/2.jpg";
	document.getElementById("prodimgsmall1").src = "products/"+getid+"/1.jpg";
	document.getElementById("prodimgsmall2").src = "products/"+getid+"/2.jpg";
	document.getElementById("lockclick").style.pointerEvents = "auto";
	document.getElementById("addcartclick").style.pointerEvents = "auto";
	document.getElementById("buttoncp2").style.pointerEvents = "auto";
	document.getElementById("buttoncp3").style.pointerEvents = "auto";
	document.getElementById("addcartclick").style.backgroundColor = "#900C3F";
	document.getElementById("sizecombo").style.pointerEvents = "auto";
	document.getElementById("buttoncp1").style.pointerEvents = "auto";
	document.getElementById("buttoncp2").style.pointerEvents = "auto";
	document.getElementById("buttoncp3").style.pointerEvents = "auto";
	document.getElementById("sizequan").style.pointerEvents = "auto";
	document.getElementById("addcartclick").innerHTML = "Add to Cart";
	document.getElementById("ManualCust").style.pointerEvents = "auto";
	document.getElementById("ManualCust").style.backgroundColor = "#0060B6";
	document.getElementById("ManualCust").innerHTML = "User Customization ▽";

	if (getid == "YW101")
	{
		var sized = ["height 11 inches, diameter 7 inches","height 11 inches, diameter 9 inches","height 11 inches, diameter 12 inches"];
		var bdesc = "A traditional Poojai koodai with a fashionable design. Multicolor gives a pleasant look. It can be used for temple visit / as a gift / beautify your showcase. ";
		var bpnpc = {pn:"MULTICOLOR POOJAI KUDAI/BASKET", pc:"YW101"};
		var price = [300,360,420];
		var defcolor = ["Red","White","Green"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYW101";
		window.history.pushState({"html":"","pageTitle":""},"", '?YW101');


	}
	if (getid == "YW102")
	{
		var sized = ["length 10 inches, width 5 inches, height 7 inches and total height 12 inches","length 10 inches, width 5 inches, height 9 inches and total height 14 inches","length 10 inches, width 5 inches, height 11 inches and total height 17 inches"];
		var bdesc = "An attractive bag which is perfect for shopping, carrying food items etc. It is made of chocolate pinnal which gives it a unique look. It can be customizable by color and size as per customer needs and the price changes accordingly. Bulk order is acceptable with discounted price.Size: length 10 inches, width 5 inches, height 7 inches and total height 12 inches";
		var bpnpc = {pn:"SMALL KUDAI/BAG", pc:"YW102"};
		var price = [200,250,300];
		var defcolor = ["Yellow","White","Pink"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYW102";
		window.history.pushState({"html":"","pageTitle":""},"", '?YW102');
		
	}
	if (getid == "YW103")
	{
		var bdesc = "A square koodai which can be used for temple visit, gifting. Split handles gives a great look and feel.";
		var bpnpc = {pn:"SQUARE KUDAI", pc:"YW103"};
		var sized = ["length 3 inches, height 3 inches, total height 6.5 inches","length 5 inches, height 5 inches, total height 10.5 inches","length 7 inches, height 7 inches, total height 14.5 inches"];
		var price = [350,400,450];
		var defcolor = ["Red","Yellow","Green"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYW103";
		window.history.pushState({"html":"","pageTitle":""},"", '?YW103');
	}
	if (getid == "YW104")
	{
		var bdesc = "A lovely heart shape bowl which is ideal to decorate your tea table. We can customize with handle. Ideal for storing small items.";
		var bpnpc = {pn:"HEART SHAPE BOWL", pc:"YW104"};
		var sized = ["length 6.5inches, height 4 inches, width 3 inches","length 8.5inches, height 4 inches, width 3 inches","length 10.5inches, height 4 inches, width 3 inches"];
		var price = [180,200,220];
		var defcolor = ["Pink","No Color","No Color"];
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYW104";
		window.history.pushState({"html":"","pageTitle":""},"", '?YW104');
	}
	if (getid == "YW105")
	{
		var bdesc = "Three partitioned bag serves multi-purpose as per your need. Can be used to keep cutlery or bath essentials. ";
		var bpnpc = {pn:"CUTLARY/BRUSH ORGANIZER", pc:"YW105"};
		var sized = ["Center Box width 2 inches/height 4inches/length 2inches, Small Box width 2 inches/height 4inches/length 2 inches. Total height 6.5inches","Center Box width 3 inches/height 6inches/length 4.5inches, Small Box width 3 inches/height 6inches/length 2 inches. Total height 8.5inches","Center Box width 4 inches/height 7inches/length 6.5inches, Small Box width 4 inches/height 7inches/length 2 inches. Total height 10.5inches"];
		var price = [160,200,240];
		var defcolor = ["Black","White","No Color"];
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYW105";
		window.history.pushState({"html":"","pageTitle":""},"", '?YW105');
	}
	if (getid == "YW106")
	{
		var bdesc = "An eco friendly pouch can be used as a cell phone or letter holder.";
		var bpnpc = {pn:"CELL PHONE/ LETTER HOLDER", pc:"YW106"};
		var sized = ["length 4 inches, height 4 inches, width 1 inch and total height 8 inches","length 6 inches, height 4 inches, width 1 inch and total height 10 inches","length 8 inches, height 4 inches, width 1 inch and total height 12 inches"];
		var price = [150,180,210];
		var defcolor = ["Brown","Yellow","Orange"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYW106";
		window.history.pushState({"html":"","pageTitle":""},"", '?YW106');
	}
	if (getid == "YW107")
	{
		var bdesc = "A small round pouch can be used as a holder for your kumkuma simil or enrich your showcase.";
		var bpnpc = {pn:"KUMKUMA SIMIL", pc:"YW107"};
		var sized = ["height 2 inches, diameter 2.5 inches","height 4 inches, diameter 2.5 inches","height 6 inches, diameter 2.5 inches"];
		var price = [150,180,210];
		var defcolor = ["Golden","No Color","No Color"];
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYW107";
		window.history.pushState({"html":"","pageTitle":""},"", '?YW107');
	}
	if (getid == "YW108")
	{
		var bdesc = "A small bag to keep flowers in your pooja room , ideal to gift.";
		var bpnpc = {pn:"SMALL BAG WITH HANDLE", pc:"YW108"};
		var sized = ["diameter 2 inches, height -2 inches, total height(including handle) 4.5 inches","diameter 4 inches, height -2 inches, total height(including handle) 6.5 inches","diameter 6 inches, height -2 inches, total height(including handle) 8.5 inches"];
		var price = [150,180,210];
		var defcolor = ["White","No Color","No Color"];
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYW108";
		window.history.pushState({"html":"","pageTitle":""},"", '?YW108');
	}
	if (getid == "YW109")
	{
		var bdesc = "A round shaped multipurpose bowl. Can be used to store vegetables, pens, coins etc. ";
		var bpnpc = {pn:"ROUND BOWL", pc:"YW109"};
		var sized = ["diameter 4 inches, height 2inches","diameter 6 inches, height 2inches","diameter 8 inches, height 2inches"];
		var price = [100,120,140];
		var defcolor = ["Black","White","No Color"];
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYW109";
		window.history.pushState({"html":"","pageTitle":""},"", '?YW109');
	}
	if (getid == "YW110")
	{
		var bdesc = " A hexagon shaped multipurpose bowl. Can be used to store vegetables, pens, coins etc.";
		var bpnpc = {pn:"SQUARE BOWL", pc:"YW110"};
		var sized = ["length 4inches, height 2 inches"," length 6inches, height 2 inches"," length 4inches, height 2 inches"];
		var price = [110,130,150];
		var defcolor = ["Pink","White","Yellow"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYW110";
		window.history.pushState({"html":"","pageTitle":""},"", '?YW110');
	}
	if (getid == "YW111")
	{
		var bdesc = "A round shaped bowl which is more attractive with the beads. Multipurpose bowl.";
		var bpnpc = {pn:"BOWL WITH BEADS", pc:"YW111"};
		var sized = ["height 11 inches, diameter 6 inches","height 12 inches, diameter 6 inches","height 13 inches, diameter 6 inches"];
		var price = [150,180,210];
		var defcolor = ["Blue","Pink","White"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYW111";
		window.history.pushState({"html":"","pageTitle":""},"", '?YW111');
	}
	
	
	/* Cloth */
	
	if (getid == "YC101")
	{
		var bdesc = "The fabric small lunch bag is durable, reusable and biodegradable. The lunch bag comes without zip.";
		var bpnpc = {pn:"FABRIC LUNCH BAG", pc:"YC101"};
		var sized = ["length- 11.5 inch x height 9.5 inch total height including handle 14 inches"," length- 11.5 inch x height 9.5 inch total height including handle 14 inches"," length- 11.5 inch x height 9.5 inch total height including handle 14 inches"];
		var price = [130,130,130];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYC101";
		window.history.pushState({"html":"","pageTitle":""},"", '?YC101');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
				/* //Code for out of stock items
		document.getElementById("addcartclick").style.pointerEvents = "none";
		document.getElementById("addcartclick").style.backgroundColor = "Grey"; */
	}
	if (getid == "YC102")
	{
		var bdesc = "Fabric pouch in red color is attractive, easy to carry and style in size to hold your accessories. The pouch comes with zip.  ";
		var bpnpc = {pn:"SMALL KUDAI/BAG", pc:"YC102"};
		var sized = ["length- 7 inch x height 3 inch x width 3.5 inch","length- 7 inch x height 3 inch x width 3.5 inch","length- 7 inch x height 3 inch x width 3.5 inch"];
		var price = [160,160,160];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYC102";
		window.history.pushState({"html":"","pageTitle":""},"", '?YC102');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
	}
	if (getid == "YC103")
	{
		var bdesc = "2 piece Fabric pouch in red color is attractive, easy to carry, reusable and biodegradable. The pouch comes with zip";
		var bpnpc = {pn:"SQUARE KUDAI", pc:"YC103"};
		var sized = [" length- 6 inch x height 2.5 inch x width 4 inch"," length- 6 inch x height 2.5 inch x width 4 inch"," length- 6 inch x height 2.5 inch x width 4 inch"];
		var price = [130,130,130];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYC103";
		window.history.pushState({"html":"","pageTitle":""},"", '?YC103');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
	}
	if (getid == "YC104")
	{
		var bdesc = "Fabric bag in blue color is good-looking, easy to carry and style in size to hold your accessories. The bag comes with zip and it is customizable by color, size and the price changes accordingly. Bulk order is acceptable with lowest price guaranteed.<li><b>Material :</b> cotton </li><li><b>Size:</b> 9.5 inch x height 6.5 inch  </li><li><b>Wash care: </b> hand wash in cold water. Do not bleach. Line dry in shade</li>";
		var bpnpc = {pn:"HEART SHAPE BOWL", pc:"YC104"};
		var sized = ["length- 9.5 inch x height 6.5 inch","length- 9.5 inch x height 6.5 inch","length- 9.5 inch x height 6.5 inch"];
		var price = [150,150,150];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYC104";
		window.history.pushState({"html":"","pageTitle":""},"", '?YC104');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
	}
	if (getid == "YC105")
	{
		var bdesc = "Fabric pouch in red color with block design gives an attractive look to the pouch. It is durable, reusable and biodegradable. The pouch comes with zip.";
		var bpnpc = {pn:"CUTLARY/BRUSH ORGANIZER", pc:"YC105"};
		var sized = ["length- 9.5 inch x height 6.5 inch","length- 9.5 inch x height 6.5 inch","length- 9.5 inch x height 6.5 inch"];
		var price = [150,150,150];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYC105";
		window.history.pushState({"html":"","pageTitle":""},"", '?YC105');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
	}
	if (getid == "YC106")
	{
		var bdesc = "Fabric bag with hand embroidery gives it a unique look and a style to carry. The bag is durable and can be used to keep all the essential items. The bag comes with zip. ";
		var bpnpc = {pn:"CELL PHONE/ LETTER HOLDER", pc:"YC106"};
		var sized = ["length- 12 inch x height 8 inch ","length- 12 inch x height 8 inch ","length- 12 inch x height 8 inch "];
		var price = [250,250,250];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYC106";
		window.history.pushState({"html":"","pageTitle":""},"", '?YC106');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YC107")
	{
		var bdesc = "The set of fabric pouches in ocean blue color is gorgeous, easy to carry, reusable and biodegradable. Triangle pouches give a different look & feel when you carry it. The pouch comes with zip.";
		var bpnpc = {pn:"KUMKUMA SIMIL", pc:"YC107"};
		var sized = ["length- 9 inch x height 2.5 inch, Triangle Pouch 5.5 base x height 5 inch","length- 9 inch x height 2.5 inch, Triangle Pouch 5.5 base x height 5 inch","length- 9 inch x height 2.5 inch, Triangle Pouch 5.5 base x height 5 inch"];
		var price = [210,210,210];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYC107";
		window.history.pushState({"html":"","pageTitle":""},"", '?YC107');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YC108")
	{
		var bdesc = "Fabric pouch in black color is gorgeous, easy to carry and can be used for keeping your stationary things. Triangle pouch will give you a new look & feel when you carry it. The pouch comes with zip.";
		var bpnpc = {pn:"SMALL BAG WITH HANDLE", pc:"YC108"};
		var sized = ["length- 6 inch x height 2.5 inch, Width 2.5, Triangle Pouch 5 base x height 4 inch","length- 6 inch x height 2.5 inch, Width 2.5, Triangle Pouch 5 base x height 4 inch","length- 6 inch x height 2.5 inch, Width 2.5, Triangle Pouch 5 base x height 4 inch"];
		var price = [175,175,175];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYC108";
		window.history.pushState({"html":"","pageTitle":""},"", '?YC108');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YC109")
	{
		var bdesc = "Fabric pouch in blue color is ideal to carry small items like coins, make up things and to store small stationary items. The pouch comes with zip.";
		var bpnpc = {pn:"ROUND BOWL", pc:"YC109"};
		var sized = ["Size length- 3inch x height 2 inch, Width 4","Size length- 3inch x height 2 inch, Width 4","Size length- 3inch x height 2 inch, Width 4"];
		var price = [70,70,70];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYC109";
		window.history.pushState({"html":"","pageTitle":""},"", '?YC109');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
		/*Out of Stock*/
		document.getElementById("addcartclick").style.pointerEvents = "none";
		document.getElementById("addcartclick").style.backgroundColor = "Grey";
		document.getElementById("addcartclick").innerHTML = "Out of Stock";
		/*out of Stock*/
		
	}
	
	/* Jewel */
	
	if (getid == "YJ101")
	{
		var bdesc = "The stud is made of Denim Beads which is eco-friendly and gives a new sense of fashion style to use. ";
		var bpnpc = {pn:"Fabric Bead Stud", pc:"YJ101"};
		var sized = ["height 2.5 inch ","height 2.5 inch ","height 2.5 inch "];
		var price = [75,75,75];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYJ101";
		window.history.pushState({"html":"","pageTitle":""},"", '?YJ101');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YJ102")
	{
		var bdesc = "The stud is made of Fabric Beads which is eco-friendly and gives a different look & feel while using it.";
		var bpnpc = {pn:"Fabric Bead Stud", pc:"YJ102"};
		var sized = ["height 2.5'","height 2.5'","height 2.5'"];
		var price = [75,75,75];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYJ102";
		window.history.pushState({"html":"","pageTitle":""},"", '?YJ102');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YJ103")
	{
		var bdesc = "The stud is made of Fabric Beads which is eco-friendly and gives a different look & feel while using it. ";
		var bpnpc = {pn:"Fabric Bead Stud", pc:"YJ103"};
		var sized = ["height 2.5 inch","height 2.5 inch","height 2.5 inch"];
		var price = [75,75,75];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYJ103";
		window.history.pushState({"html":"","pageTitle":""},"", '?YJ103');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YJ104")
	{
		var bdesc = "The stud is made of Fabric Beads which is eco-friendly and gives a different look & feel while using it. ";
		var bpnpc = {pn:"Fabric Bead Stud", pc:"YJ104"};
		var sized = ["height 2.5 inch ","height 2.5 inch ","height 2.5 inch "];
		var price = [75,75,75];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYJ104";
		window.history.pushState({"html":"","pageTitle":""},"", '?YJ104');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YJ105")
	{
		var bdesc = "The stud is made of Fabric Beads which is eco-friendly and gives a different look & feel while using it.";
		var bpnpc = {pn:"Fabric Bead Stud", pc:"YJ105"};
		var sized = ["height 2.5 inch","height 2.5 inch","height 2.5 inch"];
		var price = [75,75,75];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYJ105";
		window.history.pushState({"html":"","pageTitle":""},"", '?YJ105');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YJ106")
	{
		var bdesc = "The stud is made of Fabric Beads which is eco-friendly and gives a different look & feel while using it.";
		var bpnpc = {pn:"Fabric Bead Stud", pc:"YJ106"};
		var sized = ["height 2.5 inch","height 2.5 inch","height 2.5 inch"];
		var price = [75,75,75];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYJ106";
		window.history.pushState({"html":"","pageTitle":""},"", '?YJ106');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YJ107")
	{
		var bdesc = "The stud is made of Fabric gives a new sense of fashion style to use.";
		var bpnpc = {pn:"Fabric Stud", pc:"YJ107"};
		var sized = ["height 3 inch","height 3 inch","height 3 inch"];
		var price = [60,60,60];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYJ107";
		window.history.pushState({"html":"","pageTitle":""},"", '?YJ107');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YJ108")
	{
		var bdesc = "The stud is made of denim beads which is eco-friendly and gives a different look & feel while using it. ";
		var bpnpc = {pn:"Denim Bead Stud", pc:"YJ108"};
		var sized = ["height 2 inch","height 2 inch","height 2 inch"];
		var price = [60,60,60];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYJ108";
		window.history.pushState({"html":"","pageTitle":""},"", '?YJ108');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YJ109")
	{
		var bdesc = "The stud is made of denim beads which is eco-friendly and gives a different look & feel while using it. ";
		var bpnpc = {pn:"Fabric Bead Stud", pc:"YJ109"};
		var sized = ["height 2 inch","height 2 inch","height 2 inch"];
		var price = [60,60,60];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYJ109";
		window.history.pushState({"html":"","pageTitle":""},"", '?YJ109');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YJ110")
	{
		var bdesc = "The stud is made of fabric which is eco-friendly and gives a different look & feel while using it.";
		var bpnpc = {pn:"Fabric Stud", pc:"YJ110"};
		var sized = ["height 1 inch","height 1 inch","height 1 inch"];
		var price = [55,55,55];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYJ110";
		window.history.pushState({"html":"","pageTitle":""},"", '?YJ110');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YJ111")
	{
		var bdesc = "The stud is made of fabric which is eco-friendly and gives a different look & feel while using it. ";
		var bpnpc = {pn:"Fabric Stud", pc:"YJ111"};
		var sized = ["height 1 inch","height 1 inch","height 1 inch"];
		var price = [55,55,55];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYJ111";
		window.history.pushState({"html":"","pageTitle":""},"", '?YJ111');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YJ112")
	{
		var bdesc = "The stud is made of German Silver in Balerina shape which is eco-friendly and gives a different look & feel while using it.  ";
		var bpnpc = {pn:"German silver balerina", pc:"YJ112"};
		var sized = ["height 2.5 inch","height 2.5 inch","height 2.5 inch"];
		var price = [80,80,80];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYJ112";
		window.history.pushState({"html":"","pageTitle":""},"", '?YJ112');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YJ113")
	{
		var bdesc = "The stud is made of German Silver in Flower shape which is eco-friendly and gives a new sense of fashion style to use. ";
		var bpnpc = {pn:"German silver element – The Flower", pc:"YJ113"};
		var sized = ["height 2.5 inch","height 2.5 inch","height 2.5 inch"];
		var price = [80,80,80];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYJ113";
		window.history.pushState({"html":"","pageTitle":""},"", '?YJ113');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YA101")
	{
		var bdesc = "The stud is made of German Silver in Flower shape which is eco-friendly and gives a new sense of fashion style to use. ";
		var bpnpc = {pn:"Canvas 1", pc:"YA101"};
		var sized = ["height 2.5 inch","height 2.5 inch","height 2.5 inch"];
		var price = [80,80,80];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYA101";
		window.history.pushState({"html":"","pageTitle":""},"", '?YA101');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YA102")
	{
		var bdesc = "The stud is made of German Silver in Flower shape which is eco-friendly and gives a new sense of fashion style to use. ";
		var bpnpc = {pn:"German silver element – The Flower", pc:"YA102"};
		var sized = ["height 2.5 inch","height 2.5 inch","height 2.5 inch"];
		var price = [80,80,80];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYA102";
		window.history.pushState({"html":"","pageTitle":""},"", '?YA102');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YA103")
	{
		var bdesc = "The stud is made of German Silver in Flower shape which is eco-friendly and gives a new sense of fashion style to use. ";
		var bpnpc = {pn:"German silver element – The Flower", pc:"YA103"};
		var sized = ["height 2.5 inch","height 2.5 inch","height 2.5 inch"];
		var price = [80,80,80];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYA103";
		window.history.pushState({"html":"","pageTitle":""},"", '?YA103');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YA104")
	{
		var bdesc = "The stud is made of German Silver in Flower shape which is eco-friendly and gives a new sense of fashion style to use. ";
		var bpnpc = {pn:"German silver element – The Flower", pc:"YA104"};
		var sized = ["height 2.5 inch","height 2.5 inch","height 2.5 inch"];
		var price = [80,80,80];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYA104";
		window.history.pushState({"html":"","pageTitle":""},"", '?YA104');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YA105")
	{
		var bdesc = "The stud is made of German Silver in Flower shape which is eco-friendly and gives a new sense of fashion style to use. ";
		var bpnpc = {pn:"German silver element – The Flower", pc:"YA105"};
		var sized = ["height 2.5 inch","height 2.5 inch","height 2.5 inch"];
		var price = [80,80,80];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYA105";
		window.history.pushState({"html":"","pageTitle":""},"", '?YA105');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YA106")
	{
		var bdesc = "The stud is made of German Silver in Flower shape which is eco-friendly and gives a new sense of fashion style to use. ";
		var bpnpc = {pn:"German silver element – The Flower", pc:"YA106"};
		var sized = ["height 2.5 inch","height 2.5 inch","height 2.5 inch"];
		var price = [80,80,80];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYA106";
		window.history.pushState({"html":"","pageTitle":""},"", '?YA106');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YA107")
	{
		var bdesc = "The stud is made of German Silver in Flower shape which is eco-friendly and gives a new sense of fashion style to use. ";
		var bpnpc = {pn:"German silver element – The Flower", pc:"YA107"};
		var sized = ["height 2.5 inch","height 2.5 inch","height 2.5 inch"];
		var price = [80,80,80];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYA107";
		window.history.pushState({"html":"","pageTitle":""},"", '?YA107');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
	}
	if (getid == "YA108")
	{
		var bdesc = "The stud is made of German Silver in Flower shape which is eco-friendly and gives a new sense of fashion style to use. ";
		var bpnpc = {pn:"German silver element – The Flower", pc:"YA108"};
		var sized = ["height 2.5 inch","height 2.5 inch","height 2.5 inch"];
		var price = [80,80,80];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYA108";
		window.history.pushState({"html":"","pageTitle":""},"", '?YA108');
		document.getElementById("sizequan").style.pointerEvents = "none";
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YF101")
	{
		var sized = ["250g","250g","250g"];
		var bdesc = "The beetroot malt is made of beetroot, cardamom, palm sugar, badam and almond to boost the hemoglobin. The malt can be consumed by all age group people and it is especially very healthy for pregnant women. The malt is organic and a healthy food item with no added colors, flavors and preservatives. Bulk order is acceptable with lowest price guaranteed.";
		var bpnpc = {pn:"The beetroot malt", pc:"YF101"};
		var price = [230,230,230];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF101";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF101');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YF102")
	{
		var sized = ["50g","50g","50g"];
		var bdesc = "The beetroot malt is made of beetroot, cardamom, palm sugar, badam and almond to boost the hemoglobin. The malt can be consumed by all age group people and it is especially very healthy for pregnant women. The malt is organic and a healthy food item with no added colors, flavors and preservatives. Bulk order is acceptable with lowest price guaranteed.";
		var bpnpc = {pn:"The beetroot malt", pc:"YF102"};
		var price = [50,50,50];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF102";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF102');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YF103")
	{
		var sized = ["250g","250g","250g"];
		var bdesc = "The health drink is made of 38 sprouted ingredients. The health drink can be consumed by all age group people. The drink is organic and a healthy food item with no added colors, flavors and preservatives. Bulk order is acceptable with lowest price guaranteed.";
		var bpnpc = {pn:"The Health Drink", pc:"YF103"};
		var price = [220,220,220];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF103";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF103');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YF104")
	{
		var sized = ["50g","50g","50g"];
		var bdesc = "The health drink is made of 38 sprouted ingredients. The health drink can be consumed by all age group people. The drink is organic and a healthy food item with no added colors, flavors and preservatives. Bulk order is acceptable with lowest price guaranteed.";
		var bpnpc = {pn:"SMALL KUDAI/BAG", pc:"YF104"};
		var price = [50,50,50];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF104";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF104');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	
	if (getid == "YF105")
	{
		var sized = ["200g","200g","200g"];
		var bdesc = "The banana used in the powder is Kerala famous “NENTHIRAM PAZHAM” with no added colors, flavors and preservatives. The food item is organic and very healthy especially for children with their favorite ingredients added. The flour can be consumed by all age group people in the form of drinks or snacks in a preferred way. Great immune booster for babies. Bulk order is acceptable with lowest price guaranteed.";
		var bpnpc = {pn:"The beetroot malt", pc:"YF105"};
		var price = [210,210,210];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF105";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF105');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YF106")
	{
		var sized = ["50g","50g","50g"];
		var bdesc = "The banana used in the powder is Kerala famous “NENTHIRAM PAZHAM” with no added colors, flavors and preservatives. The food item is organic and very healthy especially for children with their favorite ingredients added. The flour can be consumed by all age group people in the form of drinks or snacks in a preferred way. Great immune booster for babies. Bulk order is acceptable with lowest price guaranteed.";
		var bpnpc = {pn:"The beetroot malt", pc:"YF106"};
		var price = [55,55,55];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF106";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF106');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YF107")
	{
		var sized = ["200g","200g","200g"];
		var bdesc = "The green jackfruit flour is made of green jackfruit, cardamom, badam etc with no added colors, flavors and preservatives. The food item is organic and very healthy especially for people suffering from high sugar. The flour can be consumed by all age group people in the form of dosa or snacks in a preferred way. Bulk order is acceptable with lowest price guaranteed.";
		var bpnpc = {pn:"The Health Drink", pc:"YF107"};
		var price = [100,100,100];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF107";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF107');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YF108")
	{
		var sized = ["500g","500g","500g"];
		var bdesc = "The green jackfruit flour is made of green jackfruit, cardamom, badam etc with no added colors, flavors and preservatives. The food item is organic and very healthy especially for people suffering from high sugar. The flour can be consumed by all age group people in the form of dosa or snacks in a preferred way. Bulk order is acceptable with lowest price guaranteed.";
		var bpnpc = {pn:"Samba putta podi", pc:"YF108"};
		var price = [65,65,65];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF108";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF108');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YF109")
	{
		var sized = ["500g","500g","500g"];
		var bdesc = "Palm Jaggery is rich in calcium, iron and other useful vitamins and minerals. Eating jaggery 7 months before delivery is so beneficial for the mom. It successfully purifies breast milk by removing impurities. Boost your Energy, It cleans up your system.  It works as a Digestive Agent, provides smooth and healthy skin";
		var bpnpc = {pn:"Karupatti", pc:"YF109"};
		var price = [180,180,180];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF109";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF109');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YF110")
	{
		var sized = ["500g","500g","500g"];
		var bdesc = "Handmade rice flour. Ideal for making yummy Idiyappam and kolukkattai.";
		var bpnpc = {pn:"Idiyappam flour", pc:"YF110"};
		var price = [65,65,65];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF110";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF110');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	
	
	
	if (getid == "YF111")
	{
		var sized = ["50g","50g","50g"];
		var bdesc = "Home made idly powder. Best side dish for idly/dosas.";
		var bpnpc = {pn:"Idly powder", pc:"YF111"};
		var price = [30,30,30];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF111";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF111');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YF112")
	{
		var sized = ["50g","50g","50g"];
		var bdesc = "Home made Sambar powder.  Enrich your sambar with the traditional sambar powder.";
		var bpnpc = {pn:"Sambar powder", pc:"YF112"};
		var price = [30,30,30];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF112";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF112');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YF113")
	{
		var sized = ["50g","50g","50g"];
		var bdesc = "Home made Rasam powder.  Improve your rasam with the traditional rasam powder from nalam naturals.";
		var bpnpc = {pn:"Rasam powder", pc:"YF113"};
		var price = [30,30,30];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF113";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF113');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YF114")
	{
		var sized = ["50g","50g","50g"];
		var bdesc = " Home made garlic powder.  Can be eaten with idly/dosa or with rice.";
		var bpnpc = {pn:"Garlic powder", pc:"YF114"};
		var price = [35,35,35];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF114";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF114');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	
	if (getid == "YF115")
	{
		var sized = ["50g","50g","50g"];
		var bdesc = "Home made fish curry powder.  Gives an authentic fish curry flavor to your kulambu varieties";
		var bpnpc = {pn:"Fish curry powder", pc:"YF115"};
		var price = [25,25,25];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF115";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF115');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YF116")
	{
		var sized = ["10nos 1pkt","10nos 1pkt","10nos 1pkt"];
		var bdesc = "Papad made of kambu kilangu and other Indian spices. Best side dish for your variety rices.";
		var bpnpc = {pn:"Topioca Papad", pc:"YF116"};
		var price = [30,30,30];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF116";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF116');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YF117")
	{
		var sized = ["200g","200g","200g"];
		var bdesc = "Organically grown karuppukavuni rice which helps to control sugar level, weight loss. It also known as youthful rice because when you eat this rice your aging of face stop i.e. it reduce in wrinkles. Black rice is a good source of iron, vitamin E, and antioxidants";
		var bpnpc = {pn:"Karuppukavuni", pc:"YF117"};
		var price = [50,50,50];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF117";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF117');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	
	if (getid == "YF201")
	{
		var sized = ["100g","100g","100g"];
		var bdesc = " Enrich your food with Vital’s Dry Nuts Powder which can be infused with milk, milk shakes, smoothies, ice cream/cake toppings etc";
		var bpnpc = {pn:"Dry Nuts Powder", pc:"YF201"};
		var price = [160,160,160];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF201";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF201');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YF202")
	{
		var sized = ["100g","100g","100g"];
		var bdesc = "Enrich your energy with Vital’s protein Powder which can be used as a pre-workout supplement and it can also used as a infused with milk, milk shakes, smoothies, ice cream/cake toppings etc.";
		var bpnpc = {pn:"Protein Powder (Nuts & Seeds)", pc:"YF202"};
		var price = [200,200,200];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF202";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF202');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YF203")
	{
		var sized = ["100g","100g","100g"];
		var bdesc = "Date powder is made with 100% organic dates that have been sorted, pitted, dried, ground, and sieved to produce a fine powder consistency. Unlike regular sugar, date powder contains more nutritional benefits. Easy to use as sugar but with the benefits of dates.";
		var bpnpc = {pn:"Dates Powder", pc:"YF203"};
		var price = [150,150,150];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF203";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF203');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YF204")
	{
		var sized = ["250g","250g","250g"];
		var bdesc = "Ragi improves hemoglobin status and Sprouting it also improves absorption level and digestion. Rich source of Calcium, Iron & Vitamin D, needed for growing children and women. Antioxidant property of ragi helps to fight various chronic diseases";
		var bpnpc = {pn:"Sprouted Ragi Powder", pc:"YF204"};
		var price = [80,80,80];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF204";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF204');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	
	if (getid == "YF205")
	{
		var sized = ["250g","250g","250g"];
		var bdesc = "Sprouted Ragi with Dry Nuts Powder is an extremely healthy and filling drink that you can serve as a breakfast or a snack. Due to the cooling properties of Ragi, this drink is highly recommended in the summer months when the mercury soars high and body needs to cool down and stay hydrated";
		var bpnpc = {pn:"Sprouted Ragi & Nuts Powder", pc:"YF205"};
		var price = [90,90,90];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF205";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF205');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YF206")
	{
		var sized = ["250g","250g","250g"];
		var bdesc = "Sprouting ragi increases the nutrition value and also makes it easier to digest. Dates are an excellent source of iron & fiber and they make the porridge mildly naturally sweet. No Added Sugar, Salt or Milk Powder.";
		var bpnpc = {pn:"Sprouted Ragi & Dates Powder", pc:"YF206"};
		var price = [90,90,90];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF206";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF206');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YF207")
	{
		var sized = ["250g","250g","250g"];
		var bdesc = "Porridge Mix is a wonderful blend of Sprouted Ragi & Raw Banana Powder. It is made from 100% natural & the finest quality of ingredients. The sprouting process enhances the nutrient level of Ragi (it activates enzymes level, increases Vitamin C and minerals) and makes it easily digestible. Raw Banana powder increases the nutrients & adds a unique flavour. Nutrients & Texture make the porridge mix suitable for all ages.";
		var bpnpc = {pn:"Sprouted Ragi  & Banana Powder", pc:"YF207"};
		var price = [85,85,85];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF207";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF207');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YF208")
	{
		var sized = ["250g","250g","250g"];
		var bdesc = "Ragi is a great source of iron,calcium and dietry fibre. Sprouting ragireleases the locked nutrients and makes it an easily digestible superfood. Our mix contains no chemical preservatives or added sugar or salt.. Nutrients & Texture make the porridge mix suitable for all ages.";
		var bpnpc = {pn:"Sprouted Ragi  & Almond Powder", pc:"YF208"};
		var price = [90,90,90];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF208";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF208');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YF209")
	{
		var sized = ["250g","250g","250g"];
		var bdesc = "Palm Jaggery is rich in calcium, iron and other useful vitamins and minerals. Eating jaggery 7 months before delivery is so beneficial for the mom. It successfully purifies breast milk by removing impurities. Boost your Energy, It cleans up your system.  It works as a Digestive Agent, provides smooth and healthy skin";
		var bpnpc = {pn:"Sprouted Weight Loss Healthmix", pc:"YF209"};
		var price = [170,170,170];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF209";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF209');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YF210")
	{
		var sized = ["250g","250g","250g"];
		var bdesc = "Urad dhal is the richest source of protein and vitamin B. It improves bone health and good for skin and hair. It helps to manage diabetes.";
		var bpnpc = {pn:"Blackgram Flour", pc:"YF210"};
		var price = [90,90,90];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYF210";
		window.history.pushState({"html":"","pageTitle":""},"", '?YF210');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	
	if (getid == "YO101")
	{
		var sized = ["50g","50g","50g"];
		var bdesc = "This muligai palpodi contains the herbs like Kadukkai, Thandikkai, Nelli, Indhu salt, val pepper,clove and cardamom. This will helps to strengthen your teeth and protect from any dental problems";
		var bpnpc = {pn:"Muligai Palpodi", pc:"YO101"};
		var price = [60,60,60];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYO101";
		window.history.pushState({"html":"","pageTitle":""},"", '?YO101');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YO102")
	{
		var sized = ["100g","100g","100g"];
		var bdesc = "Hand made natural biodegradable bamboo with activated charcoal. Our organically grown bamboo is naturally antibacterial and biodegradable. It helps in better whitening and prevent foul breath, fighting plaque and bacteria for better oral health.";
		var bpnpc = {pn:"Bamboo tooth brush", pc:"YO102"};
		var price = [60,60,60];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYO102";
		window.history.pushState({"html":"","pageTitle":""},"", '?YO102');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YO103")
	{
		var sized = ["100g","100g","100g"];
		var bdesc = "It help in rapid detox, cleanses deep pores, Cleans and clears skin, removes Tan, Brightens skin and remove pigmentation<br>Provides multi functional skin benefits. Contains the natural goodness of Charcoal,";
		var bpnpc = {pn:"Natural Soap-Charcoal", pc:"YO103"};
		var price = [59,59,59];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYO103";
		window.history.pushState({"html":"","pageTitle":""},"", '?YO103');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YO104")
	{
		var sized = ["100g","100g","100g"];
		var bdesc = "It deeply penetrates skin to restore moisture, enhance elasticity, smooth wrinkles, stimulate collagen production, and heal cracks caused by dryness. Neem helps in reducing pigmentation and also acts as a moisturising agent.";
		var bpnpc = {pn:"Natural Soap-Neem", pc:"YO104"};
		var price = [59,59,59];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYO104";
		window.history.pushState({"html":"","pageTitle":""},"", '?YO104');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	
	if (getid == "YO105")
	{
		var sized = ["100g","100g","100g"];
		var bdesc = "Multani mitti has exfoliating properties. Multani mitti has been used for centuries to absorb dirt and oil from the skin and decontaminate it. It also has toning effects on the skin. Hence, it can reduce the size of skin pores by drawing out excess oil and grime from them.";
		var bpnpc = {pn:"Natural Soap- Multhanimatti", pc:"YO105"};
		var price = [59,59,59];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYO105";
		window.history.pushState({"html":"","pageTitle":""},"", '?YO105');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YO106")
	{
		var sized = ["100g","100g","100g"];
		var bdesc = "For thousands of years, aloe has been recognized as one of nature's most remarkable herbs for health and beauty. The plant’s leaves are filled with a gel that contains more than 75 known substances, which include vitamins, minerals, enzymes, proteins, polysaccharides and biological stimulators. Aloe, prized for its anti-inflammatory properties, helps relieve itching and treat sunburn.";
		var bpnpc = {pn:"Natural Soap- Aloevera", pc:"YO106"};
		var price = [59,59,59];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYO106";
		window.history.pushState({"html":"","pageTitle":""},"", '?YO106');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	if (getid == "YO107")
	{
		var sized = ["100g","100g","100g"];
		var bdesc = "Vetiver soap is rejuvenates skin and boosts immune system and also speed up eradication of scars and other marks from skin. It is rich in antiseptic properties. Vetiver soap is fight with pigmentation, acne and also reduces oils from body and face. Vetiver has an earthy aroma, similar to patchouli with a touch of lemon.";
		var bpnpc = {pn:"Natural Soap - Vettiver", pc:"YO107"};
		var price = [59,59,59];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYO107";
		window.history.pushState({"html":"","pageTitle":""},"", '?YO107');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";


	}
	if (getid == "YO108")
	{
		var sized = ["1 pkt 10 sticks","1 pkt 10 sticks","1 pkt 10 sticks"];
		var bdesc = "Vetiver soap is rejuvenates skin and boosts immune system and also speed up eradication of scars and other marks from skin. It is rich in antiseptic properties. Vetiver soap is fight with pigmentation, acne and also reduces oils from body and face. Vetiver has an earthy aroma, similar to patchouli with a touch of lemon.";
		var bpnpc = {pn:"Natural Mosquito Sticks", pc:"YO108"};
		var price = [25,25,25];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYO108";
		window.history.pushState({"html":"","pageTitle":""},"", '?YO108');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.pointerEvents = "none";
		document.getElementById("ManualCust").style.backgroundColor = "Grey";
		document.getElementById("ManualCust").innerHTML = "Non-Customizable";
		
	}
	// Fashion Accessories

	if (getid == "YD101")
	{
		var sized = ["gown fully stitched up to 44 size , gown length 54inches","gown fully stitched up to 44 size , gown length 54inches","gown fully stitched up to 44 size , gown length 54inches"];
		var bdesc = "Good quality embroidered heavy georgette Anarkali outfit. <br>Gown : Heavy georgette with fully embroidery work. Fully stitched.<br>Inner: Silk<br>Dupatta: soft net with fancy lace border<br>Size: gown fully stitched up to 44 size , gown length 54inches";
		var bpnpc = {pn:"Georgette Anarkali outfit orange color", pc:"YD101"};
		var price = [1350,1350,1350];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD101";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD101');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";


	}
	if (getid == "YD102")
	{
		var sized = ["gown fully stitched up to 44 size , gown length 54inches","gown fully stitched up to 44 size , gown length 54inches","gown fully stitched up to 44 size , gown length 54inches"];
		var bdesc = "Good quality embroidered heavy georgette Anarkali outfit. <br>Gown : Heavy georgette with fully embroidery work. Fully stitched.<br>Inner: Silk<br>Dupatta: soft net with fancy lace border<br>Size: gown fully stitched up to 44 size , gown length 54inches";
		var bpnpc = {pn:"Georgette Anarkali outfit pink color", pc:"YD102"};
		var price = [1350,1350,1350];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD102";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD102');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		
	}
	if (getid == "YD103")
	{
		var sized = ["gown fully stitched up to 44 size , gown length 54inches","gown fully stitched up to 44 size , gown length 54inches","gown fully stitched up to 44 size , gown length 54inches"];
		var bdesc = "Good quality embroidered heavy georgette Anarkali outfit. <br>Gown : Heavy georgette with fully embroidery work. Fully stitched.<br>Inner: Silk<br>Dupatta: soft net with fancy lace border<br>Size: gown fully stitched up to 44 size , gown length 54inches";
		var bpnpc = {pn:"Georgette Anarkali outfit  blue color", pc:"YD103"};
		var price = [1350,1350,1350];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD103";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD103');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";


	}
	if (getid == "YD104")
	{
		var sized = ["gown fully stitched up to 44 size , gown length 54inches","gown fully stitched up to 44 size , gown length 54inches","gown fully stitched up to 44 size , gown length 54inches"];
		var bdesc = "Good quality embroidered heavy georgette Anarkali outfit. <br>Gown : Heavy georgette with fully embroidery work. Fully stitched.<br>Inner: Silk<br>Dupatta: soft net with fancy lace border<br>Size: gown fully stitched up to 44 size , gown length 54inches";
		var bpnpc = {pn:"Georgette Anarkali outfit green color", pc:"YD104"};
		var price = [1350,1350,1350];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD104";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD104');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		
	}
	
	if (getid == "YD105")
	{
		var sized = ["Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters"];
		var bdesc = "Pure ikkat cotton dress material in orange and white color.<br>Size: Top :2.5meters<br>Bottom :2 meters<br>Duppata :2.5 meters";
		var bpnpc = {pn:"Cotton dress material ", pc:"YD105"};
		var price = [900,900,900];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD105";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD105');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";


	}
	if (getid == "YD106")
	{
		var sized = ["Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters"];
		var bdesc = "Pure ikkat cotton dress material in orange and white color.<br>Size: Top :2.5meters<br>Bottom :2 meters<br>Duppata :2.5 meters";
		var bpnpc = {pn:"Cotton dress material ", pc:"YD106"};
		var price = [900,900,900];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD106";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD106');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		
	}
	if (getid == "YD107")
	{
		var sized = ["Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters"];
		var bdesc = "Pure ikkat cotton dress material in orange and white color.<br>Size: Top :2.5meters<br>Bottom :2 meters<br>Duppata :2.5 meters";
		var bpnpc = {pn:"Silkmix chudidhar material 1", pc:"YD107"};
		var price = [1450,1450,1450];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD107";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD107');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";


	}
	if (getid == "YD108")
	{
		var sized = ["Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters"];
		var bdesc = "Pure ikkat cotton dress material in orange and white color.<br>Size: Top :2.5meters<br>Bottom :2 meters<br>Duppata :2.5 meters";
		var bpnpc = {pn:"Silkmix chudidhar material 2", pc:"YD108"};
		var price = [1450,1450,1450];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD108";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD108');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		
	}
	
	if (getid == "YD109")
	{
		var sized = ["Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters"];
		var bdesc = "Pure ikkat cotton dress material in orange and white color.<br>Size: Top :2.5meters<br>Bottom :2 meters<br>Duppata :2.5 meters";
		var bpnpc = {pn:"Silkmix chudidhar material 3", pc:"YD109"};
		var price = [1450,1450,1450];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD109";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD109');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		
	}
	
	if (getid == "YD110")
	{
		var sized = ["Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters"];
		var bdesc = "Pure ikkat cotton dress material in orange and white color.<br>Size: Top :2.5meters<br>Bottom :2 meters<br>Duppata :2.5 meters";
		var bpnpc = {pn:"Silkmix chudidhar material 4", pc:"YD110"};
		var price = [1450,1450,1450];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD110";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD110');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		
	}
	
	if (getid == "YD111")
	{
		var sized = ["Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters"];
		var bdesc = "Pure ikkat cotton dress material in orange and white color.<br>Size: Top :2.5meters<br>Bottom :2 meters<br>Duppata :2.5 meters";
		var bpnpc = {pn:"Silkmix chudidhar material 5", pc:"YD111"};
		var price = [1450,1450,1450];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD111";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD111');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		
	}
	
	if (getid == "YD112")
	{
		var sized = ["Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters","Size: Top :2.5meters Bottom :2 meters Duppata :2.5 meters"];
		var bdesc = "Pure ikkat cotton dress material in orange and white color.<br>Size: Top :2.5meters<br>Bottom :2 meters<br>Duppata :2.5 meters";
		var bpnpc = {pn:"Silkmix chudidhar material 6", pc:"YD112"};
		var price = [1450,1450,1450];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD112";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD112');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		
	}
	
	if (getid == "YD113")
	{
		var sized = ["Size: Saree length – 6 meters Width – 42inches","Size: Saree length – 6 meters Width – 42inches","Size: Saree length – 6 meters Width – 42inches"];
		var bdesc = "From the house of the most unique silk, 'BUTTER' that is sustainable, eco-friendly. It keeps you cool in summer and warm in winder. Blouse piece attached.<br>Size: Saree length – 6 meters<br>Width – 42inches";
		var bpnpc = {pn:"Butter cotton saree 1", pc:"YD113"};
		var price = [650,650,650];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD113";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD113');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		
	}
	
	if (getid == "YD114")
	{
		var sized = ["Size: Saree length – 6 meters Width – 42inches","Size: Saree length – 6 meters Width – 42inches","Size: Saree length – 6 meters Width – 42inches"];
		var bdesc = "From the house of the most unique silk, 'BUTTER' that is sustainable, eco-friendly. It keeps you cool in summer and warm in winder. Blouse piece attached.<br>Size: Saree length – 6 meters<br>Width – 42inches";
		var bpnpc = {pn:"Butter cotton saree 2", pc:"YD114"};
		var price = [650,650,650];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD114";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD114');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		
	}
	
	if (getid == "YD115")
	{
		var sized = ["Size: Saree length – 6 meters Width – 42inches","Size: Saree length – 6 meters Width – 42inches","Size: Saree length – 6 meters Width – 42inches"];
		var bdesc = "From the house of the most unique silk, 'BUTTER' that is sustainable, eco-friendly. It keeps you cool in summer and warm in winder. Blouse piece attached.<br>Size: Saree length – 6 meters<br>Width – 42inches";
		var bpnpc = {pn:"Butter cotton saree 3", pc:"YD115"};
		var price = [650,650,650];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD115";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD115');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		
	}
	
	if (getid == "YD116")
	{
		var sized = ["Size: Saree length – 6 meters Width – 42inches","Size: Saree length – 6 meters Width – 42inches","Size: Saree length – 6 meters Width – 42inches"];
		var bdesc = "From the house of the most unique silk, 'BUTTER' that is sustainable, eco-friendly. It keeps you cool in summer and warm in winder. Blouse piece attached.<br>Size: Saree length – 6 meters<br>Width – 42inches";
		var bpnpc = {pn:"Butter cotton saree 4", pc:"YD116"};
		var price = [650,650,650];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD116";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD116');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		
	}
	
	if (getid == "YD117")
	{
		var sized = ["Size: Saree length – 6 meters Width – 42inches","Size: Saree length – 6 meters Width – 42inches","Size: Saree length – 6 meters Width – 42inches"];
		var bdesc = "From the house of the most unique silk, 'BUTTER' that is sustainable, eco-friendly. It keeps you cool in summer and warm in winder. Blouse piece attached.<br>Size: Saree length – 6 meters<br>Width – 42inches";
		var bpnpc = {pn:"Butter cotton saree 5", pc:"YD117"};
		var price = [650,650,650];
		var defcolor = ["-","-","-"];
		document.getElementById("whatsid").href = "https://api.whatsapp.com/send?text=https%3A%2F%2Fyukthimart.com%2Fshop.html%3FYD117";
		window.history.pushState({"html":"","pageTitle":""},"", '?YD117');
		document.getElementById("sizecombo").style.pointerEvents = "none";
		document.getElementById("buttoncp1").style.pointerEvents = "none";
		document.getElementById("buttoncp2").style.pointerEvents = "none";
		document.getElementById("buttoncp3").style.pointerEvents = "none";
		
	}
	
	
	
	document.getElementById("pricedisplay").innerHTML = "₹ " + price;
	document.getElementById("pricedisplay").value = price[0];
	document.getElementById("ssize").value = price[0];
	document.getElementById("msize").value = price[1];
	document.getElementById("lsize").value = price[2];
	document.getElementById("ssizedesc").innerHTML = sized[0];
	document.getElementById("msizedesc").innerHTML = sized[1];
	document.getElementById("lsizedesc").innerHTML = sized[2];
	document.getElementById("valsize").value = "S";
	document.getElementById("prodqty2").value = 1;
	document.getElementById("pdesc").innerHTML = bdesc;
	document.getElementById("pname").innerHTML = bpnpc.pn;
	document.getElementById("pcode").innerHTML = bpnpc.pc;
	document.getElementById("buttoncp1").innerHTML = defcolor[0];
	document.getElementById("buttoncp2").innerHTML = defcolor[1];
	document.getElementById("buttoncp3").innerHTML = defcolor[2];
	document.getElementById("buttoncp1").value = defcolor[0];
	document.getElementById("buttoncp2").value = defcolor[1];
	document.getElementById("buttoncp3").value = defcolor[2];
	document.getElementById("overlay").style.backgroundColor = "White";
	document.getElementById("mainoverlayimg").style.backgroundColor =  "White";
	prodsizes();
}
