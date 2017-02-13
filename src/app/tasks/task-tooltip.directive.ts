import { Task, TaskService } from '../shared/shared'

import {
    //Component,
    Input,
    //Pipe,
    //PipeTransform,
    Directive,
    //OnInit,
    HostListener
} from '@angular/core';

@Directive({
    selector: '[task]'
})
export default class TaskTooltipDirective{
    private defaultTooltipText: string = "";

    @Input()
    task: Task;
    @Input()
    taskTooltip: any;

    @HostListener('mouseover')
    onMouseOver(){
        console.log("OnMouseOver: " + this.task.name);
        console.log(this.taskTooltip);
        if(!this.defaultTooltipText && this.taskTooltip){
            this.defaultTooltipText = this.taskTooltip.innerHTML;
            this.taskTooltip.innerHTML = this.task.name;
        }
    }

    @HostListener('mouseout')
    onMoustOut(){
        if(this.taskTooltip){
            this.taskTooltip.innerHTML = this.defaultTooltipText;
            this.defaultTooltipText = "";
        }
    }
}

// /// Component classes
// /// - Main Parent Component
// @Component({
//     selector: 'pomodoro-tasks',
//     styleUrls: ['pomodoro-tasks.css'],
//     templateUrl: 'pomodoro-tasks.html'
// })
// export class TasksComponent {
//     today: Date;
//     tasks: Task[];
//     queuedPomodoros: number;
//     queueHeaderMapping: any = {
//         '=0': 'No pomodoros',
//         '=1': 'One pomodoro',
//         'other': '# pomodoros'
//     }

//     constructor() {
//         const taskService: TaskService = new TaskService();
//         this.tasks = taskService.taskStore;
//         this.today = new Date()
//         this.updateQueuedPomodoros();
//     }

//     toggleTask(task: Task): void {
//         task.queued = !task.queued;
//         this.updateQueuedPomodoros();
//     }

//     updateQueuedPomodoros(): void {
//         this.queuedPomodoros =
//             this.tasks
//                 .filter((task: Task) => task.queued)
//                 .reduce((pomodoros: number, queuedTask: Task) => {
//                     return pomodoros + queuedTask.pomodoroRequired;
//                 }, 0);
//     }
// };