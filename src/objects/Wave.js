export class Wave {
    constructor(size) {
        this.size = size;
        this.x = -size;
        this.z = (Math.random()-.5)*size;
        this.maxxSpeed = .3*(Math.random()*0.5+0.5);
        this.xspeed = this.maxxSpeed;
        this.maxzSpeed = .3*(Math.random()*2-1);
        this.zspeed = this.maxzSpeed;
        this.maxHeight = Math.random()*150+50;
        this.height = 1;
        this.width = Math.random()/this.maxHeight;
        this.growing = true;
        this.stoppedgrowing = -1;
        this.multiplier = .9999;
    }
    done() {
        return this.x > this.size + 1 || (this.height < 5 && !this.growing);
    }
    update() {
        this.x += this.xspeed;
        this.z += this.zspeed
        if (this.growing) {
            this.height += 0.5;
            if (this.height >= this.maxHeight) {
                this.growing = false;
            }
        }
        else {
            this.height *= this.multiplier;
        }
        this.xspeed = this.maxxSpeed * ((this.size+2)-this.x)/(this.size);
        this.zspeed = this.maxzSpeed * ((this.size+2)-this.z)/(this.size);
    }
}