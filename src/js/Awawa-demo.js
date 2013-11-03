(function () {
    function init () {
        var awawa = new Awawa({
            el: document.getElementById('canvas-awawa')
        });

        setInterval(function () {
            awawa.draw();
        }, 25);
    }

    window.addEventListener('load', init);
})();


