(function() {
    'use strict';
    document.addEventListener("DOMContentLoaded", function() {
        var items = document.querySelectorAll('.item');
        function itemHeight() {
            for (var i = items.length; i--;) {
                items[i].style.padding = '0px';
                items[i].style.height = items[i].offsetWidth * 0.625 + 'px';
            }
        }
        itemHeight();
        window.addEventListener('resize', itemHeight, false);
        var itemNames = document.querySelectorAll('.item-name');
        document.addEventListener('mousemove', titles, false);
        function titles(e) {
            for (var i = itemNames.length; i--;) {
                itemNames[i].style.left = e.pageX - itemNames[i].offsetWidth / 2.4 + 'px';
                itemNames[i].style.top = e.pageY - 36 + 'px';
            }
        }
    });
})();
