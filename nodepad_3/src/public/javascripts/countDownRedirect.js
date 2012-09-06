( function( $, undefined ) {

  $( document ).ready( init );

  function init() {
    registerEventListeners();
  }

  function registerEventListeners() {
    $( '.start_countdown').click( handleStart );
    $( '.end_countdown').click( handleEnd );
  }

  var countdown;
  var countdown_number;

  function handleStart() {
    countdown_number = 11;
    countdown_trigger(countdown_number);
  }

  function countdown_trigger() {
    if (countdown_number > 0) {
      countdown_number --;
      document.getElementById('countdown_text').innerHTML = countdown_number;
      if (countdown_number > 0) {
          countdown = setTimeout(countdown_trigger, 1000);
      }
    }
  }

  function handleEnd() {
    clearTimeout(countdown);
  }

})( jQuery );