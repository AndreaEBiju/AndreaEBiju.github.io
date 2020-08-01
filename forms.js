//for clearing forms input
for(let i=0; i<inputs.length;i++){
    var clearButton = document.createElement("button");
    clearButton.onclick = function(){inputs[i].value = '';};
    clearButton.innerHTML = "Clear input field";
    clearButton.style.backgroundColor = "#d81a60";
    inputs[i].insertAdjacentElement("afterend", clearButton);
}

//enable autocomplete
var form= document.getElementsByTagName("form");
for(let i=0; i<form.length;i++){
  var toggleBtn = document.createElement("button");
  toggleBtn.innerHTML = "Click to enable / disable autocomplete";
  form[i].insertAdjacentElement("beforebegin", toggleBtn);
  toggleBtn.onclick = function() {
    if(form[i].autocomplete == "on"){
      form[i].autocomplete = "off";
    }else if(form[i].autocomplete == "off"){
      form[i].autocomplete = "on";
    }
  }
}

//enable spellcheck
var form= document.getElementsByTagName("form");
for(let i=0; i<form.length;i++){
  var toggleBtn = document.createElement("button");
  toggleBtn.innerHTML = "Click to enable / disable spellcheck";
  form[i].insertAdjacentElement("beforebegin", toggleBtn);
  toggleBtn.onclick = function() {
    if(form[i].spellcheck == true){
      form[i].spellcheck = false;
    }else if(form[i].spellcheck == false){
      form[i].spellcheck = true;
    }
  }
}

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
