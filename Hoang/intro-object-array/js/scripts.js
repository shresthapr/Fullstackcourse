window.dataLayer.forEach(function (event) {
  var newEvent = document.createElement("li");
  newEvent.innerHTML =
    '<div class="info"><h2 class="title">' +
    event.short_description.fi +
    "</h2></div>";
  document.getElementById("eventList").appendChild(newEvent);
});
