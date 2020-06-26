import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
//import * as GLTFLoader  from  '../../../../assets/js/GLTFLoader';
//import * as  DRACOLoaders  from  '../../../../assets/js/DRACOLoader';

@Component({
  selector: 'app-vista-prev',
  templateUrl: './vista-prev.component.html',
  styleUrls: ['./vista-prev.component.css']
})
export class VistaPrevComponent {

 
   
   loader = new GLTFLoader();
   init=this.loadGLTFModel('../../../../assets/3d/duck/Duck.gltf');
  
  private loadGLTFModel(path: string) {
      
      this.loader.load(path, (gltf)=> {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        
       
        scene.add( gltf.scene );
        gltf.animations;
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset;

  
      },
      // called while loading is progressing
      function ( xhr ) {
    
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
      }, // Progress Event
      (error)=> {
          console.error('Error',error,error.message)
      }); 
  } 
  constructor() {
  }}