import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-logado',
  templateUrl: './area-logado.component.html',
  styleUrls: ['./area-logado.component.css']
})
export class AreaLogadoComponent implements OnInit {
  public titulo = "Seja bem vindo!";
  
  constructor() { }

  ngOnInit(): void {
  }

}
