var loader=(function(){
	
	
	
//hookupload={e:elem,e1:emit}	
	
function init(){
	socket.emit('hu2upload');
	socket.on('uploadme',boot);
	
}	
function boot(o){
	var ip=$$$('form','','',{action:"fileupload",method:"post",enctype:"multipart/form-data"},[fileinput(),but('submit','submit')]);
	APP(VP,ip);
	//hookupload({e:ip,e1:'testupload',fnc:chigaba});
	
	function chigaba(img){
		clg(img);
		socket.emit('imagetest',{i:img});
		socket.on('uploadtest',function(){
			alert('test was successful!!!!!!');
		});
		
	}
}
	
	
	
	
	
	
	return {
		gears:function(){
			init();
		}
	}
	
	
})();