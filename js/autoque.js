// big bugs:  
// We can only operate on the "auto ID" at the moment
// passing JSON to the autoque controls CSS seems to be broken :\
// if you pause and restart its really slow because it thinks it has ages to animate

(function( $ ){

  var debug = true;
  function errlog(error){
    if (console){
      if(debug == true){
        console.log(error);
      }
    }
  }

  $.fn.autoque = function( options ) {
    var settings = {
      'hoverRequred'     : 'false', // Is a hover required to see the controls?
      'fontSize'        : '36px', // The font size used
      'controlSize'     : '', // size of the controls - will auto resize
      'controlRadius'   : '20px', // the radius of the corners on the controls
      'controlOpacity'  : '.9', // the opacity of the controls
      'controlBGColor'  : 'lightgrey',
      'controlLocation' : '"right","10px"' // The location of the controls
    };

    // Put the options together
    if ( options )
    {
      $.extend( settings, options );
    }

    // Measure the height and width of the container div
    var height = this.height();
    errlog("height of div is "+height);
    var width = this.width();
    errlog("width of div is "+height);

    // Get current content and a word count
    var original = this.html();
    var wordCount = original.split(' ').length;

    // how long would this wordcount take?
    var timeToTalk = (wordCount / .75) * 100; // in seconds

    // Define the controls and write them to the UI
    var controls = "<div class='aQbutton' id='cRewind'>&#9668;&#9668;</div> <div class='aQbutton' id='cUnplay'>&#9668;</div> <div class='aQbutton' id='cPause'>=</div><div class='aQbutton' id='cPlay'>&#9658;</div><div class='aQbutton' id='cFastForward'>&#9658;&#9658;</div>";
    $(this).html("<div id='auto'>" + original +"</div>");
    $(this).append("<div id='autoqueControls'><div id='fastslow'><div id='faster'>+</div><div id='slower'>-</div></div>"+controls+"</div>");
    $("#autoqueControls").css({'width':settings.controlSize}); 
    $("#autoqueControls").css({'opacity':settings.controlOpacity});
    $("#autoqueControls").css('borderRadius',settings.controlRadius);
    $("#autoqueControls").css({"right":"10px","bottom":"5px"}); // This needs fixing cake
    $("#autoqueControls").css({'backgroundColor':settings.controlBGColor});

    $(this).css({'font-size':settings.fontSize});

    // Add some event listeners onto the buttons
    $('#cRewind').click(function(){rewind();});
    $('#cUnplay').click(function(){unplay();});
    $('#cPause').click(function(){pause();});
    $('#cPlay').click(function(){play();});
    $('#cFastForward').click(function(){fastForward();});
    $('#faster').click(function(){faster();});
    $('#slower').click(function(){slower();});


    // Some functions to control the playback
    function rewind(){ // A rewind function
      errlog("Performing a rewind");
      $('#auto').stop();
      $('#auto').animate({'top':'0px'}, 'fast');
    }

    function unplay(){ // An unplay function
    }

    function pause(){ // A pause function
      $('#auto').stop();
    }

    function play(){ // A play function
      // First things first, put the top of the div at the bottom
      $('#auto').height(height+'px');
      $('#example').css('overflow','hidden');
      currentPosition = $('#auto').css('top');
      errlog(currentPosition);
      if (currentPosition == '0px'){ // This if statement stops the pause button from re-starting the whole process after being unpaused
        $('#auto').animate({'top':height+'px'});
        errlog("Animating the top of the document to be off the page");
      }
      else{
        // var timeToTalk = timeToTalk; // cake -- We need to figure out how much is still left to process and how long this will take to do
      }
      $('#auto').animate({'top':'-'+height+'px'}, timeToTalk); 
    }

    function fastForward(){
      errlog("Fast forwarding this doc");
      currentPosition = $('#auto').css('top');
      errlog(currentPosition);
      forwardedPosition = currentPosition.replace("px","") - 100;
      errlog("Sending to "+forwardedPosition);
      $('#auto').stop();
      $('#auto').animate({'top':'-'+forwardedPosition+'px'}, 1000);
    }

    function faster(){
      errlog("Lets make this animation faster");
      errlog("Current position is" +currentPosition);
      errlog("timeToTalk is " +timeToTalk);
      timeToTalk = timeToTalk - (timeToTalk*.1);
      $('#auto').stop();
      $('#auto').animate({'top':'-'+height+'px'}, timeToTalk);
    }

    function slower(){
      
    }

  };
})( jQuery );


