import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class BlockchainComponent implements OnInit {

  constructor() { }

  items = [];
  ngOnInit() {
    this.showItems();
  }



  showItems() {
    this.items = [0,1,2,3,4];
  }

  hideItems() {
    this.items = [];
  }
}

