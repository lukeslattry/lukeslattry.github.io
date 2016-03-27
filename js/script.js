'use strict';

( function() {
    document.addEventListener( 'DOMContentLoaded', init, false );
    function init() {
        var imgs = document.getElementsByTagName('img');

        for (var i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove('loaded');
            imgs[i].addEventListener('load', makeVisible(imgs[i]), false);
        }
    }
    function makeVisible(element) {
        element.classList.add('loaded');
    }
})();
