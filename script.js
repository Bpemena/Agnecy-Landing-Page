function valid(form1){
	var n1 = form1.email.value;
	var num = 0;
	var humanH = /^[a-z' 'a-z]{4,}$/i;
	if (!humanH.test(n1)){document.getElementById('email').classList.add('error');}
		else{document.getElementById('email').classList.remove('error');num++;}
	if (num===1){form.submit();}
}