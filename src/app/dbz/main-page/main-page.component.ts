import { Component } from '@angular/core';


interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 15000
  }
  
  cambiarNombre( event: any) {
    console.log( event.target.value )
  }
  // event.target.value otra forma de oir el evento
  agregar(){
    console.log(this.nuevo);
  }

}