var login = document.querySelector("#myModalLogin form button");
function login(x){
	var xhttp = new XMLHttpRequest();
	if(xhttp.readyState == 200){
		var auth_key = 20;
		var mob = 8598045589;
		localStorage.setItem('auth_key',auth_key);
		localStorage.setItem('mob',mob);

		$(".certify").hide();
	}
	document.querySelector(".certify").style.display = "none";
}

var check = document.querySelector("[name=check-business]");
var businessReg = document.querySelector(".business a")
businessReg.addEventListener("click", function(){
	check.checked = true;
	document.querySelector("[name=company]").disabled = false;
})
login.addEventListener("click", function(){
 	//login('https://api.wandertribe.in')
// 	$(".certify").hide();
    document.querySelector(".certify").style.display = "none";
})
var signup = document.querySelector("#myModalSignup form button");

if(!check.checked){
	document.querySelector("[name=company]").disabled = true;
}

check.addEventListener("click", function(){
	if(check.checked) 
	    document.querySelector("[name=company]").disabled = false;
	else{
		document.querySelector("[name=company]").disabled = true;
		document.querySelector("[name=company]").value = '';
	}
})

signup.addEventListener("click", function(){
	if(check.checked)
	    opensignup("VENDOR");
	else
		opensignup("CUSTOMER");
})

var reset = document.querySelector("#myModalReset form button");
var reset1 = document.querySelector("#myModalReset1 form button");
var reset2 = document.querySelector("#myModalReset2 form button");

var itemInfo = document.querySelector("input.item-info");
//item-info.innerHTML = 

