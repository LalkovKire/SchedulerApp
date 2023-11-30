import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './scheduler.component';
import { ProcessTableComponent } from './process-table/process-table.component';
import { ProcessSelectionComponent } from './process-selection/process-selection.component';
import {FormsModule} from '@angular/forms'
import { ProcessResultTableComponent } from './process-result-table/process-result-table.component';

@NgModule({
  declarations: [
    SchedulerComponent,
    ProcessTableComponent,
    ProcessSelectionComponent,
    ProcessResultTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SchedulerComponent
  ]
})
export class SchedulerModule { }
