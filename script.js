//your JS code here. If required.
const lineElement = document.getElementById('line');

function rotateLine() {
    let rotation = 0;
    const rotationInterval = 2; 
    
    function animateRotation() {
        rotation += rotationInterval;
        lineElement.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(animateRotation);
    }

    animateRotation();
}

window.onload = rotateLine();