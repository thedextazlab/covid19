if (DGPmtype === undefined || DGPmtype === null) { var DGPmtype=""; }
if (DGPkey === undefined || DGPkey === null) { var DGPkey=""; }
if (DGPlocker === undefined || DGPlocker === null) { var DGPlocker=0; }
if (DGPmobileonly === undefined || DGPmobileonly === null) { var DGPmobileonly=0; }
if (DGPhideondeny === undefined || DGPhideondeny === null) { var DGPhideondeny=0; }
if (DGPnativerequest === undefined || DGPnativerequest === null || DGPnativerequest == "") { var DGPnativerequest=0; } DGPnativerequest = parseInt(DGPnativerequest);
if (DGPinpageads === undefined || DGPinpageads === null || DGPinpageads == "") { var DGPinpageads=0; } DGPinpageads = parseInt(DGPinpageads);
if (DGPredirectonallow === undefined || DGPredirectonallow === null) { var DGPredirectonallow=""; }
if (DGPredirectondeny === undefined || DGPredirectondeny === null) { var DGPredirectondeny=""; }
if (DGPcustom1 === undefined || DGPcustom1 === null) { var DGPcustom1=""; }
if (DGPcustom2 === undefined || DGPcustom2 === null) { var DGPcustom2=""; }
if (DGPcustom3 === undefined || DGPcustom3 === null) { var DGPcustom3=""; }
if (DGPcustom4 === undefined || DGPcustom4 === null) { var DGPcustom4=""; }
if (DGPcustom5 === undefined || DGPcustom5 === null) { var DGPcustom5=""; }
if (DGPdelay === undefined || DGPdelay === null) { var DGPdelay = 100; }
if (DGPtheme === undefined || DGPtheme === null || DGPtheme == "") { var DGPtheme = "8bc34a"; }
if (DGPtitle === undefined || DGPtitle === null || DGPtitle == "") { var DGPtitle = "Don't miss it!"; }
if (DGPmessage === undefined || DGPmessage === null || DGPmessage == "") { var DGPmessage = "Allow notifications to always stay up-to-date with the latest news"; }
if (DGPallowbutton === undefined || DGPallowbutton === null || DGPallowbutton == "") { var DGPallowbutton = "ALLOW"; }
if (DGPrejectbutton === undefined || DGPrejectbutton === null || DGPrejectbutton == "") { var DGPrejectbutton = "NO THANKS"; }
if (DGPbgimage === undefined || DGPbgimage === null || DGPbgimage == "") { var DGPbgimage = "/assets/icons/launcher-icon-4x.png"; }
if (DGPdelay < 100) { DGPdelay = 100; }

var DGPdmn = window.location.hostname;
DGPdmn = DGPdmn.split('www.').join('');
var DGPifr = encodeURI("https://"+DGPdmn.split('.').join('_')+".digitalpush.org/lib-show.php?key="+DGPkey+"&custom1="+DGPcustom1+"&custom2="+DGPcustom2+"&custom3="+DGPcustom3+"&custom4="+DGPcustom4+"&custom5="+DGPcustom5+"&domain="+DGPdmn+"&message="+DGPmessage+"&bgimage="+DGPbgimage);

var DGPchecksw = window.location.protocol+"//"+window.location.hostname+"/dgp-sw.js";


function DGPsetCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function DGPgetCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function DGPeraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

function loadScript( url, callback ) {
      var script = document.createElement( "script" )
      script.type = "text/javascript";
      if(script.readyState) { 
        script.onreadystatechange = function() {
          if ( script.readyState === "loaded" || script.readyState === "complete" ) {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {  //Others
        script.onload = function() {
          callback();
        };
      }
    
      script.src = url;
      document.getElementsByTagName( "head" )[0].appendChild( script );
    }

function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete' || document.readyState=="interactive") callback();
    });
}

function DGPnotnow(){
    var DGPoverlay1exists = document.getElementById("DGPoverlay");
    if(DGPoverlay1exists){
    document.getElementById("DGPoverlay").style.display='none';
    document.getElementById("DGPoverlay2").style.display='none';
    }
    DGPsetCookie("DGPck","default",7200);
}

function DGPinpageseen(){
    var DGPinpagecontainerexists = document.getElementById("DGPinpagecontainer");
    if(DGPinpagecontainerexists){
    document.getElementById("DGPinpagecontainer").style.display='none';
    }
    DGPsetCookie("DGPinpage","seen",86400);
}

function DGPopener(url) {
  var DGPWindow = window.open(url, "", "width=600,height=600,menubar=no,scrollbars=no,status=no,toolbar=no");
  var DGPoverlay1exists = document.getElementById("DGPoverlay");
    if(DGPoverlay1exists){
    document.getElementById("DGPoverlay").style.display='none';
    document.getElementById("DGPoverlay2").style.display='none';
    }
       DGPsetCookie("DGPck","allowed",2592000);
       console.log(url);
}


function DGPisMobile() {
try{ document.createEvent("TouchEvent"); return true; }
catch(e){ return false; }
}

var xhr = new XMLHttpRequest(); 
xhr.withCredentials = true;
xhr.open('GET','https://stickyid-a.akamaihd.net/id?o='+encodeURIComponent(window.location.protocol+'//'+window.location.host));
xhr.onload = function() {
    var response = JSON.parse(xhr.responseText);
    window.globalUserId = response.id;
    var timestamp = response.ts;
    var cookieSupport = response.cs;
};
xhr.send();

