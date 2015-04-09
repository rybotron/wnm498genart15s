var camera,
    scene,
    renderer,
    controls,
    winHalfX,
    winHalfY,
    sound,
    fft,
    amp,
    playing = false;
    ampScale = 50,
    xPos = 0,
    yPos = 0,
    xDir = 1;
    amp,
    theta = 0;
    
function preload(){
    sound = loadSound("audio/aware.mp3");

}

function setup(){
    noCanvas();
    sound.play();

    amp = new p5.Amplitude(.8);



    //fft = new p5.FFT();
    //fft = new p5.FFT( .5, 16 );

    width = windowWidth;
    height = windowHeight;

    winHalfX = width / 2;
    winHalfY = height / 2;

    


    scene = new THREE.Scene();

    //camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
    //camera.position.z = 100;

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
    camera.position.y = 400;
    camera.position.x = 400;
    

    scene.add( new THREE.AmbientLight( 0x404040 ) );

                light = new THREE.DirectionalLight( 0xffffff );
                light.position.set( 0, 1, 0 );
                scene.add( light );

    var light = new THREE.PointLight();
    light.position.set( 10, 10, 10 );
    scene.add( light );

                

                object = new THREE.Mesh( new THREE.SphereGeometry( 75, 20, 10 ), material );
                object.position.set( -400, 0, 200 );
                scene.add( object );

                object = new THREE.Mesh( new THREE.IcosahedronGeometry( 75, 1 ), material );
                object.position.set( -200, 0, 200 );
                scene.add( object );

                object = new THREE.Mesh( new THREE.OctahedronGeometry( 75, 2 ), material );
                object.position.set( 0, 0, 200 );
                scene.add( object );

                object = new THREE.Mesh( new THREE.TetrahedronGeometry( 100, 0 ), material );
                object.position.set( 200, 0, 200 );
                scene.add( object );

               

                object = new THREE.Mesh( new THREE.CylinderGeometry( 25, 75, 100, 40, 5 ), material );
                object.position.set( 400, 0, 0 );
                scene.add( object );

                //

                var points = [];

                for ( var i = 0; i < 50; i ++ ) {

                    points.push( new THREE.Vector3( Math.sin( i * 0.2 ) * Math.sin( i * 0.1 ) * 15 + 50, 0, ( i - 5 ) * 2 ) );

                }

                


    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var material = new THREE.MeshLambertMaterial( { color: 0x404040 } );
    var cube = new THREE.Mesh( geometry, material );

    scene.add(cube);

    camera.lookAt(cube.position);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    
    renderer.setSize( width, height );
    renderer.setClearColor(0x404040);
    document.body.appendChild( renderer.domElement );

    controls = new THREE.OrbitControls(camera, renderer.domElement);

}

function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();



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

function render() {

                var timer = Date.now() * 0.0001;

                camera.position.x = Math.cos( timer ) * 800;
                camera.position.z = Math.sin( timer ) * 800;

                camera.lookAt( scene.position );

                for ( var i = 0, l = scene.children.length; i < l; i ++ ) {

                    var object = scene.children[ i ];

                    object.rotation.x = timer * 5;
                    object.rotation.y = timer * 2.5;

                }

                renderer.render( scene, camera );

            }












