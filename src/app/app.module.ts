import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {TaskService} from './task.service'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './tasks-item/tasks-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { UiService } from './ui.service';

const appRoutes: Routes = [
  {path: '', component: TasksComponent},
  {path:'About', component: AboutComponent},
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot( appRoutes, { enableTracing: true })],
  declarations: [ AppComponent,  HeaderComponent, ButtonComponent, TasksComponent, TasksItemComponent, AddTaskComponent, AboutComponent, FooterComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
 providers:[TaskService, UiService ],
})
export class AppModule { }
