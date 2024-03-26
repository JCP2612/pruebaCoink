import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.page.html',
  styleUrls: ['./log-page.page.scss'],
})
export class LogPagePage implements OnInit {
  public trackId: string = '';
  public stringLog: any;
  public openLog: any;
  public stringResponse: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localStorage: LocalStorageService
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const paramTrack = params['trackId'];
      this.trackId = paramTrack;
    });
    this.stringLog = this.localStorage.getItem(this.trackId);
  }
  continuar() {
    this.router.navigate(['/login']);
  }
}
