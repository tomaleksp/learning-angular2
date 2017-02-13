import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../shared/shared';

@Component({
    selector: 'pomodoro-task-icons',
    template: `<img *ngFor="let icon of icons"
                src="../app/shared/assets/img/pomodoro.png"
                width="{{ size }}" title="{{ hint }}">`
})
export default class TaskIconsComponent implements OnInit {
    @Input() 
    task: Task;
    icons: Object[] = [];
    @Input()
    size : number;
    @Input()
    hint: string;

    ngOnInit() {
        this.icons.length = this.task.pomodoroRequired;
        this.icons.fill({ name: this.task.name });
    }
}