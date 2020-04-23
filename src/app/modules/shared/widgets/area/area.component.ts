import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
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
        text: 'Browse finance starts'
    },
    subtitle: {
        text: 'Click the columns to view details.'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent market share'
        }

    },
    legend: {
        enabled: false
    },
    credits: {
      enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Chart",
            colorByPoint: true,
            data: [
                {
                    name: "Fully Paid",
                    y: 62.74,
                    drilldown: "Fully Paid"
                },
                {
                    name: "Partially Paid",
                    y: 10.57,
                    drilldown: "Partially Paid"
                },
                {
                    name: "Debtors",
                    y: 7.23,
                    drilldown: "Debtors"
                }
              
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: "Fully Paid",
                id: "Fully Paid",
                data: [
                    [
                        "Nurs.",
                        0.1
                    ],
                    [
                        "Chrc.1",
                        1.3
                    ],
                    [
                        "Chrc.2",
                        53.02
                    ],
                    [
                        "P.1",
                        1.4
                    ],
                    [
                        "P.2",
                        0.88
                    ],
                    [
                        "P.3",
                        0.56
                    ],
                    [
                        "P.4",
                        0.45
                    ],
                    [
                        "P.5",
                        0.49
                    ],
                    [
                        "P.6",
                        0.32
                    ],
                    [
                        "JHS.1",
                        0.29
                    ],
                    [
                        "JHS.2",
                        0.79
                    ],
                    [
                        "JHS.3",
                        0.18
                    ]
                ]
            },
            {
                name: "Partially Paid",
                id: "Partially Paid",
                data:[
                  [
                      "Nurs.",
                      0.1
                  ],
                  [
                      "Chrc.1",
                      1.3
                  ],
                  [
                      "Chrc.2",
                      53.02
                  ],
                  [
                      "P.1",
                      1.4
                  ],
                  [
                      "P.2",
                      0.88
                  ],
                  [
                      "P.3",
                      0.56
                  ],
                  [
                      "P.4",
                      0.45
                  ],
                  [
                      "P.5",
                      0.49
                  ],
                  [
                      "P.6",
                      0.32
                  ],
                  [
                      "JHS.1",
                      0.29
                  ],
                  [
                      "JHS.2",
                      0.79
                  ],
                  [
                      "JHS.3",
                      0.18
                  ]
              ]
            },
            {
                name: "Debtors",
                id: "Debtors",
                data: [
                  [
                      "Nurs.",
                      0.1
                  ],
                  [
                      "Chrc.1",
                      1.3
                  ],
                  [
                      "Chrc.2",
                      53.02
                  ],
                  [
                      "P.1",
                      1.4
                  ],
                  [
                      "P.2",
                      0.88
                  ],
                  [
                      "P.3",
                      0.56
                  ],
                  [
                      "P.4",
                      0.45
                  ],
                  [
                      "P.5",
                      0.49
                  ],
                  [
                      "P.6",
                      0.32
                  ],
                  [
                      "JHS.1",
                      0.29
                  ],
                  [
                      "JHS.2",
                      0.79
                  ],
                  [
                      "JHS.3",
                      0.18
                  ]
              ]
            }
            
        ]
    }
    }
    HC_exporting(Highcharts);
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 2000);
  }

}
