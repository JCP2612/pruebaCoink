import { Component, OnInit } from '@angular/core';
import { GetPayloadService } from 'src/app/service/get-payload.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})
export class Step1Page implements OnInit {
  public responsePayload: any;
  public numero: string = '';
  public trackId: string = '';
  constructor(
    private router: Router,
    private payloadService: GetPayloadService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    this.getPayload();
  }

  formulariodos() {
    this.localStorageCall();
    this.router.navigate(['/step2', this.responsePayload]);
  }
  localStorageCall() {
    this.localStorage.setItem(this.responsePayload, this.numero);
  }
  getPayload() {
    this.payloadService.getData().subscribe((data) => {
      this.responsePayload = data.payload;
      console.log(this.responsePayload);
    });
  }

  retroceder() {
    this.router.navigate(['/login']);
  }
}
