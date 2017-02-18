import TaskIconsComponent from './task-icons.component';
import TasksComponent from './tasks.component';
import TaskTooltipDirective from './task-tooltip.directive';
import TaskEditorComponent from './task-editor.component';

const TASKS_DIRECTIVES: any[] = [
    TasksComponent,
    TaskTooltipDirective,
    TaskEditorComponent
];
export {
    TASKS_DIRECTIVES,
    TasksComponent,
    TaskTooltipDirective,
    TaskIconsComponent,
    TaskEditorComponent
};