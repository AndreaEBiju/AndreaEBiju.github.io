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