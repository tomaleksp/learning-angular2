
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { AppComponent } from './app/app.component';
import { CountdownComponent } from './countdown/countdown';
import { PomodoroTimerComponent } from './pomodoro-timer/pomodoro-timer';
import { TasksComponent, TaskIconsComponent, 
         FormattedTimePipe, QueuedOnlyPipe } from './pomodoro-tasks/pomodoro-tasks'

@NgModule({
  declarations: [
    // AppComponent,
    CountdownComponent,
    PomodoroTimerComponent,
    TaskIconsComponent,
    TasksComponent,
    FormattedTimePipe,
    QueuedOnlyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent, 
    // PomodoroTimerComponent,
    TasksComponent
  ]
})
export class AppModule { }