// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var t = 0;

// Create an new THREE Scene instance to add our primitives and geometry to
var scene = new THREE.Scene();

// Create a new Camera instance to easily shift and move the perspective of our scene ( FOV, aspect ratio, near clip, far clip)
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Create a new instance of THREE Box Geometry and give it an x, y, z size
var geometry = new THREE.BoxGeometry( 1, 1, 1 );

// Create a new Basic Material to shade and add color to the cube
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var material = new THREE.MeshLambertMaterial({color: 0x55B663});

// Create a Mesh from the Box Geometry vertices and the Basic Material
var cube = new THREE.Mesh( geometry, material );
var cubeTwo = new THREE.Mesh( geometry, material );

// Add the Mesh to the scene
scene.add( cube );
scene.add( cubeTwo );
cubeTwo.position.z = -3;

// Move the Camera z position
camera.position.z = 5;


// Create an instance of the WebGLRenderer to render the scene with the camera
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


window.addEventListener( 'resize', function(){
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
}, false );


function render() {
	requestAnimationFrame( render );

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

	
  camera.lookAt(cube.position);

  var r = 2;
  camera.position.x = r * Math.sin(t);
  camera.position.z = r * Math.cos(t);
  t += .1;
	renderer.render( scene, camera );
}
render();


