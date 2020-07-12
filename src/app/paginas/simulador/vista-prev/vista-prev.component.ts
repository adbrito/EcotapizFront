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
    //this.renderer.setSize(event.target.innerWidth, event.target.innerHeight)
}
canvas;

  scene;
  renderer;
  camera;
  mesh;
  controls;
  path = '../../../../assets/3d/scene.glb';

  isMouseDown = false;
  constructor() {


  }





  ngOnInit(): void {

  }




  render() {
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
    //console.log(this.camera.position.z,
      //this.camera.position.y,this.camera.position.x)
  }


  // マウスを押したとき
  onMouseDown(event) {
    this.isMouseDown = true;
  }




  ngAfterViewInit() {
    let me = this;

    this.scene = new THREE.Scene();

    this.canvas=  document.getElementById('canvas')   as HTMLCanvasElement;
    this.camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000);
    this.camera.position.z = -31;
    this.camera.position.y = 13,5;
    this.camera.position.x = 27;




    //レンダラーを作成
    
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true });
    this.renderer.setClearColor( 0x000000, 0 );
    this.renderer.setViewport( this.canvas.clientWidth, this.canvas.clientHeight);
    //背景色を設定
    this.renderer.gammaOutput = true;

    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight );




    this.controls = new OrbitControls(this.camera,this.canvas); /*quitar this.canvas para habilitar el pato de la muerte*/


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
    loader.load(this.path,
      // called when the resource is loaded
      function (gltf) {



        me.mesh = gltf.scene;
        me.mesh.scale.set(20, 20, 20);
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
    this.canvas.addEventListener('resize', function () {
      me.canvas.width  = me.canvas.clientWidth;
      me.canvas.height =  me.canvas.clientHeight;
      me.renderer.setViewport(0, 0,  me.canvas.clientWidth,  me.canvas.clientHeight);
      me.camera.aspect = me.canvas.clientWidth / me.canvas.clientHeight;
      me.camera.updateProjectionMatrix();
    });

    this.render();

}




}
