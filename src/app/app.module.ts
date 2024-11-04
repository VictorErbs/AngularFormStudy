import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importando FormsModule

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component'; // Importando o FormComponent

@NgModule({
  declarations: [
    AppComponent,
    FormComponent, // Adicionando FormComponent à lista de declarações
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicionando FormsModule aos imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
