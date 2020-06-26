import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as THREE from 'three';
import { GLTFLoader } from '../../../../assets/js/GLTFLoader'

@Component({
  selector: 'app-vista-prev',
  templateUrl: './vista-prev.component.html',
  styleUrls: ['./vista-prev.component.css']
})
export class VistaPrevComponent {

  
  private gltfLoader: GLTFLoader
  
  private loadGLTFModel(path: string) {
  
      this.gltfLoader.load(path, (gltf)=> {
  
        //  this.scene.add(gltf.scene)
  
      }, 
      undefined, // Progress Event
      (error)=> {
          console.error('Error',error,error.message)
      }) 
  } 
  constructor() {
  }}