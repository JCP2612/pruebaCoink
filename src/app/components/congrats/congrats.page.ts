import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.page.html',
  styleUrls: ['./congrats.page.scss'],
})
export class CongratsPage {
  constructor(private router: Router, private spinnerService: SpinnerService) {}

  async continuar() {
    await this.spinnerService.presentSpinner();
    setTimeout(() => {
      this.spinnerService.dismissSpinner();
      this.router.navigate(['/login']);
    }, 1000);
  }
}
