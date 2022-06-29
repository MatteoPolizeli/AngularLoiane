import { CriarCursoComponent } from './criar-curso.component';
import { CursosService } from './../cursos/cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CriarCursoComponent],
  imports: [CommonModule],
  exports:[CriarCursoComponent],
  providers: [],
})
export class CriarCursoModule {}
