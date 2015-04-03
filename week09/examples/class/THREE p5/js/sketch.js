// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//

var camera,
    scene,
    renderer,
    controls,
    winHalfX,
    winHalfY;

function setup(){
    noCanvas();

    width = windowWidth;
    height = windowHeight;

    winHalfX = width / 2;
    winHalfY = height / 2;

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

}

function draw(){
    renderer.render( scene, camera );
    controls.update();
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


















