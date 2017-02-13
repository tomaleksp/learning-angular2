// import { Component } from '@angular/core';

// @Component({
//     selector: 'pomodoro-timer',
//     templateUrl: './pomodoro-tasks.html'
// })
// export class PomodoroTimerComponent {
//     minutes: number;
//     seconds: number;
//     isPaused: boolean;
//     buttonLabel: string;
//     // timeout: number; // no longer required!

//     constructor() {
//         this.resetPomodoro();

//         setInterval(() => this.tick(), 1000);
//     }

//     resetPomodoro() : void{
//         this.minutes = 24;
//         this.seconds = 59;
//         this.buttonLabel = 'Start';
//         this.togglePause();
//     } // resetPomodoro

//     tick() : void {
//         if (!this.isPaused){
//             this.buttonLabel = 'Pause';

//             if (--this.seconds < 0) {
//             this.seconds = 59;
//             if (--this.minutes < 0) {
//                 this.resetPomodoro();
//             }
//         }
//         }
//     } // tick

//     togglePause() : void {
//         this.isPaused = !this.isPaused;
//         if (this.minutes < 24 || this.seconds < 59){
//             this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
//         }
//     }

//     onCountdownCompleted() : void{
//         alert('Time Up!');
//     }
// }