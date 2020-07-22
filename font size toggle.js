//tested version
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
    alert("Font size increased");
};

btn2.onclick=function btn2Click(){
    document.body.style.fontSize="50%";
    alert("Font size decreased");
};

btn3.onclick=function btn3Click(){
		document.body.style.fontSize="100%";
    alert("Font size original");
};
