import { FlotComponent } from './flot/flot.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 'charts',
//     children: [
//       {path: '', redirectTo: 'flot', pathMatch: 'full'},
//       {path: 'flot', component: FlotComponent}
//     ]
//   },
// ];

const routes: Routes = [
  {path: '', redirectTo: 'flot', pathMatch: 'full'},
  {path: 'flot', component: FlotComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