function loadSW(){

if(DGPlocker !== 1){
    var DGPoverlay1exists = document.getElementById("DGPoverlay");
    if(DGPoverlay1exists){
    document.getElementById("DGPoverlay").style.display='none';
    document.getElementById("DGPoverlay2").style.display='none';
    }
}
Notification.requestPermission().then((permission) => {

    if (permission === 'granted') {
        
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations()
            .then(function(registrations) {
                for(let registration of registrations) {
                   if(registration.active.scriptURL != DGPchecksw){ registration.unregister(); }
                }
            });
    }

        
    loadScript("https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js", function() {
    loadScript("https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js", function() {


    var config = {
        apiKey: "AIzaSyA3fk4lmJ4qvbzqdj-MJFjjiUme2jM5Rig",
        authDomain: "digitalpush-b5bbc.firebaseapp.com",
        databaseURL: "https://digitalpush-b5bbc.firebaseio.com",
        projectId: "digitalpush-b5bbc",
        storageBucket: "digitalpush-b5bbc.appspot.com",
        messagingSenderId: "872252385548"
    };
    firebase.initializeApp(config);
    const messaging = firebase.messaging();


        navigator.serviceWorker.register(DGPchecksw).then(function(registration) {
                  messaging.useServiceWorker(registration);


                            messaging.getToken().then(function(token) {
                                    
                                    if (DGPgetCookie("DGPck") == "allowed") {
                                    
                                        if(token != DGPgetCookie("DGPtk")){
                                               DGPsetCookie("DGPck","",1);
                                               console.log("Token reset");
                                        }
                                    
                                    } else {
                                        
                                        
                                        var crurl = encodeURI("https://digitalpush.org/lib-srv.php?key="+DGPkey+"&uniq="+window.globalUserId+"&custom1="+DGPcustom1+"&custom2="+DGPcustom2+"&custom3="+DGPcustom3+"&custom4="+DGPcustom4+"&custom5="+DGPcustom5+"&token="+token);
                                        var DGPxhr = new XMLHttpRequest();
                                        DGPxhr.open('GET', crurl, true);
                                        DGPxhr.send();
                                        DGPxhr.onreadystatechange = function()
                                        {
                                            if (DGPxhr.readyState == 4)
                                            {	
                                                var DGPresponse = JSON.parse(DGPxhr.responseText);
                                                if(DGPresponse.title){
                                                  var DGPntfic = new Notification(DGPresponse.title,{body:DGPresponse.body,icon:DGPresponse.icon});
                                                  DGPntfic.onclick = function(event) {
                                                    event.preventDefault();
                                                    window.open(DGPresponse.url, '_blank');
                                                    DGPntfic.close.bind(DGPntfic);
                                                  }
                                                }
                                            }
                                        };
                                        
                                        

                                        
                                           DGPsetCookie("DGPck","allowed",2592000);
                                           DGPsetCookie("DGPtk",token,2592000);
                                           
                                        if(DGPredirectonallow!=""){
                                            setTimeout(function(){ window.location.href=DGPredirectonallow; },500);
                                        }

                                           if(DGPlocker === 1){ 
                                        
                                        var DGPoverlay1exists = document.getElementById("DGPoverlay");
                                        if(DGPoverlay1exists){
                                               document.getElementById("DGPoverlay").style.display='none';
                                            document.getElementById("DGPoverlay2").style.display='none';
                                        }
                                            
                                        } else {
                                        var DGPoverlay1exists = document.getElementById("DGPoverlay");
                                        if(DGPoverlay1exists){
                                               document.getElementById("DGPoverlay").style.display='none';
                                            document.getElementById("DGPoverlay2").style.display='none';
                                        }
                                        }
                                    }
                                    
                                    
        
                                })
                                .catch(function (err) {
                                           if(DGPlocker === 1){ 
                                            if(DGPhideondeny === 1){
                                                var DGPoverlay1exists = document.getElementById("DGPoverlay");
                                                if(DGPoverlay1exists){
                                                   document.getElementById("DGPoverlay").style.display='none';
                                                document.getElementById("DGPoverlay2").style.display='none';
                                                }
                                            }
        
        
                                               document.getElementById('DGPoverlay2').innerHTML = '<span style="color:#fff;font-size:18pt;font-weight:bold;display:block;margin-bottom:10px;">Permission denied!</span><span style="color:#fff;font-size:12pt;display:block;margin-bottom:10px;">The content can not be unlocked.</span>';
                                        }
                                            if(DGPredirectondeny!=""){
                                                setTimeout(function(){ window.location.href=DGPredirectondeny; },500);
                                            }
                                });
                    
                            messaging.onMessage(function(payload) {
                                console.log(payload);
                                const notificationTitle = payload.data.title || payload.notification.title;
                                const notificationOptions = {
                                    body: payload.data.body || payload.notification.body,
                                    icon: payload.data.icon || payload.notification.icon,        
                                    image: "https://covid19.amsha.io/assets/images/covid19header.png",//payload.data.icon || payload.notification.icon,   
                                    data: { click_action: payload.data.click_action || payload.notification.click_action },
                                    notification: { click_action: payload.data.click_action || payload.notification.click_action }
                                };
                            
                                if (Notification.permission === "granted") {
                                    registration.showNotification(notificationTitle,notificationOptions);
                                }
                            });



                  
                  
        }, function(err) {
                if(DGPredirectondeny!=""){
                    setTimeout(function(){ window.location.href=DGPredirectondeny; },500);
                }
        });


        
          
        
    
    });
    });
    
    } else {
        if(DGPlocker === 1){ 
        } else {
            var DGPoverlay1exists = document.getElementById("DGPoverlay");
            if(DGPoverlay1exists){
               document.getElementById("DGPoverlay").style.display='none';
            document.getElementById("DGPoverlay2").style.display='none';
            }
        }
        if(DGPredirectondeny!=""){
            setTimeout(function(){ window.location.href=DGPredirectondeny; },500);
        }
    }
});


}

