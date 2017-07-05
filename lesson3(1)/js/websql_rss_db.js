window.onload = function () {
	
	var indicator = document.getElementById("indicator");
	indicator.style.visibility = "hidden";
	

};


var baseName 	  = "WebBase";
var storeName 	  = "WebBaseStore2";



function getFeed(){
	var indicator = document.getElementById("indicator");
	indicator.style.visibility = "visible";
    	var width = screen.width;
    	var arr = [];
    	var i=0;
	 var FEED_URL = "http://www.3dnews.ru/news/rss/";
	 
	 
	 
	 $(document).ready(function () {
		    $.ajax({
		        type: "GET",
		        url: FEED_URL,
		        dataType: "xml",
		        error: 	 getStorage,  
		        success: xmlParser
		    });
		});

		function xmlParser(xml) {

			indicator.style.display = "none";

		    $(xml).find("item").each(function () {
		    	  var url=$(this).find("enclosure").attr('url')

			        $("#rssContent").append('<div class="feed"><div class="image"><img src=' + url + ' width=' + width + 'px /><div class="title"> Title:' + $(this).find("title").text() 
			        		+ '</div><br><div class="description">Desc: ' + $(this).find("description").text() + '</div><div class="pubDate"> pubDate:' + $(this).find("pubDate").text() 
				        		+ '</div></div>');

		    	  var base=Urlfunc(url);
		    	  setData($(this).find("title").text(), $(this).find("description").text(),url,$(this).find("pubDate").text()) ; // чем плоха данная схема? переделать на передачу массива.
		          

		          
		          i++;
		    });
		    
		    getStorage();
		}
	 
	 

		 var db = openDatabase(baseName, '1.0', 'Test DB', 2 * 1024 * 1024);
		 if(!db){alert("Failed to connect to database.");}
         var msg;
         
     	function onError( err ){
    		console.log( err )
    	}
     	
     	
         
         function setData(title_, description_, image_,pubDate_){

        	 db.transaction(function (tx) {
 tx.executeSql('CREATE TABLE IF NOT EXISTS ' + storeName + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, image TEXT,pubDate TEXT)', [],
		 null,
		 null);            

  tx.executeSql('INSERT INTO ' + storeName + ' (title, description, image, pubDate) VALUES (?, ?, ?, ?)', [title_, description_, image_, pubDate_], null, onError);
         });
         };
         
         function getStorage(){
         db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM ' + storeName, [], function (tx, results) {
               var len = results.rows.length, i;
               msg = "<p>Found rows: " + len + "</p>";
               $("#rssContent").append(msg);
					
               for (i = 0; i < len; i++){
//                  msg = "<p><b>" + results.rows.item(i).title + "</b></p>";
//                  $("#rssContent").append(msg);
            	   $("#rssContent").append('<div class="feed"><div class="image"><img src=' + results.rows.item(i).image + ' width=' + width + 'px /><div class="title"> Title:' + results.rows.item(i).title 
			        		+ '</div><br><div class="description">Desc: ' + results.rows.item(i).description + '</div><div class="pubDate"> pubDate:' + results.rows.item(i).pubDate 
			        		+ '</div></div>');
               }
            }, onError);
         });
         };
}

function Urlfunc(url)
{
	  var canvas = document.createElement("canvas");
	  var ctx = canvas.getContext("2d");
	  var image = new Image();
	  image.src=url;
	  ctx.drawImage(image, 0, 0);    			
	  var base=canvas.toDataURL("image/png")
	  console.log(base);
	  return base;
}
