import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  Highcharts =  Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit() {

    this.chartOptions = {
      chart: {
        type: 'column'
    },
    title: {
        text: 'Age Statistics'
    },
  
    xAxis: {
        categories: [
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Age (yrs)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Boys',
        data: [40, 70, 100, 32, 12, 90, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, {
        name: 'Girls',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }],
    credits: {
      enabled: false
    }
    }
    HC_exporting(Highcharts);
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
