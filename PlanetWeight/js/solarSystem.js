const s = ( sketch ) => {
    let cam;

    let sun;
    let mercury;
    let venus;
    let earth;
    let mars;
    let jupiter;
    let saturn;
    let uranus;
    let neptune;
    let pluto;
    let bg;

    let tx;


    sketch.setup = () => {

        sketch.createCanvas(window.innerWidth, window.innerHeight,sketch.WEBGL);
        cam = sketch.createEasyCam();
        
        bg = sketch.loadImage('../assets/bg.jpg');
        let sunTexture = sketch.loadImage('../assets/sun.jpg');
        let mercuryTexture = sketch.loadImage('../assets/mercury.jpg');
        let venusTexture = sketch.loadImage('../assets/venus.jpg');
        let earthTexture = sketch.loadImage('../assets/earth.jpg');
        let marsTexture = sketch.loadImage('../assets/mars.jpg');
        let jupiterTexture = sketch.loadImage('../assets/jupiter.jpg');
        let saturnTexture = sketch.loadImage('../assets/saturn.jpg');
        let saturnRingTexture = sketch.loadImage('../assets/saturn_ring.png');
        let uranusTexture = sketch.loadImage('../assets/uranus.jpg');
        let neptuneTexture = sketch.loadImage('../assets/neptune.jpg');
        let plutoTexture = sketch.loadImage('../assets/pluto.jpg');
        tx = sunTexture;
        
        sun = new Body(sketch,200,0,0,0,1,{body: sunTexture});
        mercury = new Body(sketch,30,300,0,0.04,2,{body: mercuryTexture},true);
        venus = new Body(sketch,60,420,0,0.015,2,{body: venusTexture},true);
        earth = new Body(sketch,70,570,0,0.01,1.5,{body: earthTexture},true);
        mars = new Body(sketch,50,720,0,0.008,1.2,{body: marsTexture},true);

        jupiter = new Body(sketch,170,1000,0,0.002,5,{body: jupiterTexture},true);
        saturn = new Body(sketch,140,1400,0,0.0009,0.5,{body: saturnTexture, ring: saturnRingTexture},true);
        uranus = new Body(sketch,130,1800,0,0.0004,1,{body: uranusTexture},true);
        neptune = new Body(sketch,130,2200,0,0.0001,1,{body: neptuneTexture},true);
        pluto = new Body(sketch,60,2500,0,0.00009,2,{body: plutoTexture},true);

    };

    

    sketch.draw = () => {
        cam.beginHUD();
        sketch.image(bg,0,0);
        cam.endHUD();

        sun.display();

        sketch.pointLight(255,255,255,0,0,0);
        sketch.ambientLight(50);


        mercury.display();
        venus.display();
        earth.display();
        mars.display();
        jupiter.display();
        
        saturn.display();
        uranus.display();
        neptune.display();
        pluto.display();

        // let x = (sketch.mouseX-sketch.width/2) + cam.getState().center[0];
        // let y = (sketch.mouseY-sketch.height/2) + cam.getState().center[1];
        // console.log(cam.getState().center,x,y);
    };

    sketch.keyTyped = () => {
        // console.log(sketch.sphere);
        
        // if(sketch.key == 'd')console.log(cam.getState());
    };
};

let myp5 = new p5(s);

