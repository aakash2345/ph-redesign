import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRoutesComponent } from './content-routes.component';

describe('ContentRoutesComponent', () => {
  let component: ContentRoutesComponent;
  let fixture: ComponentFixture<ContentRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
