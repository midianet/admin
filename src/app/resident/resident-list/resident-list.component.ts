import { Component, OnInit } from '@angular/core';
import { ResidentService } from '../resident.service';

// require('datatables.net')();
// require('datatables.net-bs')();
// require('datatables.net-select')();

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css']
})
export class ResidentListComponent implements OnInit {

  constructor(private service: ResidentService) {}

  ngOnInit() {}

}
