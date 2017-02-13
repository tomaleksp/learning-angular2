import { Queueable } from './queuable';

export interface Task extends Queueable{
    name: string;
    deadline: Date;
    pomodoroRequired: number;
}

export default Task;