// -- star example here http://codepen.io/seanseansean/pen/vEjOvy?editors=001
var camera,
    scene,
    renderer,
    controls,
    winHalfX,
    winHalfY,
    sound,
    Ico,
    stars,
    tween,
    tweenTwo,
    cameraX,
    cameraY,
    cameraZ,
    fft,
    analyzeFft=0,
    theta = 0;

function preload(){
   sound = loadSound("audio/Shlohmo_Emerge_From_Smoke.m4a");
}

function setup(){
    noCanvas();
    sound.play();

    //--music
    fft = new p5.FFT(0.95,16);

    width = windowWidth;
    height = windowHeight;

    winHalfX = width / 2;
    winHalfY = height / 2;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, width / height, 1, 1000 );

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 15;

    // var light = new THREE.PointLight();
    // light.position.set( 10, 10, 10 );
    // scene.add( light );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );

    // scene.add(cube);

    camera.lookAt(cube.position);

//--tween
    tween = new TWEEN.Tween( camera.position );
    tween.to( { x: 0, y: 0, z: 100}, 1000); 
    tween.easing( TWEEN.Easing.Exponential.InOut );

    tween.onUpdate(function(){
            // sound.setVolume(s.volume);
            // rect(width / 2, height / 2, 10, s.volume * -100)
        });

    tween.onComplete(function(){
        tween.to( { x: 0, y: 0, z: 7 }, 1000);
        tween.start();
    });


    

    

//-- renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    renderer.setClearColor(0x001E28, 1);
    document.body.appendChild( renderer.domElement );

    controls = new THREE.OrbitControls(camera, renderer.domElement);

//-----Material
    var pinkMat = new THREE.MeshPhongMaterial({
        color      :  new THREE.Color("rgb(30,30,30)"),
        emissive   :  new THREE.Color("rgb(30,30,30)"),
        specular   :  new THREE.Color("rgb(0,255,255)"),
        shininess  :  5,
        shading    :  THREE.FlatShading,
        transparent: 1,
        opacity    : 1
    });
    var L1 = new THREE.PointLight( 0xffffff, 1);
        L1.position.z = 100;
        L1.position.y = 100;
        L1.position.x = 100;
        scene.add(L1);

    var L2 = new THREE.PointLight( 0xffffff, 0.8);
        L2.position.z = 200;
        L2.position.y = 50;
        L2.position.x = -100;
        scene.add(L2);

//--IcoSphere
    Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(1,0), pinkMat);
    Ico.position.z =0;
    Ico.position.x =3;
    scene.add(Ico);

//--IcoSphere 2
    Ico2 = new THREE.Mesh(new THREE.IcosahedronGeometry(1,0), pinkMat);
    Ico2.position.z = 0;
    Ico2.position.x = -3;
    scene.add(Ico2);

//--IcoSphere 3
    Ico3 = new THREE.Mesh(new THREE.IcosahedronGeometry(1,0), pinkMat);
    Ico3.position.z = 0;
    Ico3.position.x = 0;
    scene.add(Ico3);

//--stars
    var starQty = 45000;
        starGeometry = new THREE.SphereGeometry(1000, 100, 50);

        materialOptions = {
            size: 1.0, //I know this is the default, it's for you.  Play with it if you want.
            transparency: true, 
            opacity: 0.7
        };

        starStuff = new THREE.PointCloudMaterial(materialOptions);

    // The wizard gaze became stern, his jaw set, he creates the cosmos with a wave of his arms

    for (var i = 0; i < starQty; i++) {     

        var starVertex = new THREE.Vector3();
        starVertex.x = Math.random() * 2000 - 1000;
        starVertex.y = Math.random() * 2000 - 1000;
        starVertex.z = Math.random() * 2000 - 1000;

        starGeometry.vertices.push(starVertex);
    }

    stars = new THREE.PointCloud(starGeometry, starStuff);
    scene.add(stars);

    // tween = new TWEEN.Tween( camera.position );
    // tween.start();

    Ico3.scale.set( 0.000001, 0.000001, 0.000001);
    tweenTwo = new TWEEN.Tween( Ico3.scale );
    tweenTwo.to( { x: 1, y: 1, z: 1}, 250);
    tweenTwo.easing( TWEEN.Easing.Sinusoidal.InOut );
    tweenTwo.onComplete(function(){
        tweenTwo.to( { x: 0.000001, y: 0.000001, z: 0.000001 }, 250);
        tweenTwo.start();
    });

    
}

function draw(){
    renderer.render( scene, camera );
    controls.update();

    Ico.rotation.x+=2/50;
    Ico.rotation.y+=2/100;

    Ico2.rotation.x+=2/50;
    Ico2.rotation.y+=2/200;

    Ico3.rotation.x-=2/50;
    Ico3.rotation.y-=2/200;

    var r = 10;
    theta += .1;
    Ico3.position.x = r * Math.cos(theta);
    Ico3.position.y = r * Math.sin(theta);

    analyzeFft = fft.analyze();
    cameraZ = map(analyzeFft[6],0,255,0,100);
    cameraX = map(analyzeFft[2],0,255,-50,50);

    if(analyzeFft[3] > 220) {
        // print(analyzeFft[14]);
        tween.to( { x: random(-10,10), y: random(-10,10), z: random(-10,10) }, 1000);
        tween.start();
        tweenTwo.start();
    }

    // if(analyzeFft[4] > 215) {
    //     tweenTwo.start();
    // }
    // console.log(analyzeFft[3]);

    // tween.to( { x: cameraX, y: 0, z: cameraZ}, 1000); 
    // tween.easing( TWEEN.Easing.Exponential.InOut );
    // tween.start();
    
    TWEEN.update();

    // console.log(analyzeFft[6]); 
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
















