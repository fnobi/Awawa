(function () {
    function init () {
        var canvas = document.getElementById('canvas-awawa');
        var ctx = canvas.getContext('2d');

        var canvasWidth = 300;
        var canvasHeight = 300;

        var awawa = new Awawa({
            ctx: ctx,
            x: 150,
            y: 150,
            size: 100,
            pointCount: 5
        });

        setInterval(function () {
            // clear
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;

            // draw
            ctx.lineWidth = 20;
            awawa.path();
            ctx.stroke();
        }, 25);
    }

    window.addEventListener('load', init);
})();


