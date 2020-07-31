javascript:(function(){var css = ':hover{font-weight:bolder}',head = document.getElementsByTagName('head')[0],style = document.createElement('style');if (!window.counter) { window.counter = 1;} else  { window.counter ++;if (window.counter % 2 == 0) { var css =':hover {font-weight:bolder}'}};style.type = 'text/css';if (style.styleSheet){style.styleSheet.cssText = css;} else {  style.appendChild(document.createTextNode(css));}head.appendChild(style);}());

//version to integrate no  need for a button enable with text highlight
var css = ':hover{font-weight:bolder}',head = document.getElementsByTagName('head')[0],style = document.createElement('style');
if (!window.counter) { 
    window.counter = 1;
} else  { 
    window.counter ++;
    if (window.counter % 2 == 0) { 
        var css =':hover {font-weight:bolder}'
    }
};
style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {  
    style.appendChild(document.createTextNode(css));
}
head.appendChild(style);