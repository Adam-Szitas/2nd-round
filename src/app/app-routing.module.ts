import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RouteGuardService } from './services/route-guard/route-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  //TODO SOLVE CIRCULAR DEPENDENCY
  // {
  //   path: 'web',
  //   canActivate: [RouteGuardService],
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () => import('./pages/web/web.module').then((_) => _.WebModule)
  //     }
  //   ]
  // },
  // {
    // path: '**',
    // component: PageNotFoundComponent   //TODO IMPLEMENT
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
