import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs: ['nomeOutroCurso'], // expoem a variavel para outros modulos irmãos.
})
export class InputPropertyComponent implements OnInit {
  constructor() {}

  // expoem a variavel para outros modulos irmãos.
  @Input('name') nomeCurso: string = '';
  nomeOutroCurso: string = '';

  ngOnInit(): void {}
}
