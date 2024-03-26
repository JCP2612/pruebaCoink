import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TargetBlanckLogService {

  
  constructor() { }

  openNewWindow(stringLog: any){
    const newWindow  = window.open('about:blank', '_blank');
    if(newWindow){
      newWindow.document.write(`<pre>${stringLog}</pre>`)
      newWindow.document.close();
    } else {
      console.error("No se ha cargado el log")
    }
  }
}
