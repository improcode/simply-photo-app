var canvas = new fabric.Canvas("nowDrawing", {
    hoverCursor: 'pointer',
    selection: true,
    selectionBorderColor: 'green',
    backgroundColor: null
});

// Create a new instance of the Image class
var img = new Image();

// When the image loads, set it as background image
img.onload = function() {
    var f_img = new fabric.Image(img);

    canvas.setBackgroundImage(f_img);

    canvas.renderAll();
};

// Set the src of the image with the base64 string
img.src = newImage;