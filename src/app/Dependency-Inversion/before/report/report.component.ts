import { Component, OnInit } from '@angular/core';
import { PrintReportService } from '../print-report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(public printReportService: PrintReportService) { }

  ngOnInit(): void {
    this.printReportService.print();
  }

}
