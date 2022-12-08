import { Component, OnInit } from '@angular/core';
import { ProyectosjsonService} from '../../../service/proyectosjson.service';
import {  ProyectosService } from '../../../service/proyectos.service'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  ListProye: any[]=[];
  ProductList:any[]=[];
  constructor(private ProductsSvc:ProyectosjsonService,private ProyectosA:ProyectosService) { 
    this.ProductsSvc.getAll().subscribe((result:any)=>{
      this.ProductList=result;
      console.log(result)
    });
  }

  ngOnInit(): void {
    this.MostrarTodosP();
  }

  MostrarTodosP(){
    this.ProyectosA.getAllProyect().subscribe((result:any)  =>
    this.ListProye=result);
    console.log(this.ListProye+"hola");
  }
}
