
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

function calcWeight(planet, woE){
    return weightFactor[planet]*woE;
}


window.onload = () => {
    let w = '123';//prompt("Enter your weight as recorded on earth in Kg");
    let weightOnEarth = parseFloat(w);
    let out = document.getElementById('res');

    let h = document.createElement('h1');
    h.innerHTML='your weight on: ';
    out.appendChild(h);

    for(let i in weightFactor){
        let rest = document.createElement('div');
        rest.innerHTML = i + ' : ' + calcWeight(i,weightOnEarth).toFixed(2) + ' Kg';
        out.appendChild(rest);
    }
}


