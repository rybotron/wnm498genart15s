  // David Eyolfson
  // 3D Music Visualization
  // Song: "The Intro" by The xx
  // http://thexx.info/
var sound;
var camera;
var scene;
var renderer;
var controls;
var winHalfX;
var winHalfY;
var amp;
var freq;
var ftt;
var r;
var bass = 0;
var movers = [];
var level = 1;
var psize = 2;
var world;
var sphere;
var radius;
var cube;
var particles;
var space;


function preload(){
    sound = loadSound("audio/intro.mp3");
}    

function setup(){
    // canvas set up
    noCanvas();

    width = windowWidth;
    height = windowHeight;

    winX = width / 2;
    winY = height / 2;

    //audio set up
    sound.play();
    amp = new p5.Amplitude( .5 );
    amp.setInput(sound);

    
    fft = new p5.FFT( .5, 16)

    r = random();

    //Three.js set up

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, width / height, 0.5, 1000 );
    camera.position.z = 20;

    var light = new THREE.PointLight();
    light.position.set( 10, 10, 200 );
    scene.add( light );

    
    
    var texture =  new THREE.MeshPhongMaterial({ 
        color: 0xdddddd, 
        specular: 0x009900, 
        shininess: 30, 
        shading: THREE.FlatShading } );
    
    var ptexture = new THREE.PointCloudMaterial( {
      
        color: 0xdddddd, 
        size:  2,

    } );


    radius = 100; 
    
    var segments = 72, 
        rings = 36;

    
    var geometry = new THREE.BoxGeometry( 3, 3, 3 );
    cube = new THREE.Mesh( geometry, texture );




    world = new THREE.SphereGeometry( radius, segments, rings );
    


    

    particles = new THREE.PointCloud( world, ptexture );
    
    scene.add(cube);
    scene.add(particles);
    

    camera.lookAt(cube.position);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    renderer.setClearColor(0x333F47, 1);
    document.body.appendChild( renderer.domElement );

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    //Tweens

}

function draw(){

    //audio analysis
    freq = fft.analyze();
    bass = fft.getEnergy(16);
    level = amp.getLevel() * 2;
    psize = 300 * level;

    
    
    
    cube.rotation.x +=  level/50 ;
    particles.rotation.y +=  level /100;

    renderer.render( scene, camera);
    controls.update();
    console.log(level, radius);


}


function windowResized(){
    width = windowWidth;
    height = windowHeight;

    winX = width / 2;
    winY = height / 2;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize( width, height );
}


















