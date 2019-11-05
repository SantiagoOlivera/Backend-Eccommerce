import { Component, OnInit } from '@angular/core';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  buildListRegister(registers){
    var listHTML;
    try{
      
      return listHTML;
    }catch(error){
      return error;
    }
  }

  ngOnInit() {
  }

}
