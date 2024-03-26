import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogPagePage } from './log-page.page';

describe('LogPagePage', () => {
  let component: LogPagePage;
  let fixture: ComponentFixture<LogPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
