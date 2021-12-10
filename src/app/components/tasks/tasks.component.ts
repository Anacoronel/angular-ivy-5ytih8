import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import { TASKS} from '../../mock-tasks';
import {TaskService} from '../../task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[]= TASKS;
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  
  this.taskService.getTasks().subscribe((tasks) =>
    (this.tasks = tasks));
  
  }
deleteTask(task:Task){
  this.taskService.deleteTask(task).subscribe(
  ()=> (
    this.tasks = this.tasks.filter(
      (t) => {return t.id !== task.id
      })
  ))
}
toggleReminder(task:Task){
task.reminder = !task.reminder
this.taskService.updateTaskReminder(task).subscribe();
}
addTask(task:Task){
  this.taskService.addTasdk(task).subscribe((task)=>(this.tasks.push(task))
  )
}
}