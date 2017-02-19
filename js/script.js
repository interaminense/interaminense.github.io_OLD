function init() {
    var el1 = document.querySelector('.el-1');
    var el2 = document.querySelector('.el-2');
    var options = {};

    function reloadOptions() {

        var _size = 150;
        if (window.innerWidth <= 620) {
            _size = 80;
        }

        options = {
            name1: {
                size: _size,
                weight: 10,
                rounded: false,
                color: '#fff',
                duration: 1,
                delay: [0, 0.1],
                fade: 0.5,
                easing: d3_ease.easeCubicInOut.ease,
                individualDelays: false
            },
            name2: {
                size: 50,
                weight: 4,
                rounded: false,
                color: 'rgba(255, 255, 255, .8)',
                duration: 1,
                delay: [0, 0.1],
                fade: 0.5,
                easing: d3_ease.easeCubicInOut.ease,
                individualDelays: false
            }
        }
    }

    reloadOptions();

    var anim1 = new Letters(el1, options.name1);
    var anim2 = new Letters(el2, options.name2);

    anim1.show();
    setTimeout(function() {
        anim2.show();
    }, 100);
}

init();