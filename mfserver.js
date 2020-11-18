var version='0.0.1',name='MyFunds',port=process.env.PORT||8080,mongo=require('mongodb'),MongoClient=mongo.MongoClient,uri="mongodb+srv://Rms:Ip95TUNZyg8cSNeK@cluster0.31eaj.mongodb.net/myfunds1?retryWrites=true&w=majority",dbn='myfunds1',CL='',ADM='',fs=require('fs'),express=require('express'),app=express(),server=app.listen(port,calldb),path=require('path'),db='',_dirname=path.resolve(),io=require('socket.io')(server),ll='',ids=['admindl','groupob'],la=['individual amount','collector','year','month','members','funds','backup'],mns=['January','February','March','April' ,'May','June','July','August','September','October','November','December'],ma=['current funds','loans','payments','complete'],al=['launched','organisation','year','month','groups'],mea=['Name','contact','address'],loa=['reciever','amount','date','paid','date paid'],cma=['reciever','amount recieved','date recieved'];




//calldb();
//dboperation(kickll);

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






function seeme(){
	clg(ADM);
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
		seeme();
	});
	
}
function kickll(col){
	if(!col)return;
	ll=adminob();
	putincol(col,ll);
	clg(ll);
	//read(col,dome);
	
	function dome(o){
		clg(o);
	}
}
function dboperation(fnc){
	var client=new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});
	client.connect(function(err){
		if(err){clg(err);return;}
		var collection=client.db(dbn).collection("ADM");
		//read(collection,clg);
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
		
		findone(collection,'fid',ids[0])
		function findone(cl,m,o,fnc){
			if(!cl)return;
			cl.findOne({[m]:o},outcall);
		}

		
		
		client.close();
	});
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
	co.insertOne(ob,incall);
	
}
function replace(co,m,o,n){
	if(!co)return; 
	co.replaceOne({[m]:o},n,incall);
}
function removeall(cl){
	if(!cl)return;
	cl.remove({});
}
function pfindone(cl,m,o,fnc){
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
function pread(cl,calb){
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




io.on('connection',function(socket){



});