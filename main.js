<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sulabh.in | Welcome</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="navbar">
      <a href="#" class="navbar-brand" title="Home-Sulabh.in (shortcut: h)" tabindex="1" accesskey="h"><img src="sulabh_logo-final.png" alt="Sulabh logo" title="Sulabh_logo" style="width: 20vw; vertical-align: middle;"></a>
      <ul>
          <li><a href="#sect1" title="About" tabindex="3">About</a></li>
          <li><a href="#sect2" title="Know More (shortcut: k)" tabindex="4" accesskey="k">Know More</a></li>
          <li><a href="#sect3" title="Contact us" tabindex="5">Contact Us</a></li>
      </ul>
      <button class="navbar-toggler" title="menu (shortcut: m)" tabindex="2">
          <span></span>
      </button>
  </nav>
  <header class="intro">
      <div class="container"><img src="sulabhlogo2.png" alt="Sulabh Logo" id= "logo_main"></img></div>
      <button type="button" onclick="display1()" accesskey="v" tabindex="6" action="" class="feature" title="Voice Based Assistance (shortcut:v)" id="feature1" aria-describedby="Voice Based Assistance(shortcut:v)"></button>
      <button type="button" onclick="display2()" accesskey="g" tabindex="10" class="feature" title="Gesture Based Navigation (shortcut:g)" id="feature2" aria-describedby="Gesture Based Navigation (shortcut:g)"></button>
      <button type="button" onclick="display3()" accesskey="c" tabindex="13" class="feature" title="Captions and Hyperlinks (shortcut:c)" id="feature3" aria-describedby="Captions and Hyperlinks (shortcut:c)"></button>
      <button type="button" onclick="display4()" accesskey="b" tabindex="17" class="feature" title="Text to Refreshable Braille Compatibility (shortcut:b)" id="feature4" aria-describedby="Text to Refreshable Braille Compatibility (shortcut:b)"></button>
      <button type="button" onclick="display5()" accesskey="u" tabindex="20" class="feature" title="Ease of Access and Understanding (shortcut:u)" id="feature5" aria-describedby="Ease of Access and Understanding (shortcut:u)"></button>
      <button type="button" onclick="display6()" accesskey="a" tabindex="24" class="feature" title="Appearance Settings (shortcut:a)" id="feature6" aria-describedby="Appearance Settings (shortcut:a)"></button>

      <div class="container">
        <form action="https://www.google.com/search" class="searchform" method="get" name="searchform" title="Search (shortcut:s)" target="_blank">
            <input name="sitesearch" type="hidden">
            <input tabindex="30" accesskey="s" autocomplete="on" class="form-control search" style="height: 5vh; width: 35vw;" name="q" placeholder="Search in google.com" required="required"  type="text">
            <button class="button" type="submit" tabindex="31">Search</button>
        </form>
        <br>
        <br>
        <h3 id="tut">To understand how to use this website, click here:</h3>
        <button id="tutorial" tabindex="32" accesskey="t" class="tutorial" type="button" title="Tutorial (shortcut:t)">Tutorial</button>
    </div>
    <div class="feature_list">
        <h2 id="intro">Introducing <span style="color: #ffffff;">Sulabh.in</span>, a website that revolutionises Internet for the differently abled!</h2>
        <h3 id="intro_h3">Select the Features you wish to use, enter the website you wish to visit, and hit Go!</h3>
        <div class="container options" id="voice_based_assistance">
            <!--where should the action be sent to?-->
            <form action="" method="get">
                <p>VOICE BASED ASSISTANCE</p>
                <input type="checkbox" tabindex="7" name="Screen Reader" value="Screen Reader">
                <label for="Screen Reader"> Screen Reader</label><br>
                <input type="checkbox" tabindex="8" name="Voice Commands" value="Voice Commands">
                <label for="Voice Commands"> Voice Commands</label><br>
                <input type="submit" tabindex="9" value="Submit">
              </form>
        </div>
        <div class="container options" style="display: none;" id="gesture_based_navigation">
            <form action="" method="get">
                <p>GESTURE BASED NAVIGATION</p>
                <input type="checkbox" tabindex="11" name="Gesture Tracking" value="Gesture Tracking">
                <label for="Gesture Tracking"> Gesture Tracking</label><br>
                <input type="submit" tabindex="12" value="Submit">
              </form>
        </div>
        <div class="container options" style="display: none;" id="captions_and_hyperlinks">
            <p>CAPTIONS AND HYPERLINKS</p>
            <input type="checkbox" tabindex="14" name="Image Video Captioning" value="Image Video Captioning">
            <label for="Image Video Captioning"> Image and Video Captioning</label><br>
            <input type="checkbox" tabindex="15" name="Error and Success Messages" value="Error and Success Messages">
            <label for="Error and Success Messages"> Error and Success Messages</label><br>
            <input type="submit" tabindex="16" value="Submit">
        </div>
        <div class="container options" style="display: none;" id="text_to_braille">
            <p>TEXT TO BRAILLE COMPATIBILITY</p>
            <input type="checkbox" tabindex="18" name="PDF generation for Text to Braille Conversion Devices" value="PDF generation for Text to Braille Conversion Devices">
            <label for="PDF generation for Text to Braille Conversion Devices"> .DAT file generation for Text to Braille Conversion Devices</label><br>
            <input type="submit" tabindex="19" value="Submit">
        </div>
        <div class="container options" style="display: none;" id="ease_of_access">
            <p>EASE OF ACCESS AND UNDERSTANDING</p>
            <input type="checkbox" tabindex="21" name="Spelling and Meaning Assistance" value="Spelling and Meaning Assistance">
            <label for="Spelling and Meaning Assistance"> Spelling and Meaning Assistance</label><br>
            <input type="checkbox" tabindex="22" name="Keyboard Shortcuts" value="Keyboard Shortcuts">
            <label for="Keyboard Shortcuts"> Keyboard Shortcuts</label><br>
            <input type="submit" tabindex="23" value="Submit">
        </div>
        <div class="container options" style="display: none;" id="appearance_settings">
            <p>APPEARANCE SETTINGS</p>
            <input type="checkbox" tabindex="25" name="Font and Font Size Adjustment" value="Font and Font Size Adjustment">
            <label for="Font and Font Size Adjustment"> Font and Font Size Adjustment</label><br>
            <input type="checkbox" tabindex="26" name="Text Spacing" value="Text Spacing">
            <label for="Text Spacing"> Text Spacing</label><br>
            <input type="checkbox" tabindex="27" name="Change Color Schemes" value="Change Color Schemes">
            <label for="Change Color Schemes"> Change Color Schemes</label><br>
            <input type="checkbox" tabindex="28" name="Button and Form Highlighting and Enlargement" value="Button and Form Highlighting and Enlargement">
            <label for="Button and Form Highlighting and Enlargement"> Button and Form Highlighting and Enlargement</label><br>
            <input type="submit" tabindex="29" value="Submit">
        </div>
      </div>
  </header>   <!--background image only in Header-->
  <section id="sect1" tabindex="33" class="container">
      <h2 style="color: #000000;">Sulabh.in is a website that provides a range of accessibility features for various categories of differently abled people, that enables users to use all websites with ease!
          Meet the developers!
      </h2>
      <!-- Slideshow container -->
