function submit_action(latitude, longitude) {
  submit_url = "index.html";
  redirect_url = "mars_image_location.html?latitude=" + latitude + "&longitude=" + longitude;

  /*$.post(submit_url, function(data) {
    window.location.href = redirect_url;
  })
  .fail(function() {
    console.log("Failed to call " + submit_url);
    alert("500 error :(");
  })
  */
  window.location.href = redirect_url;
}
