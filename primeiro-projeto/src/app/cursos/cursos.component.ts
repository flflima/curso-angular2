import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;  

  cursos: string[] = ['Java', 'Angular'];

  constructor() {
    this.nomePortal = 'http://localhost:4200';
  }

  ngOnInit() {
  }

}
