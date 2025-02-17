import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'step1',
    loadChildren: () =>
      import('./components/form/step1/step1.module').then(
        (m) => m.Step1PageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'step2/:trackId',
    loadChildren: () =>
      import('./components/form/step2/step2.module').then(
        (m) => m.Step2PageModule
      ),
  },
  {
    path: 'step3/:trackId',
    loadChildren: () =>
      import('./components/form/step3/step3.module').then(
        (m) => m.Step3PageModule
      ),
  },
  {
    path: 'congrats/:trackId',
    loadChildren: () =>
      import('./components/congrats/congrats.module').then(
        (m) => m.CongratsPageModule
      ),
  },
  {
    path: 'log-page/:trackId',
    loadChildren: () =>
      import('./components/log-page/log-page.module').then(
        (m) => m.LogPagePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
