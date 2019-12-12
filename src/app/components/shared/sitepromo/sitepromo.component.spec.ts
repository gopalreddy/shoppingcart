import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitepromoComponent } from './sitepromo.component';

describe('SitepromoComponent', () => {
  let component: SitepromoComponent;
  let fixture: ComponentFixture<SitepromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitepromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitepromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
