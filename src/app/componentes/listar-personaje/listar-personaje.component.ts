import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/modelos/personaje';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-listar-personaje',
  templateUrl: './listar-personaje.component.html',
  styleUrls: ['./listar-personaje.component.css']
})
export class ListarPersonajeComponent implements OnInit {

  personajes: Personaje[] | undefined;
  personajesCopy: Personaje[] | undefined;  

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    await this.http.get<any>(environment.apiUrl + "//characters?apikey=967daab5052c06149aeecb9983beda73").subscribe((res)=>{
      this.personajes = res.data.results.map((r: any) => {
        return{
          id: r.id,
          name: r.name,
          description: r.description,
          modified: r.modified,
          resourceURI: r.resourceURI,
          comics: r.comics,
          events: r.events,
          series: r.series,
          stories: r.stories,
          thumbnail: r.thumbnail.path+'.'+r.thumbnail.extension,
          url: r.url,
        };      
      });
    this.personajesCopy = this.personajes;
    console.table(this.personajesCopy);
    });
  }

  buscar(e: any){
    const busca: string = e.target.value;

    this.personajes = this.personajesCopy?.filter(({ name }: Personaje) =>{
      return name.toLowerCase().includes(busca.toLowerCase());
    });
    
  }

}
