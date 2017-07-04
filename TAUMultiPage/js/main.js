( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {

                	window.onload = function() {
                		   canvas = document.getElementById("drawingCanvas");
                		   context = canvas.getContext("2d");  
                		   setTimeout("drawboard()");        tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
} () );
 function func()
{
	var w=window.innerWidth;
	var h=window.innerHeight;
	alert(w+"x"+h);
}




function hide() {
	var img = document.getElementById('img');
    img.style.visibility = (img.style.visibility==='visible')? "hidden":"visible";
	    }

function paint() {
	
$("#color_txt").css("color","red");
}


var canvas;
var context;

window.onload = function() {
	   canvas = document.getElementById("drawingCanvas");
	   context = canvas.getContext("2d");  
	   setTimeout("drawFrame()", 20);
}


var squarePosition_x = -50;
var squarePosition_y = 0;
var k=1;

function drawFrame() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();
		context.rect(squarePosition_x, squarePosition_y, 50, 50);
	context.lineStyle = "#109bfc";
	context.lineWidth = 1;
	context.stroke();
	if ((squarePosition_x>250) || (squarePosition_x<-50))
		k*=-1;
	squarePosition_x += k;
	setTimeout("drawFrame()", 20);
}


}
function drawboard()
{
	var b_canvas = document.getElementById("board");
	var b_context = b_canvas.getContext("2d");
	var start_a=0;
	var start b=0;
	for(var i=1;i<=7;i++)
		for(var j=1;j<=7;j++)
			{
			b.context.fillStyle("black")
			b_context.fillRect(a, b, 50, 50);
			a+=50;
			b.context.fillStyle("white")
			b_context.fillRect(a, b, 50, 50);

			
			}
	
}