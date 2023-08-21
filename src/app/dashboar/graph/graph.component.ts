import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent {
  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };
  public pieChartLabels = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];
  public pieChartDatasets = [
    {
      data: [300, 500, 100, 2500, 250],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {}
}
