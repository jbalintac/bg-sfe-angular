// export class AppRouting {
// }


// import { ModuleWithProviders } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './account/login/login.component';
// import { ConsultantViewComponent } from './consultant-view/consultant-view.component';
// import { ManagePlanComponent } from './consultant-view/manage-plan/manage-plan.component';
// import { BenchActivityComponent } from './consultant-view/bench-activity/bench-activity.component';

// const appRoutes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'consultant-view', component: ConsultantViewComponent },
//   { path: 'create-plan', component: ManagePlanComponent },
//   { path: 'bench-activity', component: BenchActivityComponent }
// ];

// export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: false });


////


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

import { CONTENT_ROUTES } from '@app/shared';

// import { NoAuthGuard } from '@app/core';

const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/auth/login',
//     pathMatch: 'full'
//   },
  {
    path: '',
    component: ContentLayoutComponent,
    // canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: CONTENT_ROUTES
  },
//   {
//     path: 'auth',
//     component: AuthLayoutComponent,
//     loadChildren: './modules/auth/auth.module#AuthModule'
//   },
//   // Fallback when no prior routes is matched
 { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes/*, {useHash: true}*/)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
