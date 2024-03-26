import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { SpinnerService } from 'src/app/service/spinner.service';
import { TargetBlanckLogService } from 'src/app/service/target-blanck-log.service';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.page.html',
  styleUrls: ['./congrats.page.scss'],
})
export class CongratsPage implements OnInit {
  public trackId: string = '';
  public stringLog: any;
  public openLog: any;
  constructor(
    private router: Router,
    private spinnerService: SpinnerService,
    private activatedRoute: ActivatedRoute,
    private localStorage: LocalStorageService,
    private newWindowLog: TargetBlanckLogService
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const paramTrack = params['trackId'];
      this.trackId = paramTrack;
    });
    this.stringLog = this.localStorage.getItem(this.trackId);
  }

  async continuar() {
    await this.spinnerService.presentSpinner();
    setTimeout(() => {
      this.spinnerService.dismissSpinner();
      this.openLog = this.localStorage.getItem(this.trackId);
      // this.newWindowLog.openNewWindow(this.openLog);
      // this.router.navigate(['/login']);
      this.router.navigate(['/log-page/', this.trackId]);
    }, 1000);
  }
}
