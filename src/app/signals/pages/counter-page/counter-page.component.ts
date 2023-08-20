import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {


  public counter: WritableSignal<number> = signal(10);
  public squareCounter: Signal<number> = computed( () => this.counter() * this.counter());

  increaseBy(value: number){
    // this.counter.set(this.counter() + value);
    this.counter.update(current => current + value)
  }

}
