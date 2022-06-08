

function submit_C() {

	var student_num=document.getElementById("NamNum").value;
	var intSur=document.getElementById("surname").value;
	var location=document.getElementById("location").value;
	var time=document.getElementById("time").value;

	
	

	if(student_num.length>0 && intSur.length>0 && location!="Choose Location" && time!="Select Time"){
		alert(intSur +' '+ student_num +" booked a bus seat from " + location + " and it leaves at "+ time );


		//compare Soshanguve
	

		if(location=="Soshanguve to Main Cumpus"){
			if(time=="6:00  AM"){
		 		document.getElementById("sumSMc6").value++;}
		 	if(time=="11:00 AM"){
		 		document.getElementById("sumSMc11").value++;}
		 	if(time=="16:00 PM"){
		 		document.getElementById("sumSMc16").value++;}
		}

		if(location=="Soshanguve to Ga Rankuwa"){
			if(time=="6:00  AM"){
		 		document.getElementById("sumSGa6").value++;}
		 	if(time=="11:00 AM"){
		 		document.getElementById("sumSGa11").value++;}
		 	if(time=="16:00 PM"){
		 		document.getElementById("sumSGa16").value++;}
		}

		if(location=="Soshanguve to Acardia"){
			if(time=="6:00  AM"){
		 		document.getElementById("sumSAc6").value++;}
		 	if(time=="11:00 AM"){
		 		document.getElementById("sumSAc11").value++;}
		 	if(time=="16:00 PM"){
		 		document.getElementById("sumSAc16").value++;}
		}

		//compare Main Cumpus

		if(location=="Main Cumpus to Soshanguve"){
			if(time=="6:00  AM"){
		 		document.getElementById("addSMc6").value++;}
		 	if(time=="11:00 AM"){
		 		document.getElementById("addSMc11").value++;}
		 	if(time=="16:00 PM"){
		 		document.getElementById("addSMc16").value++;}
		}

		if(location=="Main Cumpus to Ga Rankuwa"){
			if(time=="6:00  AM"){
		 		document.getElementById("addSGa6").value++;}
		 	if(time=="11:00 AM"){
		 		document.getElementById("addSGa11").value++;}
		 	if(time=="16:00 PM"){
		 		document.getElementById("addSGa16").value++;}
		}

		if(location=="Main Cumpus to Acardia"){
			if(time=="6:00  AM"){
		 		document.getElementById("addSAc6").value++;}
		 	if(time=="11:00 AM"){
		 		document.getElementById("addSAc11").value++;}
		 	if(time=="16:00 PM"){
		 		document.getElementById("addSAc16").value++;}
		}


		//compare Ga Rankuwa

		if(location=="Ga Rankuwa to Soshanguve"){
			if(time=="6:00  AM"){
		 		document.getElementById("countSMc6").value++;}
		 	if(time=="11:00 AM"){
		 		document.getElementById("countSMc11").value++;}
		 	if(time=="16:00 PM"){
		 		document.getElementById("countSMc16").value++;}
		}

		if(location=="Ga Rankuwa to Main Cumpus"){
			if(time=="6:00  AM"){
		 		document.getElementById("countSGa6").value++;}
		 	if(time=="11:00 AM"){
		 		document.getElementById("countSGa11").value++;}
		 	if(time=="16:00 PM"){
		 		document.getElementById("countSGa16").value++;}
		}

		if(location=="Ga Rankuwa to Acardia"){
			if(time=="6:00  AM"){
		 		document.getElementById("countSAc6").value++;}
		 	if(time=="11:00 AM"){
		 		document.getElementById("countSAc11").value++;}
		 	if(time=="16:00 PM"){
		 		document.getElementById("countSAc16").value++;}
		}

		//compare Acardia
		
		if(location=="Acardia to Soshanguve"){
			if(time=="6:00  AM"){
		 		document.getElementById("appendSMc6").value++;}
		 	if(time=="11:00 AM"){
		 		document.getElementById("appendSMc11").value++;}
		 	if(time=="16:00 PM"){
		 		document.getElementById("appendSMc16").value++;}
		}

		if(location=="Acardia to Main Cumpus"){
			if(time=="6:00  AM"){
		 		document.getElementById("appendSGa6").value++;}
		 	if(time=="11:00 AM"){
		 		document.getElementById("appendSGa11").value++;}
		 	if(time=="16:00 PM"){
		 		document.getElementById("appendSGa16").value++;}
		}

		if(location=="Acardia to Ga Rankuwa"){
			if(time=="6:00  AM"){
		 		document.getElementById("appendSAc6").value++;}
		 	if(time=="11:00 AM"){
		 		document.getElementById("appendSAc11").value++;}
		 	if(time=="16:00 PM"){
		 		document.getElementById("appendSAc16").value++;}
		}





	}
	else alert("incorrect inputs");
	document.getElementById("NamNumCancel").value=sumSM;

}