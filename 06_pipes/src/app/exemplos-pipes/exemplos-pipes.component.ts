import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'Learning varias paradas de Js e Data Structures',
    rating: 4.54321,
    nPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://getbootstrap.com/docs/5.2/migration/#utilities'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
