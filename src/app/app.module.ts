import {Page2Component} from './page2/page2.component';
import { LoginGuard } from './login.guard';
// import { ChartsModule } from './charts/charts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { EnsureloginGuard } from './ensurelogin.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { BlockComponent } from './block/block.component'
// import { FlotComponent } from './charts/flot/flot.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    LoginComponent,
    LayoutComponent,
    Form1Component,
    Form2Component,
    Page2Component,
    BlockComponent,
    // FlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // ChartsModule,//lazy loading, so remove it
    //因為URL比對不成功會導回 dashboard，故須將此模組放到最後，否則後面的模組因為路由比對�, EnsureloginGuard��敗，一直導回 dashboard 頁面
    AppRoutingModule
  ],
  providers: [LoginGuard, EnsureloginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
