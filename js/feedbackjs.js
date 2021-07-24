function sendfeedback()
{
	
	customer_name_detail = document.getElementById("feedbackname").value;
	customer_email_detail = document.getElementById("feedbacktxt").value;
	document.getElementById("getfeedbackval").style.display = "none";
	document.getElementById("acknowledgefb").style.display = "block";
	
	// Get data
	var data = {
	  'entry.274916640': customer_name_detail,
	  'entry.444260520': customer_email_detail
	};	
	var formSuccess = true;

	if (formSuccess) 
	{
	  // Send request
	  $.ajax({
		url: 'https://docs.google.com/forms/d/e/1FAIpQLSe8cyvD2Zj8ByhLJHtKmyYRhNs3f8lWI1-qz5b1IplQEDiDeQ/formResponse',
		type: 'POST',
		crossDomain: true,
		dataType: "xml",
		data: data
	  });
	}

}
