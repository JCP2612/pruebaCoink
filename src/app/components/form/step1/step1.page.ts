import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})
export class Step1Page implements OnInit {

  constructor(private router: Router) { }
  
  formulariodos(){
    this.router.navigate(['/step2']);
  }

  retroceder(){
    this.router.navigate(['/login'])
  }

  ngOnInit() {
  }

}