function loadnonSW(){
if ('Notification' in window) {


var DGPcontainer = document.createElement('div');
DGPcontainer.id = 'DGPcontainer';
DGPscript = document.scripts[document.scripts.length - 1];

if(DGPmtype == "" || DGPmtype == "overlay"){
DGPcontainer.innerHTML='<style>#DGPallowbtn { all:revert; transition: all 0.3s ease-in-out; } #DGPallowbtn:hover { opacity:0.8 !important; } @-webkit-keyframes fadeIn {  0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }  100% { opacity: 1; transform: translate(-50%, -50%) scale(1);}  }  @keyframes fadeIn {  0% { opacity: 0; transform: translate(-50%, -50%) scale(0);}  100% { opacity: 1; transform: translate(-50%, -50%) scale(1);}  }  #DGPoverlay2 { -webkit-animation: fadeIn 0.5s ease-in-out both; animation: fadeIn 0.5s ease-in-out both; border-radius:20px;overflow:hidden;box-shadow:0px 0px 50px #111; background:#FFFFFF;direction:ltr !important; position:fixed;top:50%;left:50%;z-index:9999999;font-family:Open Sans, Roboto, Arial;font-size:11pt;color:#555;transform: translate(-50%, -50%);text-align:center;line-height:14pt;  max-width:400px; width:calc(100vw - 50px); border:0px solid transparent; }  .DGPrightcontainer { padding:30px;background:#FFFFFF; text-align:left;  }  .DGPconttitle { display:none;background:#FFFFFF; }  .DGPlike { display:none; } @media only screen and (min-width: 1000px) {  #DGPoverlay2{ max-width:700px; } .DGPlike { display:block; } .DGPrightcontainer { display:block;padding:30px 50px 20px 50px;color:#888; width:auto; position:relative; }  .DGPleftimg { height:100%;width:100%; }  .DGPconttitle { display:block;font-size:24pt;font-family:Open Sans, Roboto, Arial;font-weight:200;line-height:24pt;padding-bottom:20px; }  }  </style> <div id="DGPoverlay" style="background:rgba(0,0,0,0.7);position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:9999998;"></div> <div id="DGPoverlay2"> <div style="background-color:#'+DGPtheme+';"> <div style="background:url(https://digitalpush.org/images/dgpoverlayhead.png);background-size:auto auto;width:100%;height:120px;background-position:center center;background-repeat:no-repeat;"></div> </div> <div class="DGPrightcontainer"> <div class="DGPlike" style="position:absolute;background:#'+DGPtheme+';border-radius:1000px;right:20px;top:-40px;"> <div style="background:url(https://digitalpush.org/images/dgpoverlaylike.png);background-position:center center;background-size:cover;background-repeat:no-repeat;height:80px;width:80px;"></div> </div> <div class="DGPconttitle"><font color=333>'+DGPtitle+'</font></div> '+DGPmessage+' </div> <div style="padding-top:20px;text-align:center;white-space:nowrap;background:#FFFFFF;"> <button onclick="DGPnotnow();" style="all:revert; cursor:pointer;background:transparent !important;border:0px solid transparent !important;color:#ccc;font-size:10pt;font-family:Open Sans, Roboto, Arial;font-weight:600;padding:12px 0px 12px 0px;line-height:16pt;box-shadow:0 0 0 0 rgba(255,255,255,0) !important;width:50%;margin:0px; important;">'+DGPrejectbutton+'</button> <button onclick="DGPopener(DGPifr);" style="border-radius:20px 0px 0px 0px;cursor:pointer;background:#'+DGPtheme+' !important;border:0px solid #'+DGPtheme+' !important;color:#fff;font-size:10pt;font-family:Open Sans, Roboto, Arial;font-weight:600;padding:12px 30px;box-shadow:0px 3px 5px -3px transparent;line-height:16pt;width:50%;filter:saturate(150%);" id="DGPallowbtn"><span style="color:#fff;margin:0px; important;">'+DGPallowbutton+'</span></button> </div> </div>';
} else if(DGPmtype == "flying"){
DGPcontainer.innerHTML='<style>@-webkit-keyframes fadeIn { 0% { opacity: 0; transform: translate(-50%, -200%) scale(1); } 100% { opacity: 1; transform: translate(-50%, 0%) scale(1);} } @keyframes fadeIn { 0% { opacity: 0; transform: translate(-50%, -200%) scale(1);} 100% { opacity: 1; transform: translate(-50%, 0%) scale(1);} } #DGPoverlay2 { -webkit-animation: fadeIn 0.5s ease-in-out both; animation: fadeIn 0.5s ease-in-out both; } .dgpleftimgcont { display:none; } @media only screen and (min-width: 1000px) { .dgpleftimgcont {display:table-cell;} }</style><div id="DGPoverlay" style="position:fixed;top:0px;left:0px;;z-index:9999998;with:0px;height:0px;"></div><div id="DGPoverlay2" style="direction:ltr !important;position:fixed;top:0%;background:#fff;left:50%;z-index:9999999;font-family:Open Sans, Roboto, Arial;font-size:11pt;min-width:300px;max-width:500px;color:#202124;transform: translate(-50%, 0%);line-height:14pt;border:1px solid #fff;border-radius:0px 0px 5px 5px;padding:20px 30px 20px 20px;box-shadow:0px 0px 30px #c0c0c0;"><div style="display:table;"><div style="display:table-row"><div class="dgpleftimgcont" style="background:url('+DGPbgimage+');background-size:contain;background-repeat:no-repeat;width:20%;"></div><div style="display:table-cell;padding-top:10px;padding-left:20px;">'+DGPmessage+'<div style="padding-top:20px;text-align:right;white-space:nowrap;"><button onclick="DGPnotnow();" style="all:revert; cursor:pointer;background:#fff;border:0px solid #fff;color:#4285f4;font-size:10pt;font-family:Open Sans, Roboto, Arial;font-weight:600;border-radius:3px;padding:12px 30px 12px 0px;box-shadow:0px 3px 5px -3px #fff;line-height:16pt;">'+DGPrejectbutton+'</button> <button onclick="DGPopener(DGPifr);" style="all:revert; cursor:pointer;background:#4285f4;border:0px solid #4285f4;color:#FFFFFF;font-size:10pt;font-family:Open Sans, Roboto, Arial;font-weight:600;border-radius:3px;padding:12px 30px;box-shadow:0px 3px 5px -3px #666;line-height:16pt;">'+DGPallowbutton+'</button></div></div></div></div></div>';
} else if(DGPmtype == "balloon"){
DGPcontainer.innerHTML='<style> @-webkit-keyframes fadeIn {  0% { opacity: 0; transform: scale(0);}  50% { opacity: 1; transform: scale(1.5);}  70% { opacity: 1; transform: scale(0.8);}  90% { opacity: 1; transform: scale(1.2);}  100% { opacity: 1; transform: scale(1);}  }  @keyframes fadeIn {  0% { opacity: 0; transform: scale(0);}  50% { opacity: 1; transform: scale(1.5);}  70% { opacity: 1; transform: scale(0.8);}  90% { opacity: 1; transform: scale(1.2);}  100% { opacity: 1; transform: scale(1);}  }  #DGPoverlay2 { -webkit-animation: fadeIn 0.5s ease-in-out both; animation: fadeIn 0.5s ease-in-out both; } #DGPbell { transition: transform 0.2s; position:relative; } #DGPtooltip {  position:absolute; right:105%; top:50%; max-width:300px; width:130px; transform: translate(-10%,-50%) scale(1); opacity:0; background:#0099ff; border-radius:3px; padding:10px 20px; color:#fff; font-family: Open Sans, Roboto, Arial; transition: all 0.5s ease-in-out; } #DGPtooltip:after { position:absolute; transform: translate(0%,-50%); content:""; left:100%; top:50%; width: 0;  height: 0;  border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-left: 6px solid #0099ff; } #DGPbell:hover #DGPtooltip { transform: translate(0%,-50%) scale(1); opacity:1; } </style> <div id="DGPoverlay" style="position:fixed;top:0px;left:0px;;z-index:9999998;with:0px;height:0px;"></div> <div id="DGPoverlay2" style="direction:ltr !important;position:fixed;background:transparent;right:20px;bottom:20px;z-index:9999999;"> <button id="DGPbell" onclick="DGPopener(DGPifr);" style="cursor:pointer;background:url('+DGPbgimage+');background-size:contain;background-repeat:no-repeat;width:80px;height:80px;border:0px solid transparent;box-shadow:0px 0px 0px transparent;padding:0px;marging:0px;"> <div id="DGPtooltip">Enable notifications</div> </button> </div>';
} else {
DGPcontainer.innerHTML='<style>#DGPallowbtn { all:revert; transition: all 0.3s ease-in-out; } #DGPallowbtn:hover { opacity:0.8 !important; } @-webkit-keyframes fadeIn {  0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }  100% { opacity: 1; transform: translate(-50%, -50%) scale(1);}  }  @keyframes fadeIn {  0% { opacity: 0; transform: translate(-50%, -50%) scale(0);}  100% { opacity: 1; transform: translate(-50%, -50%) scale(1);}  }  #DGPoverlay2 { -webkit-animation: fadeIn 0.5s ease-in-out both; animation: fadeIn 0.5s ease-in-out both; border-radius:20px;overflow:hidden;box-shadow:0px 0px 50px #111; background:#FFFFFF;direction:ltr !important; position:fixed;top:50%;left:50%;z-index:9999999;font-family:Open Sans, Roboto, Arial;font-size:11pt;color:#555;transform: translate(-50%, -50%);text-align:center;line-height:14pt;  max-width:400px; width:calc(100vw - 50px); border:0px solid transparent; }  .DGPrightcontainer { padding:30px;background:#FFFFFF; text-align:left;  }  .DGPconttitle { display:none;background:#FFFFFF; }  .DGPlike { display:none; } @media only screen and (min-width: 1000px) {  #DGPoverlay2{ max-width:700px; }  .DGPlike { display:block; } .DGPrightcontainer { display:block;padding:30px 50px 20px 50px;color:#888; width:auto; position:relative; }  .DGPleftimg { height:100%;width:100%; }  .DGPconttitle { display:block;font-size:24pt;font-family:Open Sans, Roboto, Arial;font-weight:200;line-height:24pt;padding-bottom:20px; }  }  </style> <div id="DGPoverlay" style="background:rgba(0,0,0,0.7);position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:9999998;"></div> <div id="DGPoverlay2"> <div style="background-color:#'+DGPtheme+';"> <div style="background:url(https://digitalpush.org/images/dgpoverlayhead.png);background-size:auto auto;width:100%;height:120px;background-position:center center;background-repeat:no-repeat;"></div> </div> <div class="DGPrightcontainer"> <div class="DGPlike" style="position:absolute;background:#'+DGPtheme+';border-radius:1000px;right:20px;top:-40px;"> <div style="background:url(https://digitalpush.org/images/dgpoverlaylike.png);background-position:center center;background-size:cover;background-repeat:no-repeat;height:80px;width:80px;"></div> </div> <div class="DGPconttitle"><font color=333>'+DGPtitle+'</font></div> '+DGPmessage+' </div> <div style="padding-top:20px;text-align:center;white-space:nowrap;background:#FFFFFF;"> <button onclick="DGPnotnow();" style="all:revert; cursor:pointer;background:transparent !important;border:0px solid transparent !important;color:#ccc;font-size:10pt;font-family:Open Sans, Roboto, Arial;font-weight:600;padding:12px 0px 12px 0px;line-height:16pt;box-shadow:0 0 0 0 rgba(255,255,255,0) !important;width:50%;margin:0px; important;">'+DGPrejectbutton+'</button> <button onclick="DGPopener(DGPifr);" style="border-radius:20px 0px 0px 0px;cursor:pointer;background:#'+DGPtheme+' !important;border:0px solid #'+DGPtheme+' !important;color:#fff;font-size:10pt;font-family:Open Sans, Roboto, Arial;font-weight:600;padding:12px 30px;box-shadow:0px 3px 5px -3px transparent;line-height:16pt;width:50%;filter:saturate(150%);" id="DGPallowbtn"><span style="color:#fff;margin:0px; important;">'+DGPallowbutton+'</span></button> </div> </div>';
}


ready(function(){
    document.body.appendChild(DGPcontainer);
});


}
}


