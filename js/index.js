function submit_action() {
  console.log("submit_action");
  $.getJSON( "ajax/test.json", function( data ) {
    alert("called");
  })
  .fail(function() {
    console.log( "error" );
  })
  console.log("exited");
}
