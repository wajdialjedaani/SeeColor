
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


  function drawImage() {
    var canvas = document.getElementById('testCanvas');
    var context = canvas.getContext('2d');

    var imageData = context.getImageData(10, 10, 50, 50);
    var data = imageData.data;

    // iterate over all pixels
    for(var i = 0, n = data.length; i < n; i += 4) {
      var red = data[i];
      var green = data[i + 1];
      var blue = data[i + 2];
      var alpha = data[i + 3];
      alert(red + " " + green + " " + blue + " " + alpha);
    }
   
  }

  document.getElementById('testButton').addEventListener('click', drawImage);