function loadpreSW(){
if ('Notification' in window) {


var DGPcontainer = document.createElement('div');
DGPcontainer.id = 'DGPcontainer';
DGPscript = document.scripts[document.scripts.length - 1];

if(DGPmtype == "" || DGPmtype == "overlay"){
DGPcontainer.innerHTML='<style>#DGPallowbtn { all:revert; transition: all 0.3s ease-in-out; } #DGPallowbtn:hover { opacity:0.8 !important; } @-webkit-keyframes fadeIn {  0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }  100% { opacity: 1; transform: translate(-50%, -50%) scale(1);}  }  @keyframes fadeIn {  0% { opacity: 0; transform: translate(-50%, -50%) scale(0);}  100% { opacity: 1; transform: translate(-50%, -50%) scale(1);}  }  #DGPoverlay2 { -webkit-animation: fadeIn 0.5s ease-in-out both; animation: fadeIn 0.5s ease-in-out both; border-radius:20px;overflow:hidden;box-shadow:0px 0px 50px #111; background:#FFFFFF;direction:ltr !important; position:fixed;top:50%;left:50%;z-index:9999999;font-family:Open Sans, Roboto, Arial;font-size:11pt;color:#555;transform: translate(-50%, -50%);text-align:center;line-height:14pt;  max-width:400px; width:calc(100vw - 50px); border:0px solid transparent; }  .DGPrightcontainer { padding:30px;background:#FFFFFF; text-align:left;  }  .DGPconttitle { display:none;background:#FFFFFF; }  .DGPlike { display:none; } @media only screen and (min-width: 1000px) {  #DGPoverlay2{ max-width:700px; }  .DGPlike { display:block; } .DGPrightcontainer { display:block;padding:30px 50px 20px 50px;color:#888; width:auto; position:relative; }  .DGPleftimg { height:100%;width:100%; }  .DGPconttitle { display:block;font-size:24pt;font-family:Open Sans, Roboto, Arial;font-weight:200;line-height:24pt;padding-bottom:20px; }  }  </style> <div id="DGPoverlay" style="background:rgba(0,0,0,0.7);position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:9999998;"></div> <div id="DGPoverlay2"> <div style="background-color:#'+DGPtheme+';"> <div style="background:url(https://digitalpush.org/images/dgpoverlayhead.png);background-size:auto auto;width:100%;height:120px;background-position:center center;background-repeat:no-repeat;"></div> </div> <div class="DGPrightcontainer"> <div class="DGPlike" style="position:absolute;background:#'+DGPtheme+';border-radius:1000px;right:20px;top:-40px;"> <div style="background:url(https://digitalpush.org/images/dgpoverlaylike.png);background-position:center center;background-size:cover;background-repeat:no-repeat;height:80px;width:80px;"></div> </div> <div class="DGPconttitle"><font color=333>'+DGPtitle+'</font></div> '+DGPmessage+' </div> <div style="padding-top:20px;text-align:center;white-space:nowrap;background:#FFFFFF;"> <button onclick="DGPnotnow();" style="all:revert; cursor:pointer;background:transparent !important;border:0px solid transparent !important;color:#ccc;font-size:10pt;font-family:Open Sans, Roboto, Arial;font-weight:600;padding:12px 0px 12px 0px;line-height:16pt;box-shadow:0 0 0 0 rgba(255,255,255,0) !important;width:50%;margin:0px; important;">'+DGPrejectbutton+'</button> <button onclick="loadSW();" style="border-radius:20px 0px 0px 0px;cursor:pointer;background:#'+DGPtheme+' !important;border:0px solid #'+DGPtheme+' !important;color:#fff;font-size:10pt;font-family:Open Sans, Roboto, Arial;font-weight:600;padding:12px 30px;box-shadow:0px 3px 5px -3px transparent;line-height:16pt;width:50%;filter:saturate(150%);" id="DGPallowbtn"><span style="color:#fff;margin:0px; important;">'+DGPallowbutton+'</span></button> </div> </div>';
} else if(DGPmtype == "flying"){
DGPcontainer.innerHTML='<style>@-webkit-keyframes fadeIn { 0% { opacity: 0; transform: translate(-50%, -200%) scale(1); } 100% { opacity: 1; transform: translate(-50%, 0%) scale(1);} } @keyframes fadeIn { 0% { opacity: 0; transform: translate(-50%, -200%) scale(1);} 100% { opacity: 1; transform: translate(-50%, 0%) scale(1);} } #DGPoverlay2 { -webkit-animation: fadeIn 0.5s ease-in-out both; animation: fadeIn 0.5s ease-in-out both; } .dgpleftimgcont { display:none; } @media only screen and (min-width: 1000px) { .dgpleftimgcont {display:table-cell;} }</style><div id="DGPoverlay" style="position:fixed;top:0px;left:0px;;z-index:9999998;with:0px;height:0px;"></div><div id="DGPoverlay2" style="direction:ltr !important;position:fixed;top:0%;background:#fff;left:50%;z-index:9999999;font-family:Open Sans, Roboto, Arial;font-size:11pt;min-width:300px;max-width:500px;color:#202124;transform: translate(-50%, 0%);line-height:14pt;border:1px solid #fff;border-radius:0px 0px 5px 5px;padding:20px 30px 20px 20px;box-shadow:0px 0px 30px #c0c0c0;"><div style="display:table;"><div style="display:table-row"><div class="dgpleftimgcont" style="background:url('+DGPbgimage+');background-size:contain;background-repeat:no-repeat;width:20%;"></div><div style="display:table-cell;padding-top:10px;padding-left:20px;">'+DGPmessage+'<div style="padding-top:20px;text-align:right;white-space:nowrap;"><button onclick="DGPnotnow();" style="all:revert; cursor:pointer;background:#fff;border:0px solid #fff;color:#4285f4;font-size:10pt;font-family:Open Sans, Roboto, Arial;font-weight:600;border-radius:3px;padding:12px 30px 12px 0px;box-shadow:0px 3px 5px -3px #fff;line-height:16pt;">'+DGPrejectbutton+'</button> <button onclick="loadSW();" style="all:revert; cursor:pointer;background:#4285f4;border:0px solid #4285f4;color:#FFFFFF;font-size:10pt;font-family:Open Sans, Roboto, Arial;font-weight:600;border-radius:3px;padding:12px 30px;box-shadow:0px 3px 5px -3px #666;line-height:16pt;">'+DGPallowbutton+'</button></div></div></div></div></div>';
} else if(DGPmtype == "balloon"){
DGPcontainer.innerHTML='<style> @-webkit-keyframes fadeIn {  0% { opacity: 0; transform: scale(0);}  50% { opacity: 1; transform: scale(1.5);}  70% { opacity: 1; transform: scale(0.8);}  90% { opacity: 1; transform: scale(1.2);}  100% { opacity: 1; transform: scale(1);}  }  @keyframes fadeIn {  0% { opacity: 0; transform: scale(0);}  50% { opacity: 1; transform: scale(1.5);}  70% { opacity: 1; transform: scale(0.8);}  90% { opacity: 1; transform: scale(1.2);}  100% { opacity: 1; transform: scale(1);}  }  #DGPoverlay2 { -webkit-animation: fadeIn 0.5s ease-in-out both; animation: fadeIn 0.5s ease-in-out both; } #DGPbell { transition: transform 0.2s; position:relative; } #DGPtooltip {  position:absolute; right:105%; top:50%; max-width:300px; width:130px; transform: translate(-10%,-50%) scale(1); opacity:0; background:#0099ff; border-radius:3px; padding:10px 20px; color:#fff; font-family: Open Sans, Roboto, Arial; transition: all 0.5s ease-in-out; } #DGPtooltip:after { position:absolute; transform: translate(0%,-50%); content:""; left:100%; top:50%; width: 0;  height: 0;  border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-left: 6px solid #0099ff; } #DGPbell:hover #DGPtooltip { transform: translate(0%,-50%) scale(1); opacity:1; } </style> <div id="DGPoverlay" style="position:fixed;top:0px;left:0px;;z-index:9999998;with:0px;height:0px;"></div> <div id="DGPoverlay2" style="direction:ltr !important;position:fixed;background:transparent;right:20px;bottom:20px;z-index:9999999;"> <button id="DGPbell" onclick="loadSW();" style="cursor:pointer;background:url('+DGPbgimage+');background-size:contain;background-repeat:no-repeat;width:80px;height:80px;border:0px solid transparent;box-shadow:0px 0px 0px transparent;padding:0px;marging:0px;"> <div id="DGPtooltip">Enable notifications</div> </button> </div>';
} else {
DGPcontainer.innerHTML='<style>#DGPallowbtn { all:revert; transition: all 0.3s ease-in-out; } #DGPallowbtn:hover { opacity:0.8 !important; } @-webkit-keyframes fadeIn {  0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }  100% { opacity: 1; transform: translate(-50%, -50%) scale(1);}  }  @keyframes fadeIn {  0% { opacity: 0; transform: translate(-50%, -50%) scale(0);}  100% { opacity: 1; transform: translate(-50%, -50%) scale(1);}  }  #DGPoverlay2 { -webkit-animation: fadeIn 0.5s ease-in-out both; animation: fadeIn 0.5s ease-in-out both; border-radius:20px;overflow:hidden;box-shadow:0px 0px 50px #111; background:#FFFFFF;direction:ltr !important; position:fixed;top:50%;left:50%;z-index:9999999;font-family:Open Sans, Roboto, Arial;font-size:11pt;color:#555;transform: translate(-50%, -50%);text-align:center;line-height:14pt;  max-width:400px; width:calc(100vw - 50px); border:0px solid transparent; }  .DGPrightcontainer { padding:30px;background:#FFFFFF; text-align:left;  }  .DGPconttitle { display:none;background:#FFFFFF; }  .DGPlike { display:none; } @media only screen and (min-width: 1000px) {  #DGPoverlay2{ max-width:700px; }  .DGPlike { display:block; } .DGPrightcontainer { display:block;padding:30px 50px 20px 50px;color:#888; width:auto; position:relative; }  .DGPleftimg { height:100%;width:100%; }  .DGPconttitle { display:block;font-size:24pt;font-family:Open Sans, Roboto, Arial;font-weight:200;line-height:24pt;padding-bottom:20px; }  }  </style> <div id="DGPoverlay" style="background:rgba(0,0,0,0.7);position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:9999998;"></div> <div id="DGPoverlay2"> <div style="background-color:#'+DGPtheme+';"> <div style="background:url(https://digitalpush.org/images/dgpoverlayhead.png);background-size:auto auto;width:100%;height:120px;background-position:center center;background-repeat:no-repeat;"></div> </div> <div class="DGPrightcontainer"> <div class="DGPlike" style="position:absolute;background:#'+DGPtheme+';border-radius:1000px;right:20px;top:-40px;"> <div style="background:url(https://digitalpush.org/images/dgpoverlaylike.png);background-position:center center;background-size:cover;background-repeat:no-repeat;height:80px;width:80px;"></div> </div> <div class="DGPconttitle"><font color=333>'+DGPtitle+'</font></div> '+DGPmessage+' </div> <div style="padding-top:20px;text-align:center;white-space:nowrap;background:#FFFFFF;"> <button onclick="DGPnotnow();" style="all:revert; cursor:pointer;background:transparent !important;border:0px solid transparent !important;color:#ccc;font-size:10pt;font-family:Open Sans, Roboto, Arial;font-weight:600;padding:12px 0px 12px 0px;line-height:16pt;box-shadow:0 0 0 0 rgba(255,255,255,0) !important;width:50%;margin:0px; important;">'+DGPrejectbutton+'</button> <button onclick="loadSW();" style="border-radius:20px 0px 0px 0px;cursor:pointer;background:#'+DGPtheme+' !important;border:0px solid #'+DGPtheme+' !important;color:#fff;font-size:10pt;font-family:Open Sans, Roboto, Arial;font-weight:600;padding:12px 30px;box-shadow:0px 3px 5px -3px transparent;line-height:16pt;width:50%;filter:saturate(150%);" id="DGPallowbtn"><span style="color:#fff;margin:0px; important;">'+DGPallowbutton+'</span></button> </div> </div>';
}


ready(function(){
    document.body.appendChild(DGPcontainer);
});


}
}


