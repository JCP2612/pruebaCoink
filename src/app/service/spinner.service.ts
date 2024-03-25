import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  constructor(private loadingController: LoadingController) {}

  async presentSpinner() {
    const loading = await this.loadingController.create({
      spinner: 'circular',
    });
    await loading.present();
  }

  async dismissSpinner() {
    await this.loadingController.dismiss();
  }
}
