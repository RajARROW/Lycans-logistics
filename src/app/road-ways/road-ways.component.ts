import { Component, OnInit } from '@angular/core';
import { APIcallService } from '../apicall.service';
import { Observable } from 'rxjs';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-road-ways',
  templateUrl: './road-ways.component.html',
  styleUrls: ['./road-ways.component.scss'],
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


export class RoadWaysComponent implements OnInit {

  constructor(private api: APIcallService) { }


  profileForm1 = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
  });

  // items = [];
  pageObser: Observable<any[]>;
  dataSource: any;

  pageObser1: Observable<any[]>;
  dataSource1: any;


  pageObser2: Observable<any[]>;
  dataSource2: any;

  t = true;
  name: any;

  ngOnInit() {
    this.pageObser = this.api.getdata();
    this.pageObser1 = this.api.getdata1();
    this.pageObser2 = this.api.getdata2();

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

    this.pageObser2.subscribe(res => {

      this.dataSource2 = res;
      // this.dataSource = this.dataSource.filteredData;
      console.log(this.dataSource2);
      });
  }

  onSubmit1() {
    // TODO: Use EventEmitter with form value

    // const d = this.dataSource2.filter(item => item.email === this.profileForm1.value.email && item.pass === this.profileForm1.value.pass);

    this.dataSource2.forEach(item => {

      if(item.email === this.profileForm1.value.email && item.pass === this.profileForm1.value.pass){
        this.name = item.name;
        // console.log(d);
        this.t = false;
        return;
      }
    });
    if(this.t){
      console.log('sorry no user')
    }
  }

  hideItems() {
    this.dataSource = [];
  }

  wait1(item) {

    this.api.updateTask(this.name + item, {status: true});

  }
}
