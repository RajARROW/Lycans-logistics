import { Component, OnInit } from '@angular/core';
import { APIcallService } from '../apicall.service';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  v :any;
  w = false;
  w1: boolean;
  pageObser: Observable<any[]>;
  dataSource: any;

  pageObser1: Observable<any[]>;
  dataSource1: any;


  pageObser2: Observable<any[]>;
  dataSource2: any;

  id: any;
  data: any;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  profileForm1 = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
    name: new FormControl(''),
  });
  constructor(private api: APIcallService) { }

  ngOnInit() {
    this.pageObser = this.api.getdata();
    this.pageObser1 = this.api.getdata1();
    this.pageObser2 = this.api.getdata2();
    this.hello();
  }
  hello() {

    this.pageObser.subscribe(res => {

      this.dataSource = res;
     // this.dataSource = this.dataSource.filteredData;
      console.log(this.dataSource);
      });


    this.pageObser1.subscribe(res => {

      this.dataSource1 = res;
     // this.dataSource = this.dataSource.filteredData;
      console.log(this.dataSource1);
      this.st();
      });

    this.pageObser2.subscribe(res => {

      this.dataSource2 = res;
      console.log(this.dataSource2);
      // this.login();

      });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    this.w = false;


    // let v = {};
    this.dataSource2.forEach(element => {

      // this.v[element.email] = {status: false};
      console.log(element.name);

      this.api.addItem(this.profileForm.value, element.name, {status: false , name: element.name});

    });

    const objectC = {...this.profileForm.value, ...this.v}

  }

  onSubmit1() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm1.value);
    this.w = false;
    this.api.addItem1(this.profileForm1.value);

  }

  login() {

    this.dataSource2.forEach(element => {
      if(element.id === 'a' && element.pass === 'a') {

        console.log('wellcone to ww');
      }

    });

  }

  st(){

    this.v = 1;

    this.dataSource1.forEach(element => {
      console.log(element.status)
      if(!element.status){
        this.v = 0;
        return;
      }


    });

    // console.log(this.v)
  }


  wait(item) {

    this.w = false;
    console.log(item );
    // this.api.addItem({name: 'name'} );

  }

}
