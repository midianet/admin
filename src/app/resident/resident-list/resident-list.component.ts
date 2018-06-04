import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { DataTableDirective } from 'angular-datatables';

import { ResidentService } from '../resident.service';
import { Router } from '@angular/router';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css']
})
export class ResidentListComponent implements OnInit, AfterViewInit  {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  constructor(private router: Router, private service: ResidentService) {}

  create() {
    this.router.navigate(['/moradores/novo']);
  }
  edit(id) {
    this.router.navigate(['/moradores/']);
  }

  ngOnInit() {
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: false,
      processing: false,
      // recordsTotal: 3,
      // recordsFiltered: 3,
      // ajax: (dataTablesParameters: any, callback) => {
      //   that.http.post<DataTablesResponse>('https://angular-datatables-demo-server.herokuapp.com/',
      //      dataTablesParameters, {} ).subscribe(resp => {
      //        that.persons = resp.data;
      //       callback({
      //
      //         data: []
      //       });
      //     });
      // },
      columns: [{ data: 'id' }, { data: 'tower' }, { data: 'apart' }, { data: 'name' }]
    };
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }

}
