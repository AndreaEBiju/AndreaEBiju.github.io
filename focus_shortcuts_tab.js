//enlarge on focus code
var css =':focus{font-weight:bolder;'+'font-size:larger;}';
var head = document.getElementsByTagName('head')[0];
var style = document.createElement('style');
if (!window.counter) { window.counter = 1;} 
else  { window.counter ++;if (window.counter % 2 == 0) 
    { var css =':focus{font-weight:bolder; font-size:larger;}'}}
style.type = 'text/css';
if (style.styleSheet){style.styleSheet.cssText = css;} 
else {  style.appendChild(document.createTextNode(css));}
head.appendChild(style);

//code to make other non interactive elements tab navigatable
var para = document.getElementsByTagName("p");
for(let i=0;i<para.length;i++){
    if(para[i].tabIndex==""){
        para[i].tabIndex=0;
    }
}
var h1 = document.getElementsByTagName("h1");
for(let i=0;i<h1.length;i++){
    if(h1[i].tabIndex==""){
        h1[i].tabIndex=0;
    }
}
var h2 = document.getElementsByTagName("h2");
for(let i=0;i<h2.length;i++){
    if(h2[i].tabIndex==""){
        h2[i].tabIndex=0;
    }
}
var h3 = document.getElementsByTagName("h3");
for(let i=0;i<h3.length;i++){
    if(h3[i].tabIndex==""){
        h3[i].tabIndex=0;
    }
}
var h4 = document.getElementsByTagName("h4");
for(let i=0;i<h4.length;i++){
    if(h4[i].tabIndex==""){
        h4[i].tabIndex=0;
    }
}
var h5 = document.getElementsByTagName("h5");
for(let i=0;i<h5.length;i++){
    if(h5[i].tabIndex==""){
        h5[i].tabIndex=0;
    }
}
var h6 = document.getElementsByTagName("h6");
for(let i=0;i<h6.length;i++){
    if(h6[i].tabIndex==""){
        h6[i].tabIndex=0;
    }
}
var em = document.getElementsByTagName("em");
for(let i=0;i<em.length;i++){
    if(em[i].tabIndex==""){
        em[i].tabIndex=0;
    }
}
var b = document.getElementsByTagName("b");
for(let i=0;i<b.length;i++){
    if(b[i].tabIndex==""){
        b[i].tabIndex=0;
    }
}
var strong = document.getElementsByTagName("strong");
for(let i=0;i<strong.length;i++){
    if(strong[i].tabIndex==""){
        strong[i].tabIndex=0;
    }
}
var underline = document.getElementsByTagName("u");
for(let i=0;i<underline.length;i++){
    if(underline[i].tabIndex==""){
        underline[i].tabIndex=0;
    }
}
var list = document.getElementsByTagName("ul");
for(let i=0;i<list.length;i++){
    if(list[i].tabIndex==""){
        list[i].tabIndex=0;
    }
}
var li= document.getElementsByTagName("li");
for(let i=0; i<li.length;i++){
    if(li[i].tabIndex==""){
        li[i].tabIndex=0;
    }
}
var olist = document.getElementsByTagName("ol");
for(let i=0;i<olist.length;i++){
    if(olist[i].tabIndex==""){
        olist[i].tabIndex=0;
    }
}
var table = document.getElementsByTagName("table");
for(let i=0;i<table.length;i++){
    if(table[i].tabIndex==""){
        table[i].tabIndex=0;
    }
}
var tr = document.getElementsByTagName("tr");
for(let i=0;i<tr.length;i++){
    if(tr[i].tabIndex==""){
        tr[i].tabIndex=0;
    }
}
var td = document.getElementsByTagName("td");
for(let i=0; i<td.length; i++){
    if(td[i].tabIndex==""){
        td[i].tabIndex=0;
    }
}
var th = document.getElementsByTagName("th");
for(let t=0;i<th.length;i++){
    if(th[i].tabIndex==""){
        th[i].tabIndex=0;
    }
}
var blockquote = document.getElementsByTagName("blockquote");
for(let i=0;i<blockquote.length;i++){
    if(blockquote[i].tabIndex==""){
        blockquote[i].tabIndex=0;
    }
}
var article = document.getElementsByTagName("article");
for(let i=0;i<article.length;i++){
    if(article[i].tabIndex==""){
        article[i].tabIndex=0;
    }
}
var audio = document.getElementsByTagName("audio");
for(let i=0; i<audio.length; i++){
    if(audio[i].tabIndex==""){
        audio[i].tabIndex=0;
    }
}
var video = document.getElementsByTagName("video");
for(let i=0; i<video.length; i++){
    if(video[i].tabIndex==""){
        video[i].tabIndex=0;
    }
}
var caption = document.getElementsByTagName("caption");
for(let i=0;i<caption.length;i++){
    if(caption[i].tabIndex==""){
        caption[i].tabIndex=0;
    }
}
var cite = document.getElementsByTagName("cite");
for(let i=0;i<cite.length;i++){
    if(cite[i].tabIndex==""){
        cite[i].tabIndex=0;
    }
}
var code = document.getElementsByTagName("code");
for(let i=0;i<code.length;i++){
    if(code[i].tabIndex==""){
        code[i].tabIndex=0;
    }
}
var dd = document.getElementsByTagName("dd");
for(let i=0;i<dd.length;i++){
    if(dd[i].tabIndex==""){
        dd[i].tabIndex=0;
    }
}
var dfn = document.getElementsByTagName("dfn");
for(let i=0;i<dfn.length;i++){
    if(dfn[i].tabIndex==""){
        dfn[i].tabIndex=0;
    }
}
var details = document.getElementsByTagName("details");
for(let i=0;i<details.length;i++){
    if(details[i].open==true){
        if(details[i].tabIndex==""){
            details[i].tabIndex=0;
        }
    }
}
var dialog = document.getElementsByTagName("dialog");
for(let i=0;i<dialog.length;i++){
    if(dialog[i].open==true){
        if(dialog[i].tabIndex==""){
            dialog[i].tabIndex=0;
        }
    }
}
var dl = document.getElementsByTagName("dl");
for(let i=0;i<dl.length;i++){
    if(dl[i].tabIndex==""){
        dl[i].tabIndex=0;
    }
}
var dt = document.getElementsByTagName("dt");
for(let i=0;i<dt.length;i++){
    if(dt[i].tabIndex==""){
        dt[i].tabIndex=0;
    }
}
var figcaption = document.getElementsByTagName("figcaption");
for(let i=0;i<figcaption.length;i++){
    if(figcaption[i].tabIndex==""){
        figcaption[i].tabIndex=0;
    }
}
var mark = document.getElementsByTagName("mark");
for(let i=0;i<mark.length;i++){
    if(mark[i].tabIndex==""){
        mark[i].tabIndex=0;
    }
}
var q = document.getElementsByTagName("q");
for(let i=0;i<q.length;i++){
    if(q[i].tabIndex==""){
        q[i].tabIndex=0;
    }
}
var summary = document.getElementsByTagName("summary");
for(let i=0;i<summary.length;i++){
    if(summary[i].tabIndex==""){
        summary[i].tabIndex=0;
    }
}
var main = document.getElementsByTagName("main");
for(let i=0;i<main.length;i++){
    if(main[i].tabIndex==""){
        main[i].tabIndex=0;
    }
}
var legend = document.getElementsByTagName("legend");
for(let i=0;i<legend.length;i++){
    if(legend[i].tabIndex==""){
        legend[i].tabIndex=0;
    }
}
//common bootstrap classes
var active = document.getElementsByClassName("active");
for(let i=0;i<active.length;i++){
    if(active[i].tabIndex==""){
        active[i].tabIndex=0;
    }
}
var alerts = document.getElementsByClassName("alert");
for(let i=0;i<alerts.length;i++){
    if(alerts[i].tabIndex==""){
        alerts[i].tabIndex=0;
    }
}
var alertsdanger = document.getElementsByClassName("alert-danger");
for(let i=0;i<alertsdanger.length;i++){
    if(alertsdanger[i].tabIndex==""){
        alertsdanger[i].tabIndex=0;
    }
}
var btn = document.getElementsByClassName("btn");
for(let i=0;i<btn.length;i++){
    if(btn[i].tabIndex==""){
        btn[i].tabIndex=0;
    }
}
var capt = document.getElementsByClassName("caption");
for(let i=0;i<capt.length;i++){
    if(capt[i].tabIndex==""){
        capt[i].tabIndex=0;
    }
}
var carouselCaption = document.getElementsByClassName("carousel-caption");
for(let i=0;i<carouselCaption.length;i++){
    if(carouselCaption[i].tabIndex==""){
        carouselCaption[i].tabIndex=0;
    }
}
var danger = document.getElementsByClassName("danger");
for(let i=0;i<danger.length;i++){
    if(danger[i].tabIndex==""){
        danger[i].tabIndex=0;
    }
}
var embedresp = document.getElementsByClassName("embed-responsive");
for(let i=0;i<embedresp.length;i++){
    if(embedresp[i].tabIndex==""){
        embedresp[i].tabIndex=0;
    }
}
var initialism = document.getElementsByClassName("initialism");
for(let i=0;i<initialism.length;i++){
    if(initialism[i].tabIndex==""){
        initialism[i].tabIndex=0;
    }
}
var mark = document.getElementsByClassName("mark");
for(let i=0;i<mark.length;i++){
    if(mark[i].tabIndex==""){
        mark[i].tabIndex=0;
    }
}
var pagination = document.getElementsByClassName("pagination");
for(let i=0;i<pagination.length;i++){
    if(pagination[i].tabIndex==""){
        pagination[i].tabIndex=0;
    }
}
var panel = document.getElementsByClassName("panel");
for(let i=0;i<panel.length;i++){
    if(panel[i].tabIndex==""){
        panel[i].tabIndex=0;
    }
}
var popover = document.getElementsByClassName("popover");
for(let i=0;i<popover.length;i++){
    if(popover[i].tabIndex==""){
        popover[i].tabIndex=0;
    }
}
var show = document.getElementsByClassName("show");
for(let i=0;i<show.length;i++){
    if(show[i].tabIndex==""){
        show[i].tabIndex=0;
    }
}
var sronly = document.getElementsByClassName("sr-only");
for(let i=0;i<sronly.length;i++){
    if(sronly[i].tabIndex==""){
        sronly[i].tabIndex=0;
    }
}
var textdanger = document.getElementsByClassName("text-danger");
for(let i=0;i<textdanger.length;i++){
    if(textdanger[i].tabIndex==""){
        textdanger[i].tabIndex=0;
    }
}
var tooltip = document.getElementsByClassName("tooltip");
for(let i=0;i<tooltip.length;i++){
    if(tooltip[i].tabIndex==""){
        tooltip[i].tabIndex=0;
    }
}
var well = document.getElementsByClassName("well");
for(let i=0;i<well.length;i++){
    if(well[i].tabIndex==""){
        well[i].tabIndex=0;
    }
}
