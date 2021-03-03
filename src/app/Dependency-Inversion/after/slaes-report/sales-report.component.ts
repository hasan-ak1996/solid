import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { PrintReport } from '../print-report';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  constructor(
    @Inject('PrintReport') private printReport: PrintReport
  ) { }

  ngOnInit(): void {
    this.printReport.print();
  }

}
