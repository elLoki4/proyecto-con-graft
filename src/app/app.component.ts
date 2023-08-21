import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = ['mayo', 'junio', 'julio', 'agosto', 'septiembre'];
  public pieChartDatasets = [
    {
      data: [1.6, 1.5, 1.3, 2.5, 1.0],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
