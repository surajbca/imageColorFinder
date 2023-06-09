function SimpleCheckBox() {
  let SimpleCheckBox = document.getElementById("Simple");
  SimpleCheckBox.style.display = "";

  let Dominant = document.getElementById("Dominant");
  Dominant.style.display = "none";

  let LightColor = document.getElementById("LightColor");
  LightColor.style.background = "#b5bcc6";

  let SquareRoot = document.getElementById("SquareRoot");
  SquareRoot.style.display = "none";
}

function SquareRootCheckBox() {
  /* let Dominant = document.getElementById("SquareRoot");
  Dominant.style.display = "";*/
  let SquareRoot = document.getElementById("SquareRoot");
  SquareRoot.style.display = "";

  let Dominant = document.getElementById("Dominant");
  Dominant.style.display = "none";

  let LightColor = document.getElementById("LightColor");
  LightColor.style.background = "#c4cdd6";

  let SimpleCheckBox = document.getElementById("Simple");
  SimpleCheckBox.style.display = "none";
}

function DominantCheckBox() {
  let Dominant = document.getElementById("Dominant");
  Dominant.style.display = "";

  let LightColor = document.getElementById("LightColor");
  LightColor.style.background = "#e8f5fe";

  let SimpleCheckBox = document.getElementById("Simple");
  SimpleCheckBox.style.display = "none";

  let SquareRoot = document.getElementById("SquareRoot");
  SquareRoot.style.display = "none";
}

function hex1() {
  let copyvalue = document.getElementById("hex1");
  alert("copy Text :" + copyvalue.innerText);
  //navigator.select();
  // navigator.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyvalue.innerText);
}

function RGBA1() {
  let copyvalue = document.getElementById("RGBA1");
  alert("copy Text :" + copyvalue.innerText);
  //navigator.select();
  // navigator.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyvalue.innerText);
}

function HSLA1() {
  let copyvalue = document.getElementById("HSLA1");
  alert("copy Text :" + copyvalue.innerText);
  //navigator.select();
  // navigator.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyvalue.innerText);
}

/*start square root copy function*/
function hex2() {
  let copyvalue = document.getElementById("hex1");
  alert("copy Text :" + copyvalue.innerText);
  //navigator.select();
  // navigator.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyvalue.innerText);
}

function RGBA2() {
  let copyvalue = document.getElementById("RGBA1");
  alert("copy Text :" + copyvalue.innerText);
  //navigator.select();
  // navigator.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyvalue.innerText);
}

function HSLA2() {
  let copyvalue = document.getElementById("HSLA2");
  alert("copy Text :" + copyvalue.innerText);
  navigator.select();
  navigator.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyvalue.innerText);
}

/*start dominant copy function*/
function hex3() {
  let copyvalue = document.getElementById("hex1");
  alert("copy Text :" + copyvalue.innerText);
  //navigator.select();
  // navigator.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyvalue.innerText);
}

function RGBA3() {
  let copyvalue = document.getElementById("RGBA1");
  alert("copy Text :" + copyvalue.innerText);
  //navigator.select();
  // navigator.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyvalue.innerText);
}

function HSLA3() {
  let copyvalue = document.getElementById("HSLA1");
  alert("copy Text :" + copyvalue.innerText);
  //navigator.select();
  // navigator.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyvalue.innerText);
}
