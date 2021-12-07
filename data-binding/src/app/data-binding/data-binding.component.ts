import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'http:loiane.com';
  urlLoremImagem: string = 'https://picsum.photos/400/60';

  dataBindingGetValue(value: number) {
    return value;
  }

  constructor() {}

  ngOnInit(): void {}
}
