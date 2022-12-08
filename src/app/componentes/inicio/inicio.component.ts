import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import {  ProyectosService } from '../../../service/proyectos.service'
import {Renderer2} from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./iniciostyle.scss']
})
export class InicioComponent implements OnInit {
  ListProye: any[]=[];
  //myScriptElemnt: HTMLScriptElement;
  productos: any[]=[];

  productForm= new FormGroup({
    Materia:new FormControl(''),
    Semestre:new FormControl('')
  });

  constructor(private Proyectos:ProyectosService,private renderer: Renderer2) 
  {
    //this.myScriptElemnt =document.createElement("script");
    //this.myScriptElemnt.src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12.js"
    //document.body.appendChild(this.myScriptElemnt);
  }

  ngOnInit(): void {
    this.MostrarTodos();
    this.loadScripts();    
    //this.renderExternalScript('').onload = () => {
      //console.log('script cargada');}
  }

  MostrarTodos(){
    this.Proyectos.getAll().subscribe((result:any)  =>
    this.productos=result);
    console.log(this.productos+"hola");
  }

  Agregar():void{
    this.Proyectos.agregar(this.productForm.value).subscribe(()=>{
      this.MostrarTodos();
      this.productForm.reset();
    })
  }


  Eliminar(Materia:any):void{
    console.log(Materia)
    if(window.confirm("¿Estas seguro de querer eliminar?")){
      this.Proyectos.eliminar(Materia).subscribe(() => {
        this.MostrarTodos();
      },(error) => {
        console.error(error);
    })
   }
  }
  

  loadScripts() {
    // This array contains all the files/CDNs
    const dynamicScripts = [
       '../../../assets/Matrix.js',
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }



}
