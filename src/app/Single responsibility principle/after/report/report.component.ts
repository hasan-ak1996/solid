import { Component, OnInit } from '@angular/core';
import { PrintReportService } from '../print-report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  report: any;

  constructor(public printReportService : PrintReportService) { }

  ngOnInit(): void {
   this.report =  this.getReportByYear(2019);
   this.printReportService.printReport(this.report);
  }

  getReportByYear(year : number){
    let totalRevenue = 20;
    let tax = 0 ;
    if(year === 2019){
      tax = totalRevenue *10 / 100;
    }
    else if(year === 2020){
      tax = totalRevenue *12 / 100;
    }
    return tax;
  }

}
