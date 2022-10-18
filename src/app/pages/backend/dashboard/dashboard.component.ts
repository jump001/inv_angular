import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  typeChart: any;
  dataChart: any;
  optionsChart: any;

  typeChart1: any;
  dataChart1: any;
  optionsChart1: any;

  constructor() {}

  ngOnInit(): void {
    // Bar Chart
    this.typeChart = 'bar'; // สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter

    this.dataChart = {
      labels: [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'Stock Summary Chart',
          data: [9, 7, 42, 30, 12, 10, 15, 61, 19, 3, 1, 9],
          backgroundColor: [
            '#1abc9c',
            '#3498db',
            '#9b59b6',
            '#bdc3c7',
            '#f39c12',
            '#1abc9c',
            '#3498db',
            '#9b59b6',
            '#bdc3c7',
            '#f39c12',
            '#1abc9c',
            '#3498db',
          ],
        },
      ],
    };

    this.optionsChart = {
      responsive: true,
      maintainAspectRatio: false,
    };

    // Line Chart
    this.typeChart1 = 'line'; // สามารถกำหนดเป็น 'line','bar','radar','pie','doughnut','polarArea','bubble','scatter

    this.dataChart1 = {
      labels: [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ], // ชื่อของข้อมูลในแนวแกน x
      datasets: [
        {
          // กำหนดค่าข้อมูลภายในแผนภูมิแบบเส้น
          label: 'Number of items sold in months',
          data: [9, 7, 42, 30, 12, 10, 15, 61, 19, 3, 1, 9],
          fill: false,
          lineTension: 0.2,
          borderColor: 'orange', // สีของเส้น
          borderWidth: 4,
        },
      ],
    };

    this.optionsChart1 = {
      responsive: true,
      maintainAspectRatio: false,
    };
  }
}
