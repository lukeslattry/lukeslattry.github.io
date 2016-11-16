(function() {
    'use strict';
    document.addEventListener("DOMContentLoaded", function() {
        var items = document.querySelectorAll('.item');
        function itemHeight(itemsArray) {
            for (var i = itemsArray.length; i--;) {
                itemsArray[i].style.padding = '0px';
                itemsArray[i].style.height = itemsArray[i].offsetWidth * 0.625 + 'px';
            }
        }
        itemHeight(items);
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
