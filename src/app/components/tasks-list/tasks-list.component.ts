import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../constants/tasks.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Input() tasks: Task[] = []; // Initialize tasks as an empty array of type Task
  
  constructor() { }
  
  ngOnInit(): void {
    // Initialization logic if needed
  }

  removeTask(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
  }
}
