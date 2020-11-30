var version='0.0.1',name='MyFunds',port=process.env.PORT||9999,nodemailer=require('nodemailer'),kwport = nodemailer.createTransport({host:"smtp.gmail.com",port:465,secure:true,auth:{user:"dashekarld@gmail.com",pass:"theophilus"}}),mongo=require('mongodb'),formidable=require('formidable'),MongoClient=mongo.MongoClient,uri="mongodb+srv://myfunfs:DgpArwtmZysmZTGS@cluster0.31eaj.mongodb.net",url='mongodb://127.0.0.1:27017',dbn='myfunds1',CL='',ADM='',fs=require('fs'),express=require('express'),app=express(),server=app.listen(port,calldb),io=require('socket.io')(server),path=require('path'),db='',_dirname=path.resolve(),ll='',ids=['admindl','groupob'],la=['group','security pass','individual target','collector','year','month','members','funds','backup'],mns=['January','February','March','April' ,'May','June','July','August','September','October','November','December'],ma=['available funds','loans','payments','reciever','complete'],al=['launched','organisation','year','month','groups','mid','dropout'],mea=['Name','contact','address'],loa=['reciever','amount','date','paid','date paid'],cma=['reciever','amount recieved','date recieved'],FI='',ga=['group','security pass','individual target','collector',"collector contact",'collector email','CID'],afa=['member','funds','purpose','confirmed'],ma2=['Name','Contact','Email','logs','img'],mail='dashekarld@gmail.com';



app.use(express.static(_dirname));

