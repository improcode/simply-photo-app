var newImage = ''

Webcam.set({
    width: 640,
    height: 480,
    dest_width: 640,
    dest_height: 480,
    image_format: 'jpeg',
    jpeg_quality: 90,
    flip_horiz: true,
});
Webcam.attach( '#my_camera' );


function preview_snapshot() {
    // freeze camera so user can preview pic
    Webcam.freeze();

    // swap button sets
    document.getElementById('pre_take_buttons').style.display = 'none';
    document.getElementById('post_take_buttons').style.display = '';
}

function cancel_preview() {
    // cancel preview freeze and return to live camera feed
    Webcam.unfreeze();

    // swap buttons back
    document.getElementById('pre_take_buttons').style.display = '';
    document.getElementById('post_take_buttons').style.display = 'none';
}

function save_photo() {
    // actually snap photo (from preview freeze) and display it
    Webcam.snap( function(data_uri) {
        // display results in page
        // export var newImage = data_uri

        document.getElementById('results').innerHTML =
            '<canvas id="nowDrawing" width="640" height="480"></canvas>'

        var canvas = new fabric.Canvas("nowDrawing", {
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
        img.onload = function() {
            var f_img = new fabric.Image(img);

            canvas.setBackgroundImage(f_img);

            canvas.renderAll();
        };

        // swap buttons back
        document.getElementById('pre_take_buttons').style.display = '';
        document.getElementById('post_take_buttons').style.display = 'none';

        console.log(img.src)
    } );
}