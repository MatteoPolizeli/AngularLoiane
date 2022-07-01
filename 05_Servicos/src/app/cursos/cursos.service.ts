import { LogService } from './../shared/log.service';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos: string[] = ['Angular 2', 'C#', 'PostgreSQL'];
  emitirCursoCriado = new EventEmitter<string>();

  constructor(private log: LogService) {
    console.log('CursosService');
  }

  getCursos() {
    return this.cursos;
  }

   addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
}
