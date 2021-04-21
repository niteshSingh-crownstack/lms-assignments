export{}

class Point{
    x:number;
    y:number;

    draw() {
        console.log('X: '+this.x+'Y: '+this.y);
    }

}
let point = new Point();
point.draw();