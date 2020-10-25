'use strict';

(() => {

    class CircleDrawer {
 
        constructor(canvas) {
            this.ctx = canvas.getContext('2d');
            this.width = canvas.width;
            this.height = canvas.height;
            this.r = 50;
            this.bgcolor = "black"
            this.color = "white"
        }

        moveH(t) {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.fillStyle = this.bgcolor
            this.ctx.fillRect(0, 0, this.width, this.height);
        
            this.ctx.beginPath();
            this.ctx.arc((this.width / 2) + Math.sin(t/100) * (this.width / 2 - this.r), (this.height / 2), this.r, 0, 2 * Math.PI);
            this.ctx.fillStyle = this.color
            this.ctx.fill();    
        }

        moveV(t) {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.fillStyle = this.bgcolor
            this.ctx.fillRect(0, 0, this.width, this.height);
        
            this.ctx.beginPath();
            this.ctx.arc((this.width / 2), (this.height / 2) + Math.sin(t/100) * (this.height / 2 - this.r), this.r, 0, 2 * Math.PI);
            this.ctx.fillStyle = this.color
            this.ctx.fill();    
        }

    }

    class Circle {

        constructor(drawer) {
            this.drawer = drawer;
            this.t = 0;
        }

        draw() {
            this.drawer.moveV(this.t);
        }

        update() {
            this.t++;
        }

        run() {
            this.update();
            this.draw();

            setTimeout(() => {
                this.run();
            }, 10);
        }
    }

    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
  
    const circle = new Circle(new CircleDrawer(canvas));
    circle.run();
})();