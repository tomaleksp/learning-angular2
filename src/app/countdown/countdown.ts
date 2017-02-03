import { Component, Input } from '@angular/core'

@Component({
    selector: 'countdown',
    template: '<h1>Time left: {{ seconds }}</h1>'
})
export class CountdownComponent{
    @Input() seconds: number; // from parent component
    intervalId: any; //number?

    constructor(){
        console.log(this.seconds);
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    private tick(): void {
        if(--this.seconds < 1){
            clearInterval(this.intervalId);
        }
    }
}