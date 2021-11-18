import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{Task} from '../../Task';
import {Subscription} from 'rxjs';
import{ UiService} from '../../ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task>= new EventEmitter();
 id:number;
text:string= "";
day:string= "";
reminder:boolean =false;
showAddTask: boolean = false;
subscription?: Subscription;

  constructor(
    private uiService : UiService
  ) { 
    this.subscription= this.uiService.onToggle().subscribe(value =>this.showAddTask = value)
  }

  ngOnInit(): void {
  }
onSubmit(){
  if(this.text.length===0){
    alert("please add a task!");
    return
  }
  const {id,text,day,reminder} = this
  const newTask= {id,text,day,reminder}
  this.onAddTask.emit(newTask);
}

}