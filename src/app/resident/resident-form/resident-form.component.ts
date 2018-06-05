import { Component, OnInit } from '@angular/core';
import { ResidentService } from '../resident.service';
import { Resident } from '../../model/resident';
import { Router } from '@angular/router';
import { Tower } from '../../model/tower';

@Component({
  selector: 'app-resident-form',
  templateUrl: './resident-form.component.html',
  styleUrls: ['./resident-form.component.css']
})
export class ResidentFormComponent implements OnInit {

  resident: Resident = new Resident();

  towers: Tower[] = [];

  constructor(
    private router: Router,
    private service: ResidentService) { }

  list() {
    this.router.navigate(['/moradores']);
  }

  ngOnInit() {
    this.towers = [
      {id: 1, name: 'Capri'},
      {id: 2, name: 'Milão'},
      {id: 3, name: 'Napoli'},
      {id: 4, name: 'Turim'}
    ];
   }

}
