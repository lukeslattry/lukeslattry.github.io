(function() {
    document.addEventListener("DOMContentLoaded", function() {
        var rand = Math.floor(Math.random() * (4 - 1)) + 1;
        console.log(rand);
        if (rand == 1) {
            document.getElementsByTagName('body')[0].className = "pank";
        } else if (rand == 2) {
            document.getElementsByTagName('body')[0].className = "green";
        }

        var moreBtns = document.getElementsByClassName("more-btn");
        var moreSections = document.getElementsByClassName("more");
        for (var i = 0; i < moreBtns.length; i++) {
            moreContacts(moreBtns[i], moreSections[i]);
        }
        function moreContacts(btn, section) {
            btn.addEventListener("click", function(event) {
                if (section.innerHTML != "") {
                    section.innerHTML = "";
                    btn.innerHTML = "&#43;";
                } else {
                    section.innerHTML = ' <a href="http://blog.lukeslattery.me">tumblr</a> / <a href="http://www.instagram.com/lukeslattry">instagram</a> / <a href="http://www.github.com/lukeslattry">github</a> / <a href="http://www.linkedin.com/in/lukeslattry">linkedin</a> / <a href="http://www.snapchat.com/add/lukeslattry">snapchat</a> / ';
                    btn.innerHTML = "&#8722;";
                }
            }, false);
        }

        var imgs = document.getElementsByTagName("img");
        for (var i = 0; i < imgs.length; i++) {
            imageLoaded(imgs[i]);
        }
        function imageLoaded(img) {
            img.addEventListener("load", function() {
                img.className = "visible";
            }, false);
        }
    });
})();
