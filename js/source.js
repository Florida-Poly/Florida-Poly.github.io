function generatePasscode(){
	if(level == 3){
		var  length = 8,
			charset = "125689",
			passcode = "";
		for (var i = 0, n = charset.length; i < length; ++i) {
			passcode += charset.charAt(Math.floor(Math.random() * n));
		}
		console.log(passcode);
		console.log("Enter your passcode at floridapoly.edu/find-the-phoenix-form.php.");
	}
