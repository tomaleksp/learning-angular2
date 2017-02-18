import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

//import { AppComponent } from './app/app.component';
import { CountdownComponent } from './countdown/countdown';
import { TimerWidgetComponent } from './timer/timer'
import { FormattedTimePipe, QueuedOnlyPipe, SHARED_PROVIDERS } from './shared/shared'
import { TasksComponent, TaskIconsComponent, TaskTooltipDirective, TaskEditorComponent } from './tasks/tasks'

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
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // { path: 'home', component: TasksComponent },
      // { path: 'tasks/editor',  component: TaskEditorComponent },
      // { path: 'timer', component: TimerWidgetComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [
    SHARED_PROVIDERS
  ],
  bootstrap: [
    TasksComponent
  ]
})
export class AppModule { }