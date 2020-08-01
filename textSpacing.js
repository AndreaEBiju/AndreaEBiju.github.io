var btn = document.createElement("button");
document.body.insertAdjacentElement("afterbegin", btn);
btn.innerHTML = "click";
btn.onclick = function(){
  var style = document.createElement("style"),
  styleContent = document.createTextNode("* {line-height: 2 !important; letter-spacing: 0.22em !important; word-spacing: 0.6em !important; overflow: auto !important} p{margin-bottom: 2em !important;}");
  style.appendChild(styleContent);
  document.getElementsByTagName("head")[0].appendChild(style);
};
