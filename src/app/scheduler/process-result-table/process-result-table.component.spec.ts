import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessResultTableComponent } from './process-result-table.component';

describe('ProcessResultTableComponent', () => {
  let component: ProcessResultTableComponent;
  let fixture: ComponentFixture<ProcessResultTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessResultTableComponent]
    });
    fixture = TestBed.createComponent(ProcessResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
