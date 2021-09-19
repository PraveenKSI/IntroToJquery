images = ['http://kimjoyfox.com/blog/wp-content/uploads/drwho8.jpg', 'http://kimjoyfox.com/blog/wp-content/uploads/drwho7.jpg', 'http://kimjoyfox.com/blog/wp-content/uploads/drwho6.jpg', 'http://kimjoyfox.com/blog/wp-content/uploads/drwho5.jpg', 'http://kimjoyfox.com/blog/wp-content/uploads/drwho4.jpg', 'http://kimjoyfox.com/blog/wp-content/uploads/drwho3.jpg'];


setInterval(forwardImage, 4000);


//This function will find the key for the current Image
function currentImageKey() {
    i = jQuery.inArray($('#slideshow').attr('src'), images);
    return i;
}


//This function will move the slideshow forward one
function forwardImage() {
    currentImageKey();
    if (i < images.length - 1) {
        changeImage(i + 1);
    } else {
        changeImage(0);
    }
}


//This function will change to image to whatever the variable i passes to it
function changeImage(i) {
    $('#slideshow').stop().animate({
        opacity: 0,
    }, 200, function() {
        $('#slideshow').attr('src', images[i]);
        $('#holder img').load(function() {
            $('#slideshow').stop().animate({
                opacity: 1,
            }, 200)
        })
    })
}
