import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h1>{{ title }}</h1>
        <h3>la base es: <strong> {{base}} </strong></h3>

        <button (click)="accumulate(base)"> +{{base}}</button>

        <span> {{number}} </span>

        <button (click)="accumulate(-base) ">-{{base}}</button>

    `
})
// crea una clase contador, se le da un export
export class ContadorComponent{
    
    public title:string = 'Contador App';
    public number:number = 10;
    public base:number = 5;

    
    accumulate(valor:number){
    this.number += valor;
  }

}