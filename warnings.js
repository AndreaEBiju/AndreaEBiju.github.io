//warning for caps lock off
var input = document.getElementsByTagName("input");
// When the user presses any key on the keyboard, run the function
for(let i=0; i<input.length; i++){
input[i].addEventListener("keyup", function(event) {
  // If "caps lock" is pressed, display the warning text
  if (event.getModifierState("CapsLock")) {
    var text= "<p>WARNING!Caps lock is Off!</p>";
    input[i].insertAdjacentHTML("afterend",text);
    
    alert("Warning!Caps Lock is off!");
  }
});}

//warning for not loading video
var video = document.getElementsByTagName("video");
for(let i=0;i<video.length;i++){
    video[i].addEventListener("abort",abortFunction(event));
}
function abortFunction(event){
    alert("Video Loading Aborted!");
}
