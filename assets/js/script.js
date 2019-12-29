// As jQuery loads at the end of the body, these
// functions shouldn't be needed.

$(document).ready(function() {
  // console.log('The document is ready');
});

$(window).on('load', function(){
  // console.log('All assets have been loaded');
});

$('#dice-roll').on('click', function(e) {
  e.preventDefault();
  let thisRoll = '';

  for (let i = 0; i < $('#dice-count').val(); i++) {
    thisRoll += Math.ceil(Math.random() * $('#dice-sides').val());
    if (i+1 < $('#dice-count').val()) {
      thisRoll += ', ';
    }
  }

  $('#roll-result').val(thisRoll);
});
