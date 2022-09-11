class Body{
    constructor(_sketch, _size, _posRad, _angle, _speed, _rotSpeed, _texture, _displayOribit=false){
        this.sketch = _sketch;
        this.size = _size;
        this.posRad = _posRad;
        this.speed = _speed;
        this.pos = this.sketch.createVector(this.posRad,0,0);
        this.angle = _angle;
        this.RotSpeed = _rotSpeed;
        this.rotationAngle = 0;
        this.texture = _texture;
        this.displayOrbit = _displayOribit;
        this.mainBody;
    }
    update(){
        this.pos.x = this.posRad * this.sketch.cos((this.angle));
        this.pos.z = this.posRad * this.sketch.sin((this.angle));
        this.angle += this.speed;
        this.rotationAngle += this.RotSpeed;
        if(this.angle > 360) this.angle = 0;
    }
    display(){

        


        this.update();

        this.sketch.push();
        this.sketch.translate(this.pos.x, this.pos.y, this.pos.z);
        this.sketch.rotateY(this.sketch.radians(this.rotationAngle));
        this.sketch.noFill();
        this.sketch.noStroke();
        if(this.texture == -1)this.sketch.stroke(0,255,0);
        else this.sketch.texture(this.texture.body);
        
        this.mainBody = this.sketch.sphere(this.size);
        
        if(this.texture.ring != undefined){
            this.sketch.rotateX(this.sketch.HALF_PI);
            // console.log('hello');
            // this.sketch.fill(255,0,0,255);
            this.sketch.ambientLight(255);
            this.sketch.texture(this.texture.ring);
            // this.sketch.normalMaterial();
            this.sketch.plane(this.size*2 + 200,this.size*2 + 200);
        }

        this.sketch.pop();

        if(this.displayOrbit){
            this.sketch.push();
            this.sketch.ambientLight(255);
            this.sketch.rotateX(this.sketch.radians(90));
            this.sketch.fill(255);
            // this.sketch.noStroke();
            this.sketch.torus(this.posRad,2,50,50);
            this.sketch.pop();
        }
        
    }

}