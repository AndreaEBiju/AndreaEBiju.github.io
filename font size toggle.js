//tested version for font size
var btn2 = document.createElement("BUTTON");   // Create a <button> element
btn2.innerHTML = "A-";                   // Insert text
document.body.insertAdjacentElement("afterbegin", btn2);               // Append <button> to <body>

var btn3 = document.createElement("BUTTON");   // Create a <button> element
btn3.innerHTML = "A";                   // Insert text
document.body.insertAdjacentElement("afterbegin", btn3);               // Append <button> to <body>

var btn1 = document.createElement("BUTTON");   // Create a <button> element
btn1.innerHTML = "A+";                   // Insert text
document.body.insertAdjacentElement("afterbegin", btn1);               // Append <button> to <body>

btn1.onclick=function btn1Click(){
    document.body.style.fontSize="150%";
};

btn2.onclick=function btn2Click(){
    document.body.style.fontSize="50%";
};

btn3.onclick=function btn3Click(){
	document.body.style.fontSize="100%";
    setTimeout(function(){ alert("Font size brought back to original"); }, 3000);
};

var btn4 = document.createElement("BUTTON");   // Create a <button> element
btn1.innerHTML = "Change Font";                   // Insert text
document.body.insertAdjacentElement("afterbegin", btn4);               // Append <button> to <body>
btn4.onclick= function(){
    //code to set all body text from italics to normal and sans serif fonts for dyslexic
    document.body.style.fontStyle = "normal";
    document.body.style.fontFamily = "sans serif";

    //code to set all address italics to normal for dyslexic
    var address = document.getElementsByTagName("address");
    for(let i=0; i<address.length; i++){
        address[i].style.fontStyle = "normal";
    }
    var italics = document.getElementsByTagName("i");
    for(let i=0; i<italics.length; i++){
        italics[i].style.fontStyle = "normal";
    }
    var u = document.getElementsByTagName("u");
    for(let i=0; i<u.length; i++){
        u[i].style.fontStyle = "normal";
    }
}
