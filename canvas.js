var canvas

function canvasPhotoBackground(data_uri) {
    canvas = new fabric.Canvas("nowDrawing", {
        hoverCursor: 'pointer',
        selection: true,
        selectionBorderColor: 'green',
        backgroundColor: null,
        isDrawingMode: true,
    });

    // Create a new instance of the Image class
    var img = new Image();
    img.src = data_uri
    // When the image loads, set it as background image
    img.onload = function () {
        var f_img = new fabric.Image(img);

        canvas.setBackgroundImage(f_img);

        canvas.renderAll();

    };


}