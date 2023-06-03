import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'upx-eolica';

  lineChart = new Chart({
    chart : {
      type: 'line'
    },
    title: {
      text: 'Registro de energia'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Valores das energias geradas',
        data: [10, 2, 3, 4, 9, 17, 20, 10, 5, 2, 16]
      } as any
    ]

  })

  pieChart = new Chart({
    chart : {
      type: 'pie'
      // plotShadow: false,
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        innerSize: '90%',
        borderWidth: 5,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: '70%',
    },

    legend: {
      enabled: false,
    },
    series: [
      {
        type: 'pie',
        data: [
          {name: 'Porgentagem da energia', y: 2, color: '#506ef9'},
          {y: 1, color: '#eeeeee'},
        ],
      },
    ],
  })
}
