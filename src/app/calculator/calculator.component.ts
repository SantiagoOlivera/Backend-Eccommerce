import { Component, OnInit } from '@angular/core';
import { parse } from 'querystring';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  valor1 = null
  valor2 = null
  operador = null
  rta = null

  calcular(){
      switch(this.operador){
        case "+":
          this.rta = parseInt(this.valor1) + parseInt(this.valor2);
        break;
        case "-":
            this.rta = this.valor1 - this.valor2;
        break;
        case "X":
            this.rta = this.valor1 * this.valor2;
        break;
        case "/":
            this.rta = this.valor1 / this.valor2;
        break;
      }
  }



  constructor() { }

  ngOnInit() {
  }

}
