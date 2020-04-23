import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  Highcharts =  Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit() {

    this.chartOptions = {
      chart: {
        type: 'column'
    },
    title: {
        text: 'Age Range'
    },
    subtitle: {
        text: 'Source: Skuulba'
    },
    xAxis: {
        categories: [
            'Nrs',
            'Chr.1',
            'Chr.2',
            'KG.1',
            'KG.2',
            'P.1',
            'P.2',
            'P.3',
            'P.4',
            'P.5',
            'P.6',
            'JSH.1',
            'JSH.2',
            'JSH.3'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} </b></td></tr>',
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
    credits: {
      enabled: false
    },
    series: [{
        name: 'Boys',
        data: [15, 20, 30, 14, 5, 9, 10, 121, 21, 19, 9, 34]

    }, {
        name: 'Girls',
        data: [5, 23, 40, 24, 10, 22, 16, 14, 12, 35, 10, 23]

    }]
    }
    HC_exporting(Highcharts);
  }


}
