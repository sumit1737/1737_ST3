class Body{
    constructor(_sketch, _size, _posRad, _angle, _speed, _rotSpeed, _texture, _displayOribit=false){
        this.sketch = _sketch;
        this.size = _size;
        this.posRad = _posRad;
        this.speed = _speed;
        this.pos = this.sketch.createVector(-this.posRad,0,0);
        this.angle = _angle;
        this.RotSpeed = _rotSpeed;
        this.rotationAngle = 0;
        this.texture = _texture;
        this.displayOrbit = _displayOribit;
        this.mainBody;
        this.initPos = this.pos;
        this.finalPos = this.pos;
        this.visible = true;
        this.moving = true;
    }
    rotate(){
        this.rotationAngle += this.RotSpeed;
    }
    revolve(){
        this.pos.x = this.posRad * this.sketch.cos((this.angle));
        this.pos.z = this.posRad * this.sketch.sin((this.angle));
        this.angle += this.speed;
        if(this.angle > 360) this.angle = 0;
    }

    visibility(_visible){
        this.visible = _visible;
    }

    revolution(_moving){
        this.moving = _moving;
        if(!this.moving)this.staticState()
        else this.pos = this.finalPos;
    }

    staticState(){
        this.finalPos = this.pos;
        this.pos = this.initPos;
    }

    update(){
        this.rotate();
        if(this.moving)this.revolve();
        if(this.visible)this.display();
    }
    display(){
        
        this.sketch.push();
        if(this.moving)this.sketch.translate(this.pos.x, this.pos.y, this.pos.z);
        else this.sketch.translate(-this.posRad, 0, 0);
        this.sketch.rotateY(this.sketch.radians(this.rotationAngle));
        this.sketch.noFill();
        this.sketch.noStroke();
        if(this.texture == -1)this.sketch.stroke(0,255,0);
        else this.sketch.texture(this.texture.body);
        // displaying planet
        this.mainBody = this.sketch.sphere(this.size);
        
        // displaying rings
        if(this.texture.ring != undefined){
            this.sketch.rotateX(this.sketch.HALF_PI);
            this.sketch.ambientLight(150);
            this.sketch.texture(this.texture.ring);
            this.sketch.plane(this.size*2 + this.texture.ringRadius,this.size*2 + this.texture.ringRadius);
        }
        this.sketch.pop();

        // displaying orbits
        if(this.displayOrbit && this.moving){
            this.sketch.push();
            this.sketch.ambientLight(255);
            this.sketch.rotateX(this.sketch.radians(90));
            this.sketch.fill(255);
            this.sketch.torus(this.posRad,1,100,100);
            this.sketch.pop();
        }
        
    }

}