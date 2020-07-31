//warnings for forms
//warning for caps lock off
var input = document.getElementsByTagName("input");
// When the user presses any key on the keyboard, run the function
for(let i=0; i<input.length; i++){
  if(input[i].addEventListener){ input[i].addEventListener("keyup", function(event) {
    // If "caps lock" is pressed, display the warning text
    if (event.getModifierState("CapsLock")) {
      var text = document.createElement("P");   // Create a <button> element
      text.innerHTML = "WARNING!Caps Lock is OFF!";                   // Insert text
      text.style.color = "red";
      input[i].insertAdjacentElement("afterend", text);               // Append <button> to <body>    
      setTimeout(function(){ alert("Warning!Caps Lock is off!"); }, 3000);
    }
  });
  }
}

//warning for not loading video
var video = document.getElementsByTagName("video");
for(let i=0;i<video.length;i++){
  if(video[i].onfocus){
  video[i].oncanplay = function() {
    setTimeout(function(){ alert("Can start playing video"); }, 3000);
  };
  video[i].onloadstart = function() {
    setTimeout(function(){ alert("Starting to load video"); }, 3000);
  };
  video[i].onseeked = function() {
    setTimeout(function(){ alert("Seek operation completed!"); }, 3000);
  };
  video[i].onwaiting = function() {
    setTimeout(function(){ alert("Wait! I need to buffer the next frame"); }, 3000);
  };
  if(video[i].onerror){
  video[i].onerror = function() {
    setTimeout(function(){ alert("Error! Something went wrong"); }, 3000);
  };}else if(video[i].onstalled){
  video[i].onstalled = function() {
    setTimeout(function(){ alert("Media data is not available"); }, 3000);
  };}else if(video[i].onsuspend){
  video[i].onsuspend = function() {
    setTimeout(function(){ alert("Loading of the media is suspended"); }, 3000);
  };}else if(video[i].onabort){
  video[i].addEventListener("abort",abortFunction(event));
  }else{
  
  var mpeg4, h264, ogg, webm;
  if ( video[i].canPlayType ) {
      // Check for MPEG-4 support
      mpeg4 = "" !== video[i].canPlayType( 'video/mp4; codecs="mp4v.20.8"' );
      if(mpeg4==false){
        setTimeout(function(){ alert("Your browser doesn't support mp4 codecs mp4v.20.8 format!"); }, 3000);
      }
      // Check for h264 support
      h264 = "" !== ( video[i].canPlayType( 'video/mp4; codecs="avc1.42E01E"' )
          || video[i].canPlayType( 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' ) );
      if(h264==false){
        setTimeout(function(){ alert("Your browser doesn't support mp4 format!"); }, 3000);
      }
      // Check for Ogg support
      ogg = "" !== video[i].canPlayType( 'video/ogg; codecs="theora"' );
      if(ogg==false){
        setTimeout(function(){ alert("Your browser doesn't support ogg format!"); }, 3000);
      }
      // Check for Webm support
      webm = "" !== video[i].canPlayType( 'video/webm; codecs="vp8, vorbis"' );
      if(webm==false){
        setTimeout(function(){ alert("Your browser doesn't support webm format!"); }, 3000);
      }
  }
}}}
function abortFunction(event){
  setTimeout(function(){ alert("Video Loading Aborted!"); }, 3000);
}
//for audio
var audio = document.getElementsByTagName("audio");
for(let i=0;i<audio.length;i++){
  if (audio[i].onfocus){
  audio[i].oncanplay = function() {
    setTimeout(function(){ alert("Can start playing audio"); }, 3000);
  };
  audio[i].onseeked = function() {
    setTimeout(function(){ alert("Seek operation completed!"); }, 3000);
  };
  audio[i].onloadstart = function() {
    setTimeout(function(){ alert("Starting to load audio"); }, 3000);
  };
  audio[i].onwaiting = function() {
    setTimeout(function(){ alert("Wait! I need to buffer the next frame"); }, 3000);
  };
  if(audio[i].onerror){
  audio[i].onerror = function() {
    setTimeout(function(){ alert("Error! Something went wrong"); }, 3000);
  };}else if(audio[i].onstalled){
  audio[i].onstalled = function() {
    setTimeout(function(){ alert("Media data is not available"); }, 3000);
  };}else if(audio[i].onsuspend){
  audio[i].onsuspend = function() {
    setTimeout(function(){ alert("Loading of the media is suspended"); }, 3000);
  };}else if(audio[i].onabort){
  audio[i].addEventListener("abort",abortFunctionAudio(event));}
  else{
  var mpeg4, ogg;
  if ( audio[i].canPlayType ) {
      // Check for MPEG-4 support
      mpeg4 = "" !==audio[i].canPlayType( 'audio/mp4; codecs="mp4a.40.5"' );
      if(mpeg4==false){
        setTimeout(function(){ alert("Your browser doesn't support mp4 format!"); }, 3000);
      }
      // Check for Ogg support
      ogg = "" !== audio[i].canPlayType( 'audio/ogg; codecs="vorbis"' );
      if(ogg==false){
        setTimeout(function(){ alert("Your browser doesn't support ogg format!"); }, 3000);
      }
  }
}}}
function abortFunctionAudio(event){
  setTimeout(function(){ alert("Audio Loading Aborted!"); }, 3000);
}

//warnings for hyperlinks
var anchor = document.getElementsByTagName("a");
for(let i=0;i<anchor.length;i++){
    anchor[i].onclick=function(){
      if(anchor[i].target=="_blank"){
        setTimeout(function(){ alert("You are being taken to an external link"); }, 3000);
      }else {
        setTimeout(function(){ alert("You have clicked on a link"); }, 3000);
      }
    };
}
//leaving website
window.onbeforeunload=function(event){event.returnValue="You are going to leave!";};
//new website
document.body.onload= function(){
  setTimeout(function(){ alert("The link has been loaded successfully!"); }, 3000);
};
//load status//check if needed
var x = document.readyState;
setTimeout(function(){ alert("Your page has been "+x); }, 3000);
//image and other not load//check if needed
window.addEventListener('error', function(e) {
  console.log(e);
  setTimeout(function(){ alert("Some elements of this page" + e.target + "didn't load"); }, 3000);
}, true);
//check cookies enabled?
function checkCookies() {
  if (navigator.cookieEnabled == false) {
    setTimeout(function(){ alert("Cookies are not enabled. Please enable them!"); }, 3000);
  }
  document.getElementById("demo").innerHTML = text;
}
//if empty for a required place then error message
var form = document.getElementsByTagName("input");
for(let i=0;i<form.length;i++){
  if(form[i].required==true){
    form[i].oninvalid = function(){
      setTimeout(function(){ alert('You must fill out this field!'); }, 3000);
      form[i].focus;
      form[i].onfocus = function() { 
        form[i].style.outline = "#d81a60 solid 5px";
      }
      var linkCDN = document.createElement("link");
      linkCDN.rel="stylesheet";
      linkCDN.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
      document.head.insertAdjacentElement("afterbegin", linkCDN);
      var errorSymbol = document.createElement("i");
      errorSymbol.className="fa fa-exclamation-triangle";
      errorSymbol.setAttribute('aria-hidden', 'true');
      form[i].insertAdjacentElement("afterend", errorSymbol);
    };
  }
}
//validaing forms -small 
var form = document.getElementsByTagName("input");
for(let i=0;i<form.length; i++)
{
  var verify = document.createElement("button");
  verify.innerHTML = "Verify";
  form[i].insertAdjacentElement("afterend", verify);
  verify.onclick = function(){
    if(form[i].checkValidity()){
      form[i].style.outline = "#00ff01 solid 5px";
    }else if(!form[i].checkValidity()){
      setTimeout(function(){ alert('This field has become invalid. Check your entry again!'); }, 3000);
        form[i].focus();
        form[i].onfocus = function() { 
          form[i].style.outline = "#d81a60 solid 5px";
        }
        var linkCDN = document.createElement("link");
        linkCDN.rel="stylesheet";
        linkCDN.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
        document.head.insertAdjacentElement("afterbegin", linkCDN);
        var errorSymbol = document.createElement("i");
        errorSymbol.className="fa fa-exclamation-triangle";
        errorSymbol.setAttribute('aria-hidden', 'true');
        form[i].insertAdjacentElement("afterend", errorSymbol);
    }
  };
}
//onsubmit form
var forms = document.getElementsByTagName("form");
for (let i = 0; i< forms.length; i++) {
  if(forms[i].addEventListener){
      forms[i].addEventListener("submit", function(){
        setTimeout(function(){ alert('You are about to submit the form!'); }, 3000);
      }, false);  //Modern browsers
  }else if(forms[i].attachEvent){
      forms[i].attachEvent('onsubmit', function(){
        setTimeout(function(){ alert('You are about to submit the form!'); }, 3000);
      });            //Old IE
  }
}
