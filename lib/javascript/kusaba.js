var style_cookie;var style_cookie_txt;var style_cookie_site;var kumod_set=false;var ispage;var lastid;if(!Array.prototype.indexOf){Array.prototype.indexOf=function(B){var A=this.length;var C=Number(arguments[1])||0;C=(C<0)?Math.ceil(C):Math.floor(C);if(C<0){C+=A}for(;C<A;C++){if(C in this&&this[C]===B){return C}}return -1}}var Utf8={encode:function(B){B=B.replace(/\r\n/g,"\n");var A="";for(var D=0;D<B.length;D++){var C=B.charCodeAt(D);if(C<128){A+=String.fromCharCode(C)}else{if((C>127)&&(C<2048)){A+=String.fromCharCode((C>>6)|192);A+=String.fromCharCode((C&63)|128)}else{A+=String.fromCharCode((C>>12)|224);A+=String.fromCharCode(((C>>6)&63)|128);A+=String.fromCharCode((C&63)|128)}}}return A},decode:function(A){var B="";var C=0;var D=c1=c2=0;while(C<A.length){D=A.charCodeAt(C);if(D<128){B+=String.fromCharCode(D);C++}else{if((D>191)&&(D<224)){c2=A.charCodeAt(C+1);B+=String.fromCharCode(((D&31)<<6)|(c2&63));C+=2}else{c2=A.charCodeAt(C+1);c3=A.charCodeAt(C+2);B+=String.fromCharCode(((D&15)<<12)|((c2&63)<<6)|(c3&63));C+=3}}}return B}};function replaceAll(B,D,C){var A=B.indexOf(D);while(A>-1){B=B.replace(D,C);A=B.indexOf(D)}return B}function insert(D){var B=document.forms.postform.message;if(B){if(B.createTextRange&&B.caretPos){var C=B.caretPos;C.text=C.text.charAt(C.text.length-1)==" "?D+" ":D}else{if(B.setSelectionRange){var E=B.selectionStart;var A=B.selectionEnd;B.value=B.value.substr(0,E)+D+B.value.substr(A);B.setSelectionRange(E+D.length,E+D.length)}else{B.value+=D+" "}}B.focus()}}function quote(b,a){var v=eval("document."+a+".message");v.value+=">>"+b+"\n";v.focus()}function checkhighlight(){var A;if(A=/#i([0-9]+)/.exec(document.location.toString())){if(!document.forms.postform.message.value){insert(">>"+A[1])}}if(A=/#([0-9]+)/.exec(document.location.toString())){highlight(A[1])}}function highlight(D,F){if(F&&ispage){return }var B=document.getElementsByTagName("td");for(var C=0;C<B.length;C++){if(B[C].className=="highlight"){B[C].className="reply"}}var E=document.getElementById("reply"+D);if(E){E.className="highlight";var A=/^([^#]*)/.exec(document.location.toString());document.location=A[1]+"#"+D}}function get_password(A){var E=getCookie(A);if(E){return E}var D="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";var E="";for(var C=0;C<8;C++){var B=Math.floor(Math.random()*D.length);E+=D.substring(B,B+1)}set_cookie(A,E,365);return(E)}function togglePassword(){var C=(navigator.userAgent.indexOf("Safari")!=-1);var F=(navigator.userAgent.indexOf("Opera")!=-1);var B=(navigator.appName=="Netscape");var A=document.getElementById("passwordbox");var E;if((C)||(F)||(B)){E=A.innerHTML}else{E=A.text}E=E.toLowerCase();var D="<td></td><td></td>";if(E==D){var D='<td class="postblock">Mod</td><td><input type="text" name="modpassword" size="28" maxlength="75">&nbsp;<acronym title="Distplay staff status (Mod/Admin)">D</acronym>:&nbsp;<input type="checkbox" name="displaystaffstatus" checked>&nbsp;<acronym title="Lock">L</acronym>:&nbsp;<input type="checkbox" name="lockonpost">&nbsp;&nbsp;<acronym title="Sticky">S</acronym>:&nbsp;<input type="checkbox" name="stickyonpost">&nbsp;&nbsp;<acronym title="Raw HTML">RH</acronym>:&nbsp;<input type="checkbox" name="rawhtml">&nbsp;&nbsp;<acronym title="Name">N</acronym>:&nbsp;<input type="checkbox" name="usestaffname"></td>'}if((C)||(F)||(B)){A.innerHTML=D}else{A.text=D}return false}function toggleOptions(D,C,B){if(document.getElementById("opt"+D)){if(document.getElementById("opt"+D).style.display==""){document.getElementById("opt"+D).style.display="none";document.getElementById("opt"+D).innerHTML=""}else{var A='<td class="label"><label for="formatting">Formatting:</label></td><td colspan="3"><select name="formatting"><option value="" onclick="javascript:document.getElementById(\'formattinginfo'+D+"').innerHTML = 'All formatting is performed by the user.';\">Normal</option><option value=\"aa\" onclick=\"javascript:document.getElementById('formattinginfo"+D+"').innerHTML = '[aa] and [/aa] will surround your message.';\"";if(getCookie("kuformatting")=="aa"){A+=" selected"}A+='>Text Art</option></select> <input type="checkbox" name="rememberformatting"><label for="rememberformatting">Remember</label> <span id="formattinginfo'+D+'">';if(getCookie("kuformatting")=="aa"){A+="[aa] and [/aa] will surround your message."}else{A+="All formatting is performed by the user."}A+='</span></td><td><input type="button" value="Preview" class="submit" onclick="javascript:postpreview(\'preview'+D+"', '"+B+"', '"+D+"', document."+C+'.message.value);"></td>';document.getElementById("opt"+D).innerHTML=A;document.getElementById("opt"+D).style.display=""}}}function getCookie(name){with(document.cookie){var regexp=new RegExp("(^|;\\s+)"+name+"=(.*?)(;|$)");var hit=regexp.exec(document.cookie);if(hit&&hit.length>2){return Utf8.decode(unescape(replaceAll(hit[2],"+","%20")))}else{return""}}}function set_cookie(C,D,E){if(E){var B=new Date();B.setTime(B.getTime()+(E*24*60*60*1000));var A="; expires="+B.toGMTString()}else{A=""}document.cookie=C+"="+D+A+"; path=/"}function set_stylesheet(H,B,D){if(B){set_cookie("kustyle_txt",H,365)}else{if(D){set_cookie("kustyle_site",H,365)}else{set_cookie("kustyle",H,365)}}var C=document.getElementsByTagName("link");var F=false;for(var E=0;E<C.length;E++){var A=C[E].getAttribute("rel");var G=C[E].getAttribute("title");if(A.indexOf("style")!=-1&&G){C[E].disabled=true;if(H==G){C[E].disabled=false;F=true}}}if(!F){set_preferred_stylesheet()}}function set_preferred_stylesheet(){var B=document.getElementsByTagName("link");for(var C=0;C<B.length;C++){var A=B[C].getAttribute("rel");var D=B[C].getAttribute("title");if(A.indexOf("style")!=-1&&D){B[C].disabled=(A.indexOf("alt")!=-1)}}}function get_active_stylesheet(){var B=document.getElementsByTagName("link");for(var C=0;C<B.length;C++){var A=B[C].getAttribute("rel");var D=B[C].getAttribute("title");if(A.indexOf("style")!=-1&&D&&!B[C].disabled){return D}}return null}function get_preferred_stylesheet(){var B=document.getElementsByTagName("link");for(var C=0;C<B.length;C++){var A=B[C].getAttribute("rel");var D=B[C].getAttribute("title");if(A.indexOf("style")!=-1&&A.indexOf("alt")==-1&&D){return D}}return null}function delandbanlinks(){if(!kumod_set){return }var B=document.getElementsByTagName("span");var E;var A;for(var C=0;C<B.length;C++){E=B[C];if(E.getAttribute("class")){if(E.getAttribute("class").substr(0,3)=="dnb"){A=E.getAttribute("class").split("|");var D='&#91;<a href="'+ku_cgipath+"/manage_page.php?action=delposts&boarddir="+A[1]+"&del";if(A[3]=="y"){D+="thread"}else{D+="post"}D+="id="+A[2]+'" title="Delete" onclick="return confirm(\'Are you sure you want to delete this post/thread?\');">D</a>&nbsp;<a href="'+ku_cgipath+"/manage_page.php?action=delposts&boarddir="+A[1]+"&del";if(A[3]=="y"){D+="thread"}else{D+="post"}D+="id="+A[2]+"&postid="+A[2]+'" title="Delete &amp; Ban" onclick="return confirm(\'Are you sure you want to delete and ban the poster of this post/thread?\');">&amp;</a>&nbsp;<a href="'+ku_cgipath+"/manage_page.php?action=bans&banboard="+A[1]+"&banpost="+A[2]+'" title="Ban">B</a>&#93;';B[C].innerHTML=D}}}}function togglethread(A){if(hiddenthreads.toString().indexOf(A)!==-1){document.getElementById("unhidethread"+A).style.display="none";document.getElementById("thread"+A).style.display="block";hiddenthreads.splice(hiddenthreads.indexOf(A),1);set_cookie("hiddenthreads",hiddenthreads.join("!"),30)}else{document.getElementById("unhidethread"+A).style.display="block";document.getElementById("thread"+A).style.display="none";hiddenthreads.push(A);set_cookie("hiddenthreads",hiddenthreads.join("!"),30)}return false}function toggleblotter(C){var B=document.getElementsByTagName("li");var A=new Array();var D;for(i=0,iarr=0;i<B.length;i++){att=B[i].getAttribute("class");if(att=="blotterentry"){D=B[i];if(D.style.display=="none"){D.style.display="";if(C){set_cookie("ku_showblotter","1",365)}}else{D.style.display="none";if(C){set_cookie("ku_showblotter","0",365)}}}}}function expandthread(C,A){if(document.getElementById("replies"+C+A)){var B=document.getElementById("replies"+C+A);B.innerHTML="Expanding thread...<br><br>"+B.innerHTML;new Ajax.Request(ku_boardspath+"/expand.php?board="+A+"&threadid="+C,{method:"get",onSuccess:function(E){var D=E.responseText||"something went wrong (blank response)";B.innerHTML=D;addpreviewevents();delandbanlinks()},onFailure:function(){alert("Something went wrong...")}})}return false}function quickreply(A){if(A==0){document.getElementById("posttypeindicator").innerHTML="new thread"}else{document.getElementById("posttypeindicator").innerHTML="reply to "+A+' [<a href="#postbox" onclick="javascript:quickreply(\'0\');" title="Cancel">x</a>]'}document.postform.replythread.value=A}function startPostSpyTimeout(D,B,C){var A=getCookie("postspy");if(A=="1"){if(document.getElementById("thread"+D+B)){lastid=C;setTimeout("postSpy("+D+', "'+B+'");',20000)}}}function postSpy(C,B){var A=document.getElementById("thread"+C+B);new Ajax.Request(ku_boardspath+"/expand.php?board="+B+"&threadid="+C+"&pastid="+lastid,{method:"get",onSuccess:function(F){var E=F.responseText;var D=E.split("|");newlastid=D[0];if(newlastid!=""){lastid=newlastid;E=E.substr((newlastid.length+1));A.innerHTML+=E;addpreviewevents();delandbanlinks()}setTimeout("postSpy("+C+', "'+B+'");',5000)},onFailure:function(){alert("Something went wrong...")}})}function getwatchedthreads(C,B){if(document.getElementById("watchedthreadlist")){var A=document.getElementById("watchedthreadlist");A.innerHTML="Loading watched threads...";new Ajax.Request(ku_boardspath+"/threadwatch.php?board="+B+"&threadid="+C,{method:"get",onSuccess:function(E){var D=E.responseText||"something went wrong (blank response)";A.innerHTML=D},onFailure:function(){alert("Something went wrong...")}})}}function addtowatchedthreads(B,A){if(document.getElementById("watchedthreadlist")){new Ajax.Request(ku_boardspath+"/threadwatch.php?do=addthread&board="+A+"&threadid="+B,{method:"get",onSuccess:function(D){var C=D.responseText||"something went wrong (blank response)";alert("Thread successfully added to your watch list.");getwatchedthreads("0",A)},onFailure:function(){alert("Something went wrong...")}})}}function removefromwatchedthreads(B,A){if(document.getElementById("watchedthreadlist")){new Ajax.Request(ku_boardspath+"/threadwatch.php?do=removethread&board="+A+"&threadid="+B,{method:"get",onSuccess:function(D){var C=D.responseText||"something went wrong (blank response)";getwatchedthreads("0",A)},onFailure:function(){alert("Something went wrong...")}})}}function hidewatchedthreads(){set_cookie("showwatchedthreads","0",30);if(document.getElementById("watchedthreads")){document.getElementById("watchedthreads").innerHTML='The Watched Threads box will be hidden the next time a page is loaded.  [<a href="#" onclick="javascript:showwatchedthreads();return false">undo</a>]'}}function showwatchedthreads(){set_cookie("showwatchedthreads","1",30);window.location.reload(true)}function togglePostSpy(){var A=getCookie("postspy");if(A=="1"){set_cookie("postspy","0",30);alert("Post Spy disabled.  Any pages loaded from now on will not utilize the Post Spy feature.")}else{set_cookie("postspy","1",30);alert("Post Spy enabled.  Any pages loaded from now on will utilize the Post Spy feature.")}}function checkcaptcha(A){if(document.getElementById(A)){if(document.getElementById(A).captcha){if(document.getElementById(A).captcha.value==""){alert("Please enter the captcha image text.");document.getElementById(A).captcha.focus();return false}}}return true}function expandimg(I,H,F,C,G,E,A){element=document.getElementById("thumb"+I);var D='<img src="'+F+'" alt="'+I+'" class="thumb" height="'+A+'" width="'+E+'">';var B="<img class=thumb height="+A+" alt="+I+' src="'+F+'" width='+E+">";if(element.innerHTML.toLowerCase()!=D&&element.innerHTML.toLowerCase()!=B){element.innerHTML=D}else{element.innerHTML='<img src="'+H+'" alt="'+I+'" class="thumb" height="'+G+'" width="'+C+'">'}}function postpreview(D,A,C,B){if(document.getElementById(D)){new Ajax.Request(ku_boardspath+"/expand.php?preview&board="+A+"&parentid="+C+"&message="+escape(B),{method:"get",onSuccess:function(F){var E=F.responseText||"something went wrong (blank response)";document.getElementById(D).innerHTML=E},onFailure:function(){alert("Something went wrong...")}})}}function set_inputs(id){if(document.getElementById(id)){with(document.getElementById(id)){if(!name.value){name.value=getCookie("name")}if(!em.value){em.value=getCookie("email")}if(!postpassword.value){postpassword.value=get_password("postpassword")}}}}function set_delpass(id){if(document.getElementById(id).postpassword){with(document.getElementById(id)){if(!postpassword.value){postpassword.value=get_password("postpassword")}}}}function addreflinkpreview(E){ainfo=this.getAttribute("class").split("|");var B=document.createElement("div");B.setAttribute("id","preview"+this.getAttribute("href"));B.setAttribute("class","reflinkpreview");if(E.pageX){B.style.left=""+(E.pageX+50)+"px"}else{B.style.left=(E.clientX+50)}var D=document.createTextNode("");B.appendChild(D);var C=this.parentNode;var A=C.insertBefore(B,this);new Ajax.Request(ku_boardspath+"/read.php?b="+ainfo[1]+"&t="+ainfo[2]+"&p="+ainfo[3]+"&single",{method:"get",onSuccess:function(G){var F=G.responseText||"something went wrong (blank response)";A.innerHTML=F},onFailure:function(){alert("wut")}})}function delreflinkpreview(B){var A=document.getElementById("preview"+this.getAttribute("href"));if(A){A.parentNode.removeChild(A)}}function addpreviewevents(){var C=document.getElementsByTagName("a");var D;var B;for(var A=0;A<C.length;A++){D=C[A];if(D.getAttribute("class")){if(D.getAttribute("class").substr(0,4)=="ref|"){D.addEventListener("mouseover",addreflinkpreview,false);D.addEventListener("mouseout",delreflinkpreview,false)}}}}function keypress(F){if(F.altKey){var C=document.location.toString();if((C.indexOf("catalog.html")==-1&&C.indexOf("/res/")==-1)||(C.indexOf("catalog.html")==-1&&F.keyCode==80)){if(F.keyCode!=18&&F.keyCode!=16){if(C.indexOf(".html")==-1||C.indexOf("board.html")!=-1){var D=0;var G=C.substr(0,C.lastIndexOf("/")+1)}else{var D=C.substr((C.lastIndexOf("/")+1));D=(+D.substr(0,D.indexOf(".html")));var G=C.substr(0,C.lastIndexOf("/")+1)}if(D==0){var B=G}else{var B=G+D+".html"}if(F.keyCode==222||F.keyCode==221){if(match=/#s([0-9])/.exec(C)){var A=(+match[1])}else{var A=-1}if(F.keyCode==222){if(A==-1||A==9){var E=0}else{var E=A+1}}else{if(F.keyCode==221){if(A==-1||A==0){var E=9}else{var E=A-1}}}document.location.href=B+"#s"+E}else{if(F.keyCode==59||F.keyCode==219){if(F.keyCode==59){D=D+1}else{if(F.keyCode==219){if(D>=1){D=D-1}}}if(D==0){document.location.href=G}else{document.location.href=G+D+".html"}}else{if(F.keyCode==80){document.location.href=B+"#postbox"}}}}}}}function quickBrowse(G,D){var C=document.location.toString();if((C.indexOf("catalog.html")==-1&&C.indexOf("/res/")==-1)||(C.indexOf("catalog.html")==-1&&e.keyCode==80)){if(C.indexOf(".html")==-1||C.indexOf("board.html")!=-1){var E=0;var H=C.substr(0,C.lastIndexOf("/")+1)}else{var E=C.substr((C.lastIndexOf("/")+1));E=(+E.substr(0,E.indexOf(".html")));var H=C.substr(0,C.lastIndexOf("/")+1)}if(E==0){var B=H}else{var B=H+E+".html"}if(D=="thread"){if(match=/#s([0-9])/.exec(C)){var A=(+match[1])}else{var A=-1}if(G=="down"){if(A==-1||A==9){var F=0}else{var F=A+1}}else{if(G=="up"){if(A==-1||A==0){var F=9}else{var F=A-1}}}document.location.href=B+"#s"+F}else{if(D=="page"){if(G=="down"){E=E+1}else{if(G=="up"){if(E>=1){E=E-1}}}if(E==0){document.location.href=H}else{document.location.href=H+E+".html"}}else{if(D=="postbox"){document.location.href=B+"#postbox"}}}}}var wii={};wii.isWiiOperaBrowser=function(){return(navigator.userAgent.toLowerCase().indexOf("nintendo wii")>=0)};wii.KEYCODE_MINUS_=170;wii.KEYCODE_PLUS_=174;wii.KEYCODE_1_=172;wii.KEYCODE_2_=173;wii.KEYCODE_B_=171;wii.KEYCODE_UP_=175;wii.KEYCODE_DOWN_=176;wii.KEYCODE_RIGHT_=177;wii.KEYCODE_LEFT_=178;wii.controllers_=[];wii.addController=function(B){if(!(B instanceof wii.Controller)){throw new Error("invalid argument passed to wii.addController")}var E=wii.controllers_;var D=false;for(var C=0,A=E.length;C<A;++C){if(E[C]===B){D=true;break}}if(!D){E.push(B)}return !D};wii.removeController=function(B){if(!(B instanceof wii.Controller)){throw new Error("invalid argument passed to wii.addController")}var E=wii.controllers_;var D=false;for(var C=0,A=E.length;C<A;++C){if(E[C]===B){E.splice(C,1);D=true;break}}return D};wii.setupHandlers=function(){document.onkeypress=wii.handleKeyPress_;document.onclick=wii.handleMouseClick_};wii.handleKeyPress_=function(G){var F=G.which;var E=wii.controllers_;var D=true;for(var C=0,A=E.length;C<A;++C){var B=E[C];if(!B.handleKeyPress(F)){D=false}}return D};wii.handleMouseClick_=function(F){if(F.which!=1){return }var D=true;var E=wii.controllers_;for(var C=0,A=E.length;C<A;++C){var B=E[C];if(!B.handleMouseClick()){D=false}}return D};wii.Controller=function(){};wii.Controller.prototype.handleUp=function(){return true};wii.Controller.prototype.handleDown=function(){return true};wii.Controller.prototype.handleLeft=function(){return true};wii.Controller.prototype.handleRight=function(){return true};wii.Controller.prototype.handle1=function(){return true};wii.Wiimote=function(){wii.Controller.call(null)};wii.Wiimote.prototype=new wii.Controller();wii.Wiimote.prototype.toString=function(){return"[Wiimote]"};wii.Wiimote.prototype.handleMouseClick=function(){return this.handleA()};wii.Wiimote.prototype.handleKeyPress=function(A){switch(A){case wii.KEYCODE_UP_:this.handleUp();break;case wii.KEYCODE_DOWN_:this.handleDown();break;case wii.KEYCODE_LEFT_:this.handleLeft();break;case wii.KEYCODE_RIGHT_:this.handleRight();break;case wii.KEYCODE_1_:this.handle1();break;case wii.KEYCODE_2_:this.handle2();break;default:return true}return false};wii.HorizontalController=function(){wii.Controller.call(null)};wii.HorizontalController.prototype=new wii.Controller();wii.HorizontalController.prototype.toString=function(){return"[HorizontalController]"};wii.HorizontalController.prototype.handleKeyPress=function(A){switch(A){case wii.KEYCODE_UP_:this.handleLeft();break;case wii.KEYCODE_DOWN_:this.handleRight();break;case wii.KEYCODE_LEFT_:this.handleDown();break;case wii.KEYCODE_RIGHT_:this.handleUp();break;case wii.KEYCODE_1_:this.handleB();break;default:return true}return false};wii.KeyboardController=function(){wii.Controller.call(null)};wii.KeyboardController.prototype=new wii.Controller();wii.KeyboardController.prototype.toString=function(){return"[KeyboardController]"};wii.KeyboardController.prototype.handleKeyPress=function(A){switch(A){case 105:this.handleUp();break;case 107:this.handleDown();break;case 106:this.handleLeft();break;case 108:this.handleRight();break;case 45:this.handleMinus();break;case 43:this.handlePlus();break;case 49:this.handle1();break;case 50:this.handle2();break;case 98:this.handleB();break;case 97:this.handleA();break;default:return true}return false};function createLoggerFunction(A){return function(){alert(A)}}window.onunload=function(A){if(style_cookie){var B=get_active_stylesheet();set_cookie(style_cookie,B,365)}if(style_cookie_txt){var B=get_active_stylesheet();set_cookie(style_cookie_txt,B,365)}if(style_cookie_site){}};window.onload=function(D){delandbanlinks();addpreviewevents();checkhighlight();if(document.getElementById("watchedthreads")){var C=new Draggable("watchedthreads",{handle:"watchedthreadsdraghandle",onEnd:function(){E()}});var A=new Resizeable("watchedthreads",{resize:function(){B()}});function E(){set_cookie("watchedthreadstop",document.getElementById("watchedthreads").style.top,30);set_cookie("watchedthreadsleft",document.getElementById("watchedthreads").style.left,30)}function B(){var F=document.getElementById("watchedthreads").offsetWidth;var G=document.getElementById("watchedthreads").offsetHeight;set_cookie("watchedthreadswidth",F,30);set_cookie("watchedthreadsheight",G,30)}}document.onkeydown=keypress};if(style_cookie){var cookie=getCookie(style_cookie);var title=cookie?cookie:get_preferred_stylesheet();set_stylesheet(title)}if(style_cookie_txt){var cookie=getCookie(style_cookie_txt);var title=cookie?cookie:get_preferred_stylesheet();set_stylesheet(title,true)}if(style_cookie_site){var cookie=getCookie(style_cookie_site);var title=cookie?cookie:get_preferred_stylesheet();set_stylesheet(title,false,true)}if(getCookie("kumod")=="yes"){kumod_set=true}if(wii.isWiiOperaBrowser()){var wiimote=new wii.Wiimote();wiimote.handleUp=function(){quickBrowse("up","thread")};wiimote.handleDown=function(){quickBrowse("down","thread")};wiimote.handleLeft=function(){quickBrowse("up","page")};wiimote.handleRight=function(){quickBrowse("down","page")};wiimote.handle1=function(){quickBrowse("","postbox")};wii.setupHandlers();wii.addController(wiimote)};