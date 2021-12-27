import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNGifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { FundoAmareloDirective } from './share/fundo-amarelo.directive';

@NgModule({
  declarations: [AppComponent, DiretivaNGifComponent, FundoAmareloDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
