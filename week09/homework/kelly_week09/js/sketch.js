// Particles and icosahedron shape courtesy of:
// http://threejs.org/examples/#webgl_particles_random
// http://codepen.io/alvarobyrne/pen/HIGoa

var camera, scene, renderer, particles, geometry, materials = [], parameters, i, h, color, size, cameraX, cameraY, cameraZ;

function preload(){
   sound = loadSound("audio/Moments.mp3");
}

function setup(){
	noCanvas();
	sound.play();

	fft = new p5.FFT(0.10,512);
	fft.setInput(sound);
	// amp = new p5.Amplitude(.30);
	// amp.setInput(sound);

    width = windowWidth;
    height = windowHeight;

    winHalfX = width / 2;
    winHalfY = height / 2;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2( 0x070738, 0.0004 );

    camera = new THREE.PerspectiveCamera( 75, width / height, 1, 3000 );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 3000;

	var light = new THREE.PointLight(0xffffff);
	light.position.set(200,200,500);
	scene.add(light);

	var pinkMat = new THREE.MeshLambertMaterial({
	color      :  new THREE.Color("rgb(255,255,255)"),
	emissive   :  new THREE.Color("rgb(255,44,210)"),
	specular   :  new THREE.Color("rgb(41,255,239)"),
	shininess  :  10,
	shading    :  THREE.FlatShading,
	transparent: 1,
	opacity    : 1
});

	Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(75,0), pinkMat);

	scene.add(Ico);

	var geometry = new THREE.Geometry();

	for ( i = 0; i < 20000; i ++ ) {

	var vertex = new THREE.Vector3();
	vertex.x = Math.random() * 5000 - 500;
	vertex.y = Math.random() * 2000 - 1000;
	vertex.z = Math.random() * 1000 - 100;

	geometry.vertices.push( vertex );

}

	parameters = [
	[ [1, 1, 0.5], 5 ],
	[ [0.95, 1, 0.5], 4 ],
	[ [0.90, 1, 0.5], 3 ],
	[ [0.85, 1, 0.5], 2 ],
	[ [0.80, 1, 0.5], 1 ]
	];

	for ( i = 0; i < parameters.length; i ++ ) {

	color = parameters[i][0];
	size  = parameters[i][1];

	materials[i] = new THREE.PointCloudMaterial( { size: size } );

	particles = new THREE.PointCloud( geometry, materials[i] );

	particles.rotation.x = Math.random() * 5;
	particles.rotation.y = Math.random() * 5;
	particles.rotation.z = Math.random() * 5;

	scene.add( particles );

	}

	tween = new TWEEN.Tween( camera.position );
    tween.to( { x: 50, y: 50, z: 100}, 200); 
    tween.easing( TWEEN.Easing.Sinusoidal.InOut );

    tween.onComplete(function(){
        tween.to( { x: 0, y: 0, z: 7 }, 1000);
        tween.start();
    });


	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize( width, height );
	renderer.setClearColor(scene.fog.color);
	renderer.setPixelRatio( window.devicePixelRatio );

	document.body.appendChild( renderer.domElement );


	controls = new THREE.OrbitControls(camera, renderer.domElement);

}

function draw(){
    Ico.rotation.y+= 2/200;

	var time = Date.now() * 0.00005;

	camera.lookAt( scene.position );

	for ( i = 0; i < scene.children.length; i ++ ) {

	var object = scene.children[ i ];

	if ( object instanceof THREE.PointCloud ) {

		object.rotation.y = time * ( i < 100 ? i + 1 : - ( i + 1 ) );

	}

	}

	for ( i = 0; i < materials.length; i ++ ) {

	color = parameters[i][0];

	h = ( 360 * ( color[0] + time ) % 360 ) / 360;
	materials[i].color.setHSL( h, color[1], color[2] );

	}


	// level = amp.getLevel();
	spectrum = fft.analyze();

    if(spectrum[5] > 230) {
        tween.to( { x: random(-1,1), y: random(-1,1), z: random(-1,1) }, 1100);
        tween.start();
    }			

	renderer.render( scene, camera );
	TWEEN.update();
}


function windowResized(){
    width = windowWidth;
    height = windowHeight;

    winHalfX = width / 2;
    winHalfY = height / 2;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize( width, height );
}