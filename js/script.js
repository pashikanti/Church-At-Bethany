var myform = $("form#contact-form");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "lavanya";
  var template_id = "template_GoSmpYwA";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,"contact-form")
  	.then(function(){ 
	alert("Thank You!!");
	//document.forms['contact-form'].reset();
	//document.getElementById("contact-form").reset();
       //myform.find("button").text("Thank You!");
       myform.find("button").text("Send Your Message");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
	   //myform.find("button").text("Thank You!");
       myform.find("button").text("Send Your Message");
    });
  return false;
});