import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations:[
    trigger('openNav', [
      state('show', style({
        width: '200px',
      })),
      state('hide', style({
        width: '0px',
        'box-shadow': 'none'
      })),
      transition('show => hide', [
        style({ width: '200px'  }),
        animate('500ms ease-in')
      ]),
      transition('hide => show', [
        style({ width: '0px'  }),
        animate('500ms ease-out')
      ])

    ])
  ]
})
export class MenuComponent implements OnInit {
  
  visible: boolean  = true;

  get state(){
    return this.visible ? 'show' : 'hide';
  }

  toggle() {
    this.visible = !this.visible;
  }

  
  
  

  constructor() { }

  ngOnInit() {
  }


}
