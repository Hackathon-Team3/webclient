function submit_action() {
  submit_url = "index.html";
  redirect_url = "http://maps.google.com/mars";

  $.post(submit_url, function(data) {
    window.location.href = redirect_url;
  })
  .fail(function() {
    console.log("Failed to call " + submit_url);
  })
}
