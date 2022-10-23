import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { ProyectosService} from '../../../service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  ProductList:any[]=[];
  constructor(private ProductsSvc:ProyectosService,) { 
    this.ProductsSvc.getAll().subscribe((result:any)=>{
      this.ProductList=result;
      console.log(result)
    });
  }

  ngOnInit(): void {
  }
}