<div class="slideshow-container">

    <!-- Full-width images with number and caption text -->
    <div class="mySlides fade">
      <div class="number">1 / 3</div>
      <img src="" style="width:100%" alt="developer 1">
      <div class="text">Caption Text</div>
    </div>
  
    <div class="mySlides fade">
      <div class="number">2 / 3</div>
      <img src="" style="width:100%" alt="developer 2">
      <div class="text">Caption Two</div>
    </div>
  
    <div class="mySlides fade">
      <div class="number">3 / 3</div>
      <img src="" style="width:100%" alt="developer 3">
      <div class="text">Caption Three</div>
    </div>
  
    <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
  </div>
  <br>
  
  <!-- The dots/circles -->
  <div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
  </div>
  </section>
  <section id="sect2" tabindex="34" class="container"><h2>Detailed description of features</h2></section>
  <section id="sect3" tabindex="35" class="container">
      <h2 style="font-size: 4vh;"><span style="color: #000000;">Contact Us at:</span>
          <br>
        Team Blink, 
        <br>
        Nirmaan (Pre-Incubation Cell), 
        <br>
        Indian Institute of Technology Madras, 
        <br>
        Chennai-600036, India
        <br>
        Email id: blink.iitmadras@gmail.com
      </h2>
  </section>

    <script src="main.js"></script>
</body>
</html>