app.get('/',function(req,res){
	res.end(fsread('myfunds.html'));
});
app.get('/loader',function(req,res){
	res.end(fsread('uploader.html'));
});
app.get('/fileupload',function(req,res){
	var form=new formidable.IncomingForm();
	form.parse(req,function(err,fields,files){
		var op=files.filetoupload.path,np=_dirname+'/img/'+files.filetoupload.name;
		fs.rename(op,np,function(err){
			if(err) throw err;
			clg(np+' written');
			res.end();
		});
	});
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
	var o={},y=date('y'),a=la;o.fid=ids[1];for(var i=0;i<ocn(a);i++)o[a[i]]=(i==6||i==7||i==8)?{}:'';
	o[a[4]]=y;o[a[5]]=date('m');
	o[a[7]][y]={};for(var i in mns)o[a[7]][y][mns[i]]=mntob();
	return o;
}
var mntob=function(){
	var o={};for(var i=0;i<ocn(ma);i++)o[ma[i]]=(i==0||i==3)?'':{};return o;
}
var memob=function(o){
	var d={};d[mea[0]]=o.n;d[mea[1]]=o.c;return d;
}
var adminob=function(){
	var o={};o.fid=ids[0];for(var i=0;i<ocn(al);i++)o[al[i]]=(i==4||i==5||i==6)?{}:'';
	return o;
}
var mrgar=function(a,b){
	var o={};for(var i in a)o[a[i]]=b[i];
	return o;
}
var makeid=function(o){
	var n=o.n.split(' '),mn=breaktxt(o.c)[1],d=o.m;mn=breaktxt(mn);mn=revar(mn[0])+revar(mn[1]);
	n=revar(n[0].slice(ocn(n[0])-2,ocn(n[0])))+revar(n[1].slice(ocn(n[1])-2,ocn(n[1])))+d+mn;
	return n;
}
var emto=function(f,t,s,m){
	return {from:f,to:t,subject:s,text:m};
}
var getemails=function(g){
	var a1=ll[al[4]][g][la[6]],a2=[];
	for(var i in a1)a2.push(a1[i][ma2[2]]);
	return a2;
}


function send2all(o){
	var a=getemails(o.g);
	a.forEach(function(to,i,array){
		o.m.to=to;
		kwport.sendMail(o.m,function(err){
			if(err){clg(err);return;}	
			if(i==ocn(a)-1)o.m.transport.close();
			
		});
	});
}
function sendemail(o){
	kwport.sendMail(o,function(er,inf){
		if(er){clg(er);}else{clg('Email sent successfully..');}
	});
}
function fixreciever(o){
	var id=gid(o.g,o.c),y=date('y'),em=mns[date('m')];
	ll[al[4]][o.g][la[7]][y][em][ma[3]]=o.c;
	
	writelog('ll');
	
}
function fixcollector(o){
	var id=gid(o.g,o.c),lg=ll[al[4]][o.g][la[6]][id],em=lg[ma2[2]],ct=lg[ma2[1]];
	ll[al[4]][o.g].CID=id;
	ll[al[4]][o.g][ga[3]]=o.c;
	ll[al[4]][o.g][ga[4]]=ct;
	ll[al[4]][o.g][ga[5]]=em;
	writelog('ll');
	
}
function fixbio(o){
	for(var i in o.o){
		ll[al[4]][o.g][la[6]][o.i][i]=o.o[i];
	}
	
	writelog('ll');
}
function fixtarget(o){
	
	ll[al[4]][o.g][la[2]]=o.t;
	writelog('ll');
	sendtarfix(o);
	
}
function popmem(o){
	var id=gid(o.g,o.m);
	if(!id)return false;
	ll[al[6]][id]=ll[al[4]][o.g][la[6]][id];
	delete ll[al[4]][o.g][la[6]][id];
	delete ll[al[5]][id];
	
	writelog('ll');
	return true;
	
}
function addmember(o){
	o.o[ma2[3]]={};
	var id=makeid({n:o.o[ma2[0]],c:o.o[ma2[1]],m:ocn(ll[al[4]][o.g][la[6]])+1});
	ll[al[4]][o.g][la[6]][id]=o.o;
	ll[al[5]][id]=o.o[ma2[0]];
	writelog('ll');
	o.o.id=id;o.o.g=o.g;
	sendid(o.o);
	sendmem(o.o);
	
}
function breaktxt(t){
	var b=ocn(t)/2,a=isfloat(b),a=[],d;
	d=(a)?parseInt(b)+1:parseInt(b);
	a.push(t.slice(0,d));a.push(t.slice(d,ocn(t)));
	return a;
}
function isfloat(n){
	var a=n.toString();
	if(a.indexOf('.')>-1)return true;
	return false;
}
function revar(v){
	var a=(typeof v=='number')?v.toString():v,b=a.split(''),c=[],r='';
	for(var i=ocn(b)-1;i>-1;i--)c.push(b[i]);
	for(var i in c)r=r.toString()+c[i];
	return r;
}
function confirmpay(o){
	if(getgroup(o.g).CID!=o.i)return;
	var m=gid(o.g,o.m),y=date('y'),mn=mns[date('m')],fa=(ll[al[4]][o.g][la[7]][y][mn][ma[0]])?parseInt(ll[al[4]][o.g][la[7]][y][mn][ma[0]]):0;
	ll[al[4]][o.g][la[6]][m][ma2[3]][o.t][afa[3]]=true;
	ll[al[4]][o.g][la[7]][y][mn][ma[2]][o.t][afa[3]]=true;
	ll[al[4]][o.g][la[7]][y][mn][ma[0]]=fa+parseInt(ll[al[4]][o.g][la[6]][m][ma2[3]][o.t].d[afa[1]]);
	sendfcon(o);
	writelog('ll');
	
}
function idey(n){
	var a=ll[al[4]][GR][la[6]],d='';
	for(var i in a){
		if(a[i][ma2[0]].toLowerCase()==n.toLowerCase()){d=true;break;}
	}
	return d;
}
function wedy(g){
	var d='';
	for(var i in ll[al[4]])if(i.toLowerCase()==g.toLowerCase()){d=true;break;}
	return d;
}
function getgroup(g){
	var d='';
	for(var i in ll[al[4]])if(i.toLowerCase()==g.toLowerCase()){d=ll[al[4]][i];break;}
	return d;
}
function idok(g,id){
	var a=getgroup(g);
	if(!a)return false;
	if(a[la[6]][id])return true;
	return false;
}
function gid(g,n){
	var nm=ll[al[4]][g][la[6]],b='';
	for(var i in nm)if(nm[i][ma2[0]]==cleaname(n)){b=i;break;}
	return b;
	
}
function addfunds(o){
	var dt=date('f'),id=gid(o.g,o.d[afa[0]]),gr=ll[al[4]][o.g],
	gf=gr[la[7]][date('y')][mns[date('m')]],
	pl=id+'_'+dt;
	o[afa[3]]=false;
	
	gr[la[6]][id][ma2[3]][pl]=o;
	gf[ma[2]][pl]=o;
	sendafunds(o)
}
//senders
function sendtarfix(o){
	var tx='The individual target has been changed from '+o.o+' to '+o.t+', by '+ll[al[4]][o.g][la[6]][o.i][ma2[0]]+'.';
	send2all({g:o.g,m:emto(mail,'','New Individual Target',tx)});
}
function sendid(o){
	var tx='hello '+o[ma2[0]]+'. your group name is "'+o.g+'", group security pass is "'+ll[al[4]][o.g][la[1]]+'" and your member ID is "'+o.id+'".';
	sendemail(emto(mail,o[ma2[2]],'Login Credentials',tx));
	
}
function sendmem(o){
	var  tx=o[ma2[0]]+' has been added to your group.';
	send2all({g:o.g,m:emto(mail,'','New Member Alert!!',tx)});
	
}
function sendafunds(o){
	var tx=o.d[afa[0]]+' sent '+o.d[afa[1]]+' for '+o.d[afa[2]]+'. On '+date('f')+'.';
	send2all({g:o.g,m:emto(mail,'','Added Funds.',tx)});
}
function sendfcon(o){
	var si=gid(o.g,o.m),fn=ll[al[4]][o.g][la[6]][si][ma2[3]][o.t],g=ll[al[4]][o.g],tx=g[la[6]][o.i][ma2[0]]+' has confirmed the '+fn.d[afa[1]]+' remitted by '+fn.d[afa[0]]+' for '+fn.d[afa[2]]+'. now the '+cleaname(ma[0])+' is, '+barme(g[la[7]][date('y')][mns[date('m')]][ma[0]])+'.';
	send2all({g:o.g,m:emto(mail,'','Funds Confirmation',tx)});
}
//
function writelog(o){
	if(o=='ll'&&ll)replace(ADM,'fid',ids[0],ll);
}
function b2a(a,b){
	for(var i in a)if(b[i])a[i]=b[i];
}
function addgroup(o){
	if(!ll)return;
	var a=groupob(),nm=o[la[0]],ci={},id=makeid({n:o[ga[3]],c:o[ga[4]],m:1});ci[ma2[0]]=o[ga[3]];ci[ma2[1]]=o[ga[4]];ci[ma2[2]]=o[ga[5]];ci[ma2[3]]={};
	b2a(a,o);
	a[ga[6]]=id;
	a[ga[4]]=o[ga[4]];
	a[ga[5]]=o[ga[5]]
	ll[al[5]][id]=o[ga[3]];
	a[la[6]][id]=ci;
	ll[al[4]][nm]=a;
	writelog('ll');
	ci.id=id;
	ci.g=nm;
	sendid(ci);
	
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
	if(ll)return;
	var a=al;
	ll=adminob();ll[a[0]]=date('f');ll[a[1]]=og;ll[a[2]]=date('y');ll[a[3]]=mns[date('m')];
	putincol(ADM,ll);
	
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
function barme(t){
	if(!t)return;
	
	var v=(typeof t=='string')?t:t.toString(),k=unbar(v),s=k,a=[],x,y,cx=s.length,st='';
	if(s.length<4)return s;
	for(var i=0;i<cx;i++){
		a.unshift(s.slice(s.length-3,s.length));
		s=s.slice(0,s.length-3);
		if(s.length<4){a.unshift(s);break;}
	}
	for(var i in a){st+=(a[i]+',');}
	st=st.slice(0,st.length-1);
	return st;
	
}
function unbar(t){
	if(!t)return;
	var v=(typeof t=='string')?t:t.toString(),x=v,r='';
	x=x.replace('N','');
	x=x.split(',');
	for(var i in x){
		r+=x[i];
	}
	return r;
}
function isbar(v){
	return parseInt(unbar(v));
}
function capname(n){
	if(n.length==1)return n.toUpperCase();
	var a=(n.charAt(0)).toUpperCase(),b=n.slice(1,n.length).toLowerCase(),c=a+b;return c;
}
function cleaname(n){
	var a=n.split(' '),c='',d=[];
	for(var i=0;i<a.length;i++){if(a[i]){d.push(capname(a[i]));}}
	for(var i=0;i<d.length;i++){if(i==d.length-1){c+=d[i]}else{c+=d[i]+' ';}}
	return c;
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
socket.on('hu2upload',function(){
	socket.emit('uploadme')
});
socket.on('neworg',function(co){
	kickll(co.o);
	var o={};o.l=ll;
	socket.emit('kick',o);
});
socket.on('newgroup',function(co){
	if(!ll)return;
	addgroup(co);
	var o={};o.g=ll[al[4]];o.k=co[la[0]];o.s=co[la[1]];
	socket.emit('groupadd',o);
	
});
socket.on('addfunds',function(co){
	if(!ll)return;
	addfunds(co);
	var o={};o.g=co.g;o.o=ll[al[4]][o.g];
	socket.emit('fundsadd',o);
});
socket.on('confirmpay',function(co){
	if(!ll)return;
	confirmpay(co);
	co.go=ll[al[4]][co.g];
	socket.emit('payconfirm',co);
	
});
socket.on('addmember',function(co){
	if(!ll)return;
	addmember(co);
	co.go=ll[al[4]][co.g];
	socket.emit('memberadd',co);
});
socket.on('rmvmember',function(co){
	if(!ll)return;
	var d=popmem(co);
	co.c=d;co.go=ll[al[4]][co.g];
	socket.emit('memberrmv',co);
	
});
socket.on('fixtarget',function(co){
	if(!ll)return;
	fixtarget(co);
});
socket.on('fixbio',function(co){
	if(!ll)return;
	fixbio(co);
});
socket.on('fixcollector',function(co){
	if(!ll)return;
	fixcollector(co);
	co.go=ll[al[4]][co.g];
	socket.emit('collectorfix',co);
	
});
socket.on('fixreciever',function(co){
	if(!ll)return;
	fixreciever(co);
	co.go=ll[al[4]][co.g];
	socket.emit('recieverfix',co);
	
});




socket.on('imagetest',function(co){
	clg('hello')
	var buff=Buffer.from(co.i);
	clg(buff);
});
/*socket.on('imagetest',async imge => {
	clg('hello');
	var buff=Buffer.from(imge);
	await fs.writeFile('/img',buff).catch(console.error);
	
	
});
*/

/*kugiyanhoto

socket.on('image', async image => {
	var buff=Buffer.from(image);
	await fs.writeFile('/daki',buff).catch(console.error);
	
});

socket.emit('image',image.toString('base64'));
//gaba....
socket.on('image',function(image){
	var img new Image();
	img.src='data:image/jpg;base64,${image}';
	
});
*/



});



