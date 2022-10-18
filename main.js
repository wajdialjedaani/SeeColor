
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
          let imgData = myCanvas.toDataURL("image/jpeg",0.75); // Assigns image base64 string in jpeg format to a variable
        }
      }

    }
  });


  function getImageData() {
    var canvas = document.getElementById('testCanvas');
    var context = canvas.getContext('2d');

    var imageData = context.getImageData(0, 0, 400, 300);
    var data = imageData.data;

    const rbgValues = [];

    // iterate over all pixels
    for(var i = 0; i < data.length; i += 4) {
      var red = data[i];
      var green = data[i + 1];
      var blue = data[i + 2];
      var alpha = data[i + 3];
     //alert(red + " " + green + " " + blue + " " + alpha);

     rbgValues[i] = data[i];
     rbgValues[i + 1] = data[i + 1];
     rbgValues[i + 2] = data[i + 2];

     alert(rgbValues[i] + " " + rgbValues[i+1] + " " + rgbValues[i+2]);

     /* const rgb = {
        r :red,
        g : green,
        b : blue
    };

      //approach 1
      if (rbgValues.find(rgb) == undefined){
        rbgValues.push(rgb);
        alert("added");
      }

      //approach 2
        var pushRGB = true;
      for (var j = 0; j < rbgValues.length; j++){
        if (rbgValues[j].r == red && rbgValues.g == green == rbgValues.b == blue){
            pushRGB = false
        }
      }

      if(pushRGB){
        rbgValues.push(rgb);
        alert(rgb.red);
      }*/
    }

   
  }

  document.getElementById('testButton').addEventListener('click', getImageData);

