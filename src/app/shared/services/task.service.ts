import { Task } from '../shared';
import { Injectable } from '@angular/core'

@Injectable()
export default class TaskService {
    public taskStore: Array<Task> = [];
    constructor() {
        const tasks = [
            {
                name: "Code an HTML Table",
                deadline: "Jun 23 2016",
                pomodorosRequired: 1
            }, {
                name: "Sketch a wireframe for the new homepage",
                deadline: "Jun 24 2017",
                pomodorosRequired: 2
            }, {
                name: "Style table with Bootstrap styles",
                deadline: "Jun 25 2017",
                pomodorosRequired: 1
            }, {
                name: "Reinforce SEO with custom sitemap.xml",
                deadline: "Jun 26 2017",
                pomodorosRequired: 3
            }
        ];

        this.taskStore = tasks.map(task => {
            return {
                name: task.name,
                deadline: new Date(task.deadline),
                queued: false,
                pomodoroRequired: task.pomodorosRequired
            };
        });
    }
}