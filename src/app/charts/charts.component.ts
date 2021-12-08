import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartDataset, ChartType } from 'node_modules/chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public barChartLabels = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType: ChartType = 'radar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Ventes chaussures' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Ventes pantalons' },
  ];

  constructor() {
    //Si je veux mettre  à jour mes données
    //Je dois affecter une nouvelle référence à l'objet barChartData
    setTimeout(() => {
      this.barChartData = [
        { data: [76, 213, 123, 423, 56, 55, 40], label: 'Ventes chaussures' },
        { data: [23, 564, 76, 543, 86, 54, 234], label: 'Ventes pantalons' },
        { data: [78, 76, 765, 67, 543, 876, 897], label: 'Ventes costumes' },
      ];
    }, 2000);
  }
}
