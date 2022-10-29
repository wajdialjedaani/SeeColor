//from https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o
//return luminance of an rgb value
function luminance(r, g, b) {
  var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928
          ? v / 12.92
          : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

//from https://github.com/zygisS22/color-palette-extraction/blob/master/index.js  
//build an array of rgb objects, and return iy
const buildRgb = (imageData) => {
  const rgbValues = [];
  // note that we are loopin every 4!
  // for every Red, Green, Blue and Alpha
  for (let i = 0; i < imageData.length; i += 4) {
    const rgb = {
      r: imageData[i],
      g: imageData[i + 1],
      b: imageData[i + 2],
    };

    rgbValues.push(rgb);
  }

  return rgbValues;
};

//from https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o
// returns what color channel has the biggest difference
const findBiggestColorRange = (rgbValues) => {
  /**
   * Min is initialized to the maximum value posible
   * from there we procced to find the minimum value for that color channel
   *
   * Max is initialized to the minimum value posible
   * from there we procced to fin the maximum value for that color channel
   */
  let rMin = Number.MAX_VALUE;
  let gMin = Number.MAX_VALUE;
  let bMin = Number.MAX_VALUE;

  let rMax = Number.MIN_VALUE;
  let gMax = Number.MIN_VALUE;
  let bMax = Number.MIN_VALUE;

  rgbValues.forEach((pixel) => {
    rMin = Math.min(rMin, pixel.r);
    gMin = Math.min(gMin, pixel.g);
    bMin = Math.min(bMin, pixel.b);

    rMax = Math.max(rMax, pixel.r);
    gMax = Math.max(gMax, pixel.g);
    bMax = Math.max(bMax, pixel.b);
  });

  const rRange = rMax - rMin;
  const gRange = gMax - gMin;
  const bRange = bMax - bMin;

  // determine which color has the biggest difference
  const biggestRange = Math.max(rRange, gRange, bRange);
  if (biggestRange === rRange) {
    return "r";
  } else if (biggestRange === gRange) {
    return "g";
  } else {
    return "b";
  }
};

//from https://github.com/zygisS22/color-palette-extraction/blob/master/index.js  
//quantize with median cut
const quantization = (rgbValues, depth) => {
  const MAX_DEPTH = 4;

  // Base case
  if (depth === MAX_DEPTH || rgbValues.length === 0) {
    const color = rgbValues.reduce(
      (prev, curr) => {
        prev.r += curr.r;
        prev.g += curr.g;
        prev.b += curr.b;

        return prev;
      },
      {
        r: 0,
        g: 0,
        b: 0,
      }
    );

    color.r = Math.round(color.r / rgbValues.length);
    color.g = Math.round(color.g / rgbValues.length);
    color.b = Math.round(color.b / rgbValues.length);

    return [color];
  }

  /**
   *  Recursively do the following:
   *  1. Find the pixel channel (red,green or blue) with biggest difference/range
   *  2. Order by this channel
   *  3. Divide in half the rgb colors list
   *  4. Repeat process again, until desired depth or base case
   */
  const componentToSortBy = findBiggestColorRange(rgbValues);
  rgbValues.sort((p1, p2) => {
    return p1[componentToSortBy] - p2[componentToSortBy];
  });

  const mid = rgbValues.length / 2;
  return [
    ...quantization(rgbValues.slice(0, mid), depth + 1),
    ...quantization(rgbValues.slice(mid + 1), depth + 1),
  ];
};

const contrastTest = (rgbTestValues) =>{
  const ratios = [];
  
  for (let i = 0; i < rgbTestValues.length; i++){
    const lumOne = luminance(rgbTestValues[i].r,rgbTestValues[i].g, rgbTestValues[i].b);

    for(let j = 1; j < rgbTestValues.length; j++){
      const lumTwo = luminance(rgbTestValues[j].r,rgbTestValues[j].g, rgbTestValues[j].b);
      if (i == j){
      }
      else {
      const ratio = lumOne > lumTwo 
      ? ((lumTwo  + 0.05) / (lumOne + 0.05))
      : ((lumOne + 0.05) / (lumTwo  + 0.05));
     //alert(ratio);

      const ratioAndColours = {
        colour1: rgbTestValues[i],
        colour2: rgbTestValues[j],
        contrastRatio: ratio,
      };

      ratios.push(ratioAndColours);
      }
    }
  }
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";
  for (let i = 0; i < ratios.length; i += 1){
    const colorElement = document.createElement("div");
    colorElement.appendChild(document.createTextNode(ratios[i].contrastRatio));
    resultsContainer.appendChild(colorElement);
  }
}


//from https://github.com/zygisS22/color-palette-extraction/blob/master/index.js  
const main = () => {
  const imgFile = document.getElementById("imgfile");
  const image = new Image();
  const file = imgFile.files[0];
  const fileReader = new FileReader();

  // Whenever file & image is loaded procced to extract the information from the image
  fileReader.onload = () => {
    image.onload = () => {
      // Set the canvas size to be the same as of the uploaded image
      const canvas = document.getElementById("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);

      /**
       * getImageData returns an array full of RGBA values
       * each pixel consists of four values: the red value of the colour, the green, the blue and the alpha
       * (transparency). For array value consistency reasons,
       * the alpha is not from 0 to 1 like it is in the RGBA of CSS, but from 0 to 255.
       */
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // Convert the image data to RGB values so its much simpler
      const rgbArray = buildRgb(imageData.data);

      /**
       * Color quantization
       * A process that reduces the number of colors used in an image
       * while trying to visually maintin the original image as much as possible
       */
      const quantColors = quantization(rgbArray, 0);
      contrastTest(quantColors);
    };
    image.src = fileReader.result;
  };
  fileReader.readAsDataURL(file);
};

main();
