import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  ativo: boolean = false;
  tamanhoFonte: number = 16;
  
  constructor() { }

  mudarAtivo(){
    this.ativo = !this.ativo;
  }

  ngOnInit(): void {
  }

}
