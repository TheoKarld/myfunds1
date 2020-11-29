var A1=['lg','md','sm','xs'],ICN={'film':'glyphicon glyphicon-film','tele':'glyphicon glyphicon-phone-alt','trash':'glyphicon glyphicon-trash',settings:'glyphicon glyphicon-cog',wrench:'glyphicon glyphicon-wrench',tright:'glyphicon glyphicon-triangle-right',voption:'glyphicon glyphicon-option-horizontal',hoption:'glyphicon glyphicon-option-horizontal',off:'glyphicon glyphicon-off',save:'glyphicon glyphicon-save',pencil:'glyphicon glyphicon-pencil',tower:'glyphicon glyphicon-tower',ok:'glyphicon glyphicon-ok',cok:'glyphicon glyphicon-ok-circle',plus:'glyphicon glyphicon-plus',user:'glyphicon glyphicon-user',folder:'glyphicon glyphicon-folder-close',home:'glyphicon glyphicon-home',remove:'glyphicon glyphicon-remove',edit:'glyphicon glyphicon-edit',ques:'glyphicon glyphicon-question-sign',check:'glyphicon glyphicon-check',handup:'glyphicon glyphicon-hand-up',thumbsup:'glyphicon glyphicon-thumbs-up',cloudupload:'glyphicon glyphicon-cloud-upload',tent:'glyphicon glyphicon-tent',leaf:'glyphicon glyphicon-leaf',refresh:'glyphicon glyphicon-refresh',record:'glyphicon glyphicon-record',copy:'glyphicon glyphicon-copy',paste:'glyphicon glyphicon-paste',screenshot:'glyphicon glyphicon-screenshot',asterisk:'glyphicon glyphicon-asterisk',cloud:'glyphicon glyphicon-cloud',book:'glyphicon glyphicon-book',infosign:'glyphicon glyphicon-info-sign',calender:'glyphicon glyphicon-calender',comment:'glyphicon glyphicon-comment',stats:'glyphicon glyphicon-stats',alerti:'glyphicon glyphicon-alert',savefile:'glyphicon glyphicon-save-file'},ftx='Click on the pencil icon to modify any company information, any change made can be undone by simply clicking on the pencil again. Please not you can\'t exit without saving all changes.',upa={action:'fileupload',method:'post',enctype:'multipart/form-data',finp:{type:'file',name:'filetoupload'}};

//ethnocentric


