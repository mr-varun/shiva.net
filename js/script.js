var a=prompt("Enter UserName");
 var b=prompt("Enter password");
  	if ((a== "varun" && b== "1024") || (a=="divya" && b== "5123") || (a=="shiva" && b=="1426"))
  	{
  	    window.location.href="server.html";
  	}
  	else
  	{
  		alert("invalid details");
  		window.location.href="login.html";
  	}
  	