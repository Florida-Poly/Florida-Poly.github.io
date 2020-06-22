var level = 3;
function hack(){
	if(level == 3){
		var  length = 8,
			charset = "125689",
			passcode = "";
		for (var i = 0, n = charset.length; i < length; ++i) {
			passcode += charset.charAt(Math.floor(Math.random() * n));
		}
		var key = "Your code:  " + passcode
		alert(key);
	}
}
