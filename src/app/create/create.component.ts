import { Component, OnInit } from '@angular/core';
import { APIcallService } from '../apicall.service';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {


  w = false;
  w1: boolean;
  pageObser: Observable<any[]>;
  dataSource: any;

  pageObser1: Observable<any[]>;
  dataSource1: any;
  id: any;
  data: any;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private api: APIcallService) { }


  ngOnInit() {
    this.pageObser = this.api.getdata();
    this.pageObser1 = this.api.getdata1();
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
      });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    this.w = false;
    this.api.addItem(this.profileForm.value, {waterways: false, roadways:false});

  }

  wait(item) {

    this.w = false;
    console.log(item );
    // this.api.addItem({name: 'name'} );

  }

}
