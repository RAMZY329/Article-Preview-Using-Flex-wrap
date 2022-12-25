function show() {
  document.getElementById("btn_image").classList.toggle("myStyle");
  document.getElementById("share_button1").classList.toggle("active");
  var content = document.getElementById("share_sites");
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
