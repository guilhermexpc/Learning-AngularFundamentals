import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNGifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { FundoAmareloDirective } from './share/fundo-amarelo.directive';
import { DiretivaCustomizadaComponent } from './diretiva-customizada/diretiva-customizada.component';
import { HighlightMouseDirective } from './share/highlight-mouse.directive';

@NgModule({
  declarations: [AppComponent, DiretivaNGifComponent, FundoAmareloDirective, DiretivaCustomizadaComponent, HighlightMouseDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
