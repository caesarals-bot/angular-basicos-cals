import { NgModule } from "@angular/core";
import { ContadorComponent } from "./accountant/contador.component";

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})

export class AccountantModule{

}