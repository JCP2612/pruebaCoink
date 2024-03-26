import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { form } from '../step2/step2.page';
import { SpinnerService } from 'src/app/service/spinner.service';
import { TargetBlanckLogService } from 'src/app/service/target-blanck-log.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
})
export class Step3Page implements OnInit {
  public trackId: string = '';
  public email: string = '';
  public identificationNumber: string = '';
  public documentType: string = '';
  public gender: string = '';
  public expeditionDate: string = '';
  public bornDate: string = '';
  public confirmPin: string = '';
  public pin: string = '';
  public confirmEmail: string = '';
  public stringLog: any;
  public finishLog: any;
  public form: FormGroup;

  public openLog: any;

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService,
    private newWindowLog: TargetBlanckLogService
  ) {
    this.form = fb.group({
      cb: [false, [Validators.requiredTrue]],
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const paramTrack = params['trackId'];
      this.trackId = paramTrack;
    });
    this.stringLog = this.localStorage.getItem(this.trackId);
  }

  jsonObject: form = new form();

  async aceptar() {
    await this.spinnerService.presentSpinner();
    setTimeout(() => {
      this.spinnerService.dismissSpinner();
      if (this.form.valid) {
        this.finishLog = JSON.parse(this.stringLog);
        this.finishLog.cb = this.form.controls['cb'].value;
        this.localStorage.setItem(this.trackId, JSON.stringify(this.finishLog));
        this.openLog = this.localStorage.getItem(this.trackId);
        this.router.navigate(['/congrats', this.trackId]);
      }
    }, 1000);
  }

  retroceder() {
    this.router.navigate(['step2/:trackId']);
  }
}
