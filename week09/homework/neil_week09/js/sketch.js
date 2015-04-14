/*

Music : Brakes On
Artist : Air
Year : 1997

*/

var music, fft, amplitude;

// light switchers
var redOn = false;
var greenOn = false;
var blueOn = false;

var rl = 0, gl = 0, bl = 0;
var rl2 = 0, gl2 = 0, bl2 = 0;

var camX = 0;
var camY = 0;
var camZ = 5;

var crX = 0;
var crY = 0;
var crZ = 0;

var camFov = 40;

var s2x =8,s2y =5,s2z = -5;
var s3x = -8,s3y =5, s3z = -5; 

var s1ry = .01;
var sc = 0;
var removeGround = false;

var controls;

var controlOn = false;
var cont = 0;

function preload(){
    soundFormats('mp3');
    music = loadSound('music/Brakes_On.mp3');
}

function setup(){
    noCanvas();
    music.play();
    fft = new p5.FFT(0.3,128);
    amplitude = new p5.Amplitude();
}

function draw(){

    if(floor(music.currentTime()) % 7 == 0){
        redOn = true;
        greenOn = true;
        blueOn = true;
    }
    else if(floor(music.currentTime()) % 7 == 1){
        redOn = true;
        greenOn = false;
        blueOn = false;
    }
    else if(floor(music.currentTime()) % 7 == 2){
        redOn = false;
        greenOn = true;
        blueOn = false;
    }
    else if(floor(music.currentTime()) % 7 == 3){
        redOn = false;
        greenOn = false;
        blueOn = true;
    }
    else if(floor(music.currentTime()) % 7 == 4){
        redOn = true;
        greenOn = false;
        blueOn = true;
    }
    else if(floor(music.currentTime()) % 7 == 5){
        redOn = true;
        greenOn = true;
        blueOn = false;
    }
    else if(floor(music.currentTime()) % 7 == 6){
        redOn = false;
        greenOn = true;
        blueOn = true;
    }

    var string = fft.analyze()[89];
    var snare = fft.analyze()[21];
    var guitar = fft.analyze()[109];

    if(snare >= 170){ // red
        rl2 = 1;
    }
    else{ rl2 -= .1; }

    if(string >= 60){ // blue
        bl2 = 1;
    }
    else{ bl2 -= .1; }

    if(guitar >= 20){ // green
        gl2 = 1;
    }
    else{ gl2 -= .1; }

    if(music.currentTime() % 20 < 4 && music.currentTime() < 120){
        camX = 0;
        camY = 0;
        camZ = 15;
        crX = 0;
        crY = 0;
        crZ = 0;
        
    }
    else if(music.currentTime() % 20 < 8 && music.currentTime() < 120){
        crX = 0;
        crY = -1.5;
        crZ = -.09;   
        camX = -5;
        camY = 0;
        camZ = 0;
    }
    else if(music.currentTime() % 20 < 12 && music.currentTime() < 120){
        crX = -1.5;
        crY = 0;
        crZ = 0;   
        camX = 0;
        camY = 5;
        camZ = 0;
    }
    else if(music.currentTime() % 20 < 16 && music.currentTime() < 120){
        crX = 1.5;
        crY = 0;
        crZ = 0;
        camX = 0;
        camY = -3;
        camZ = 1;
    }
    else if(music.currentTime() % 20 <= 19 && music.currentTime() < 120){
        camX = 0;
        camY = 0;
        camZ = 5;
        crX = 0;
        crY = 0;
        crZ = 0;
    }

    if(music.currentTime() > 68){
        sc = amplitude.getLevel();
    }
    if(music.currentTime() > 90){
        removeGround = true;
    }
    if(music.currentTime() > 120){
        camX = 0;
        camY = 0;
        camZ += .1;
        crX = 0;
        crY = 0;
        crZ = 0;
    }
    if(music.currentTime() > 180){
        camZ += .5;
    }
    if(music.currentTime() > 220){
        camZ -= 10;
    }

    cont--;

    if(cont <= 0){
        cont = 0;
        controlOn = false;
    }

}

function keyReleased(){
    music.isPlaying()?music.pause():music.play();
}

