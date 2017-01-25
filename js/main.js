'use strict';
(function() {
    document.addEventListener("DOMContentLoaded", function() {
        var mb = document.getElementById("menu-btn");
        mb.addEventListener("click", function(){
            if (mb.className == ""){
                document.getElementsByTagName('nav')[0].className = "open";
                mb.className = "invert";
            } else {
                document.getElementsByTagName('nav')[0].className = "";
                mb.className = "";
            }
        });
        var nav_links = document.getElementsByClassName("nav-link");
        for (var i = 0; i < nav_links.length; i++) {
            nav_links[i].addEventListener("click", function(){
                document.getElementsByTagName('nav')[0].className = "";
                mb.className = "";
            });
        }
    });
})();
