import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";




const URL='../assets/data.json';
@Injectable({
    providedIn:'root'
}
)

export class ProyectosService{
    url="http://localhost/ACTIVIDADESPHP/";
    url2="http://localhost/ACTIVIDADESPHP2/";
    constructor(private http:HttpClient){}


    getAll(){
        return this.http.get(`${this.url}getall.php`);
    }

    agregar(Producto:string){
        return this.http.post(`${this.url}post.php`,JSON.stringify(Producto));
    }

    eliminar(Materia:any){
        return this.http.delete(`${this.url}delete.php/Materia=${Materia}`);
    }



    
    getAllProyect(){
        return this.http.get(`${this.url2}getall.php`);
    }


}