function ee(e){
	var r=e||window.event;r=e.target||e.srcElement;return r;
}
var addEvent = function(element, event, func) {
 if(navigator.appName == 'Microsoft Internet Explorer') {
   return element.attachEvent('on'+event, func);
 } else {
   return element.addEventListener(event, func);
 }
}
function $(id){
	return document.getElementById(id);
}
function $$$(e,i,c,at,y){
	var d=document.createElement(e);
	if(i)d.id=i;if(c)d.className=c;
	attme(at);
	if(y)feedme(d,y);
	return d;
}
function clg(t){
	console.log(t);
}
function DIV(id,c,at,cl){
	var rd=$$$('div',id,c);attme(rd,at);
	
	if(cl)feedme(rd,cl);
	return rd;
}
function APP(p,c){
	if(!c||!p)return;
	try{p.appendChild(c);}catch(err){clg(err);}
}
function ebt(n){
	var a=n.toUpperCase();
	return document.getElementsByTagName(a);
}
function style(rd,p,m,l,r,t,b,w,h,bc,cl){
	var a=['position','margin','left','right','top','bottom','width','height','background','color'],ba=[p,m,l,r,t,b,w,h,bc,cl];
	for(var i=0;i<a.length;i++)if(ba[i])rd.style[a[i]]=ba[i];
}
function X(c){
	if(c.parentNode)c.parentNode.removeChild(c);
}
function a2o(o,a){
	for(var i in a)o[i]=a[i];
}
function attme(c,o){
	if(!o)return;
	for(var i in o)c.setAttribute(i,o[i]);
}
function ocn(o){
	var a=[];for(var i in o)a.push(i);
	return a.length;
}
function extract(o){
	var a={};
	for(var i in o)if(o[i].value)a[i]=o[i].value;
	return a;
}
function pikin(p,nc){
	var cm=false;
	if(p.childNodes){cm=p.childNodes;if(nc){X(p.childNodes[0]);APP(p,nc);}}
	return cm;
}
function clrval(eo){
	for(var i in eo)eo[i].value='';
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
function sharepin(a,c,l){
	var ar=[],t,r=a,v,w;
	for(var i=0;i<l;i++){
		if(!ocn(r))break;
		diba();
		
		
	}
	function diba(){
		w=[];
		for(var i=0;i<c;i++){
			if(!r[i])break;
			w.push(r[i]);
		}
		if(ocn(w))ar.push(w);
		for(var i=0;i<c;i++){
			if(!ocn(r))return;
			r.shift();
		}
	}
	return ar;
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
function spliter(s){
	if(typeof(s)!='string')s=s.toString();
	var st=sharepin((s.split("")),4,10),f=joinus(st[0]);
	for(var i=1;i<ocn(st);i++){
		f=f+'-'+joinus(st[i]);
	}
	if(f.charAt(f.length-2)=='-'){f=f.slice(0,f.length-2);}
	return f;
}
function joinus(a){
	var v='';
	for(var i in a){v=v+''+a[i];}
	return v;
}
function string(a){
	return a.toString();
}
function fada(c){
	return c.parentNode;
}
function feedme(p,c){
	if(!p||!c)return;
	for(var i in c)APP(p,c[i]);
}
function pgbody(k){
	b=(k)?k:document.body,ar={a4:{land:{w:'297mm',h:'209mm'},port:{w:'28cm',h:'40cm'}}}
	b.style.width=ar.a4.port.w;b.style.height=ar.a4.port.h;
	
}
function upbody(){
	var b=document.body;
	b.style.width='';b.style.height='';
	
}
function addclass(e,c){
	e.className=(claz(e))?claz(e)+' '+c:c;
	
}
function claz(c){
	return c.className;
}
function ina(a,c){
	var ck=false;
	for(var i in a)if(a[i]==c){ck=true;break;}
	return ck;
}
function addid(c,id){
	if(c.id){c.id=c.id+' '+id;}else{c.id=id;}
}
function fit2scrn(el,t){
	if(!el)return;
	el.style.minWidth='100%';el.style.minHeight=(t)?'100%':sor.h+'px';
}
function clrvalu(o){
	for(var i in o)o[i].value='';
}
function fetchvalu(o){
	var r={};
	for(var i in o)r[i]=o[i].value;
	return r;
	
}
function chkvalues(o){
	var kp={};
	for(var i in o)if(!o[i].value){kp.e=true;kp.f=i;break;}
	return kp;
}
function swdot(dt){
	var r='';
	if(dt=='.')r='..';
	if(dt=='..')r='...';
	if(dt=='...')r='....';
	if(dt=='....')r='.....';
	if(dt=='.....')r='.';
	return r;
}
function validate(ul,at,fnc){
	var vali=true;
	for(var i in ul){
		if(!ul[i].value){
			redtxt(at[i],('insert '+i));
			if(vali)vali=false;
		}else if(ul[i].type=='email'){
			if(!ebmail(ul[i].value)){redtxt(at[i],('invalid email'));if(vali)vali=false;}
		}
	}
	fnc(vali);
}
function resetkeys(r,a){
	for(var i in r)if(r[i].innerHTML!=a[i]){r[i].textContent=a[i];r[i].style.color='';}
		
}
function redtxt(el,tx){
	el.innerHTML='';
	feedme(el,[icon('alerti'),span(tx,'ecosp','',{color:'red'})]);el.style.color='red';
}
function barme(t){
	if(!t)return;
	
	var k=(typeof t=='number')?unbar(t.toString()):unbar(t),s=k,a=[],x,y,cx=s.length,st='';
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
	var x=t,r='';
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
function b2a(a,b){
	for(var i in a)if(b[i])a[i]=b[i];
}
function revar(v){
	var a=(typeof v=='number')?v.toString():v,b=a.split(''),c=[],r='';
	for(var i=ocn(b)-1;i>-1;i--)c.push(b[i]);
	for(var i in c)r=r.toString()+c[i];
	return r;
}
function ebmail(e){
	//if(!)return false;
	return (e.indexOf('@')>-1&&(e.split('@')[1].split('.'))[1])?true:false;
}
function isnum(d){
	return parseInt(d);
}
function isfloat(n){
	var a=n.toString();
	if(a.indexOf('.')>-1)return true;
	return false;
}
function breaktxt(t){
	var b=ocn(t)/2,a=isfloat(b),a=[],d;
	d=(a)?parseInt(b)+1:parseInt(b);
	a.push(t.slice(0,d));a.push(t.slice(d,ocn(t)));
	return a;
}
//uploadhook
function hookupload(o){
	addEvent(o.e,'change',function(){
		
		var reader=new FileReader();
		
		reader.onload=function(){
			var bytes=new Uint8Array(this.result);
			
			o.fnc(bytes);
		};
		reader.readAsArrayBuffer(this.files[0]);
		//clg(reader);
	});
}






var mrgar=function(a,b){
	var o={};for(var i in a)o[a[i]]=b[i];
	return o;
}
var scren=function(){
	var o={};o.w=screen.availWidth;o.h=screen.availHeight;return o;
}
var colbox=function(id,l,m,s,x,cl){
	var rd=DIV(id,('col-lg-'+l+' col-md-'+m+' col-sm-'+s+' col-xs-'+x+' colbox'));
	if(cl)for(var i in cl)APP(rd,cl[i]);
	return rd;
}
var bottle = function(nam,c,id) {
  var b = $$$('button');
     if(id) {
      b.id = id+'-button';
	 }else{
	  b.id = nam+'-button';
	 }
	 if(nam=='X') {
		 b.style.position = 'absolute';
		 b.style.right = '.2em';
		 b.style.bottom = '.1em';
		 b.style.border = 0;
	 }
	  if(c) b.className = c+'-but';
      b.innerHTML = nam;
  return b;
}
var sli=function(id,c,t){
	var rd=$$$('li',id,c);
	if(typeof t=='string'){rd.textContent=t;}else{for(var i in t)APP(rd,t[i]);}
	return rd;
}
var ali=function(n,id,cl){
	var rd=$$$('li',id),a=anc('#',n,cl,id);APP(rd,a);return rd;
}
var separator=function(){
	var rd=$$$('li','','divider',{'role':'saparator'});return rd;
}
var caret=function(){
	var rd=span('','','caret');return rd;
}
var but=function(v,t,id,c,ro){
	var d=$$$('button',id,c);
	attme(d,ro);
	d.type=t;
	if(typeof v=='string'){d.textContent=v}else{for(var i in v)APP(d,v[i]);}
	return d;
}
var rigiya=function(d,id,y){
	var o={lg:'well hidden-md hidden-sm hidden-xs',md:'well hidden-lg hidden-sm hidden-xs',sm:'well hidden-md hidden-lg hidden-xs','xs':'well hidden-md hidden-sm hidden-lg',sx:'well hidden-md hidden-lg',lm:'well hidden-sm hidden-xs'},rd=DIV(id,o[d]);
	if(y)feedme(rd,y);
	return rd;
}
var toggler=function(ct,id,h,tx,cp,cl){
	var pc=(cp)?'collapse':'collapse in',ac=anc('#col'+ct+'Content',h,'','',{'data-toggle':'collapse'}),h1=hea(4,ac),cd=DIV('col'+ct+'Content',pc),cr=$$$('span','','caret');
	cd.textContent=tx;
	APP(cl,h1);APP(cl,cd);APP(h1,cr);
	return cl;
}
var clearfix=function(v){
	var rd=DIV('',('clearfix visible-'+v));return rd;
}
var row=function(id,cl){
	var rd=DIV(id,'row');for(var i in cl){APP(rd,cl[i]);}return rd;
}
var butgroup=function(c,ar,id,g){
	var rd=DIV(id,('btn-group btn-group-'+A1[c])),b;
	rd.role='group';
	for(var i in ar){
		b=(typeof ar[i]=='string')?but(i,'button',i,ar[i].c):ar[i];
		APP(rd,b);
		if(g)g[i]=b;
	}
	return rd;
}
var elgrup=function(c,ar,id,g){
	var rd=DIV(id,('btn-group btn-group-'+A1[c])),b;
	rd.role='group';
	for(var i in ar)APP(rd,ar[i]);
	return rd;
}
var myEditor=function(element,father){
	var el=element,pa=father,rd=DIV('styleit'),hd=DIV('sit-hd'),h=hea(1,'StyleIt','sit-h'),xb=bottle('---','','xsit'),ws=DIV('sit-ws'),ta=$$$('textarea','sit-ta'),bb=DIV('sit-bb'),nd=DIV('sit-nvd'),lb=bottle('Left','sitnv','sitln'),rb=bottle('Right','sitnv','sitrn'),cb=bottle('Center','sitnv','sitcn'),od=DIV('sit-opd'),ms=bottle('-','sitob','sitms'),ps=bottle('+','sitob','sitps'),fb=bottle('<>','','sitfl'),pos='r',op=1,dis=false,cod,wp=bottle('wipe BC','sbcd','sitwbc'),bd=DIV('sit-bcd'),wo=false;
	APP(rd,hd);APP(rd,ws);APP(rd,bb);APP(hd,h);APP(hd,xb);APP(ws,ta);APP(bb,nd);APP(bb,od);APP(bb,bd);APP(nd,lb);APP(nd,cb);APP(nd,rb);APP(od,ms);APP(od,ps);APP(pa,fb);APP(bd,wp);
	style(fb,'fixed','','','1em','','1em');style(rd,'fixed','auto','','1em','','4em');
	
	var xx=setTimeout(valme,1000);
	function valme(){
		cod=false
		ta.value=(cod)?cod:el.innerHTML;
		if(!cod)wp.style.display='none';
	}
	function snd4save(){
		if(!wo){
			wo=true;
		}else{
			wo=false;
			var oo={};oo.css=ta.value;
			socket.emit('css',oo);
			socket.on('cssh',function(ob){TD.css=ob;wp.style.display='';});
		}
	}
	function snd4wipe(){
		socket.emit('xcss');
		socket.on('cssx',function(ob){TD.css=ob;wp.style.display='none';});
	}
	function zhow(){
		if(dis){X(rd);dis=false;}else{APP(pa,rd);dis=true;}
	}
	function repcode(){
		var v=ta.value;
		el.innerHTML=v;
	}
	function move(n){
		if(n==pos)return;
		var lf,rt;
		if(n=='r'){rt='1em';lf='';}
		if(n=='l'){rt='';lf='1em';}
		if(n=='c'){rt=0;lf=0;}
		rd.style.left=lf;rd.style.right=rt;
		pos=n;
	}
	function opac(fw){
		if(fw){
			if(op<1)op+=.1;
		}else{
			if(op>.2)op-=.1;
		}
		rd.style.opacity=op;
	}
	addEvent(fb,'click',zhow);
	addEvent(ta,'keydown',function(e){
		//e=e.keyCode;
		//e=String.fromCharCode(e);
		var c=e.code,sk=e.shiftKey;
		//clg(c);
		repcode();
		if(wo)snd4save();
		if(c=='Enter'||c=='Semicolon')snd4save();
		if(c=='BracketRight'&&sk)snd4save();
	});
	addEvent(rd,'click',function(e){
		e=ee(e);
		if(e.id=='xsit-button')zhow();
		if(e.id=='sitrn-button')move('r');
		if(e.id=='sitln-button')move('l');
		if(e.id=='sitcn-button')move('c');
		if(e.id=='sitms-button')opac();
		if(e.id=='sitps-button')opac(true);
		if(e.id=='sitwbc-button')snd4wipe();
	});
	
}
var hea=function(c,tx,id,cl){
	var t='h'+c,a=$$$(t,id,cl);if(typeof tx=='string'){a.textContent=tx;}else{feedme(a,tx);}return a;
}
var jum=function(id,cl){
	var d=DIV(id,'jumbotron bg-gradient-primary ');if(cl)for(var i in cl)APP(d,cl[i]);
	attme(d,{'enable-gradients':true})
	return d;
}
var par=function(tx,id,c,at){
	var p=$$$('p',id,c);attme(p,at);if(typeof tx!='object'){p.textContent=tx;}else{feedme(p,tx);}return p;
}
var anc=function(rf,cn,cl,id,ro){
	var a=$$$('a',id,cl);a.href=rf;
	if(cn){if(typeof cn!='object'){a.textContent=cn}else{for(var i in cn)APP(a,cn[i]);}}
	attme(a,ro);
	return a;
}
var tanc=function(rf,cn,cl,id,ro){
	var a=$$$('a',id,cl);a.href=rf;if(cn){if(typeof cn!='object'){a.textContent=cn;}else{APP(a,cn);}}
	a.setAttribute('data-toggle','collapse');
	if(typeof ro=='object')for(var i in ro)a[i]=ro[i];
	return a;
}
var trow=function(id,c,a){
	var rd=$$$('tr',id,c),th=$$$('td'),ac=anc('#',a[0]),p;
	APP(rd,th);APP(th,ac);
	for(var i=1;i<a.length;i++){
		th=$$$('td','','text-center');
		p=$$$('input','','text-center');
		p.value=a[i];
		p.style.width='6em';
		p.style.border=0;
		APP(rd,th);APP(th,p);
	}
	return rd;
}
var thed=function(id,c,a){
	var rd=$$$('tr',id,c),th=$$$('th','','text-center'),ac=anc('#',a[0]);
	APP(rd,th);APP(th,ac);
	for(var i=1;i<a.length;i++){
		th=$$$('th','','text-center');th.textContent=a[i];APP(rd,th);
	}
	return rd;
}
var tab=function(eh,ha,o){
	var cl=DIV('','col-md-8 col-md-offset-4'),rd=row('',[cl]),bt=$$$('table','','table table-bordered table-striped table-hover'),tt=$$$('thead'),hr=$$$('tr'),th=$$$('td'),bb=$$$('tbody');
	th.innerHTML=eh;
	th.setAttribute('colspan',8);
	APP(cl,bt);APP(bt,tt);APP(bt,bb);APP(tt,hr);APP(hr,th);
	th=thed('','',ha);
	APP(bb,th);
	for(var i in o){
		hr=trow('','',o[i]);
		APP(bb,hr);
	}
	
	return rd;
}
var img=function(s,i,c,at){
	var rd=$$$('img',i,c);
	rd.src=s;
	attme(rd,at);
	return rd;
}
var span=function(tx,id,c,at){
	var sp=$$$('span',id,c);
	attme(sp,at);
	sp.textContent=tx;return sp;
}
var capitm=function(c1,c2,o){
	var rd=DIV('',c1),b=DIV('',c2),c=DIV('carousel-caption');
	APP(rd,b);APP(rd,c);APP(c,o);
	return rd;
}
var carol=function(tg,c){
	var ol=$$$('ol','','carousel-indicators'),b,a;
	b=$$$('li','','active');attme(b,{'data-target':tg,'data-slide-to':0});APP(ol,b);
	for(var i=1;i<c;i++){
		b=$$$('li');attme(b,{'data-target':tg,'data-slide-to':i});APP(ol,b);
	}
	return ol;
}
var carosel=function(id,ks){
	var di='#'+id,rd=DIV(id,'carousel slide',{'data-ride':'carousel'}),ol=carol(di,ocn(ks)),ine=DIV('','carousel-inner'),sl=slist(ocn(ks)),bk,pr,nx;
	APP(rd,ol);APP(rd,ine);
	bk=capitm('item active',sl[0],ks[0]);
	APP(ine,bk);
	for(var i=1;i<ocn(ks);i++){
		bk=capitm('item',sl[i],ks[i]);
		APP(ine,bk);
	}
	nx=span('','','glyphicon glyphicon-chevron-left');
	pr=anc(di,[nx],'left carousel-control','',{'data-slide':'prev'});APP(rd,pr);
	nx=span('','','glyphicon glyphicon-chevron-right');
	pr=anc(di,[nx],'right carousel-control','',{'data-slide':'next'});APP(rd,pr);
	
	
	return rd;
	
}
var slist=function(n){
	var a=[],b='slide',c=1;
	for(var i=0;i<n;i++){
		a.push(b+c);
		c++;
	}
	return a;
}
var icon=function(n,at){
	var ic=ICN,p=span('','',ic[n]);attme(p,at);return p;
}
var iconanc=function(r,b,t,id,c,i){
	var f=(b)?span(t):icon(i),s=(b)?icon(i):span(t),rd=anc(r,[f,s],c,id);
	return rd;
}
var iconbtn=function(b,t,id,c,i){
	var at={'aria-hidden':true},f=(b)?span(t):icon(i,at),s=(b)?icon(i,at):span(t),rd=but([f,s],'button',id,c);
	return rd;
}
var dropmenu=function(dr,id,bc,m,d,a){
	var rd=DIV(id,dr),bg=DIV('','btn-group',{'role':'group'}),cb=but(m,'button','',bc.kc),mn=but([caret(),span('Toggle Dropdown','','sr-only')],'button',bc.i,bc.c,{'data-toggle':'dropdown','aria-haspopup':true,'aria-expanded':false}),ul=$$$('ul','','dropdown-menu'),li;
	APP(rd,bg);APP(bg,cb);APP(bg,mn);APP(bg,ul);
	if(d){
		for(var i=0;i<ocn(a);i++){
			APP(ul,sli('','dropdown-header',a[i][0]));
			for(var v=1;v<ocn(a[i]);v++){
				APP(ul,ali(a[i][v]));
			}
			if(i!=(ocn(a)-1))APP(ul,separator());
		}
	}else{
		for(var i in a){
			APP(ul,ali(a[i]));
		}
	}
	return rd;
}
var pah=function(id,c,cl){
	var rd=DIV(id,'page-header');if(c)feedme(rd,c);
	if(cl)addclass(rd,cl);
	return rd;
}
var input=function(id,c,at,ta){
	var v=(ta)?'textarea':'input',rd=$$$(v,id,c);attme(rd,at);return rd;
}
var ingrup=function(id,c,sz,f){
	var rd=DIV(id,('input-group input-group-'+sz)),ad=span(c,'','input-group-addon'),ip=input('','form-control',{'type':'text','placeholder':c});
	if(f){APP(rd,ad);APP(rd,ip);}else{APP(rd,ip);APP(rd,ad);}
	return rd;
}
var bingrup=function(id,c,sz,bc,f){
	var rd=DIV(id,('input-group input-group-'+sz)),ad=span(but(c,'button','',bc),'','input-group-btn'),ip=input('','form-control',{'type':'text','placeholder':c});
	if(f){APP(rd,ad);APP(rd,ip);}else{APP(rd,ip);APP(rd,ad);}
	
	return rd;
}
var pingrup=function(id,c,sz){
	var rd=DIV(id,('input-group input-group-'+sz)),ip=input('','form-control',{'type':'text','placeholder':c});
	APP(rd,ip);
	return rd;
}
var small=function(t,id,cl){
	var c=(cl)?cl:'form-text text-muted',rd=$$$('small',id,c);rd.textContent=t;
	return rd;
}
var fomgrup=function(l,c,t,s,o,ta){
	var rd=DIV('','form-group'),lb=$$$('label'),ip=input(l,c,{'placeholder':l,'type':t},ta);lb.textContent=l;
	APP(rd,lb);APP(rd,ip);if(s)APP(rd,small(s,l));
	if(o)o[l]=ip;
	return rd;
}
var imgroup=function(c,ar,id,g){
	var rd=DIV(id,('btn-group btn-group-'+A1[c])),b;
	rd.role='group';
	if(g)attme(rd,g);
	for(var i in ar)APP(rd,ar[i]);
	return rd;
}
var ee=function(e){
	var c=e||window.event;c=c.target||c.srcElement;return c;
}
var bali=function(c,b,id){
	var rd=$$$('li',id,'list-group-item d-flex justify-content-between align-items-center'),sp=span(c),bg=span(b,'','badge badge-primary badge-pill float-right');
	APP(rd,sp);APP(rd,bg);
	return rd;
}
var dali=function(c,b,id){
	var rd=DIV(c.i,'list-group-item d-flex justify-content-between align-items-center zborder'),sp=span(c.t,'dalitg','btn btn-warning btn-md'),bg=par(b,'','badge badge-primary badge-pill float-right');
	sp.type='button';
	APP(rd,sp);APP(rd,bg);
	return rd;
}
var grupli=function(p,id){
	if(!PINS[p])return;
	var ro=PINS[p],ks=ro.date,rd=DIV('grupli','btn-group d-flex w-100 justify-content-between align-items-center','',[dali({'i':p,'t':cardnme(p,ro)},ro.num+' pins'),par(ks,'grupsp',id)]);
	return rd
}
var totxt=function(c){
	var t='';
	for(var i=0;i<2;i++)t+='  '+capname(PA[i])+':'+c[PA[i]]+' , ';
	return t;
}
var lisgrup=function(id,cl){
	if(!LL)return;
	var rd=DIV(id,'list-group');
	for(var i in cl)APP(rd,cl[i]);
	return rd;
}
var A4=function(id){
	var pot=true,rd=page(id,'A4page',{size:'A4'}),s1={'margin':'auto','box-sizing':'border-box','margin-bottom':'.5cm','padding':'0.3in',display:'block',overflow:'hidden'},s2={'w':'28cm','h':'40cm'},eo={};
	eo.rd=rd;
	for(var i in s1)rd.style[i]=s1[i];
	
	
	function rotate(){
		if(pot){
			rd.style.width=s2.h;rd.style.height=s2.w;
			pot=false;
		}else{
			rd.style.width=s2.w;rd.style.height=s2.h;
			pot=true;
		}
	}
	eo.rot=rotate;
	return eo;
}
var page=function(id,cl,at,ch){
	var rd=$$$('page',id,cl);if(at)attme(rd,at);if(ch)feedme(rd,ch);
	pgbody(rd);
	return rd;
}
var numar=function(c){
	var a=[];
	for(var i=0;i<c;i++)a.push((i+1));
	return a;
	
}
var smatob=function(a,o){
	var ro={};
	for(var i in a)ro[a[i]]=o;
	return ro;
}
var nav=function(cl){
	var rd=$$$('nav','navbar navbar-default'),ws=DIV('','container fluid');
	APP(rd,ws);
	if(cl)for(var i in cl)APP(ws,cl[i]);
	return rd;
}
//flexie(i,{t:i,v:o[i]},{f:'pencil',s:'ok'})
var flexie=function(id,ct,bt,ag){
	var ad=par(ct.t,'dtag','col'),sp=par(ct.v,'flx-sp','col'),ip=input('','flx-ip',ag.i),is=par([sp,ip],'flxis-dv'),b1=but([icon(bt.f)],'button',bt.f,'btn btn-link btn-lg'),b2=but([icon(bt.s)],'button',bt.s,'btn btn-link btn-lg'),bd=par([b1,b2],'flxbut',ag.c),rd=DIV(id,'input-group input-group-md flexie','',[ad,is]),so='',eo={};
	if(bt.f)APP(rd,bd);
	ad.style.display='inline-block';is.style.display='inline-block';bd.style.display='inline-block';
	eo.e=rd;
	eo.f=flipme;
	eo.v=ip;
	flipme();
	function flipme(t){
		if(!so){
			ip.style.display='none';b2.style.display='none';sp.style.display='';b1.style.display='';
			if(t)sp.textContent=ip.value;
			so=true;
		}else{
			ip.style.display='';b2.style.display='';sp.style.display='none';b1.style.display='none';
			ip.value=ct.v;
			so=false;
		}
	}
	return eo;
}
var fulltime=function(){
	var d=new Date();return d.toGMTString();
}
var ulist=function(id,rc,lc,ar){
	var rd=$$$('ul',id,rc),li,eo={},c;
	eo.u=rd;eo.l={};
	if(ar)for(var i in ar){
		c=(ar[i]==id)?lc.s:lc.d;
		li=$$$('li','',c,'',[anc('#',ar[i])]);
		eo.l[ar[i]]=li
		APP(rd,li);
	}
	return eo;
}
var plist=function(id,rc,lc,ar){
	var rd=$$$('ul',id,rc),li,eo={},c;
	eo.u=rd;eo.l={};
	if(ar)for(var i in ar){
		c=(ar[i]==id)?lc.s:lc.d;
		li=par([anc('#',ar[i])],'',c);
		eo.l[ar[i]]=li
		APP(rd,li);
	}
	return eo;
}
var fom=function(a,as){
	var rd=$$$('form'),fg,l,ip,s,eo={},oe={};
	eo.f=rd;
	for(var i in a){
		s=(as&&as[i])?as[i]:'';
		fg=fomgrup(a[i],'form-control',a[i].toLowerCase(),s,oe);
		APP(rd,fg);
	}
	eo.o=oe;
	return eo;
}
var rar=function(a,c){
	var xc=a.length-c,b=[];
	for(var i=0;i<xc;i++)b.push(a[i]);
	return b;
}
var kwp=function(){
	return par([hea(6,'Powered by: KARLDWORLD(C9).','kwp-h6')],'kwpower');
}
var phul=function(ar,ra,as){
	var ul=jum('phul'),b={},c,eo={},f={},d,v,k,s;addclass(ul,'form');
	for(var i in ar){
		v=(ra&&ra[i])?ra[i]:'';
		k=(as&&as[i])?as[i]:'text';
		c=input(ar[i],'form-control',{placeholder:ar[i],type:k});
		s=par(v,'','phat');
		d=par([c,s],'','form-group')
		APP(ul,d);
		b[ar[i]]=c;
		f[ar[i]]=s;
	}
	eo.e=ul;
	eo.o=b;
	eo.a=f;
	return eo;
}
var eform=function(a,id,c,at){
	var rd=$$$('form',id,c,at,a);
	return rd;
	
}
var efgrup=function(a,id,c,at){
	var rd=DIV(id,'form-group',at,a);
	return rd;
}
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
var upform=function(o){
	var o1=upa;
}
//filekey={e1:socketemit,e2:socketon,f2:socketonfunc,i1:rdid,bt:buttxt}
var filekey=function(o){
	
}
var fileinput=function(){
	return input('','',upa.finp);
}

