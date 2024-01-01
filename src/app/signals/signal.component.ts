import { NgFor } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCount = computed(() => this.counter() * 2);

  increment() {
    this.counter.update((oldCounter) => oldCounter + 1);
    this.actions.update((action) => {
      action.push('INCREMENT');
      return action;
    });
  }

  decrement() {
    this.counter.update((oldCounter) => oldCounter - 1);
    this.actions.update((action) => {
      action.push('DECREMENT');
      return action;
    });
  }
}
