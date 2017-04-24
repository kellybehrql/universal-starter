import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginFormComponent } from './+login-form/login-form.component';

export function getLazyModule() {
  return System.import('./+lazy/lazy.module' + (process.env.AOT ? '.ngfactory' : ''))
    .then(mod => mod[(process.env.AOT ? 'LazyModuleNgFactory' : 'LazyModule')]);
}

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'log-in', component: LoginFormComponent },
      { path: '', redirectTo: '/log-in', pathMatch: 'full' },
      { path: 'lazy', loadChildren: getLazyModule }
    ])
  ],
})
export class AppRoutingModule { }
