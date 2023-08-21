import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './dashboar/inicio/inicio.component';
import { ReportesComponent } from './dashboar/reportes/reportes.component';
import { IngresarDatoComponent } from './dashboar/ingresar-dato/ingresar-dato.component';
import { SharedModule } from './dashboar/shared/shared.module';
import { GraphComponent } from './dashboar/graph/graph.component';

const route: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'graficos',
    component: ReportesComponent,
  },
  {
    path: 'creardato',
    component: IngresarDatoComponent,
  },
  {
    path: 'graph',
    component: GraphComponent,
  },
];

@NgModule({
  declarations: [
    InicioComponent,
    GraphComponent,
    ReportesComponent,
    IngresarDatoComponent,
  ],
  imports: [SharedModule, CommonModule, RouterModule.forRoot(route)],
  exports: [RouterModule],
})
export class ApRoutingModule {}
