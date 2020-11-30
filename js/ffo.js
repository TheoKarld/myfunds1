var ffo=(function(){
	var ffo={},ea=['add funds','confirm funds','request loan','confirm loan','add member','remove member','change individual target','change collector','change reciever','change security pass','my report'],itv='',WV='',XC='',MA=['newreg','login','new group','group','anouncer','addbar',ea[1]],WM='',ga=['group','security pass','individual target','collector',"collector contact",'collector email'],ag=['insert full group name','please choose a secure security pass, as it will be used to access the group.','amount must be in numbers.(eg. 5000 or 5,000).','name of person responsible for collecting the funds','collectors phone number(e.g 08012345678).','collector email'],gra={},a2=[[ga[0],'available funds'],['year','month'],[ga[3],'reciever'],[ga[2]]],GR='',ano={},ma2=['Name','Contact','Email'],gmb={},CF='',ME='',gro={};
	


function init(){
	socket.emit('amup');
	socket.on('newu',callnewreg);
	socket.on('kick',boot);
	
}	
function bringup(cl,cv){
	if(cv){
		ffo.otx('Ready');
		var t=setTimeout(function(){bring();clearInterval(itv);clearTimeout(t);},3000);
	}else{bring();}
	
	function bring(){
		if(WV){XC=VP.childNodes[0];X(WV);}
		APP(VP,cl);
		WV=cl;
		addEvent(VP,'keydown',function(e){
			e=e.code;
			if(e=='Enter'&&hu2x){hu2x();}
		});
	}
}
function hu2x(){
	
}
function callnewreg(){
	if(!ffo.nwrg)newreg();
	bringup(ffo.nwrg);
	WM=MA[0];
}
function boot(o){
	ll=o.l;
	clg(ll);
	callogin();
	
}
function callogin(){
	if(!ffo.login)logob();
	bringup(ffo.login);
	WM=MA[1];
	
}
function callnwgrp(){
	if(!ffo.nwgrp)newgroup();
	bringup(ffo.nwgrp);
	WM=MA[2];
}
function callgroup(g){
	GR=g;
	if(!gra[g])groupdv(g);
	bringup(gra[g]);
	WM=MA[3];
	gro[gn].f1(ME)
}
function anounceme(t,fnc,v){
	if(!ano.f1)anouncer();
	ano.f1(t);
	ano.f2(fnc,v);
}
function calladb(){
	if(!ffo.adb)addbar();
	ffo.abf1();
	bringup(ffo.adb);
	WM=MA[5];
}
function callconf(g){
	if(CF)return;
	CF=confunds(g,date('y'),mns[date('m')]);
	bringup(CF);
	WM=MA[6];
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
function calladbox(){
	if(!ffo.adbox)addbox();
	bringup(ffo.adbox);
	WM=ea[4];
}
function callrmbox(){
	if(!ffo.rmbox)rmvbox();
	bringup(ffo.rmbox);
	WM=ea[5];
}
function calltrgbox(){
	if(!ffo.tgbox)tagbox();
	bringup(ffo.tgbox);
	WM=ea[6];
}
function gid(g,n){
	var nm=ll[al[4]][g][la[6]],b='';
	for(var i in nm)if(nm[i][ma2[0]]==n){b=i;break;}
	return b;
	
}
function callccbox(){
	bringup(ccolbox(GR));
	WM=ea[7];
}
function callrecbox(){
	bringup(recbox(GR));
	WM=ea[8];
}

//check recbox myf1 else
//flexie(i,{t:i,v:o[i]},{f:'pencil',s:'ok'})

var recbox=function(g){
	var y=date('y'),m=mns[date('m')],c=ll[al[4]][g][la[7]][y][m][ma[3]],a1=(c)?['current reciever','new reciever']:['new reciever'],a2=(c)?['insert current reciever','insert new reciever']:['insert new reciever'],a3=(c)?['','']:[''],ul=phul(a1,a2,a3),hd=pah(GR,[par([par([img('img/icon1.png',GR,'menop-hi')],GR,'menop-ip'),hea(1,GR,GR,'menop-h1')],GR,'menop-ihp'),hea(2,ea[8],GR,'menop-h2')],'menop-hd'),rd=colbox('menop-jm',5,5,12,12,[hd,jum('menop-ws',[ul.e]),DIV('menop-bb','btn-group btn-group-md','',[but([icon('cok'),span('submit','menop-bs')],'button','reckey','btn btn-md btn-primary'),but([icon('remove'),span('return','menop-bs')],'button','xrecbox','btn btn-md btn-danger')])]),val=true,am=mrgar(a1,a2);
	
	function myf1(vl){
		val=vl;
		if(!vl)return;
		var o1={g:GR};
		if(c){
			var v1=cleaname(ul.o[a1[0]].value),v2=cleaname(ul.o[a1[1]].value),v3=ll[al[4]][GR][la[7]][y][m][ma[3]],v4;
			if(!idey(v1)){redtxt(ul.a[a1[0]],v1+' is not a registered member of '+GR);val=false;return;}
			if(v1!=v3){redtxt(ul.a[a1[0]],v1+' is not the current '+ma[3]);val=false;return;}
			if(!idey(v2)){redtxt(ul.a[a1[1]],v2+' is not a registered member of '+GR);val=false;return;}
			v4={g:GR,c:v2};
			socket.emit('fixreciever',v4);
			
		}else{
			var v1=cleaname(ul.o[a1[0]].value);
			if(!idey(v1)){redtxt(ul.a[a1[0]],v1+' is not a registered member of '+GR);val=false;return;}
			v1={g:GR,c:v1};
			socket.emit('fixreciever',v1);
			
		}
		socket.on('recieverfix',function(vo){
			ll[al[4]][vo.g]=vo.go;
			delete gra[vo.g];
			delete gro[vo.g];
			myf2();
		});
		
	}
	function myf2(){
		clrvalu(ul.o);
		callgroup(GR);
	}
	function resetalt(){
		resetkeys(ul.a,am);
		val=true;
	}
	
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(!val)resetalt();
		if(e=='Escape')myf2();
		if(e=='Enter')validate(ul.o,ul.a,myf1);
		
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(!val)resetalt();
		if(e.id=='xrecbox'||fada(e).id=='xrecbox')myf2();
		if(e.id=='reckey'||fada(e).id=='reckey')validate(ul.o,ul.a,myf2);
		
	});
	return rd;
}
var ccolbox=function(g){
	var c=ll[al[4]][g][ga[3]],a1=(c)?['current collector','new collector']:['new collector'],a2=(c)?['insert current collector','insert new collector']:['insert new collector'],a3=(c)?['','']:[''],ul=phul(a1,a2,a3),hd=pah(GR,[par([par([img('img/icon1.png',GR,'menop-hi')],GR,'menop-ip'),hea(1,GR,GR,'menop-h1')],GR,'menop-ihp'),hea(2,ea[7],GR,'menop-h2')],'menop-hd'),rd=colbox('menop-jm',5,5,12,12,[hd,jum('menop-ws',[ul.e]),DIV('menop-bb','btn-group btn-group-md','',[but([icon('cok'),span('submit','menop-bs')],'button','ccolkey','btn btn-md btn-primary'),but([icon('remove'),span('return','menop-bs')],'button','xccolbox','btn btn-md btn-danger')])]),val=true,am=mrgar(a1,a2);
	
	function myf1(vl){
		val=vl;
		if(!vl)return;
		var o1={g:GR};
		if(c){
			var v1=cleaname(ul.o[a1[0]].value),v2=cleaname(ul.o[a1[1]].value),v3=ll[al[4]][GR][ga[3]],v4;
			if(v1!=v3){redtxt(ul.a[a1[0]],v1+' is not the current '+ga[3]);val=false;return;}
			if(!idey(v2)){redtxt(ul.a[a1[1]],v2+' is not a registered member of '+GR);val=false;return;}
			v4={g:GR,c:v2};
			socket.emit('fixcollector',v4);
			socket.on('collectorfix',function(vo){
				ll[al[4]][vo.g]=vo.go;
				delete gra[vo.g];
				delete gro[vo.g];
				myf2();
				
			});
		}else{
			
		}
		
	}
	function myf2(){
		clrvalu(ul.o);
		callgroup(GR);
	}
	function resetalt(){
		resetkeys(ul.a,am);
		val=true;
	}
	
	
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(!val)resetalt();
		if(e=='Escape')myf2();
		if(e=='Enter')validate(ul.o,ul.a,myf1);
		
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(!val)resetalt();
		if(e.id=='xccolbox'||fada(e).id=='xccolbox')myf2();
		if(e.id=='ccolkey'||fada(e).id=='ccolkey')validate(ul.o,ul.a,myf2);
		
	});
	return rd;
}
var probox=function(id){
	var n1=(ll[al[4]][GR][la[6]][id][ma2[0]]).split(' '),nm=n1[0]+' '+n1[1],rd=par([par([img('img/user.png',id,'pro-im')],id,'pro-ip'),par([hea(6,nm,id,'pro-nh')],id,'pro-np')],id,'probox');
	return rd;
}
var mimg=function(id){
	
}
var tagbox=function(){
	var aa=['current target','new target'],ma1=['insert current target','insert new target'],ul=phul(aa,ma1,['number','number']),hd=pah(GR,[par([par([img('img/icon1.png',GR,'menop-hi')],GR,'menop-ip'),hea(1,GR,GR,'menop-h1')],GR,'menop-ihp'),hea(2,ea[6],GR,'menop-h2')],'menop-hd'),rd=colbox('menop-jm',5,5,12,12,[hd,jum('menop-ws',[ul.e]),DIV('menop-bb','btn-group btn-group-md','',[but([icon('cok'),span('submit','menop-bs')],'button','tagkey','btn btn-md btn-success'),but([icon('remove'),span('return','menop-bs')],'button','xtagbox','btn btn-md btn-danger')])]),val=true,am=mrgar(aa,ma1);
	ffo.tgbox=rd;
	
	function myf1(vl){
		val=vl;
		if(!vl)return;
		var a1=ul.o[aa[0]].value,a2=ul.o[aa[1]].value,a3=parseInt(unbar(ll[al[4]][GR][la[2]])),a4={},a5;
		if(a1!=a3){redtxt(ul.a[aa[0]],'invalid current '+la[2]);val=false;return;}
		if(a1==a2){redtxt(ul.a[aa[1]],aa[1]+' is equal to '+aa[0]);val=false;return;}
		a4.g=GR;a4.t=barme(a2);a4.i=ME;a4.o=barme(a1);
		socket.emit('fixtarget',a4);
		ll[al[4]][GR][la[2]]=barme(a2);
		delete gra[GR];
		delete gro[GR];
		myf2();
		
	}
	function myf2(){
		clrvalu(ul.o);
		callgroup(GR);
	}
	function resetalt(){
		resetkeys(ul.a,am);
		val=true;
	}
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(!val)resetalt();
		if(e=='Escape')myf2();
		if(e=='Enter')validate(ul.o,ul.a,myf1)
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(!val)resetalt();
		if(e.id=='xtagbox'||fada(e).id=='xaddbox')myf2();
		if(e.id=='tagkey'||fada(e).id=='addkey')validate(ul.o,ul.a,myf1);
	});
	
}
var rmvbox=function(){
	var am=mrgar([ma2[0]],['name of member']),ul=phul([ma2[0]],['name of member'],['username']),hd=pah(GR,[par([par([img('img/icon1.png',GR,'menop-hi')],GR,'menop-ip'),hea(1,GR,GR,'menop-h1')],GR,'menop-ihp'),hea(2,ea[5],GR,'menop-h2')],'menop-hd'),rd=colbox('menop-jm',5,5,12,12,[hd,jum('menop-ws',[ul.e]),DIV('menop-bb','btn-group btn-group-md','',[but([icon('remove'),span('delete','menop-bs')],'button','rmvkey','btn btn-md btn-danger'),but([icon('ok'),span('return','menop-bs')],'button','xrmvbox','btn btn-md btn-primary')])]),val=true;
	ffo.rmbox=rd;
	
	function myf1(vl){
		val=vl;
		if(!vl)return;
		var vn=cleaname(ul.o[ma2[0]].value),o1={};
		if(!idey(vn)){redtxt(ul.a[ma2[0]],vn+' is not a registered member of '+GR);val=false;return;}
		if(gid(GR,vn)==ll[al[4]][GR].CID){redtxt(ul.a[ma2[0]],vn+' is the current collector, change collector to delete '+vn);val=false;return;}
		o1.g=GR;o1.m=vn;
		socket.emit('rmvmember',o1);
		socket.on('memberrmv',function(o2){
			ll[al[4]][o2.g]=o2.go;
			var kk='';
			if(o2.c){
				delete gmb[o2.g];delete gra[o2.g];
				kk=o2.m+' was successfully removed from '+o2.g;
			}else{
				kk='remove operation failed. Refresh and try again. if it fails again contact KW.';
			}
			alert(kk);
			myf2();
		});
	}
	function myf2(){
		clrvalu(ul.o);
		callgroup(GR);
	}
	function resetalt(){
		resetkeys(ul.a,am);
		val=true;
	}
	
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(!val)resetalt();
		if(e=='Escape')myf2();
		if(e=='Enter')validate(ul.o,ul.a,myf1);
		
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(!val)resetalt();
		if(e.id=='xrmvbox'||fada(e).id=='xrmvbox')myf2();
		if(e.id=='rmvkey'||fada(e).id=='rmvkey')validate(ul.o,ul.a,myf1)
	});
	
	
}
var addbox=function(){
	var ma1=['name of member','please insert a valid phone number','please insert a valid email'],ul=phul(ma2,ma1,['username','number','email']),hd=pah(GR,[par([par([img('img/icon1.png',GR,'menop-hi')],GR,'menop-ip'),hea(1,GR,GR,'menop-h1')],GR,'menop-ihp'),hea(2,ea[4],GR,'menop-h2')],'menop-hd'),rd=colbox('menop-jm',5,5,12,12,[hd,jum('menop-ws',[ul.e]),DIV('menop-bb','btn-group btn-group-md','',[but([icon('cok'),span('submit','menop-bs')],'button','addkey','btn btn-md btn-success'),but([icon('remove'),span('return','menop-bs')],'button','xaddbox','btn btn-md btn-danger')])]),val=true,am=mrgar(ma2,ma1);
	ffo.adbox=rd;
	
	function myf1(vl){
		val=vl;
		if(!vl)return;
		var a1=cleaname(ul.o[ma2[0]].value),a2=ul.o[ma2[1]].value,a3=ul.o[ma2[2]].value;
		if(idey(a1)){redtxt(ul.a[ma2[0]],(a1+' is a registered member.'));val=false;return}
		var o1=mrgar(ma2,[a1,a2,a3]),o2={g:GR,o:o1};
		clrvalu(ul.o);
		socket.emit('addmember',o2);
		socket.on('memberadd',function(so){
			ll[al[4]][so.g]=so.go;
			if(gra[so.g])delete gra[so.g];
			if(gmb[so.g])delete gmb[so.g];
			myf2();
		});
	}
	function myf2(){
		clrvalu(ul.o);
		callgroup(GR);
	}
	function resetalt(){
		resetkeys(ul.a,am);
		val=true;
	}
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(!val)resetalt();
		if(e=='Escape')myf2();
		if(e=='Enter')validate(ul.o,ul.a,myf1)
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(!val)resetalt();
		if(e.id=='xaddbox'||fada(e).id=='xaddbox')myf2();
		if(e.id=='addkey'||fada(e).id=='addkey')validate(ul.o,ul.a,myf1);
	});
	
}
var gmn=function(id){
	if(!ll[al[4]][GR][la[6]][id])return '';
	return ll[al[4]][GR][la[6]][id][ma2[0]];
}
var fkt=function(f){
	var s=f.split('_');
	return 'from '+gmn(s[0])+', on '+s[1];
}
var confbox=function(t,q){
	var o=q.d,a=afa,c=q.confirmed,k1=par([icon('cok'),span('confirmed','conf-dts')],'conf-k1','ciok'),k2=par([icon('ok'),span('confirm','conf-dts')],'conf-k2','btn btn-md btn-primary confund'),pk=par('','conf-pk'),rd=par([par(barme(o[a[1]]),'conf-bar'),par(fkt(t),'conf-p2'),pk],'confbox');
	(c)?APP(pk,k1):APP(pk,k2);
	function sk(){
		if(c&&fada(k1))return;
		pikin(pk,k1);
	}
	function myf1(){
		var o2={};o2.g=GR;o2.t=t;o2.i=ME;o2.m=o[a[0]];
		socket.emit('confirmpay',o2);
		socket.on('payconfirm',function(o1){
			ll[al[4]][o1.g]=o1.go;delete gra[o1.g];
			sk();
		});
	}
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		if(e.id=='conf-k2'||fada(e).id=='conf-k2')myf1();
	});
	return rd;
}
var confunds=function(g,y,m){
	var a=ll[al[4]][g][la[7]][y][m][ma[2]],hd=pah('confunds-hd',[par([img('img/icon1.png','conf-im')],'conf-ip'),hea(1,g,'conf-h1'),hea(2,ea[1],'conf-h2')]),ul=jum('conf-ul'),ws=jum('conf-ws',[ul]),rd=colbox('confunds',5,5,12,12,[hd,ws,DIV('conf-bb','btn-group btn-group-lg',{},[but('return','button','confkey','btn btn-lg btn-danger')])]);
	for(var i in a)APP(ul,confbox(i,a[i]));
	
	function myf1(){
		callgroup(g);
		CF=false;
	}
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		
		if(e=='Escape')myf1();
		
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		if(e.id=='confkey')myf1();
		
	});
	return rd;
}
var addbar=function(){
	var a=afa,xa=['name of member adding funds','funds in number (e.g 2000 or 2,000)','purpose of added funds'],am=mrgar(a,xa),gh=hea(1,'','adb-gh'),hd=pah('addbar-hd',[par([img('img/icon1.png','addbar-im')],'addbar-ip'),gh,hea(1,ea[0],'addbar-h')]),ul=phul(a,xa,['','','']),rd=colbox('addbar',5,5,12,12,[hd,jum('addbar-ws',[ul.e]),DIV('addbar-bb','btn-group btn-group-lg',{},[but('submit','button','addbarkey','btn btn-lg btn-primary'),but('return','button','xaddbar','btn btn-lg btn-danger')])]),val=true;
	ffo.adb=rd;
	ffo.abf1=myf1;
	function myf1(){
		gh.textContent=GR;
	}
	function myf2(){
		clrvalu(ul.o);
		callgroup(GR);
	}
	function myf3(e){
		val=e;
		if(!e)return;
		var v1=cleaname(ul.o[a[0]].value);
		if(!idey(v1)){redtxt(ul.a[a[0]],ul.o[a[0]].value+' is not a valid member of '+GR);val=false;return;}
		if(idey(v1)&&(gid(GR,v1)!=ME)){redtxt(ul.a[a[0]],'you can only add funds in your name');val=false;return;}
		if(!isbar(ul.o[a[1]].value)){redtxt(ul.a[a[1]],'invalid funds.(funds must be in numbers)');val=false;return;}
		
		var ob=fetchvalu(ul.o);ob[a[1]]=unbar(ob[a[1]]);ob[a[0]]=cleaname(ob[a[0]]);ob={g:GR,d:ob};
		
		socket.emit('addfunds',ob);
		socket.on('fundsadd',function(vo){
			ll[al[4]][vo.g]=vo.o;
			delete gra[vo.g];
			callgroup(vo.g);
			
		});
	}
	function resetalt(){
		resetkeys(ul.a,am);
		val=true;
	}
	
	
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(!val)resetalt();
		if(e=='Escape')myf2();
		if(e=='Enter')validate(ul.o,ul.a,myf3);
		
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(!val)resetalt();
		if(e.id=='xaddbar')myf2();
		if(e.id=='addbarkey')validate(ul.o,ul.a,myf3);
		
	});
	
}
var memd=function(o,p,id){
	var rd=par('',o[ma2[0]],'memd form-group'),c,eo={},z={Name:'user',Contact:'tele',Email:'asterisk'},co,g,cc='',cv='';
	for(var i in cto(ma2)){
		co=(id==ME)?{f:'pencil',s:'save'}:{};
		if(i==ma2[1])g={c:id+'-'+i,i:{type:'number'}};
		if(i==ma2[2])g={c:id+'-'+i,i:{type:'email'}};
		if(i==ma2[0])g={c:id+'-'+i};
		c=flexie(i,{t:[icon(z[i]),par(i+' : ','mem-dtp')],v:o[i]},co,g);
		attme(c.e,{name:id})
		APP(rd,c.e);
		eo[i]=c;
	}
	APP(p,rd);
	
	function myf1(j){
		eo[j].f();cc=j;
		Mng=true;
	}
	function myf2(j){
		var q=(j==ma2[0])?cleaname(eo[j].v.value):eo[j].v.value,w=(q==o[j]),ww={};
		if(!w){
			ww[j]=q;
			eo[j].f(true);
			clg(ww);
			w={g:GR,i:ME,o:ww};
			ll[al[4]][GR][la[6]][ME][j]=q;
			socket.emit('fixbio',w);
		}else{
			eo[j].f();
		}
		Mng=false;
	}
	
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		if(fada(e).id=='pencil'&&!Mng)myf1(fada(fada(e)).className.split('-')[1]);
		if(fada(e).id=='save')myf2(fada(fada(e)).className.split('-')[1]);
		
		
	});
	return eo;
}
var membox=function(g){
	var ul=jum('mem-ul'),hd=pah('mem-hd',[par([img('img/icon2.png','mem-im')],'mem-ip'),hea(2,'group members','mem-h')]),a=ll[al[4]][g][la[6]],rd=jum('membox',[hd,ul]),eo={};
	gmb[g]=rd;
	
	for(var i in a){
		eo[i]=memd(a[i],ul,i);
	}
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		
	});
}
var anouncer=function(){
	var p=par('','anop'),rd=jum('anoucer',[jum('anotj',[p]),par([but('return','button','anokey','btn btn-lg btn-primary')],'anobp','btn-group btn-group-lg')]),cc='',wm='',fn='',fv='';
	ano.f1=myf1;
	ano.f2=myf2;
	function myf1(t){
		p.textContent=t;
	}
	function myf2(fnc,v){
		cc=WV;bringup(rd);wm=WM;WM=MA[4];fn=fnc;fv=v;
	}
	function myf3(){
		if(!fn){bringup(cc);WM=wm;}else{fn(fv);}wm='';cc='';p.textContent='';
	}
	
	
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		
		if(e=='Enter')myf3();
		
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		if(e.id=='anokey')myf3();
		
	});
	
}
var hmov=function(){
	var y=date('y'),m=mns[date('m')],g=ll[al[4]][GR],a=[[GR,barme(g[la[7]][y][m][ma[0]])],[date('y'),mns[date('m')]],[g[ga[3]],g[la[7]][y][m][ma[3]]],[g[ga[2]]]],b=a2,ws=jum('hmov1-jm'),h,hh,gg=[['leaf','refresh'],['record','record'],['copy','paste'],['screenshot']];
	for(var i in b){
		hh=[];
		for(var v in b[i]){
			h=par([par([icon(gg[i][v]),span([b[i][v]],'hmott'),span(' : ')],'','hmot'),par(a[i][v],'','hmov')],'','col');
			hh.push(h);
		}
		hh=par(hh,'','row');
		APP(ws,hh);
	}
	return ws;
}
var mendem=function(){
	var rd=jum('mendem'),b=ea,gla=['cloudupload','check','handup','thumbsup','user','trash','edit','folder','user','ques','stats'],tn;
	for(var i in b){
		tn=but([icon(gla[i]),span(b[i],b[i],'mbspan')],'button',b[i],'btn btn-md btn-link');
		APP(rd,tn);
	}
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		if((e.id==b[0]||fada(e).id==b[0])&&!Mng)calladb();
		if((e.id==b[1]||fada(e).id==b[1])&&!Mng)if(ME==ll[al[4]][GR].CID){callconf(GR);}else{alert('Only the Collector is allowed to confirm funds.');}
		if(e.id==b[4]||fada(e).id==b[4]&&!Mng)calladbox();
		if(e.id==b[5]||fada(e).id==b[5]&&!Mng)if(ME==ll[al[4]][GR].CID){callrmbox();}else{alert('Only the Collector is allowed to remove a member.');}
		if(e.id==b[6]||fada(e).id==b[6]&&!Mng)if(ME==ll[al[4]][GR].CID){calltrgbox();}else{alert('Only the Collector is allowed to change individual target.');}
		if(e.id==b[7]||fada(e).id==b[7]&&!Mng)if(ME==ll[al[4]][GR].CID){callccbox();}else{alert('Only the Collector is allowed to change Collector.');}
		if(e.id==b[8]||fada(e).id==b[8]&&!Mng)if(ME==ll[al[4]][GR].CID){callrecbox();}else{alert('Only the Collector is allowed to change Reciever.');}
	});
	
	return rd;
	
}
var groupdv=function(g){
	if(!gmb[g])membox(g);
	var gp=par('','grp-mpp'),hd=pah('group-hd',[par([par([img('img/logo1.png','group-lim')],'group-lp','col'),hea(1,ll[al[1]],'group-com','col')],'group-io','row'),gp]),hm=mendem(),bv=hmov(),ws=jum('group-ws',[bv,hm,colbox('memcol',12,12,12,12,[gmb[g]])]),rd=jum('groupdv',[hd,ws]),pg='';
	fit2scrn(rd);
	gra[g]=rd;
	gro[g]={};
	gro[g].f1=myf1;
	
	function myf1(id){
		if(pg&&pg.id==id)return;
		if(pg&&pg.id!=id)X(pg);
		pg=probox(id);
		APP(gp,pg);
	}
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		
	});
	
}
var newgroup=function(){
	var am=mrgar(ga,ag),ul=phul(ga,ag,['username','password','','','','email']),mf=eform([efgrup([ul.e])]),hd=pah('newgrp-hd',[par([img('img/icon2.png','nwgrp-im')],'nwgrp-ip'),par([hea(1,[icon('leaf'),hea(3,'create new group','nwgrp-h3')])])]),nk=but([icon('tright'),span('next')],'button','gnxtkey','btn btn-lg btn-primary'),ck=but([icon('ok'),span('continue')],'button','gconkey','btn btn-lg btn-success'),ws=jum('nwgrp-ws',[mf]),bg=par([butgroup('lg',[nk,but([icon('remove'),span('cancel')],'button','nwxgrp','btn btn-lg btn-danger')],'nwgrp-bg')],'nwgrp-bp'),rd=jum('newgroup',[hd,ws,bg]),mu=jum('nwgrp-mu'),bc='',up='',md=jum('nwgrp-md',[pah('nwgrp-mhd',[par([img('img/icon1.png','nwgrp-im')]),par([hea(1,[icon('pencil'),hea(2,'fill in names and phone numbers')],'nwgrp-mh')])]),mu,butgroup(0,[ck,but([icon('remove'),span('cancel')],'button','nwxmem','btn btn-lg btn-danger')])]),ml,ou='',val=true;
	ffo.nwgrp=rd;
	
	
	function shwpass(me){
		var ai=ul.o[ga[1]];
		if(me&&ai.type=='password')ai.type='text';
		if(!me&&ai.type=='text')ai.type='password';
		
	}
	function wipe(){
		clrvalu(ul.o);
		
	}
	function xme(){
		wipe();
		callogin();
	}
	function chk4flip(){
		validate(ul.o,ul.a,turnme);
		
	}
	function swk(){
		var d='',s=''
		if(!bc){d='';s='none';bc=true;}else{d='none';s='';bc=false;}
		nk.style.display=d;ck.style.display=s;
	}
	function flipme(){
		if(!up){bringup(md);up=true;}else{bringup(rd);up=false;}
	}
	function turnme(ct){
		val=ct;
		if(!ct)return;
		if(wedy(cleaname(ul.o[ga[0]].value))){redtxt(ul.a[ga[0]],'this group name has been taken');val=false;return;}
		if(!isbar(ul.o[ga[2]].value)){redtxt(ul.a[ga[2]],(ga[2]+' must be a number'));val=false;return;}else{ul.o[ga[2]].value=barme(ul.o[ga[2]].value);}
		if(!isnum(ul.o[ga[4]].value)){redtxt(ul.a[ga[4]],('invalid '+ga[4]));val=false;return;}
		if(!ebmail(ul.o[ga[5]].value)){redtxt(ul.a[ga[5]],'invalid email');val=false;return;}
		
		ou=fetchvalu(ul.o);
		ou[la[0]]=cleaname(ou[la[0]]);
		ou[la[3]]=cleaname(ou[la[3]]);
		socket.emit('newgroup',ou);
		socket.on('groupadd',function(so){
			ll[al[4]]=so.g;
			var tx='your group is '+so.k+', your security pass is '+so.s+'. Please copy this "in case"...';
			anounceme(tx,callogin,so.k);
			
		});
	}
	function resetalt(){
		resetkeys(ul.a,am);
		val=true;
	}
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(e=='Escape')xme();
		if(e=='Enter')chk4flip();
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(!val)resetalt();
		if(e.id==ga[1]){shwpass(true);}else{shwpass();}
		if(e.id=='nwxgrp'||fada(e).id=='nwxgrp')xme();
		if(e.id=='gnxtkey'||fada(e).id=='gnxtkey')chk4flip();
	});
	
}
var logob=function(){
	var nok=par(''),ig=input('log-g','form-control',{placeholder:'group',type:'username'}),gi=par([ig,par('insert group name','','phat')],'','form-group'),is=input('log-s','form-control',{placeholder:'Security Pass',type:'password'}),si=par([is,par('insert security pass','','phat')],'','form-group'),im=input('log-mi','form-control',{placeholder:'ID',type:'password'}),mi=par([im,par('insert member ID (id is case sensitive)','','phat')],'','form-group'),hd=pah('login-hd',[par([img('img/logo1.png','log-i')],'log-ip'),par([hea(3,'funds management made easy','log-h3')],'log-p'),par([hea(1,'Sign in','log-h1')])]),ws=colbox('log-ws',12,12,12,12,[par([gi,si,mi],'log-ips'),nok,par([butgroup('lg',[but([icon('cok'),span('kick off')],'button','kickey','btn btn-lg btn-danger'),but([icon('user'),icon('folder'),span('new group')],'button','newgrp','btn btn-lg btn-success')],'log-bgrp')])]),rd=jum('logob',[hd,ws]),ero='';
	ffo.login=rd;
	nok.style.font='13px normal';
	nok.style.color='red';
	
	function erw(w){
		if(ero){nok.textContent='';ero=''}else{nok.innerHTML='';feedme(nok,[icon('alerti'),span(w,'ecosp')]);ero=true;}
	}
	function chk4lnch(){
		if(!ocn(ll[al[4]])){erw('create new group to login');return;}
		var gn=cleaname(ig.value),gp=is.value,mid=im.value;
		if(!gn||!gp||!mid){erw('incomplete credentials');return;}
		if(!ll[al[4]][gn]){erw('invalid group');return;}
		if(ll[al[4]][gn][la[1]]!=gp){erw('wrong security pass');return;}
		if(!idok(gn,mid)){erw('invalid ID');return;}
		erw();
		ME=mid;
		callgroup(gn);
		
	}
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		
		if(e=='Enter')chk4lnch();
		
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(ero)erw();
		if(e.id=='newgrp'||fada(e).id=='newgrp')callnwgrp();
		if(e.id=='kickey'||fada(e).id=='kickey')chk4lnch();
	});
	
}
var newreg=function(){
	var ik=input('new-inp','form-control',{'placeholder':'name of Organisation'}),hd=pah('newreg-hd',[par([img('img/logo1.png','logo1')],'logo1-p'),par([hea(1,'Welcome','new-h1')])]),ws=colbox('newreg-ws',12,12,12,12,[par([par('Please fill in the Organisation name field to launch.','new-p'),par([ik],'new-ip')],'neworg-p'),par([but('Launch','button','lnchkey','btn btn-lg btn-primary')],'newbtn-p')]),rd=jum('newreg',[hd,ws]);
	ffo.nwrg=rd;
	
	
	function chk4lnch(){
		if(!ik.value){alert('Please Insert name of Organisation.');return;}
		var o={};o.o=ik.value.toUpperCase();
		socket.emit('neworg',o);
		
		
	}
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(e=='Enter')chk4lnch();
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		if(e.id=='lnchkey')chk4lnch();
		
	});
	
}
var ontext=function(){
	var p=par('','waitnote'),cj=par('','counter','jumbotron'),rd=cenbox('starter','jumbotron',[p,cj]),ct=1,dt='.',st=0,ba=[['.12em dotted #f1dfac','.1em dotted #fff03b'],['.12em dotted #bbb','.1em dotted white']],ab=0;
	ffo.otx=fnc;
	
	function fnc(t,c){
		if(itv)clearInterval(itv);
		p.textContent=t;
		itv=setInterval(function(){
			p.textContent=t+' '+dt;
			cj.textContent=ct+' Sec.'
			dt=swdot(dt);
			if(st==0){
				cj.style.border=ba[ab][0];
				st=1;
			}else{
				cj.style.border=ba[ab][1];
				st=0;
				ab=(ab)?0:1;
			}
			ct++;
			
		},1000);
		if(c)bringup(rd);
	}
	
	
}

	
	
	return {
		gear:function(){
			init();
		}
		
	}
	
})();