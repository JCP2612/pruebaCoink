import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Step2Page } from './step2.page';
import { getIdentificationResolve } from 'src/app/service/get-identification.service';
import { getGenderResolve } from 'src/app/service/get-payload.service';

const routes: Routes = [
  {
    path: '',
    component: Step2Page,
    resolve: {
      identification: getIdentificationResolve,
      gender: getGenderResolve,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Step2PageRoutingModule {}
