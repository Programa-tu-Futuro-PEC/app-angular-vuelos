import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promedio-form',
  templateUrl: './promedio-form.component.html',
  styleUrls: ['./promedio-form.component.css']
})
export class PromedioFormComponent implements OnInit {

  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 7;
  nota4: number = 0;
  _promedio: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  promedio(): void {
    this._promedio = this.nota1+this.nota2+this.nota3+this.nota4;
    this._promedio = this._promedio/4;
  }
}