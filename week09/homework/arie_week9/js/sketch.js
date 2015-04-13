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
    cameraX,
    cameraY,
    cameraZ;

function preload(){
   sound = loadSound("audio/Shlohmo_Emerge_From_Smoke.m4a");
}

function setup(){
    noCanvas();
    sound.play();

    width = windowWidth;
    height = windowHeight;

    winHalfX = width / 2;
    winHalfY = height / 2;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, width / height, 1, 1000 );

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 5;

    // camera.position.y = cameraY;
    // camera.position.z = cameraZ;

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
    tween.to( { x: 2, y: 0, z: 5}, 1000); 
    tween.easing( TWEEN.Easing.Exponential.InOut );

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

    tween.start();
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
















