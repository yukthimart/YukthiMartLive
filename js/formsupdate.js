function sendformdetails()
{
	
	  var product_code=[];
	  var product_size=[];
	  var product_color=[];
	  var product_qty=[];
	  var total_product_price=[];
	  var productlist = {p_code:product_code,p_size:product_size,p_color:product_color,p_qty:product_qty,t_p_price:total_product_price};

	  var elementss=document.querySelectorAll("td");

	if (elementss.length !=0 )
	{
	   for (var i=0;i<elementss.length;i=i+6){

	   product_code.push(elementss[0+i].innerText);
	   product_size.push(elementss[1+i].innerText);
	   product_color.push(elementss[2+i].innerText);
	   product_qty.push(elementss[3+i].innerText);
	   total_product_price.push(elementss[4+i].innerText);
	}
	location.replace("https://yukthimart.com/OrderConfirmation.html");
	
	
	customer_name_detail = document.getElementById("username").value;
	customer_email_detail = document.getElementById("email").value;
	customer_phone_detail = document.getElementById("phone").value;
	customer_address_detail = document.getElementById("address").value;
	giftcheckval = document.getElementById("giftcheck");  
	gifttextval = document.getElementById("gifttxt").value; 
	giftval = "No Gift";
	if (giftcheckval.checked == true)
	{  
		giftval = "Gift Yes - " + gifttextval;
	}
	else if (giftcheckval.checked == false && gifttextval != "")
	{  
		giftval = "Gift No - " + gifttextval;
	}
	else if (giftcheckval.checked == true && gifttextval == "")
	{  
		giftval = "No Gift";
	}
	else 
	{
		giftval = "No Gift";
	}
	var total_price_detail = document.querySelector("#ptotalvalue").innerText;
	
	var finalproduct_val = 'Products | Size | Color | Quantity | Price \n' + '\n';
	for(formi = 0; formi < productlist.p_code.length; formi++)
	{
		var p_name_val = productlist.p_code[formi];
		var p_size_val = productlist.p_size[formi];
		var p_color_val = productlist.p_color[formi];
		var p_qty_val = productlist.p_qty[formi];
		var t_p_price_val = productlist.t_p_price[formi];
		finalproduct_val = finalproduct_val + p_name_val + ' | ' + p_size_val + ' | ' + p_color_val + ' | ' + p_qty_val + ' | ₹' + t_p_price_val + '\n' + '\n';
		
	}
	finalproduct_val = finalproduct_val + 'Total Price is | ₹' + total_price_detail;
	console.log(finalproduct_val);
	
	// Get data
	var data = {
	  'entry.922228230': customer_email_detail,
	  'entry.1981601459': customer_name_detail,
	  'entry.551674967': customer_phone_detail,
	  'entry.1301694252': customer_address_detail,
	  'entry.2117501197': finalproduct_val,
	  'entry.597279691': giftval
	  //'entry.407126866': $('#form-email').val()
	};	
	/* var data = {
	  'entry.1725802741': customer_email_detail,
	  'entry.2091077101': customer_name_detail,
	  'entry.924191549': customer_phone_detail,
	  'entry.875301141': customer_address_detail,
	  'entry.1609937277': finalproduct_val
	  //'entry.407126866': $('#form-email').val()
	};
 */
	// Validate form
	var formSuccess = true;

	if (formSuccess) 
	{
	  // Send request
	  $.ajax({
		url: 'https://docs.google.com/forms/d/e/1FAIpQLSdbzwoHuzvKV9ZlstZwzCMnCmytW-SEaDVd_mXNweGIgYHFNA/formResponse',
		type: 'POST',
		crossDomain: true,
		dataType: "xml",
		data: data
	  });
	}

}
}