import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router, private spinnerService: SpinnerService) {}
  async formulario() {
    await this.spinnerService.presentSpinner();
    setTimeout(() => {
      this.spinnerService.dismissSpinner();
      this.router.navigate(['/step1']);
    }, 1000);
  }
}
