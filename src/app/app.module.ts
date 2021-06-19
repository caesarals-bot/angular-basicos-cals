import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// importamos el componente
// import { ContadorComponent } from './accountant/accountant/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { AccountantModule } from './accountant/accountant.module';
import { DbzModule } from './dbz/dbz.module';




// decorador
@NgModule({
  declarations: [
    AppComponent,
    // anexamos el componente de contador.componet
    // ContadorComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AccountantModule,
    DbzModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
