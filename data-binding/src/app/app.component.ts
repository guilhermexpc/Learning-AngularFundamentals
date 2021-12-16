import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'data-binding';

  cicloValor: number = 5;
  isCicloDeletado: boolean = false;
  condition: boolean = true;

  mudarValor() {
    this.cicloValor++;
  }

  destruirCiclo() {
    this.isCicloDeletado = true;
  }
}
