import { CursosService } from './cursos.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;  

  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://localhost:4200';

    // var servico = new CursosService();
    // usa injeção de dependência
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
