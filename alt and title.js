//code to add title for all anchor tags
var anchor = document.getElementsByTagName("a");
for (let i=0; i<anchor.length; i++){
    var hrefAnchor = anchor[i].href;
    if(anchor[i].title==""){
        anchor[i].title = hrefAnchor;
    }
}
//code to add alt text for an image
var image = document.getElementsByTagName("img");
for(let i=0;i<image.length;i++){
    var imgsrc = image[i].src;
    if(image[i].alt==""){
        image[i].alt = imgsrc;
    }
    if(image[i].title==""){
       image[i].title = image[i].alt;
    }
}
//code to add alt text to an image map area
var area = document.getElementsByTagName("area");
for (let i=0;i<area.length;i++){
    var hrefArea = area[i].href;
    if(area[i].alt==""){
        area[i].alt=hrefArea;
    }
}
