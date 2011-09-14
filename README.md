# An autoQue plugin for jQuery.  

An autocue (also known as an teleprompter or telescript) is a display device that prompts the person speaking with an electronic visual text of a speech or script. 

# Our goal is to make autoQues easy to use on the web

# About
autoQue plugin for jQuery is a simple to use jQuery plugin that allows you to turn any div into an autoQue'able object.  autoQues are especially useful if you are reading the content out to an audience.  I often use autoQues when recording videos that I am going to publish on teh net

**Online demo**<br>
Visit <http://primaryschoolict.com/autoQue/> to test it live

# Example

See index.html and que.html for examples.

# Installation

1. Include the latest jQuery 
<pre><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script></pre>
2. Include the autoQue.js --> 
<pre><script type="text/javascript" src="js/autoque.js"></script></pre>
3. Include the autoQue.css --> 
<pre><link rel="stylesheet" href="css/autoque.css" type="text/css"/></pre>
4. Initiate the plugin --> <pre>$('#thisDiv').autoque();</pre>

# Plugin Parameters

Parameters can be passed to the jQuery plugin in JSON.  The available paremeters are:
<pre>
'hoverRequired'    : 'false', // Is a hover required to see the controls?
'fontSize'        : '36px', // The font size used
'fontColor'       : '#777', // The color of the font
'controlSize'     : '', // size of the controls - will auto resize
'controlRadius'   : '20px', // the radius of the corners on the controls
'controlOpacity'  : '.9', // the opacity of the controls
'controlBGColor'  : 'lightgrey',
'controlLocation' : '"right","10px"' // The location of the controls
</pre>

Example:  $('#que').autoque('hoverRequired':'true');

Parameters can be pased the que.html as a "GET".  The available parameters are:
<pre>
'q'               : 'a really pointless string' // The text string you want the autoQue to read out
'hoverRequired'    : 'false', // Is a hover required to see the controls?
'fontSize'        : '36px', // The font size used
'fontColor'       : '#777', // The color of the font
'controlSize'     : '', // size of the controls - will auto resize
'controlRadius'   : '20px', // the radius of the corners on the controls
'controlOpacity'  : '.9', // the opacity of the controls
'controlBGColor'  : 'lightgrey',
'controlLocation' : '"right","10px"' // The location of the controls
</pre>

Example: /que.html?q=this%20is%20a%20string%20that%20needs%20to%20be%20at%20least%2030%20characters&hoverRequired=false

You should look at que.html to see how this is implemented.


