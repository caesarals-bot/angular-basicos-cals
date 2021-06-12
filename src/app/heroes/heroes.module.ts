
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    // los componentes que afectan este modulo
    declarations: [
        HeroeComponent,
        ListComponent
    ],
    // que cosas quiero publicas
    exports: [
        ListComponent
    ],
    // aca van los modulos
    imports: [
        CommonModule
    ]
})

export class HeroesModule {

}