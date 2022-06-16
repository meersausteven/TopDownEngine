
class CircleRenderer extends ComponentRenderer {
        type = "Circle Renderer";
        
        constructor(fillColor, borderWidth, borderColor, radius = 0, offset = new Vector2()) {
                // color fillColor: fill color
                // int borderWidth: width of border
                // color borderColor: color of border
                // int radius: radius of the circle
                // Vector2 offset: offset relative to this gameObject's position

                super(offset);

                this.attributes['fillColor'] = new AttributeColor('Fill Color', fillColor);
                this.attributes['borderWidth'] = new AttributeNumber('Border Width', borderWidth);
                this.attributes['borderColor'] = new AttributeColor('Border Color', borderColor);
                this.attributes['radius'] = new AttributeNumber('Radius', radius);
        }

        render(camera) {
                if ((camera === null) ||
                    (typeof camera === 'undefined') ||
                    !(camera instanceof Camera)) {
                        return false;
                }

                camera.canvasContext.save();
                camera.canvasContext.translate(this.gameObject.transform.attributes['position'].value.x + this.attributes['offset'].value.x - camera.gameObject.transform.attributes['position'].value.x, this.gameObject.transform.attributes['position'].value.y + this.attributes['offset'].value.y - camera.gameObject.transform.attributes['position'].value.y);
                camera.canvasContext.rotate(Math.degreesToRadians(this.gameObject.transform.attributes['rotation'].value));

                camera.canvasContext.beginPath();
                camera.canvasContext.arc(0, 0, this.attributes['radius'].value, 0, 2 * Math.PI);
                // border
                camera.canvasContext.lineWidth = this.attributes['borderWidth'].value;
                camera.canvasContext.strokeStyle = this.attributes['borderColor'].value;
                camera.canvasContext.stroke();
                // fill
                camera.canvasContext.fillStyle = this.attributes['fillColor'].value;
                camera.canvasContext.fill();

                camera.canvasContext.restore();
        }

}