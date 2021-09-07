function validate_email(){
			var email = document.getElementById('email').value;
			var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(email.length==0)
			{
				alert("This field can not be left empty!")
				return(false)
			}
			else	
			if (regex.test(email))
	  		{
	  			return (true)
 			}
    		alert("You have entered an invalid email address!")
    		return (false)
		}

		function validate_phone(){
			var phone = document.getElementById('phone').value;
			if(phone.length==10)
			{
				document.getElementById('pn').innerHTML = "Phone Number";
				document.getElementById('pn').style.color = "#E5E5E5";
				return true
			}
			document.getElementById('pn').innerHTML = "Enter a valid 10 digit number!";
			document.getElementById('pn').style.color = "red";
//			window.alert("Enter a valid 10 digit number!")
			return false
		}