// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//

var camera,
    scene,
    renderer,
    controls;

var width = window.innerWidth;
var height = window.innerHeight;

var winHalfX = width / 2;
var winHalfY = height / 2;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera( 75, width / height, 0.5, 1000 );
camera.position.z = 5;

var light = new THREE.PointLight();
light.position.set( 10, 10, 10 );
scene.add( light );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

scene.add(cube);

camera.lookAt(cube.position);


renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
renderer.setClearColor(0x333F47, 1);
document.body.appendChild( renderer.domElement );

controls = new THREE.OrbitControls(camera, renderer.domElement);

window.addEventListener( 'resize', function(){
    width = window.innerWidth;
    height = window.innerHeight;

    winHalfX = width / 2;
    winHalfY = height / 2;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize( width, height );   
}, false );

function render(){

    requestAnimationFrame( render );

    // cube.rotation.y += .1;

    renderer.render( scene, camera );
    controls.update();
}

render();


function map (n, start1, stop1, start2, stop2) {
    return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
};
















