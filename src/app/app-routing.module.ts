import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';
import { HomeComponent } from './pages/home/home.component';
import { VerifyUserComponent } from './pages/verify-user/verify-user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'validate-user', component: VerifyUserComponent},
  //{ path: 'forbidden', component: ForbiddenComponent, canActivate: [AutoLoginAllRoutesGuard] },
  //{ path: 'protected', component: ProtectedComponent, canActivate: [AutoLoginAllRoutesGuard] },
  //{ path: 'unauthorized', component: UnauthorizedComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
