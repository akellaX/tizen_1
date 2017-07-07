window.hour;
window.minut;
(function () {		

	window.addEventListener("tizenhwkey", function (ev) {
		var activePopup = null,


			page = null,
			pageid = "";

		if (ev.keyName === "back") {
			activePopup = document.querySelector(".ui-popup-active");
			page = document.getElementsByClassName("ui-page-active")[0];
			pageid = page ? page.id : "";

			if (pageid === "main" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});
}());
window.onload=temp();
function checktime() {
	hour = document.getElementById("h").value;
	minut = document.getElementById("m").value;
	console.log(window.hour+" "+window.minut);
	
	alarm = new tizen.AlarmAbsolute(new Date(2017, 6, 7,18,5));
	var appControl = new tizen.ApplicationControl("http://tizen.org/appcontrol/operation/view");
	tizen.alarm.add(alarm, tizen.application.getCurrentApplication().appInfo.id, appControl);
	console.log("Alarm added with id: " + alarm.id);
	document.getElementById('main').style.display='none';

	
//	var curDate=tizen.time.getCurrentDateTime();
//	var h=curDate.getHours();
//	var m=curDate.getMinutes();
//	console.log(h);
//	document.getElementById('time').innerHTML=h + ":" + m;
//	if((h===16)&&(m===25))
//	{singleVibration()
//	document.getElementById('main').style.display='none';
//	}


}

function singleVibration() {
    /* Vibrate for 2 seconds */
    navigator.vibrate(20000);
}
function stopVibration() {
    navigator.vibrate(0);
	document.getElementById('main').style.display='block';

}

function temp() {
	var curDate=tizen.time.getCurrentDateTime();
	var h=curDate.getHours();
	var m=curDate.getMinutes();
	if((h===window.hour)&&(m===window.minut))
	{singleVibration();
	document.getElementById('main').style.display='none';
	}

	
}

