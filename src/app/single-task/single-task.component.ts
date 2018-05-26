import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../task-template'; 
import { TaskInfoService } from '../task-info.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent implements OnInit {

  @Input() task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskInfoService: TaskInfoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.returnTask();
  }

  returnTask() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskInfoService.getTaskDetail(id)
      .subscribe(task => this.task = task);
  }

  goBack() {
    this.location.back();
  }

}
