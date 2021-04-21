"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + 'Y: ' + this.y);
    };
    return Point;
}());
var point = new Point();
point.draw();