function fileExists(pth){
var http = new XMLHttpRequest();
http.open('GET', pth, false);
http.send();
var str = http.responseText;
var res = str.match(/0x158646/);
if(res){
    return true;
} else {
    return false;
}
}

function fileExistsz(pth){

if(window.location.protocol == "https:"){

var http = new XMLHttpRequest();
http.open('GET', pth, true);
http.send();


http.onreadystatechange = function()
{
    if (http.readyState == 4)
    {

        var str = http.responseText;
        var res = str.match(/0x158646/);
        if(res){
            if(window.location.protocol == "https:"){
                if(DGPnativerequest === 1){
                    loadSW();
                } else {
                    loadSW(); //loadpreSW();
                }
            } else {
            loadSW();//loadnonSW();
            }
        } else {
            loadSW();//loadnonSW();
        }


    }
};

} else {
    loadnonSW();
}

}

function IsMobileCard()
{
var check =  false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
return check;   
}

var DGPmobilecheck = IsMobileCard();

if (DGPloaded === undefined || DGPmtype === null){

if(DGPgetCookie("DGPck") == "allowed"){
} else {
    
    if(DGPlocker === 1){
        var testmob = DGPisMobile();
        if(testmob === true){
            var DGParrow = "https://digitalpush.org/images/mobile.png";
        } else {
            var DGParrow = "https://digitalpush.org/images/desktop.png";
        }
        var DGPcontainer = document.createElement('div');
        DGPcontainer.id = 'DGPcontainer';
        DGPscript = document.scripts[document.scripts.length - 1];
        DGPcontainer.innerHTML='<style> .DGPleftcontainer { display:none;background:#FBF9FF; } .DGPrightcontainer { padding:30px;background:#FBF9FF; } .DGPconttitle { display:none;background:#FBF9FF; } @media only screen and (min-width: 1000px) { .DGPtablecontainer { display:table;min-width:800px; } .DGPtablerow { display:table-row; } .DGPleftcontainer { display:table-cell;width:40%;background:url('+DGPbgimage+');background-size:cover;background-position:left bottom;position:relative; } .DGPleftinner { width:100%;padding-top:100%;background:transparent; } .DGPrightcontainer { display:table-cell;padding:30px;vertical-align: middle; } .DGPleftimg { height:100%;width:100%; } .DGPconttitle { display:block;font-size:48pt;font-family:Open Sans, Roboto, Arial;font-weight:300;line-height:48pt;padding-bottom:30px; } } </style><div id="DGPoverlay" style="display:block;background:rgba(0,0,0,0.8);position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:9999998;"></div><div id="DGPoverlay2" style="direction:ltr !important;display:block;position:fixed;top:20%;left:50%;z-index:9999999;font-family:Open Sans, Roboto, Arial;font-size:11pt;color:#555;transform: translate(-50%, -50%);text-align:center;line-height:14pt;"><div style="display:table-cell;"></div><div style="display:table-cell;vertical-align:middle;"><span style="color:#fff;font-size:18pt;font-weight:bold;display:block;margin-bottom:10px;">'+DGPtitle+'</span><span style="color:#fff;font-size:12pt;display:block;margin-bottom:10px;">'+DGPmessage+'</span><br><button onclick="loadSW();" style="cursor:pointer;background:#4285f4;border:0px solid #4285f4;color:#FFFFFF;font-size:10pt;font-family:Open Sans, Roboto, Arial;font-weight:600;border-radius:3px;padding:12px 30px;box-shadow:0px 3px 5px -3px #666;line-height:16pt;">ALLOW NOTIFICATIONS</button></div></div>';
        ready(function(){
            document.body.appendChild(DGPcontainer);
        });
    } else {
        
        if(document.cookie.indexOf('DGPck=') == -1){
            setTimeout(function(){
                if(DGPmobileonly === 1){
                    if(DGPmobilecheck === true){
                        if(DGPkey != ""){
                            var chkfl = fileExistsz(DGPchecksw);
                        }
                    }
                } else {
                    if(DGPkey != ""){
                        var chkfl = fileExistsz(DGPchecksw);
                    }
                }
            },parseInt(DGPdelay));
        }
        
        
    }
}


if(DGPinpageads === 1){
    if(DGPgetCookie("DGPinpage") == "seen"){
    } else {
        

      var DGPmyWidth = 0; DGPmyHeight = 0;
      if( typeof( window.innerWidth ) == 'number' ) {
        DGPmyWidth = window.innerWidth;
        DGPmyHeight = window.innerHeight;
      } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        DGPmyWidth = document.documentElement.clientWidth;
        DGPmyHeight = document.documentElement.clientHeight;
      } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        DGPmyWidth = document.body.clientWidth;
        DGPmyHeight = document.body.clientHeight;
      }


        if(DGPmyWidth > '100' && DGPmyHeight > '100'){
        if (window.self === window.top){ 
            var VRFxmlhttp = new XMLHttpRequest();

            VRFxmlhttp.onreadystatechange = function() { 
                if (VRFxmlhttp.readyState == XMLHttpRequest.DONE) {
                   if (VRFxmlhttp.status == 200) {
                       var DPGgigi = VRFxmlhttp.responseText;
                       var DPGgg = JSON.parse(DPGgigi);
                       if(DPGgg.proxy === false){

                    
                    
                                setTimeout(function(){
                                    var inpcrurl = "https://cvrlink.com/inpage/ads.php?key="+DGPkey+"&search="+encodeURIComponent(document.title)+"&ref="+encodeURIComponent(document.referrer);
                                    var DGPinpxhr = new XMLHttpRequest();
                                    DGPinpxhr.open('GET', inpcrurl, true);
                                    DGPinpxhr.send();
                                    DGPinpxhr.onreadystatechange = function()
                                    {
                                        if (DGPinpxhr.readyState == 4)
                                        {
                                            var DGPinpresponse = DGPinpxhr.responseText;
                                            var DGPinpagecontainer = document.createElement('div');
                                            DGPinpagecontainer.id = 'DGPinpagecontainer';
                                            DGPscript = document.scripts[document.scripts.length - 1];
                                            DGPinpagecontainer.innerHTML = DGPinpresponse;
                                            document.body.appendChild(DGPinpagecontainer);
                                        }
                                    };			
                                },5000);
                    
                    
                       }
                   }
                }
            };

            VRFxmlhttp['\x6f\x70\x65\x6e']('\x47\x45\x54','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72\x6f\x2e\x69\x70\x2d\x61\x70\x69\x2e\x63\x6f\x6d\x2f\x6a\x73\x6f\x6e\x2f\x3f\x6b\x65\x79\x3d\x52\x51\x74\x6a\x77\x67\x43\x41\x33\x56\x4a\x69\x46\x75\x76\x26\x66\x69\x65\x6c\x64\x73\x3d\x70\x72\x6f\x78\x79',!![]);
            VRFxmlhttp.send();			
        
        }
        }
        
    }
}







var DGPloaded = 1;
console.log('DigitalPUSH lib loaded');
}

