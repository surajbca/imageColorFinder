function preview_image(event) {
  let colorDiv = document.getElementById("colorDiv");
  colorDiv.style.display = "";

  let imgdiv = document.getElementById("imgdiv");
  imgdiv.style.display = "";

  let image_before = document.getElementById("image_before");
  image_before.style.display = "none";

  let pic = document.getElementById("filename");
  pic.style.display = "";
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output_image");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
  console.log("image name : " + event.target.files[0].name);
  pic.innerHTML = event.target.files[0].name;
}

function getBackgroundColor() {
  var colorThief = new BackgroundColorTheif();
  var rgb = colorThief.getBackGroundColor(
    document.getElementById("output_image")
  );
  document.getElementById("LightColor").style.backgroundColor =
    "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";

  //console.log("background-color = " + rgb);

  /* document.getElementById("LightColor").value =
    document.getElementById("hex1").innerHTML;*/

  //console.log(rgb);
  document.getElementById("hex1").innerHTML =
    "#" + ((1 << 24) + (rgb << 16) + (rgb << 8) + rgb).toString(16).slice(1);
  document.getElementById("RGBA1").innerHTML = "(" + rgb + ")";
  document.getElementById("HSLA1").innerHTML = "(" + rgb + ")";
}
/*
function rgbToHex(r, g, b) {
  var colorThief = new BackgroundColorTheif();
  var rgb = colorThief.getBackGroundColor(
    document.getElementById("output_image")
  );
}
return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
console.log(rgbToHex(rgb)); // #1c87c9*/
