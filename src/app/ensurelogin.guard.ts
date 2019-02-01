import { LoginComponent } from './login/login.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, Router,  ActivatedRouteSnapshot,  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnsureloginGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(
    component: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean{
    if(component.form.dirty){
      return confirm('Are you sure to leave ?');
    }
    else{
      return true;
    }
  }
}
