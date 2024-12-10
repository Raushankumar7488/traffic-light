
const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');

function turnOffLights() {
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');
}
function changeLights() {
    turnOffLights(); 
    
    redLight.classList.add('active');
    setTimeout(() => {
        turnOffLights();
        yellowLight.classList.add('active'); 
        setTimeout(() => {
            turnOffLights();
            greenLight.classList.add('active');
            setTimeout(() => {
                changeLights();
            }, 3000); 
        }, 1000); 
    }, 3000);
}

changeLights();
