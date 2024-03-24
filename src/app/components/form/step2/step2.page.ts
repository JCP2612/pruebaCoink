import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
})
export class Step2Page implements OnInit {

  constructor(private router: Router) { }

  siguiente(){
    this.router.navigate(['/step3'])
  }

  retroceder(){
    this.router.navigate(['/step1'])
  }

  ngOnInit() {
  }

}
