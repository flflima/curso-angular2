import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://localhost:4200';
  urlImagem: string = 'http://lorempixel.com/400/200/sports';

  valorAtual: string = '';

  getValor() {
    return 1;
  }

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  constructor() { }

  ngOnInit() {
  }

}
