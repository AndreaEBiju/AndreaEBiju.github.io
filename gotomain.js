var main = document.getElementsByTagName("main");
for(let i=0;i<main.length;i++){
    var gotoMain = document.createElement("button");
    document.body.insertAdjacentElement("afterbegin",gotoMain);
    gotoMain.innerHTML = "Go To Main Content "+i;
    gotoMain.onclick = function(){
        main[i].scrollIntoView();
    };
}