import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosComponent } from './exemplos/exemplos.component';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [AppComponent, ExemplosComponent, CamelCasePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
