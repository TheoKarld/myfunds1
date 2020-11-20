var ffo=(function(){
	var ffo={},itv='',WV='',XC='',MA=['newreg','login','new group'],WM='',ga=['group name','security pass','individual amount','collector','number of members'];
	


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



var newgroup=function(){
	var ul=phul(ga,['insert full group name','please choose a secure security pass, as it will be used to access the group.','amount must be in numbers.(NB. do not add comma, eg. 5000 not 5,000).','name of person responsible for collecting the funds','number of group members.']),hd=pah('newgrp-hd',[par([img('img/logo1.png','nwgrp-im')],'nwgrp-ip'),par([hea(1,[icon('home'),hea(3,'create new group','nwgrp-h3')])])]),nk=but([icon('tright'),span('next')],'button','gnxtkey','btn btn-lg btn-primary'),ck=but([icon('ok'),span('continue')],'button','gconkey','btn btn-lg btn-success'),ws=jum('nwgrp-ws',[ul.e]),bg=par([butgroup('lg',[nk,but([icon('remove'),span('cancel')],'button','nwxgrp','btn btn-lg btn-danger')],'nwgrp-bg')],'nwgrp-bp'),rd=jum('newgroup',[hd,ws,bg]),mu=jum('nwgrp-mu'),bc='',up='',md=jum('nwgrp-md',[pah('nwgrp-mhd',[par([img('img/icon1.png','nwgrp-im')]),par([hea(1,[icon('pencil'),hea(2,'fill in names and phone numbers')],'nwgrp-mh')])]),mu,butgroup(0,[ck,but([icon('remove'),span('cancel')],'button','nwxmem','btn btn-lg btn-danger')])]);
	ffo.nwgrp=rd;
	
	
	
	function wipe(){
		clrvalu(ul.o);
		
	}
	function xme(){
		wipe();
		callogin();
	}
	function chk4flip(){
		var ed=chkvalues(ul.o),ou='';
		if(ed.e){alert('please insert '+ed.f);return;}
		if(!parseInt(ul.o[ga[4]].value)){alert(ga[4]+' must be a number');return;}
		if(!parseInt(ul.o[ga[2]].value)){alert(ga[2]+' must be a number');return;}
		ou=fetchvalu(ul.o);
		clg(ou);
		
	}
	function swk(){
		var d='',s=''
		if(!bc){d='';s='none';bc=true;}else{d='none';s='';bc=false;}
		nk.style.display=d;ck.style.display=s;
	}
	function flipme(){
		if(!up){bringup(md);up=true;}else{bringup(rd);up=false;}
	}
	
	
	addEvent(rd,'keydown',function(e){
		e=e.code;
		if(e=='Escape')xme();
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(e.id=='nwxgrp'||fada(e).id=='nwxgrp')xme();
		if(e.id=='gnxtkey'||fada(e).id=='gnxtkey')chk4flip();
	});
	
}
var logob=function(){
	var gi=input('log-g','form-control',{placeholder:'Group Name'}),si=input('log-s','form-control',{placeholder:'Security Pass'}),hd=pah('login-hd',[par([img('img/logo1.png','log-i')],'log-ip'),par([hea(3,'funds management made easy','log-h3')],'log-p'),par([hea(1,'Sign in','log-h1')])]),ws=colbox('log-ws',12,12,12,12,[par([gi,si],'log-ips'),par([butgroup('lg',[but([icon('cok'),span('kick off')],'button','kickey','btn btn-lg btn-danger'),but([icon('user'),icon('folder'),span('new group')],'button','newgrp','btn btn-lg btn-success')],'log-bgrp')])]),rd=jum('logob',[hd,ws]);
	ffo.login=rd;
	
	
	
	addEvent(rd,'click',function(e){
		e=ee(e);
		
		if(e.id=='newgrp'||fada(e).id=='newgrp')callnwgrp();
		
	});
	
}
var newreg=function(){
	var ik=input('new-inp','form-control',{'placeholder':'name of Organisation'}),hd=pah('newreg-hd',[par([img('img/logo1.png','logo1')],'logo1-p'),par([hea(1,'Welcome','new-h1')])]),ws=colbox('newreg-ws',12,12,12,12,[par([par('Please fill in the Organisation name field to launch.','new-p'),par([ik],'new-ip')],'neworg-p'),par([but('Launch','button','lnchkey','btn btn-lg btn-primary')],'newbtn-p')]),rd=jum('newreg',[hd,ws]);
	ffo.nwrg=rd;
	
	
	function chk4lnch(){
		if(!ik.value){alert('Please Insert name of Organisation.');return;}
		var o={};o.o=ik.value;
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