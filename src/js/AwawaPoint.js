function AwawaPoint (opts) {
    this.angle = opts.angle || 0 * Math.PI * 2;

    this.x = opts.x || 0;
    this.y = opts.y || 0;
    this.size = opts.size || 0;
    this.anchorLength = opts.anchorLength || 0;
    this.waveRate = !isNaN(opts.waveRate) ? opts.waveRate : 0.1;

    this.minPeriod = opts.minPeriod || 1000;
    this.maxPeriod = opts.maxPeriod || 3000;
    this.initPeriod();
}

AwawaPoint.prototype.initPeriod = function () {
    var minPeriod = this.minPeriod;
    var maxPeriod = this.maxPeriod;
    this.period = minPeriod + Math.random() * (maxPeriod - minPeriod);
};

AwawaPoint.prototype.waver = function (time) {
    time = time || +(new Date());
    return Math.sin(Math.PI * 2 * time / this.period) * (this.size * 0.5 * this.waveRate);
};

AwawaPoint.prototype.pos = function (time) {
    var angle = this.angle;
    var x = this.x;
    var y = this.y;
    var size = this.size;

    var waver = this.waver(time);
    
    return [
        x + Math.cos(angle) * (size + waver),
        y + Math.sin(angle) * (size + waver)
    ];
};

AwawaPoint.prototype.inHandlePos = function (time) {
    var angle = this.angle;
    var x = this.x;
    var y = this.y;   
    var size = this.size;
    var anchorLength = this.anchorLength;

    var pos = this.pos(time);
    
    return [
        pos[0] + Math.cos(angle - Math.PI * 0.5) * anchorLength,
        pos[1] + Math.sin(angle - Math.PI * 0.5) * anchorLength
    ];
};

AwawaPoint.prototype.outHandlePos = function (time) {
    var angle = this.angle;
    var x = this.x;
    var y = this.y;   
    var size = this.size;
    var anchorLength = this.anchorLength;

    var pos = this.pos(time);
    
    return [
        pos[0] + Math.cos(angle + Math.PI * 0.5) * anchorLength,
        pos[1] + Math.sin(angle + Math.PI * 0.5) * anchorLength
    ];
};
