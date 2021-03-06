import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos',
  templateUrl: './exemplos.component.html',
  styleUrls: ['./exemplos.component.css'],
})
export class ExemplosComponent implements OnInit {
  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP',
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string = '';

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  constructor() {}

  ngOnInit(): void {}
}
