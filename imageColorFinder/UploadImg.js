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

//var colorThief = new preview_image();

//var sourceImage = document.getElementById("output_image");

// Display main color
// e.g [125, 189, 193]
//console.log(colorThief.getColor(sourceImage));

// Display palette of colors
// e.g [[55,37,29],[213,193,136],[110,204,223]]
//console.log(colorThief.getPalette(sourceImage));
