import { Component } from '@angular/core';

@Component({
    selector: 'pomodoro-timer',
    template: '<h1> {{ minutes }} : {{ seconds }} </h1>'
})
export class PomodoroTimerComponent {
    minutes: number;
    seconds: number;

    constructor() {
        this.resetPomodoro();

        setInterval(() => this.tick(), 1000);
    }

    resetPomodoro() : void{
        this.minutes = 24;
        this.seconds = 59;
    } // resetPomodoro

    tick() : void {
        if (--this.seconds < 0) {
            this.seconds = 59;
            if (--this.minutes < 0) {
                this.resetPomodoro();
            }
        }
    } // tick
}