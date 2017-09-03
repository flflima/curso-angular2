import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from "./cursos/cursos.module";

@NgModule({
  declarations: [ 
    // lista componentes, diretivas e pipes deste módulo
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [ 
    // outros módulos para este módulo, ou outro componente 
    // deste módulo
    BrowserModule,
    CursosModule
  ],
  providers: [], 
  // serviços disponíveis à todos os componentes declarados
  bootstrap: [AppComponent] 
  // qual o componente que deve ser instanciado no boot do 
  // projeto (apenas no módulo raiz)
})
export class AppModule { }
