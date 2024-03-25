import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { timeout } from 'rxjs';
import { GetPayloadService } from 'src/app/service/get-payload.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
})
export class Step2Page implements OnInit {
  public trackId: string = '';

  public identificators: {
    id: number;
    notation: string;
    description: string;
  }[] = [];
  public genders: {
    id: number;
    notation: string;
    description: string;
  }[] = [];
  public form: FormGroup;

  constructor(
    private router: Router,
    private payloadService: GetPayloadService,
    private localStorage: LocalStorageService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private spinnerService: SpinnerService
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      documentType: ['', [Validators.required]],
      identificationNumber: [
        '',
        [Validators.required, Validators.maxLength(10)],
      ],
      expeditionDate: ['', [Validators.required]],
      bornDate: ['', [Validators.required]],
      confirmPin: ['', [Validators.required]],
      pin: ['', [Validators.required, Validators.maxLength(4)]],
      confirmEmail: ['', [Validators.required]],
    });
    activatedRoute.data.subscribe((data: Data) => {
      if (data['identification']) this.identificators = data['identification'];
      if (data['gender']) this.genders = data['gender'];
    });
  }

  ngOnInit() {
    {
      this.activatedRoute.params.subscribe((params) => {
        const paramTrack = params['trackId'];
        this.trackId = paramTrack;
      });
    }
  }

  jsonObject: form = new form();

  async siguiente() {
    if (
      this.form.valid &&
      this.form.controls['pin'].value ==
        this.form.controls['confirmPin'].value &&
      this.form.controls['email'].value ==
        this.form.controls['confirmEmail'].value
    ) {
      const result = {
        email: this.form.controls['email'].value,
        identificationNumber: this.form.controls['identificationNumber'].value,
        documentType: this.form.controls['documentType'].value,
        gender: this.form.controls['gender'].value,
        expeditionDate: this.form.controls['expeditionDate'].value,
        bornDate: this.form.controls['bornDate'].value,
        confirmPin: this.form.controls['confirmPin'].value,
        pin: this.form.controls['pin'].value,
        confirmEmail: this.form.controls['confirmEmail'].value,
        trackId: this.trackId,
      };
      await this.spinnerService.presentSpinner();
      setTimeout(() => {
        this.spinnerService.dismissSpinner();
        this.localStorage.setItem(this.trackId, JSON.stringify(result));
        this.router.navigate(['/step3', this.trackId]);
      }, 1000);
    }
  }

  retroceder() {
    this.router.navigate(['/step1']);
  }
}

export class form {
  email: string;
  identificationNumber: string;
  expeditionDate: string;
  bornDate: string;
  confirmPin: string;
  pin: string;
  confirmEmail: string;
  trackId: string;

  constructor() {
    this.email = '';
    this.identificationNumber = '';
    this.expeditionDate = '';
    this.bornDate = '';
    this.confirmPin = '';
    this.pin = '';
    this.confirmEmail = '';
    this.trackId = '';
  }
}
