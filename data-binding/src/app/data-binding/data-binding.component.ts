import { Component, createPlatform, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'http:loiane.com';
  urlLoremImagem: string = 'https://picsum.photos/400/60';
  inputValue: string = '';
  isMouseOver: boolean = false;

  twowayName: string = 'abc';
  twowayName2: string = 'abc';

  objectPessoa = {
    nome: 'def',
    idade: 20,
  };

  dataBindingGetValue(value: number) {
    return value;
  }

  onButtonClick() {
    alert('Clicado');
  }

  onKeyUp(event: KeyboardEvent) {
    this.inputValue = (event.target as HTMLInputElement).value;
    console.log(this.inputValue);
  }

  onKeyEnter(value: string) {
    console.log(value);
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() {}

  ngOnInit(): void {}
}
