import { Component, OnInit } from '@angular/core';
import { ResidentService } from '../resident.service';
import { Resident } from '../../model/resident';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resident-form',
  templateUrl: './resident-form.component.html',
  styleUrls: ['./resident-form.component.css']
})
export class ResidentFormComponent implements OnInit {

  resident: Resident;

  constructor(
    private router: Router,
    private service: ResidentService) { }

  list() {
    this.router.navigate(['/moradores']);
  }

  ngOnInit() {
    console.log('construct');
  }

}
