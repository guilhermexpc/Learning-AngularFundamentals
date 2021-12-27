import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss'],
})
export class DiretivaNGifComponent implements OnInit {
  cursos: string[] = ['Angular2'];

  constructor() {}

  ngOnInit(): void {}
}