function mouseDragged(){
    controlOn = true;
    cont = 50;
}

var camera, scene, renderer;

var width = window.innerWidth;
var height = window.innerHeight;

var wX = width / 2;
var hX = height / 2;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(camFov,width/height, 0.5, 1000);
camera.position.z = 5;

var redLight = new THREE.PointLight(0xFF0000,rl);
var greenLight = new THREE.PointLight(0x00FF00,gl);
var blueLight = new THREE.PointLight(0x0000FF,bl);

var redLight2 = new THREE.PointLight(0xFF0000,rl2);
var greenLight2 = new THREE.PointLight(0x00FF00,gl2);
var blueLight2 = new THREE.PointLight(0x0000FF,bl2);

redLight.position.set(10,10,10);
greenLight.position.set(-10,10,10);
blueLight.position.set(0,10,10);

redLight2.position.set(10,10,5);
greenLight2.position.set(-10,10,5);
greenLight2.position.set(0,10,5);

scene.add(redLight);
scene.add(greenLight);
scene.add(blueLight);

scene.add(redLight2);
scene.add(greenLight2);
scene.add(blueLight2);

var geometry = new THREE.IcosahedronGeometry();
var ring = new THREE.TorusGeometry( 1, .3, 16, 100 );
var flat = new THREE.PlaneGeometry(25,25);
var gloss = new THREE.MeshPhongMaterial({color: 0xFFFFFF});
var matte = new THREE.MeshLambertMaterial({color: 0xCCCCCC});

var shape1 = new THREE.Mesh(ring,gloss);
var shape2 = new THREE.Mesh(geometry,gloss);
var shape3 = new THREE.Mesh(geometry,gloss);
var ground = new THREE.Mesh(flat,matte);

ground.rotation.x = 4.8;
ground.position.z = -5;
ground.position.y = -2

shape2.position.x = s2x;
shape2.position.y = s2y;
shape2.position.z = s2z;

shape3.position.x = s3x;
shape3.position.y = s3y;
shape3.position.z = s3z;

scene.add(shape1);
scene.add(shape2);
scene.add(shape3);
scene.add(ground);

renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0x111D25,1);

document.body.appendChild(renderer.domElement);
controls = new THREE.OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', function(){
    width = window.innerWidth;
    height = window.innerHeight;

    wX = width / 2;
    hX = height / 2;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
}, false );

function render(){
    requestAnimationFrame(render);

    if(redOn){
        rl+=.1;
        if(rl>1){
            rl=1;
        }
    }
    else{
        rl-=.05;
        if(rl<0){
            rl=0;
        }
    }

    if(greenOn){
        gl+=.1;
        if(gl>1){
            gl=1;
        }
    }
    else{
        gl-=.05;
        if(gl<0){
            gl=0;
        }
    }

    if(blueOn){
        bl+=.1;
        if(bl>1){
            bl=1;
        }
    }
    else{
        bl-=.05;
        if(bl<0){
            bl=0;
        }
    }

    if(removeGround){
        scene.remove(ground);
        removeGround = false;
    }

    redLight.intensity = rl;
    greenLight.intensity = gl;
    blueLight.intensity = bl;

    redLight2.intensity = rl2;
    greenLight2.intensity = gl2;
    blueLight2.intensity = bl2;

    shape1.scale.x += sc/10;
    shape1.scale.y += sc/10;
    shape1.scale.z += sc/10;

    shape1.rotation.y += s1ry;
    //shape1.rotation.x += .01;

    shape2.rotation.y += .05;
    shape2.rotation.x += .05;

    shape2.position.x = s2x;
    shape2.position.y = s2y;
    shape2.position.z = s2z;

    shape3.rotation.y += .05;
    shape3.rotation.x += .05;

    shape3.position.x = s3x;
    shape3.position.y = s3y;
    shape3.position.z = s3z;

    if(controlOn){
        controls.update();
        renderer.render(scene,camera);
    }
    else
    {
        camera.position.x = camX;
        camera.position.y = camY;
        camera.position.z = camZ;

        camera.rotation.x = crX;
        camera.rotation.y = crY;
        camera.rotation.z = crZ;
        renderer.render(scene,camera);
    }   
}

render();