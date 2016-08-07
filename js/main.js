(function() {
    'use strict';
    document.addEventListener("DOMContentLoaded", function() {
        var imgs = document.getElementsByTagName("img");
        imagesLoaded(imgs).on( 'progress', function( instance, image ) {
            image.img.className = "visible";
        });
    });
})();
