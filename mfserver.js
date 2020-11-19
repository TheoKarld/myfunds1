var version='0.0.1',name='MyFunds',port=process.env.PORT||9999,mongo=require('mongodb'),MongoClient=mongo.MongoClient,uri="mongodb+srv://myfunfs:DgpArwtmZysmZTGS@cluster0.31eaj.mongodb.net",url='mongodb://127.0.0.1:27017',dbn='myfunds1',CL='',ADM='',fs=require('fs'),express=require('express'),app=express(),server=app.listen(port,calldb),io=require('socket.io')(server),path=require('path'),db='',_dirname=path.resolve(),ll='',ids=['admindl','groupob'],la=['individual amount','collector','year','month','members','funds','backup'],mns=['January','February','March','April' ,'May','June','July','August','September','October','November','December'],ma=['current funds','loans','payments','complete'],al=['launched','organisation','year','month','groups'],mea=['Name','contact','address'],loa=['reciever','amount','date','paid','date paid'],cma=['reciever','amount recieved','date recieved'],FI='';


app.use(express.static(_dirname));

app.get('/',function(req,res){
	res.end(fsread('myfunds.html'));
});


var date=function(r){
	var o=new Date(),v;
	if(r=='f')v=o.toUTCString();
	if(r=='m')v=o.getMonth();
	if(r=='y')v=o.getFullYear();
	if(r=='dt')v=o.getDate();
	if(r=='dy')v=o.getDay();
	if(r=='do')v=o;
	if(r=='h')v=o.getHours();
	if(r=='mn')v=o.getMinutes();
	if(r=='s')v=o.getSeconds();
	
	return v;
}
var groupob=function(){
	var o={},y=date('y'),a=la;o.fid=ids[1];for(var i=0;i<ocn(a);i++)o[a[i]]=(i==3||i==4||i==5)?{}:'';
	o[a[4]][y]={};for(var i in mns)o[a[4]][y][mns[i]]=mntob();
	return o;
}
var mntob=function(){
	var o={};o[ma[0]]='';o[ma[1]]={};return o;
}
var memob=function(o){
	var d={};d[mea[0]]=o.n;d[mea[1]]=o.c;return d;
}
var adminob=function(){
	var o={};o.fid=ids[0];for(var i=0;i<ocn(al);i++)o[al[i]]=(i==4)?{}:'';
	return o;
}
var mrgar=function(a,b){
	var o={};for(var i in a)o[a[i]]=b[i];
	return o;
}






function edey(l){
	return fs.existsSync(l);
}
function fsread(l){
	return fs.readFileSync(l);
}
function mkdir(d){
	if(edey(d))return;
	fs.mkdir(d,incall);
}
function calldb(){
	MongoClient.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},function(err,plug){
		if(err){
			clg('error call');
			clg(err);
			return;
		}
		CL=plug;db=plug.db(dbn);ADM=db.collection("ADM");
		clg(name+' version '+version+' is online...');
		//removeall(ADM);
		callog();
	});
	
}
function kickll(og){
	if(!ADM)return;
	var a=al;
	ll=adminob();ll[a[0]]=date('f');ll[a[1]]=og;ll[a[2]]=date('y');ll[a[3]]=mns[date('m')];
	clg(ll);
	//putincol(ADM,ll);
	
}
function shout(err){
	if(!err)clg('LAUNCHED');
}
function cta(o){
	var a=[];for(var i in o)a.push(i);
	return a;
}
function cto(a){
	var o={};
	for(var i in a){o[a[i]]=true;}
	return o;
}
function clonea(a){
	var r=[];
	for(var i in a)r.push(a[i]);
	return r;
}
function jp(o){
	try{return JSON.parse(o);}catch(err){clg(err);}
}
function ocn(o){
	var c=0;
	for(var i in o)c++;
	return c;
}
function putincol(cl,ob){
	if(!cl)return;
	var co=cl;
	if(ob.fid)FI=ob.fid;
	co.insertOne(ob,putcall);
	
}
function putcall(er,re){
	if(!FI)return;
	clg(FI+' was added Successfully.');
	FI='';
}
function replace(co,m,o,n){
	if(!co)return; 
	co.replaceOne({[m]:o},n,incall);
}
function removeall(cl){
	if(!cl)return;
	cl.remove({});
}
function findone(cl,m,o,fnc){
	if(!cl)return;
	cl.findOne({[m]:o},fnc);
}
function outcall(err,dat){
	if(err)clg(err);
	clg(dat);
}
function incall(er,re){
	if(er)clg(er);
}
function read(cl,calb){
	try{
		var r=cl.find(),ar=[];
		r.each(function(err,doc){
			if(err)clg(err);
			if(doc){
				ar.push(doc);
			}else{if(calb)calb(ar);}
		});
	}catch(err){clg(err);}
}
function rmvcollection(c){
	if(!db)return;
	try{
		db.dropCollection(c);
		clg(c+' collection dropped');
	}catch(err){clg(err);}
}
function js(o){
	return JSON.stringify(o);
}
function clg(t){
	console.log(t);
}
function callog(){
	if(!ADM)return;
	read(ADM,logop);
	function logop(a){
		for(var i in a){
			if(a[i].fid==ids[0])ll=a[i];
			
		}
	}
}



io.on('connection',function(socket){

socket.on('amup',function(){
	if(!ll){
		socket.emit('newu');
	}else{
		var o={};o.l=ll;
		socket.emit('kick',o);
	}
});
socket.on('neworg',function(co){
	kickll(co.o);
	var o={};o.l=ll;
	socket.emit('kick',o);
});


});