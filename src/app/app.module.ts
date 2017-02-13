import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { AppComponent } from './app/app.component';
import { CountdownComponent } from './countdown/countdown';
import { TimerWidgetComponent } from './timer/timer'
import { FormattedTimePipe, QueuedOnlyPipe } from './shared/shared'
import { TasksComponent, TaskIconsComponent, 
         TaskTooltipDirective } from './pomodoro-tasks/pomodoro-tasks'

@NgModule({
  declarations: [
    // AppComponent,
    CountdownComponent,
    TimerWidgetComponent,
    TaskIconsComponent,
    TasksComponent,
    FormattedTimePipe,
    QueuedOnlyPipe,
    TaskTooltipDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    TasksComponent
  ]
})
export class AppModule { }