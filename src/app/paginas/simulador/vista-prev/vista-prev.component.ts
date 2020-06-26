import { Component, OnInit, ViewChild, ElementRef, HostListener } from "@angular/core";
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import { OrbitControls } from 'three-orbitcontrols-ts';
//import * as GLTFLoader  from  '../../../../assets/js/GLTFLoader';
//import * as  DRACOLoaders  from  '../../../../assets/js/DRACOLoader';

@Component({
  selector: 'app-vista-prev',
  templateUrl: './vista-prev.component.html',
  styleUrls: ['./vista-prev.component.css']
})
export class VistaPrevComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;
  @HostListener('window:resize', ['$event'])
onWindowResize(event) {
    this.renderer.setSize(event.target.innerWidth, event.target.innerHeight) 
}

  scene;
  renderer;
  camera;
  mesh;
  controls;
  pathPato = '../../../../assets/3d/duck/Duck.gltf';

  isMouseDown = false;
  constructor() {
    let me = this;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 25;
    this.camera.position.y = 5;
    this.controls = new OrbitControls(this.camera);
    this.controls.minPolarAngle = 0;
this.controls.maxPolarAngle = Math.PI;
this.controls.enableZoom = true;

/*
// How far you can dolly in and out ( PerspectiveCamera only )
this.controls.minDistance = 0;
this.controls.maxDistance = Infinity;

this.controls.enableZoom = true; // Set to false to disable zooming
this.controls.zoomSpeed = 1.0;


this.controls.enablePan = true; // Set to false to disable panning (ie vertical and horizontal translations)

this.controls.enableDamping = true; // Set to false to disable damping (ie inertia)
this.controls.dampingFactor = 0.25;
*/
    //レンダラーを作成
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    //背景色を設定
    this.renderer.setClearColor(0x00ffff, 1);
    this.renderer.gammaOutput = true;

    //光源を作成
    var light = new THREE.DirectionalLight("#c1582d", 1);
    var ambient = new THREE.AmbientLight("#85b2cd");
    light.position.set(0, -70, 100).normalize();
    this.scene.add(light);
    this.scene.add(ambient);

    var texture = new THREE.Texture();
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) { };
    var onProgress = function (xhr) { };
    var onError = function (xhr) { };

    // 3Dモデル用テクスチャ画像の読込
    var loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
      // resource URL
      '../../../../assets/3d/duck/Duck.gltf',
      // called when the resource is loaded
      function (gltf) {

        me.mesh = gltf.scene;
        me.mesh.scale.set(10, 10, 10);
        me.scene.add(me.mesh);
        console.log("mesh: ", me.mesh);

        //      this.scene.add( gltf.scene );

        //gltf.animations; // Array<THREE.AnimationClip>
        //gltf.this.scene; // THREE.this.scene
        //gltf.this.scenes; // Array<THREE.this.scene>
        //gltf.this.cameras; // Array<THREE.this.camera>
        //gltf.asset; // Object

      },
      // called when loading is in progresses
      function (xhr) {


        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      // called when loading has errors
      function (error) {

        console.log('An error happened : ', error);

      }
    );

    this.render();
   

  }
  ngOnInit(): void {
  }




  render() {
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }


  // マウスを押したとき
  onMouseDown(event) {
    this.isMouseDown = true;
  }

 

  
  ngAfterViewInit() {
    //this.renderer.setSize(window.innerWidth, window.innerHeight);
    //this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    //this.animate();
}




}