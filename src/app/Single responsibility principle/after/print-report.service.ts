import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintReportService {

  constructor() { }

  printReport(text :any){
    console.log('The Report is :' + text);
  }
}
