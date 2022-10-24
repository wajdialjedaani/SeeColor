let worstContrast = 100;
let worstColours = [];

//image upload
let imgInput = document.getElementById('testImage');
  imgInput.addEventListener('change', function(e) {
    if(e.target.files) {
      let imageFile = e.target.files[0]; //here we get the image file
      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = function (e) {
        var myImage = new Image(); // Creates image object
        myImage.src = e.target.result; // Assigns converted image to image object
        myImage.onload = function(ev) {
          var myCanvas = document.getElementById("testCanvas"); // Creates a canvas object
          var myContext = myCanvas.getContext("2d"); // Creates a contect object
          myCanvas.width = myImage.width; // Assigns image's width to canvas
          myCanvas.height = myImage.height; // Assigns image's height to canvas
          myContext.drawImage(myImage,0,0, 400, 300); // Draws the image on canvas
          let imgData = myCanvas.toDataURL("image/png",0.75); // Assigns image base64 string in jpeg format to a variable
        }
      }

    }
  });


  function getImageData() {
    var canvas = document.getElementById('testCanvas');
    var context = canvas.getContext('2d');

    var imageData = context.getImageData(0, 0, 400, 300);
    var data = imageData.data;


    // iterate over all pixels
    for(var i = 0; i < data.length; i += 4) {
      var red = data[i];
      var green = data[i + 1];
      var blue = data[i + 2];
      //var alpha = data[i + 3];
     //alert(red + " " + green + " " + blue + " " + alpha);

    for (var j = 0; j < data.length; j += 4){
      if (red == data[j] && green == data[j+1] && blue == data[j+2] ){
        //alert("same");
        //colours are the same, dont sent to test
      }
      else {
        //alert("not same" + red + " " + green + " " + blue + " " + data[j] + " " + data[j+1] + " " + data[j+2]);
        //colours are not the same, send to test
        testTwoColours(red, green, blue, data[j], data[j+1], data[j+2] );
      }
     }
     alert(worstContrast);
    }
   
  }

  document.getElementById('testButton').addEventListener('click', getImageData);

  //from
  //https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o
  //returns luminance of rgb colour
  //for contrast calculation
  function luminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow( (v + 0.055) / 1.055, 2.4 );
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}


//uses luminace to calculate contrast of two colours
//according to WCAG standards
//displays results of WCAG tests as alert for now
function testTwoColours(r1, g1, b1, r2, g2, b2){

  const lum1 = luminance(r1, g1, b1);
  const lum2 = luminance(r2, b2, g2);

  const ratio = lum1 > lum2 
    ? ((lum2 + 0.05) / (lum1 + 0.05))
    : ((lum1 + 0.05) / (lum2 + 0.05));

    if (ratio < worstContrast){
      worstContrast = ratio;
      worstColours[0] = r1;
      worstColours[1] = g1;
      worstColours[2] = b1;
      worstColours[3] = r2;
      worstColours[4] = g2;
      worstColours[5] = b2;
    }

    const result = `
                AA-level large text: ${ratio < 1/3 ? 'PASS' : 'FAIL' }
                AA-level small text: ${ratio < 1/4.5 ? 'PASS' : 'FAIL' }
                AAA-level large text: ${ratio < 1/4.5 ? 'PASS' : 'FAIL' }
                AAA-level small text: ${ratio < 1/7 ? 'PASS' : 'FAIL' }`;

 
  //alert(result);
}
