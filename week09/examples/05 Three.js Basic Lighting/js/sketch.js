// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

 // Create a light, set its position, and add it to the scene.
var light = new THREE.PointLight(0xffffff);
light.position.set(-100,200,100);
scene.add(light);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var material = new THREE.MeshPhongMaterial( { color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } );
// var material = new THREE.MeshNormalMaterial( );

var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x333F47, 1);

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

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
render();


