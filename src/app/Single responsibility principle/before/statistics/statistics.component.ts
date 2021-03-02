import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  report: any;
  constructor() { }

  ngOnInit(): void {
    this.report = this.getReportByYear(2019);
    this.printReport(this.report);
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
  printReport(text :any){
    console.log('The Report is :' + text);
  }

}
