import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgDocsComponent } from './ag-docs.component';

describe('AgDocsComponent', () => {
  let component: AgDocsComponent;
  let fixture: ComponentFixture<AgDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
