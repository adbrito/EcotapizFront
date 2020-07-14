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
    //VistaPrevComponent.renderer.setSize(event.target.innerWidth, event.target.innerHeight)
  }
  static canvas;

  static scene;
  static loader;
  static renderer;
  static camera;
  static mesh;
  static controls;
  static path = 'assets/3d/scene.glb';
  static materials=[];

  static isMouseDown = false;
  constructor() {


  }


  static cambiarMaterial(material) {

  }

  static cambiarObjeto(url: string) {
    VistaPrevComponent.crearMateriales();
    let me = VistaPrevComponent;

    VistaPrevComponent.scene = new THREE.Scene();

    VistaPrevComponent.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    VistaPrevComponent.camera = new THREE.PerspectiveCamera(75, VistaPrevComponent.canvas.clientWidth / VistaPrevComponent.canvas.clientHeight, 0.1, 1000);
    VistaPrevComponent.camera.position.z = -31;
    VistaPrevComponent.camera.position.y = 13, 5;
    VistaPrevComponent.camera.position.x = 27;




    //レンダラーを作成

    VistaPrevComponent.renderer = new THREE.WebGLRenderer({ canvas: VistaPrevComponent.canvas, alpha: true });
    VistaPrevComponent.renderer.setClearColor(0x000000, 0);
    VistaPrevComponent.renderer.setViewport(VistaPrevComponent.canvas.clientWidth, VistaPrevComponent.canvas.clientHeight);
    //背景色を設定
    VistaPrevComponent.renderer.gammaOutput = true;

    VistaPrevComponent.renderer.setSize(VistaPrevComponent.canvas.clientWidth, VistaPrevComponent.canvas.clientHeight);

    VistaPrevComponent.controls = new OrbitControls(VistaPrevComponent.camera, VistaPrevComponent.canvas); /*quitar VistaPrevComponent.canvas para habilitar el pato de la muerte*/


    //光源を作成
   var light = new THREE.DirectionalLight( 0xffffff, 0.5);
    var ambient = new THREE.AmbientLight(0xffffff, 0.2);
    light.position.set(0, -70, 100).normalize();
    VistaPrevComponent.scene.add(light);

    VistaPrevComponent.scene.add(ambient);

    //TEXTURAAA-----------------------------------
    var material = new THREE.MeshPhongMaterial();
    material.map    = THREE.ImageUtils.loadTexture('assets/3d/plata.png');
   // -------------------------------------------

    var texture = new THREE.Texture();
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) { };
    var onProgress = function (xhr) { };
    var onError = function (xhr) { };

    // 3Dモデル用テクスチャ画像の読込
    VistaPrevComponent.loader = new GLTFLoader();

    me.scene.dispose();
    VistaPrevComponent.loader.load(url,
      // called when the resource is loaded
      function (gltf) {
        me.mesh = gltf.scene;
        console.log(me.mesh.material);
        me.mesh.scale.set(20, 20, 20);
        me.scene.add(me.mesh);
        console.log("mesh: ", me.mesh);
        var carModel = gltf.scene.children[ 0 ];
				carModel.getObjectByName( 'par1' ).material = VistaPrevComponent.materials[0];
        //      VistaPrevComponent.scene.add( gltf.scene );

        //gltf.animations; // Array<THREE.AnimationClip>
        //gltf.VistaPrevComponent.scene; // THREE.VistaPrevComponent.scene
        //gltf.VistaPrevComponent.scenes; // Array<THREE.VistaPrevComponent.scene>
        //gltf.VistaPrevComponent.cameras; // Array<THREE.VistaPrevComponent.camera>
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
    VistaPrevComponent.render();
    // Load a glTF resource
    
    VistaPrevComponent.canvas.addEventListener('resize', function () {
      me.canvas.width = me.canvas.clientWidth;
      me.canvas.height = me.canvas.clientHeight;
      me.renderer.setViewport(0, 0, me.canvas.clientWidth, me.canvas.clientHeight);
      me.camera.aspect = me.canvas.clientWidth / me.canvas.clientHeight;
      me.camera.updateProjectionMatrix();
    });
  }

  ngOnInit(): void {

  }


static crearMateriales(){
  new THREE.TextureLoader().load( 'assets/3d/plata.png', function ( texture ) {
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    VistaPrevComponent.materials.push(material);
  });


}

  static render() {
    requestAnimationFrame(VistaPrevComponent.render.bind(VistaPrevComponent));
    VistaPrevComponent.renderer.render(VistaPrevComponent.scene, VistaPrevComponent.camera);
    //console.log(VistaPrevComponent.camera.position.z,
    //VistaPrevComponent.camera.position.y,VistaPrevComponent.camera.position.x)
  }


  // マウスを押したとき
  onMouseDown(event) {
    VistaPrevComponent.isMouseDown = true;
  }




  ngAfterViewInit() {
   
    VistaPrevComponent.cambiarObjeto(VistaPrevComponent.path);

    

  }




}
