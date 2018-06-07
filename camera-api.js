Webcam.set({
    width: window.innerWidth,
    height: window.innerWidth,
    // dest_width: 640,
    // dest_height: 480,
    image_format: 'jpeg',
    jpeg_quality: 90,
    flip_horiz: true,
});
Webcam.attach('#my_camera');


function preview_snapshot() {
    // freeze camera so user can preview pic
    Webcam.freeze();
    // document.getElementsByTagName('video').style.display = 'none';
    // swap button sets
    document.getElementById('pre_take_buttons').style.display = 'none';
    document.getElementById('post_take_buttons').style.display = '';
    document.getElementById('after_drawing_buttons').style.display = 'none';
    document.getElementById('drawing_options').style.display = 'none';
}

function cancel_preview() {
    // cancel preview freeze and return to live camera feed
    Webcam.unfreeze();

    // swap buttons back
    document.getElementById('pre_take_buttons').style.display = '';
    document.getElementById('post_take_buttons').style.display = 'none';
    document.getElementById('after_drawing_buttons').style.display = 'none';
    document.getElementById('drawing_options').style.display = 'none';
}

function draw_photo() {
    // actually snap photo (from preview freeze) and display it

    Webcam.snap(function (data_uri) {
        // display results in page
        // export var newImage = data_uri

        document.getElementById('my_camera').style.display = 'none';
        document.getElementById('results').style.display = '';
        document.getElementById('results').innerHTML =
            '<canvas id="nowDrawing" ></canvas>'

        canvasPhotoBackground(data_uri)

        // swap buttons back
        document.getElementById('pre_take_buttons').style.display = 'none';
        document.getElementById('post_take_buttons').style.display = 'none';
        document.getElementById('after_drawing_buttons').style.display = '';
        document.getElementById('drawing_options').style.display = '';


    });
}

function cancel_drawing() {

    document.getElementById('my_camera').style.display = '';
    document.getElementById('results').style.display = 'none';

    document.getElementById('pre_take_buttons').style.display = '';
    document.getElementById('post_take_buttons').style.display = 'none';
    document.getElementById('after_drawing_buttons').style.display = 'none';
    // document.getElementById('drawing_options').style.display = 'none';

}

function save_photo_localstorage() {
    console.log(canvas)
}