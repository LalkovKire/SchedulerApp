import { Component, OnInit } from '@angular/core';
import { Algorithm } from 'src/app/shared/models/Algorithms';
import { SchedulerService } from '../services/scheduler.service';
import { SharedSchedulerDataService } from '../services/shared-scheduler-data.service';
@Component({
  selector: 'app-process-selection',
  templateUrl: './process-selection.component.html',
  styleUrls: ['./process-selection.component.css']
})
export class ProcessSelectionComponent implements OnInit{

  public selectedAlgorithm : string = ""
  public algorithms: Algorithm[] = [
    { name: "First Come First Served", tag: 'FCFS' },
    { name: 'Round Robin', tag: 'RR' },
    { name: 'Shortest Job First', tag: 'SJF' },
    { name: 'Multi Feedback Queue', tag: 'MFQ' },
  ]

  constructor(private schService : SchedulerService, private state : SharedSchedulerDataService) {
    this.selectedAlgorithm = this.algorithms[0].name;
  }

  ngOnInit(): void {
    this.selectedAlgorithm = this.algorithms[0].name;
  }

  public calculateProccessScheduling() : void {
    let alg : Algorithm = this.algorithms.filter(i => i.name === this.selectedAlgorithm)[0];
    if (alg.tag === "FCFS") this.schService.FirstComeFirstServe();
  }

}
