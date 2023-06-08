function preview_image(event) {
  let colorDiv = document.getElementById("colorDiv");
  colorDiv.style.display = "";

  let pic = document.getElementById("pic");
  pic.style.display = "";
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output_image");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
