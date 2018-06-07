var canvas
var f_img

function canvasPhotoBackground(data_uri) {

    if (isMobile) {
        canvas = new fabric.Canvas("nowDrawing", {
            hoverCursor: 'pointer',
            selection: true,
            selectionBorderColor: 'green',
            backgroundColor: null,
            isDrawingMode: true,
            color: 'red',
            width: window.innerWidth,
            height: window.innerWidth,
        });
    } else {
        canvas = new fabric.Canvas("nowDrawing", {
            hoverCursor: 'pointer',
            selection: true,
            selectionBorderColor: 'green',
            backgroundColor: null,
            isDrawingMode: true,
            color: 'red',
            width: 640,
            height: 480,
        });
    }


    // Create a new instance of the Image class
    var img = new Image();
    img.src = data_uri
    // When the image loads, set it as background image
    img.onload = function () {
        f_img = new fabric.Image(img);


        // {scaleX: window.innerWidth / 640, scaleY: window.innerWidth / 480}
        canvas.setBackgroundImage(f_img);
        canvas.renderAll();

        canvas.freeDrawingBrush.color = "rgba(255,0,0,.3)"
        canvas.freeDrawingBrush.width = 6

    };


}

function clear_drawing() {
    canvas.clear()
    canvas.setBackgroundImage(f_img);
    canvas.renderAll();


}