$( document ).ready( function() {
  $( "h2" ).click( function() {
    $( this ).parent().parent().children( ".course-details" ).toggle( "blind" );
  });
});
