
//Initialize function
var keyname;
var path=[];
var currentpos=0;

var init = function () {
    // TODO:: Do your initialization job
    console.log('init() called');
    document.addEventListener('visibilitychange', function() {
        if(document.hidden){
            // Something you want to do when hide or exit.
        } else {
            // Something you want to do when resume.
        }
    });
 

    document.addEventListener('keydown', function(e) 
    		{
		console.log('Key code : ' + e.keyCode);
		switch(e.keyCode)
		{
		case 37:
			{
			document.getElementById('pressed_button').innerHTML='pressed_button=left';
			break;
			}
		case 38:
			{
			document.getElementById('pressed_button').innerHTML='pressed_button=up';
			break;
			}
		case 39:
			{
			document.getElementById('pressed_button').innerHTML='pressed_button=right';
			break;
			}
		case 40:
			{
			document.getElementById('pressed_button').innerHTML='pressed_button=down';
			break;
			}
		case 13:
			{
			document.getElementById('pressed_button').innerHTML='pressed_button=OK';
			break;
			}
		case 10009:
			{
			document.getElementById('pressed_button').innerHTML='pressed_button=return';
			break;
			}
		case 10252:
			{
			document.getElementById('pressed_button').innerHTML='pressed_button=play';
			break;
		}
			break;
			}
		

    		})
    		



getSysInfo();
	document.getElementById('volume').innerHTML="volume="+tizen.tvaudiocontrol.getVolume();
	function onVolumeChanged(volume) {
	document.getElementById('volume').innerHTML="volume="+volume;
	console.log("hi");
    }
	
	
tizen.tvaudiocontrol.setVolumeChangeListener(onVolumeChanged);    


tizen.filesystem.resolve('removable_sda1', function(dir)
        {
           documentsDir = dir;
           dir.listFiles(listFilesOnSuccess, listFilesOnError);
        }, function(e)
        {
           console.log("Error" + e.message);
        }, "rw");

function listFilesOnSuccess(files){
    
    
    for(var i=0; i<files.length;i++){
//        console.log(files[0].fullPath);
//        console.log(files[1].fullPath);

//    	if(files[i].name.match(/.*\.(mp4|avi|mkv)$/i))
        path[i]=files[i].fullPath;
        console.log(path[2]);
        

    }
    document.getElementById('video').src=path[2];

    console.log(files);
    item_count = $("ul[data-role='listview']").find("a").length;
    
}

function listFilesOnError(){
    console.log("failed");

    }

console.log(path[0])


};
window.onload =init 



function getSysInfo()
{	
document.getElementById('version').innerHTML='version=' + webapis.productinfo.getVersion()+ ' model='+webapis.productinfo.getModel();
document.getElementById('ip').innerHTML='ip: '+webapis.network.getIp();

};










