const table = [
    "<img src='./images/image1.jpg'/>", "", "", 2, 11,
    "<img src='./images/image2.jpg'/>", "", "", 3, 10,
    "<img src='./images/image3.jpg'/>", "", "", 7, 2,
    "<img src='./images/image4.jpg'/>", "", ".", 6, 2,
    "<img src='./images/image5.jpg'/>", "", "", 12, 3,
    "<img src='./images/image6.jpg'/>", "", "", 14, 2,
    "<img src='./images/image7.jpg'/>", "", "", 15, 2,
    "<img src='./images/image8.jpg'/>", "", "", 14, 1,
    "<img src='./images/image9.jpg'/>", "", "", 18, 11,
    "<img src='./images/image10.jpg'/>", "", "", 13, 2,
    "<img src='./images/image11.jpg'/>", "", "", 5, 3,
    "<img src='./images/image12.jpg'/>", "", "", 4, 3,
    "<img src='./images/image13.jpg'/>", "", "", 13, 3,
    "<img src='./images/image14.jpg'/>", "", "", 14, 3,
    "<img src='./images/image15.jpg'/>", "", "", 15, 3,
    "<img src='./images/image16.jpg'/>", "", "", 16, 3,
    "<img src='./images/image17.jpg'/>", "", "35.453", 3, 11,
    "<img src='./images/image18.jpg'/>", "", "39.948", 7, 13,
    "<img src='./images/image19.jpg'/>", "", "39.948", 6, 3,
    "<img src='./images/image20.jpg'/>", "", "40.078", 7, 3,
    "<img src='./images/image21.jpg'/>", "", "44.955912", 3, 4,
    "<img src='./images/image22.jpg'/>", "", "47.867", 4, 4,
    "<img src='./images/image23.jpg'/>", "", "50.9415", 5, 4,
    "<img src='./images/image30.jpg'/>", "", "51.9961", 6, 4,
    "<img src='./images/image25.jpg'/>", "", "54.938045", 7, 4,
    "<img src='./images/image26.jpg'/>", "", "55.845", 5, 2,
    "<img src='./images/image27.jpg'/>", "", "58.933195", 9, 4,
    "<img src='./images/image28.jpg'/>", "", "58.6934", 10, 4,
    "<img src='./images/image29.jpg'/>", "", "63.546", 11, 4,
    "<img src='./images/image30.jpg'/>", "", "65.38", 12, 4,
    "<img src='./images/image31.jpg'/>", "", "69.723", 13, 4,
    "<img src='./images/image32.jpg'/>", "", "72.63", 14, 4,
    "<img src='./images/image33.jpg'/>", "", "74.9216", 15, 4,
    "<img src='./images/image34.jpg'/>", "", "78.96", 16, 4,
    "<img src='./images/image35.jpg'/>", "", "79.904", 17, 4,
    "<img src='./images/image36.jpg'/>", "", "83.798", 10, 15,
    "<img src='./images/image37.jpg'/>", "", "85.4678", 8, 4,
    "<img src='./images/image38.jpg'/>", "", "87.62", 9, 5,
    "<img src='./images/image39.jpg'/>", "", "88.90585", 3, 5,
    "<img src='./images/image40.jpg'/>", "", "91.224", 4, 5,
    "<img src='./images/image41.jpg'/>", "", "92.90628", 5, 5,
    "<img src='./images/image42.jpg'/>", "", "95.96", 6, 5,
    "<img src='./images/image43.jpg'/>", "", "(98)", 7, 5,
    "<img src='./images/image44.jpg'/>", "", "101.07", 8, 5,
    "<img src='./images/image45.jpg'/>", "", "102.9055", 8, 3,
    "<img src='./images/image46.jpg'/>", "", "106.42", 10, 5,
    "<img src='./images/image47.jpg'/>", "", "107.8682", 11, 5,
    "<img src='./images/image48.jpg'/>", "", "112.411", 12, 5,
    "<img src='./images/image49.jpg'/>", "", "114.818", 13, 5,
    "<img src='./images/image50.jpg'/>", "", "118.71", 14, 5,
    "<img src='./images/image51.jpg'/>", "", "121.76", 15, 5,
    "<img src='./images/image1.jpg'/>", "", "127.6", 16, 5,
    "<img src='./images/image3.jpg'/>", "", "126.90447", 17, 5,
    "<img src='./images/image5.jpg'/>", "", "131.293", 13, 13,
    "<img src='./images/image7.jpg'/>", "", "132.9054", 2, 9,
    "<img src='./images/image9.jpg'/>", "", "132.9054", 1, 10,
    "<img src='./images/image11.jpg'/>", "", "138.90547", 8, 9,
    "<img src='./images/image13.jpg'/>", "", "140.116", 7, 9,
    "<img src='./images/image15.jpg'/>", "", "140.90765", 6, 8,
    "<img src='./images/image17.jpg'/>", "", "144.242", 7, 8,
    "<img src='./images/image19.jpg'/>", "", "(145)", 8, 8,
    "<img src='./images/image21.jpg'/>", "", "150.36", 9, 8,
    "<img src='./images/image23.jpg'/>", "", "151.964", 10, 8,
    "<img src='./images/image25.jpg'/>", "", "157.25", 6, 1,
    "<img src='./images/image27.jpg'/>", "", "158.92535", 12, 8,
    "<img src='./images/image29.jpg'/>", "", "162.5", 13, 8,
    "<img src='./images/image31.jpg'/>", "", "164.93032", 14, 8,
    "<img src='./images/image33.jpg'/>", "", "167.259", 13, 9,
    "<img src='./images/image35.jpg'/>", "", "", 10, 12,
    "<img src='./images/image37.jpg'/>", "", "", 17, 9,
    "<img src='./images/image39.jpg'/>", "", "", 18, 9,
    "<img src='./images/image41.jpg'/>", "", "", 4, 6,
    "<img src='./images/image43.jpg'/>", "", "", 5, 6,
    "<img src='./images/image45.jpg'/>", "", "", 6, 6,
    "<img src='./images/image47.jpg'/>", "", "", 7, 6,
    "<img src='./images/image49.jpg'/>", "", "", 8, 6,
    "<img src='./images/image51.jpg'/>", "", "", 9, 6,
    "<img src='./images/image2.jpg'/>", "", "", 10, 6,
    "<img src='./images/image4.jpg'/>", "", "", 11, 6,
    "<img src='./images/image6.jpg'/>", "", "", 12, 6,
    "<img src='./images/image8.jpg'/>", "", "", 13, 6,
    "<img src='./images/image10.jpg'/>", "", "", 14, 6,
    "<img src='./images/image12.jpg'/>", "", "", 15, 6,
    "<img src='./images/image14.jpg'/>", "", "", 16, 6,
    "<img src='./images/image16.jpg'/>", "", "", 19, 11,
    "<img src='./images/image18.jpg'/>", "", "", 1, 11,
    "<img src='./images/image20.jpg'/>", "", "", 1, 9,
    "<img src='./images/image22.jpg'/>", "", "", 2, 10,
    "<img src='./images/image30.jpg'/>", "", "", 9, 10,
    "<img src='./images/image26.jpg'/>", "", "", 10, 10,
    "<img src='./images/image28.jpg'/>", "", "", 11, 10,
    "<img src='./images/image30.jpg'/>", "", "", 11, 9,
    "<img src='./images/image32.jpg'/>", "", "", 8, 10,
    "<img src='./images/image34.jpg'/>", "", "", 9, 9,
    "<img src='./images/image36.jpg'/>", "", "", 10, 9,
    "<img src='./images/image38.jpg'/>", "", "", 11, 8,
    "<img src='./images/image40.jpg'/>", "", "", 12, 9,
    "<img src='./images/image42.jpg'/>", "", "", 12, 10,
    "<img src='./images/image44.jpg'/>", "", "", 11, 11,
    "<img src='./images/image46.jpg'/>", "", "", 10, 11,
    "<img src='./images/image48.jpg'/>", "", "", 9, 11,
    "<img src='./images/image50.jpg'/>", "", "", 17, 10,
    "<img src='./images/image30.jpg'/>", "", "", 18, 10,
    "<img src='./images/image9.jpg'/>", "", "", 3, 9,
    "<img src='./images/image20.jpg'/>", "", "", 5, 7,
    "<img src='./images/image12.jpg'/>", "", "", 6, 7,
    "<img src='./images/image5.jpg'/>", "", "", 7, 7,
    "<img src='./images/image20.jpg'/>", "", "", 8, 7,
    "<img src='./images/image23.jpg'/>", "", "", 9, 7,
    "<img src='./images/image40.jpg'/>", "", "", 10, 7,
    "<img src='./images/image21.jpg'/>", "", "", 11, 7,
    "<img src='./images/image28.jpg'/>", "", "", 12, 7,
    "<img src='./images/image12.jpg'/>", "", "", 13, 7,
    "<img src='./images/image30.jpg'/>", "", "", 14, 7,
    "<img src='./images/image21.jpg'/>", "", "", 15, 7,
    "<img src='./images/image10.jpg'/>", "", "", 19, 9,
    "<img src='./images/image37.jpg'/>", "", "", 19, 10,
    "<img src='./images/image1.jpg'/>", "", "", 17, 11
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
    element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';


    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    // symbol.textContent = table[i];
    symbol.innerHTML = table[i];
    element.appendChild(symbol);

    

    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 1330;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    // composer.render();
}
document.addEventListener('keydown', function(event){
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});
