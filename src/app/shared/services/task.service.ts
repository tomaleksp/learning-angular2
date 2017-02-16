import { Task } from '../shared';
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export default class TaskService {
    taskStore: Task[] = [];
    taskFeed: Observable<Task>;
    private taskObserver: any;
    private dataUrl = '/app/shared/data/raw-tasks.json';

    constructor(private http: Http) {
        this.taskFeed = new Observable(
            observer => {
                this.taskObserver = observer;
            });
        this.fetchTasks();

        // this.taskStore = tasks.map(task => {
        //     return {
        //         name: task.name,
        //         deadline: new Date(task.deadline),
        //         queued: false,
        //         pomodoroRequired: task.pomodorosRequired
        //     };
        // });
    } // constructor

    private fetchTasks(): void{
        this.http.get(this.dataUrl)
            .map(response => response.json())
            .map(stream => stream.map(res => {
                return {
                    name: res.name,
                    deadline: new Date(res.deadline),
                    pomodoroRequired: res.pomodorosRequired,
                    queued: res.queued
                }
            }))
            .subscribe(
                tasks => {
                    this.taskStore = tasks;
                    tasks.forEach(task => this.taskObserver.next(task))
                },
                error => console.log(error)
            );
    }

    addTask(task: Task){
        this.taskObserver.next(task);
    }
}