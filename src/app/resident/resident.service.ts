import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'resident-list';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }

  public set(){
    //const residentLevel: number = this.storage.get(STORAGE_KEY) || 1337;
    this.storage.set(STORAGE_KEY, "Marcos");
    //return residentLevel;
  }

  remove() {
    this.storage.remove(STORAGE_KEY);
  }

  get() {
    console.log(this.storage.get(STORAGE_KEY));
  }

}
