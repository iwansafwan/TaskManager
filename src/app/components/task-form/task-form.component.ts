import { Component, OnInit } from '@angular/core';
import { Task } from '../../constants/tasks.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  tasks: Task[] = []; // Array of Task objects
  newTask: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        name: this.newTask,
        completed: false
      };
      this.tasks.push(newTask); // Push Task object into tasks array
      this.newTask = ''; // Clear input field
    }
  }
}
