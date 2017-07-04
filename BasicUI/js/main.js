window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    var mainPage = document.querySelector('#main');

    mainPage.addEventListener("click", function() {
        var contentText = document.querySelector('#content-text');
        tizen.application.

        contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
    });
};
function func()
{
	var w=window.innerWidth;
	var h=window.innerHeight;
	alert(w+'x'+h);
}




function hide() {
	var img = document.getElementById('img');
    img.style.visibility = (img.style.visibility=='visible')? "hidden":"visible";
	    }