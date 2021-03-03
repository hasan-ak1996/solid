import { Injectable } from '@angular/core';
import { PrintReport } from './print-report';

@Injectable({
  providedIn: 'root'
})
export class PrintService implements PrintReport {

  constructor() { }
  print(): void {
    console.log('This is report');
  }
}
