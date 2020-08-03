//to invert color scheme
var colorcontrast = document.createElement("button");
  colorcontrast.innerHTML = "Increase Contrast";
  document.body.insertAdjacentElement("afterbegin", colorcontrast);
  colorcontrast.onclick = function(){var css = 'html{-webkit-filter: invert(100%);'+'-moz-filter: invert(100%);'+'-o-filter: invert(100%);'+'-ms-filter: invert(100%); }img,video,embed{filter: invert(1) contrast(1.3) saturate(1.4);}';
  var head = document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){style.styleSheet.cssText = css;} 
  else {  style.appendChild(document.createTextNode(css));}
  head.appendChild(style);};
