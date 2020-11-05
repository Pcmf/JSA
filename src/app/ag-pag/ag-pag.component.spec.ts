import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgPagComponent } from './ag-pag.component';

describe('AgPagComponent', () => {
  let component: AgPagComponent;
  let fixture: ComponentFixture<AgPagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgPagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
