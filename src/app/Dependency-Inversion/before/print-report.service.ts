import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintReportService {

  constructor() { }
  print(){
    console.log('This in report');
  }
}
