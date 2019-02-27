import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APIcallService } from '../apicall.service';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';


@Component({
  selector: 'app-water-ways',
  templateUrl: './water-ways.component.html',
  styleUrls: ['./water-ways.component.scss'],
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
export class WaterWaysComponent implements OnInit {

  constructor(private api: APIcallService) { }

  // items = [];
  pageObser: Observable<any[]>;
  dataSource: any;

  pageObser1: Observable<any[]>;
  dataSource1: any;
  ngOnInit() {
    this.pageObser = this.api.getdata();
    this.pageObser1 = this.api.getdata1();
    this.showItems();
  }

  showItems() {
    this.pageObser.subscribe(res => {

      this.dataSource = res;
     // this.dataSource = this.dataSource.filteredData;
      console.log(this.dataSource);
      });


    this.pageObser1.subscribe(res => {

      this.dataSource1 = res;
     // this.dataSource = this.dataSource.filteredData;
      console.log(this.dataSource1);
      });
  }

  hideItems() {
    this.dataSource = [];
  }

  wait1(item) {

    this.api.updateTask(item, {waterways: true});

  }

}
