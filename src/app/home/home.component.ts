import { Component, OnInit } from '@angular/core';
import { APIcallService } from '../apicall.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: APIcallService) { }

  // pageObser: Observable<any[]>;
  dataSource: any;

  pageObser = this.api.getdata().subscribe(res => {

    this.dataSource = res;
    // this.dataSource = this.dataSource.filteredData;
    console.log(this.dataSource);
  });

  ngOnInit() {
  }

}
