function present()
		{
				presentdate=Number(document.getElementById("cdate").value);
				presenttime=Number(document.getElementById("ctime").value);
			if(presentdate=="" && presenttime=="")
			{
				cdate = new Date();
 				cday = Number(cdate.getDate());
 				cmonth = Number(cdate.getMonth()) + 1;
 				cyear = Number(cdate.getFullYear());
 				datestring = cday + "/" + cmonth + "/" + cyear;
 				document.getElementById("cdate").value = datestring;
 
 				chours=Number(cdate.getHours());
 				cminutes=Number(cdate.getMinutes());
 				timestring = chours + ":" + cminutes;
 				document.getElementById("ctime").value = timestring;
 				return true;
 			}
 			else
 			{
 				cdate=document.getElementById("cdate").value;
				cday = Number(cdate.substr(0, 2));
				cmonth = Number(cdate.substr(3, 2));
				cyear = Number(cdate.substr(6, 4));

 				ctime=document.getElementById("ctime").value;
				chours = Number(ctime.substr(0, 2));
				cminutes = Number(ctime.substr(3, 2));
				return false;
 			}
 		}

 	function calculate()
 	{
 		pdate=document.getElementById("bdate").value;
		pday = Number(pdate.substr(0, 2));
		pmonth = Number(pdate.substr(3, 2));
		pyear = Number(pdate.substr(6, 4));

 		ptime=document.getElementById("btime").value;
		phours = Number(ptime.substr(0, 2));
		pminutes = Number(ptime.substr(3, 2));

 		if (present()==true || present()==false)
 		{
 			if(cminutes<pminutes)
			{
				fminutes=(60+cminutes)-pminutes;
				chours-=1;
			}
			else
			{
				fminutes=cminutes-pminutes;
			}
			
			if(chours<phours)
			{
				fhours=(24+chours)-phours;
				cday-=1;
			}
			else{
				fhours=chours-phours;
			}

			if(cday<pday)
			{
				fday=(31+cday)-pday;
				cmonth-=1;
			}
			else{
				fday=cday-pday;
			}

			if(cmonth<pmonth)
			{
				fmonth=(12+cmonth)-pmonth;
				cyear-=1;
			}
			else{
				fmonth=cmonth-pmonth;
			}

			if(cyear>=pyear)
			{
				fyear=cyear-pyear;
			}
			else
 			{
 			document.getElementById("error").innerHTML="Error";
 			}

			document.getElementById("minutes").value=fminutes+" "+"Minutes";
			document.getElementById("hours").value=fhours+" "+"Hours";
			document.getElementById("days").value=fday+" "+"Days";
			document.getElementById("months").value=fmonth+" "+"Months";
			document.getElementById("age").value=fyear+" "+"Years";

		
 		}
 	}