var ffo=(function(){
	var ffo={},itv='',WV='',XC='',MA=['newreg','login','new group','group','anouncer'],WM='',ga=['group name','security pass','individual target','collector'],ag=['insert full group name','please choose a secure security pass, as it will be used to access the group.','amount must be in numbers.(eg. 5000 or 5,000).','name of person responsible for collecting the funds','number of group members.'],gra={},ea=['add funds','confirm funds','request loan','confirm loan','add member','remove member','change individual target','change collector','change reciever','change security pass'],a2=[[ga[0],'available funds'],['year','month'],[ga[3],'reciever'],[ga[2]]],GR='',ano={};
	


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
}
function anounceme(t,fnc,v){
	if(!ano.f1)anouncer();
	ano.f1(t);
	ano.f2(fnc,v);
}





//hmov

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
	var g=ll[al[4]][GR],a=[[GR,g[ma[0]]],[date('y'),mns[date('m')]],[g[ga[3]],g[cma[0]]],[g[ga[2]]]],b=a2,ws=jum('hmov1-jm'),h,hh,gg=[['leaf','refresh'],['record','record'],['copy','paste'],['screenshot']];
	clg(a);
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
	var rd=jum('mendem'),b=ea,gla=['cloudupload','check','handup','thumbsup','user','trash','edit','folder','user','ques'],tn;
	for(var i in ea){
		tn=but([icon(gla[i]),span(ea[i],ea[i],'mbspan')],'button',ea[i],'btn btn-md btn-link');
		APP(rd,tn);
	}
	return rd;
}
var groupdv=function(g){
	var hd=pah('group-hd',[par([par([img('img/icon2.png','group-lim')],'group-lp','col'),hea(1,ll[al[1]],'group-com','col')],'group-io','row')]),hm=mendem(),bv=hmov(),ws=jum('group-ws',[bv,hm]),rd=jum('groupdv',[hd,ws]);
	fit2scrn(rd);
	gra[g]=rd;
	
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		
	});
	
}
var newgroup=function(){
	var am=mrgar(ga,ag),ul=phul(ga,ag,['username','password','','','']),mf=eform([efgrup([ul.e])]),hd=pah('newgrp-hd',[par([img('img/icon2.png','nwgrp-im')],'nwgrp-ip'),par([hea(1,[icon('leaf'),hea(3,'create new group','nwgrp-h3')])])]),nk=but([icon('tright'),span('next')],'button','gnxtkey','btn btn-lg btn-primary'),ck=but([icon('ok'),span('continue')],'button','gconkey','btn btn-lg btn-success'),ws=jum('nwgrp-ws',[mf]),bg=par([butgroup('lg',[nk,but([icon('remove'),span('cancel')],'button','nwxgrp','btn btn-lg btn-danger')],'nwgrp-bg')],'nwgrp-bp'),rd=jum('newgroup',[hd,ws,bg]),mu=jum('nwgrp-mu'),bc='',up='',md=jum('nwgrp-md',[pah('nwgrp-mhd',[par([img('img/icon1.png','nwgrp-im')]),par([hea(1,[icon('pencil'),hea(2,'fill in names and phone numbers')],'nwgrp-mh')])]),mu,butgroup(0,[ck,but([icon('remove'),span('cancel')],'button','nwxmem','btn btn-lg btn-danger')])]),ml,ou='',val=true;
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
		if(!isbar(ul.o[ga[2]].value)){redtxt(ul.a[ga[2]],(ga[2]+' must be a number'));val=false;return;}else{ul.o[ga[2]].value=barme(ul.o[ga[2]].value);}
		
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
		ou=fetchvalu(ul.o);
		socket.emit('newgroup',ou);
		socket.on('groupadd',function(so){
			ll[al[4]]=so.g;
			var tx='your group name is '+so.k+', your security pass is '+so.s+'. Please copy this "in case"...';
			anounceme(tx,callgroup,so.k);
			
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
	var nok=par(''),gi=input('log-g','form-control',{placeholder:'Group Name',type:'username'}),si=input('log-s','form-control',{placeholder:'Security Pass',type:'password'}),hd=pah('login-hd',[par([img('img/logo1.png','log-i')],'log-ip'),par([hea(3,'funds management made easy','log-h3')],'log-p'),par([hea(1,'Sign in','log-h1')])]),ws=colbox('log-ws',12,12,12,12,[par([gi,si],'log-ips'),nok,par([butgroup('lg',[but([icon('cok'),span('kick off')],'button','kickey','btn btn-lg btn-danger'),but([icon('user'),icon('folder'),span('new group')],'button','newgrp','btn btn-lg btn-success')],'log-bgrp')])]),rd=jum('logob',[hd,ws]),ero='';
	ffo.login=rd;
	nok.style.font='13px normal';
	nok.style.color='red';
	
	function erw(w){
		if(ero){nok.textContent='';ero=''}else{nok.textContent=w;ero=true;}
	}
	function chk4lnch(){
		var gn=gi.value,gp=si.value;
		if(!gn||!gp){erw('incomplete credentials');return;}
		if(!ll[al[4]][gn]){erw('invalid group name');return;}
		if(ll[al[4]][gn][la[1]]!=gp){erw('wrong security pass');return;}
		callgroup(gn);;
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
		ik.value='';
		
		
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