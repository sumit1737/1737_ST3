const s = ( sketch ) => {
    let cam;
    let mode;
    
    let infoBox = document.getElementById('info-panel');
    let wOb = document.getElementById('i-wob');
    let wOe = document.getElementById('i-woe');
    let bwf = document.getElementById('i-wf');



    let bodies = {
      sun: {obj: '', cameraState: {
          "distance": 482.15104153288917,
          "center": [
            209.00002268422801,
            -0.6654486800002615,
            0
          ],
          "rotation": [
            1,
            0,
            0,
            0
          ]
        }},
      mercury: {obj: '', cameraState: {
        "distance": 142.31194267127614,
        "center": [
          -234.25765190330551,
          -1.5368129583521881,
          0
        ],
        "rotation": [
          1,
          0,
          0,
          0
        ]
      }},
      venus: {obj: '', cameraState: {
        "distance": 149.0175340334081,
        "center": [
          -357.80518361547195,
          -0.2821872494829543,
          0
        ],
        "rotation": [
          1,
          0,
          0,
          0
        ]
      }},
      earth: {obj: '', cameraState: {
        "distance": 116.56293112285384,
        "center": [
          -483.65588877097304,
          -0.8815040500948973,
          -5.750465997873346
        ],
        "rotation": [
          0.9147369293727255,
          -0.06473250667964212,
          -0.3984697645229501,
          -0.016967597995910032
        ]
      }},
      mars: {obj: '', cameraState: {
        "distance": 106.09509480233476,
        "center": [
          -657.8990452499592,
          1.24806482159312,
          0.49239239163799925
        ],
        "rotation": [
          0.9758863280631357,
          -0.04032558047040493,
          -0.21334585634079992,
          -0.022433631925841392
        ]
      }},
      jupiter: {obj: '', cameraState: {
        "distance": 252.87987008614343,
        "center": [
          -820.8866118858965,
          -13.940316579688139,
          -56.538829211673146
        ],
        "rotation": [
          0.8911284278371123,
          0.06929784758678455,
          -0.44758824294103605,
          0.027435345839822274
        ]
      }},
      saturn: {obj: '', cameraState: {
        "distance": 224.17569266716367,
        "center": [
          -1193.9090281614692,
          -15.47977284967155,
          -71.30097796984914
        ],
        "rotation": [
          0.8175671126996131,
          -0.1186002634352105,
          -0.5634419725059082,
          -0.007151039348268746
        ]
      }},
      uranus: {obj: '', cameraState: {
        "distance": 217.30147896548698,
        "center": [
          -1739.013133619811,
          -2.512152704191873,
          -61.472002669633795
        ],
        "rotation": [
          0.8385479888517513,
          -0.2224745021447451,
          -0.49633041209523265,
          -0.03159886576296787
        ]
      }},
      neptune: {obj: '', cameraState: {
        "distance": 222.19165006237452,
        "center": [
          -2262.742354509255,
          -35.26810409835841,
          -53.25967877493671
        ],
        "rotation": [
          0.881412737540071,
          -0.015020746508823485,
          -0.4602195670346154,
          0.10528016619909582
        ]
      }},
      pluto: {obj: '', cameraState: {
        "distance": 156.76097280693872,
        "center": [
          -2631.2283057165273,
          -7.951629439543717,
          -70.18906253875814
        ],
        "rotation": [
          0.7910543815366097,
          -0.007954516197917039,
          -0.6077597840337678,
          0.06926569161581662
        ]
      }},
    };


    sketch.setup = () => {
      sketch.createCanvas(window.innerWidth, window.innerHeight,sketch.WEBGL);
      cam = sketch.createEasyCam();
      mode = 'normal';
      bg = sketch.loadImage('./assets/bg.jpg');
      let sunTexture = sketch.loadImage('./assets/sun.jpg');
      let mercuryTexture = sketch.loadImage('./assets/mercury.jpg');
      let venusTexture = sketch.loadImage('./assets/venus.jpg');
      let earthTexture = sketch.loadImage('./assets/earth.jpg');
      let marsTexture = sketch.loadImage('./assets/mars.jpg');
      let jupiterTexture = sketch.loadImage('./assets/jupiter.jpg');
      let saturnTexture = sketch.loadImage('./assets/saturn.jpg');
      let saturnRingTexture = sketch.loadImage('./assets/saturn_ring.png');
      let uranusTexture = sketch.loadImage('./assets/uranus.jpg');
      let uranusRingTexture = sketch.loadImage('./assets/uranusRing.png');
      let neptuneTexture = sketch.loadImage('./assets/neptune.jpg');
      let plutoTexture = sketch.loadImage('./assets/pluto.jpg');
      
      bodies.sun.obj = new Body(sketch,200,0,0,0,1,{body: sunTexture});
      bodies.mercury.obj = new Body(sketch,50,300,0,0.04,2,{body: mercuryTexture},true);
      bodies.venus.obj = new Body(sketch,60,420,0,0.015,2,{body: venusTexture},true);
      bodies.earth.obj = new Body(sketch,70,570,0,0.01,1.5,{body: earthTexture},true);
      bodies.mars.obj = new Body(sketch,50,720,0,0.008,1.2,{body: marsTexture},true);

      bodies.jupiter.obj = new Body(sketch,170,1000,0,0.002,5,{body: jupiterTexture},true);
      bodies.saturn.obj = new Body(sketch,140,1400,0,0.0009,0.5,{body: saturnTexture, ring: saturnRingTexture, ringRadius: 200},true);
      bodies.uranus.obj = new Body(sketch,130,1900,0,0.0004,1,{body: uranusTexture, ring: uranusRingTexture, ringRadius: 100},true);
      bodies.neptune.obj = new Body(sketch,130,2400,0,0.0001,1,{body: neptuneTexture},true);
      bodies.pluto.obj = new Body(sketch,60,2650,0,0.00009,2,{body: plutoTexture},true);

    };

    

    sketch.draw = () => {
      cam.beginHUD();
      sketch.image(bg,0,0);
      cam.endHUD();

      for(let i in bodies){
          bodies[i].obj.update();
          if(i == 'sun'){

            sketch.pointLight(255,255,255,0,0,0);
            sketch.ambientLight(70);  
          }
      }
    };

    sketch.normalMode = () => {
      mode = 'normal';
        for(let i in bodies){
          bodies[i].obj.visibility(true);
          bodies[i].obj.revolution(true);
        }
        infoBox.style.visibility = 'collapse';
        infoBox.style.opacity = '0';
        cam.setState(normalState,1000);
    };

    sketch.keyTyped = () => {
      if(sketch.key == 'e'){
        sketch.normalMode();
      }
    };

    sketch.fillInfoBox = (body, infoObj) => {
      wOb.innerHTML = "Weight on "+body+ ": "+infoObj.res + " kg";
      wOe.innerHTML = "Weight on Earth"+ ": "+document.getElementById('woe').value + " kg";
      bwf.innerHTML = "Weight Factor for "+ body + ": " + infoObj.wf;
    };

    sketch.zoomToBody = (body, infoObj) => {
      if(!isNaN(parseInt(document.getElementById('woe').value))){
        sketch.fillInfoBox(body, infoObj);
        if(mode == 'normal'){
          mode = 'detailed';
          infoBox.style.visibility = 'visible';
          infoBox.style.opacity = '1';
          normalState = cam.getState();
        }
        for(let i in bodies){
          bodies[i].obj.revolution(false);  
          if(i == body){
              bodies[i].obj.visibility(true);
            }
            else{
              bodies[i].obj.visibility(false);
            }
        }
        cam.setState(bodies[body].cameraState,1000);
      }
      else{
        alert('Please Enter Your Weight on Earth at the Bottom of the Page!');
      }
        
    };
};

let myp5 = new p5(s);

