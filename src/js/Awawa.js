var Awawa = function (opts) {
    var el = opts.el || document.createElement('canvas');
    var ctx =  el.getContext('2d');
    
    el.width = 200;
    el.height = 200;
    
    var w = 100;
    var h = 100;
    

    this.el = el;
    this.ctx = ctx;

    this.x = w;
    this.y = h;
    this.size = w * 0.5;
    this.smooth = 20;

    this.pointCount = 5;

    this.initPoints();
};

Awawa.prototype.initPoints = function () {
    var points = [];
    var pointCount = this.pointCount;

    for (var i = 0; i < pointCount; i++) {
        points.push(new AwawaPoint(i / pointCount));
    }
    this.points = points;
};

Awawa.prototype.draw = function () {
    var el = this.el;
    var ctx = this.ctx;

    var x = this.x;
    var y = this.y;
    var size = this.size;
    var smooth = this.smooth;

    var points = this.points;

    el.width = 200;
    
    var prev = points[points.length - 1];
    var prevPos = prev.pos(x, y, size);
    
    ctx.beginPath();
    ctx.moveTo(prevPos[0], prevPos[1]);
    
    ctx.lineWidth  = 10;
    points.forEach(function (point) {
        var outHandlePos = prev.outHandlePos(x, y, size, smooth);
        var pos = point.pos(x, y, size);
        var inHandlePos = point.inHandlePos(x, y, size, smooth);

        ctx.bezierCurveTo(
            outHandlePos[0],
            outHandlePos[1],
            inHandlePos[0],
            inHandlePos[1],
            pos[0],
            pos[1]
        );
        
        prev = point;
    });

    ctx.stroke();
};
