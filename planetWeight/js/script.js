
weightFactor = {
    sun: 27.01,
    mercury: 0.38,
    venus: 0.91,
    earth: 1,
    moon: 0.166,
    mars: 0.38,
    jupiter: 2.34,
    saturn: 1.06,
    uranus: 0.92,
    neptune: 1.19,
    pluto: 0.06
}

document.addEventListener('contextmenu', event => event.preventDefault());

let weightBox = document.getElementById('woe'); 

function calcWeight(planet, woE){
    // console.log('helloooooo ', weightFactor[planet]*woE);
    return (weightFactor[planet]*woE).toFixed(3);
}

document.getElementById('sun').addEventListener('click',()=>{
    myp5.zoomToBody('sun',{wf: weightFactor.sun, res: calcWeight('sun',parseFloat(weightBox.value))});

});

document.getElementById('mercury').addEventListener('click',()=>{
    myp5.zoomToBody('mercury',{wf: weightFactor.mercury, res: calcWeight('mercury',parseFloat(weightBox.value))});
});

document.getElementById('venus').addEventListener('click',()=>{
    myp5.zoomToBody('venus',{wf: weightFactor.venus, res: calcWeight('venus',parseFloat(weightBox.value))});
});

document.getElementById('earth').addEventListener('click',()=>{
    myp5.zoomToBody('earth',{wf: weightFactor.earth, res: calcWeight('earth',parseFloat(weightBox.value))});
});

document.getElementById('mars').addEventListener('click',()=>{
    myp5.zoomToBody('mars',{wf: weightFactor.mars, res: calcWeight('mars',parseFloat(weightBox.value))});
});

document.getElementById('jupiter').addEventListener('click',()=>{
    myp5.zoomToBody('jupiter',{wf: weightFactor.jupiter, res: calcWeight('jupiter',parseFloat(weightBox.value))});
});

document.getElementById('saturn').addEventListener('click',()=>{
    myp5.zoomToBody('saturn',{wf: weightFactor.saturn, res: calcWeight('saturn',parseFloat(weightBox.value))});
});

document.getElementById('uranus').addEventListener('click',()=>{
    myp5.zoomToBody('uranus',{wf: weightFactor.uranus, res: calcWeight('uranus',parseFloat(weightBox.value))});
});

document.getElementById('neptune').addEventListener('click',()=>{
    myp5.zoomToBody('neptune',{wf: weightFactor.neptune, res: calcWeight('neptune',parseFloat(weightBox.value))});
});

document.getElementById('pluto').addEventListener('click',()=>{
    myp5.zoomToBody('pluto',{wf: weightFactor.pluto, res: calcWeight('pluto',parseFloat(weightBox.value))});
});

document.getElementById('close-bttn').addEventListener('click', ()=>{
    myp5.normalMode();
});
