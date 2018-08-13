(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        var body = document.getElementsByTagName('html')[0];
        document.addEventListener('keypress', function(e) {
            console.log(e.key);
            if (e.key == 'p') {
                body.addEventListener('click', function() {
                    switch (body.className) {
                        case '':
                            body.className = 'pizza';
                            break;
                        case 'pizza':
                            body.className = 'pizza1';
                            break;
                        case 'pizza1':
                            body.className = 'pizza2';
                            break;
                        case 'pizza2':
                            body.className = 'pizza3';
                            break;
                        case 'pizza3':
                            body.className = 'pizza4';
                            break;
                        case 'pizza4':
                            body.className = 'pizza5';
                            break;
                        case 'pizza5':
                            body.className = 'pizza6';
                            break;
                        default:
                            body.className = '';
                    }
                });
            }
        })
    });
})();
