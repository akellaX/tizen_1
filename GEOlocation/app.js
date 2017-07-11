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


function getPost()
{
	$.ajax({
	    url: 'http://83.69.213.178:8081/init?device_id=10',             // указываем URL и
	    dataType : "json",                     // тип загружаемых данных
	    success: function (data, textStatus) { // вешаем свой обработчик на функцию success
	    console.log(data.game_id+" "+ data.status);
	    console.log("status:"+textStatus);
	        
	    }
	})
}

function getCoord() {
	var options = {
			  enableHighAccuracy: true,
			  timeout: 5000,
			  maximumAge: 0
			};
	navigator.geolocation.getCurrentPosition(success, error, options);

}

function success(pos) {
	  var crd = pos.coords;
//		  console.log(crd.latitude+" "+crd.longitude);
			$.ajax({
			    url: 'http://83.69.213.178:8081/check_point?game_id=10&latitude='+crd.latitude+'&longitude='+crd.longitude,             // указываем URL и
			    dataType : "json",                     // тип загружаемых данных
			    success: function (data, textStatus) { // вешаем свой обработчик на функцию success
			    console.log("status:"+data.game_id+" distance:"+ data.distance+" remainded_points:"+data.remainded_points+" current_point:"+data.current_point);
			    console.log("status of quory:"+textStatus);
			    document.body.innerHTML= ' <div class="ui-content content-padding"><p >status '+data.game_id+'</p><p>distance '+data.distance+'</p><p>remainded_points '+data.remainded_points+'</p><p>current_point '+data.current_point+'</p> <button id="getPost" onclick="getCoord()">getINF </button></div>';
				
				
				
				

			    }
			})


	};
	function error(err) {
		  console.warn("fail_in_coord");
		};
		
function getLoc()
{		

}