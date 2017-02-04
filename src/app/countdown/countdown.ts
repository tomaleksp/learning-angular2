import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'countdown',
    template: '<h1>Time left: {{ seconds }}</h1>',
    styles: ['h1 { color: #900 }'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CountdownComponent{
    @Input() seconds: number; // from parent component
    intervalId: any; //number?
    @Output()
    complete: EventEmitter<any> = new EventEmitter();
    @Output()
    progress: EventEmitter<number> = new EventEmitter();

    constructor(){
        console.log(this.seconds);
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    private tick(): void {
        if(--this.seconds < 1){
            clearInterval(this.intervalId);
            this.complete.emit(null); // emitted when finished countdown
        }
        this.progress.emit(this.seconds);
    }
}