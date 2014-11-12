function submit_action(latlong) {
  submit_url = "index.html";
  redirect_url = "mars_image_location.html";

  $.post(submit_url, function(data) {
    window.location.href = redirect_url;
  })
  .fail(function() {
    console.log("Failed to call " + submit_url);
    alert("500 error :(");
  })
}
