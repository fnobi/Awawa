function AwawaPoint (angle) {
    this.angle = angle;    
    this.modWidth = 2;
    this.period = 1000 + Math.random() * 1000;
}

AwawaPoint.prototype.mod = function () {
    return Math.sin(Math.PI * 2 * (+ new Date()) / this.period) * this.modWidth;
};

AwawaPoint.prototype.pos = function (x, y, size) {
    var angle = this.angle;
    var mod = this.mod();
    
    return [
        x + Math.cos(Math.PI * 2 * angle) * (size + mod),
        y + Math.sin(Math.PI * 2 * angle) * (size + mod)
    ];
};

AwawaPoint.prototype.inHandlePos = function (x, y, size, smooth) {
    var angle = this.angle;
    var pos = this.pos(x, y, size);
    
    return [
        pos[0] + Math.cos(Math.PI * 2 * (angle - 0.25)) * smooth,
        pos[1] + Math.sin(Math.PI * 2 * (angle - 0.25)) * smooth
    ];
};

AwawaPoint.prototype.outHandlePos = function (x, y, size, smooth) {
    var angle = this.angle;
    var pos = this.pos(x, y, size);
    
    return [
        pos[0] + Math.cos(Math.PI * 2 * (angle + 0.25)) * smooth,
        pos[1] + Math.sin(Math.PI * 2 * (angle + 0.25)) * smooth
    ];
};
