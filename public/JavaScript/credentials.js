
var counter = 0;
var frmhtml = "<div class='section"+counter+"'> <div class='titleForm'><p>Credentials</p><p>Issuing Authority</p><p>Year</p><br></div> <input type='text' name='name"+counter+"' value='' class='rute'> <input type='text' name='' value='' class='rute1'> <input type='date' name='bday' class='rute2'><br> <div class='midInput'> <input type='text' name='' value='' class='rute'> <input type='text' name='' value='' class='rute1'> <input type='date' name='bday' class='rute2'><br> </div> <input type='text' name='' value='' class='rute'> <input type='text' name='' value='' class='rute1'> <input type='date' name='bday' class='rute2'> </div>";

function addToFrm() {
	counter += 1;
	var frm = document.getElementById("dfrm");
	var cfrm = frm.innerHTML;
	console.log(cfrm);

	for(i=0; i<=5; i++){
		console.log('I am a boy, I am going to school');
	}
	frm.innerHTML = cfrm + frmhtml;
	/*console.log(frm.innerHTML);*/
}
