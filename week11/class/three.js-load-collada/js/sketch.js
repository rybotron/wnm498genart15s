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
camera.position.z = 5;


var light = new THREE.PointLight(0xffffff);
light.position.set(-100,200,100);
scene.add(light);

var manager = new THREE.LoadingManager();
manager.onProgress = function ( item, loaded, total ){
	console.log( item, loaded, total );
}

var texture = new THREE.Texture();
var loader = new THREE.ImageLoader( manager );
loader.load( 'textures/shatter.jpg', function( image ){

	texture.image = image;
	texture.needsUpdate = true;

});

var dae;

var loader = new THREE.ColladaLoader( manager );
loader.load( 'models/beer.dae', function( collada ){

	dae = collada.scene;
	// console.log(collada);

	dae.traverse( function ( child ){
		if ( child instanceof THREE.Mesh ){
			child.material.map = texture;
		}
	});

	dae.scale.set( .005, .005, .005);
	scene.add(dae);

})


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x333F47, 1);

document.body.appendChild( renderer.domElement );

// add THREE Mouse Camera Orbit Controls to the scene
controls = new THREE.OrbitControls(camera, renderer.domElement);


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

	renderer.render( scene, camera );
	
	// Update the controls each time through the loop
	controls.update();
}
render();


