import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TargetBlanckLogService {
  constructor() {}

  openNewWindow(stringLog: any) {
    const newWindow = window.open('about:blank', '_blank');
    if (newWindow) {
      newWindow.document
        .write(`<ion-content [fullscreen]="true" collapse="condense" [formGroup]="form">
     
      <div id="container-step_button">
        <ion-button color="coink" (click)="aceptar()" [disabled]="form.invalid">Regresar</ion-button>
      </div>
    </ion-content>`);
      newWindow.document.close();
    } else {
      console.error('No se ha cargado el log');
    }
  }
}
