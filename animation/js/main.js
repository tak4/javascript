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
            this.stop_counter = 100;
        }

        moveH(t) {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.fillStyle = this.bgcolor
            this.ctx.fillRect(0, 0, this.width, this.height);
        
            this.ctx.beginPath();
            this.ctx.arc(
                (this.width / 2) + Math.sin((t / 360) * 2 * Math.PI) * (this.width / 2 - this.r), 
                (this.height / 2), 
                this.r, 0, 2 * Math.PI
            );
            this.ctx.fillStyle = this.color
            this.ctx.fill();    
        }

        moveV(t) {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.fillStyle = this.bgcolor
            this.ctx.fillRect(0, 0, this.width, this.height);
        
            this.ctx.beginPath();
            this.ctx.arc(
                (this.width / 2),
                (this.height / 2) + Math.sin((t / 360) * 2 * Math.PI) * (this.height / 2 - this.r), 
                this.r, 0, 2 * Math.PI
            );
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
            this.drawer.moveH(this.t);
        }

        update() {
            this.t++;
        }

        run() {
            let f = 10;
            this.update();
            this.draw();

            if( ( Math.sin((this.t / 360) * 2 * Math.PI) === 1 ) || ( Math.sin((this.t / 360) * 2 * Math.PI) === -1 ) ) {
                f = 5000;
            }
            setTimeout(() => {
                this.run();
            }, f);
        }
    }

    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
  
    const circle = new Circle(new CircleDrawer(canvas));
    circle.run();
})();