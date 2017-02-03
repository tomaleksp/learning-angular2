
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { AppComponent } from './app/app.component';
import { CountdownComponent } from './countdown/countdown';
import { PomodoroTimerComponent } from './pomodoro-timer/pomodoro-timer';

@NgModule({
  declarations: [
    //AppComponent,
    CountdownComponent,
    PomodoroTimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    //AppComponent, 
    PomodoroTimerComponent
    ]
})
export class AppModule { }