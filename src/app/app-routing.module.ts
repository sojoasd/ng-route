import { Form2Component } from './form2/form2.component';
import { Form1Component } from './form1/form1.component';
import { EnsureloginGuard } from './ensurelogin.guard';
import { LoginGuard } from './login.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { fallbackRoute } from './shared/fallback-route';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  {path: '', redirectTo: '/form1', pathMatch: 'full'},
  {
    path: '', component: LayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'cards/:type', component: CardsComponent},
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule',
        canActivate:[LoginGuard]
      },
      {path: 'form1', component: Form1Component},
      {path: 'form2', component: Form2Component},
      {path: 'page2', redirectTo: '/dashboard'}
    ]
  },
  {
    path: 'login', component: LoginComponent,
    canDeactivate:[EnsureloginGuard]
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
