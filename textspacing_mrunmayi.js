function(){
    var style = document.createElement(%27style%27),
    styleContent = document.createTextNode(%27* {
    line-height: 3 !important;
    letter-spacing: 0.12em !important;
    word-spacing: 0.6em !important;
  }
    p{
    margin-bottom: 2em !important;
    }
    %27);
    style.appendChild(styleContent );
    document.getElementsByTagName(%27head%27)[0].appendChild(style);
    var iframes = document.querySelectorAll(%27iframe%27);
    for (var i=0; i<iframes.length; i++)
    {try{iframes[i].contentWindow.document.getElementsByTagName(%27head%27)[0].appendChild(style);
  }
  catch(error) {
  console.log(%27Execution error: %27+error)}}})();