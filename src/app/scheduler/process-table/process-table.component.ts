import { Component, OnInit} from '@angular/core';
import { Process } from 'src/app/shared/models/Algorithms';
import { SchedulerService } from '../services/scheduler.service';
import { SharedSchedulerDataService } from '../services/shared-scheduler-data.service';

@Component({
  selector: 'app-process-table',
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.css']
})
export class ProcessTableComponent implements OnInit {

  public processes: Process[] = [];
  public processCounter : number = 4
  public processNumberState : boolean = true

  constructor(private schService : SchedulerService, private state: SharedSchedulerDataService) {
  }

  ngOnInit(): void {
      this.state.proccess$.subscribe( pr => {
          this.processes = pr
      })
  }

  public addRow() : void {
    if (this.processCounter < 7) {
      const lastProcess = this.processes[this.processes.length - 1];
      const newName = String.fromCharCode(lastProcess.name.charCodeAt(0) + 1);
      const newProcess: Process = { name: newName, arrivalTime: 0, executionTime: 0, waitingTime: 0,timeInSystem: 0};
      this.processes.push(newProcess);
      this.state.updateProccess(this.processes);
      this.processCounter += 1;
    } else {
      this.processNumberState = false
    }
  }
}
