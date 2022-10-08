function fun() {
	var username="akhilesh";
	var password="12345";

	// body...
	var inputUserName=document.getElementById("name").value;
	var inputPassword=document.getElementById("password").value;

	if (inputUserName==username && inputPassword==password)
	{
		window.location.href="file:///C:/Users/psaia/OneDrive/Desktop/new%20html%20project/htmlpage.html"
	}
	else
	{
		document.getElementById("status").innerHTML="incorrect <br>username or password!!";

	}
}
