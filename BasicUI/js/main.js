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
function show()
{
//	var img = document.createElement('IMG');
//	img.src = "images/hulk.png";
//	img.width = 100;
//	img.height = 100;	
//	document.body.appendChild(img)
	document.getElementById("img").style.display;

}
function hide() {
	document.getElementById("img").style.display="none";
	
}