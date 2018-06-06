var canvas

function canvasPhotoBackground(data_uri) {

    canvas = new fabric.Canvas("nowDrawing", {
        hoverCursor: 'pointer',
        selection: true,
        selectionBorderColor: 'green',
        backgroundColor: null,
        isDrawingMode: true,
        width: window.innerWidth,
        height: window.innerWidth,
    });

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    // Create a new instance of the Image class
    var img = new Image();
    img.src = data_uri
    // When the image loads, set it as background image
    img.onload = function () {
        var f_img = new fabric.Image(img);


        // {scaleX: window.innerWidth / 640, scaleY: window.innerWidth / 480}
        canvas.setBackgroundImage(f_img);
        canvas.renderAll();

        // canvas.setBackgroundImage(f_img, canvas.renderAll.bind(canvas), {
        //     width: canvas.width,
        //     height: canvas.height,
        //     originX: 'left',
        //     originY: 'top'
        // });

    };



}