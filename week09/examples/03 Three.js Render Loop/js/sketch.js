// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

// Create an new THREE Scene instance to add our primitives and geometry to
var scene = new THREE.Scene();

// Create a new Camera instance to easily shift and move the perspective of our scene ( FOV, aspect ratio, near clip, far clip)
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


// Create an instance of the WebGLRenderer to render the scene with the camera
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', onWindowResize, false );


// Create a render loop with requestAnimationFrame that runs at 60fps
function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();



function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
