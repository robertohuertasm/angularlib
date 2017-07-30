import { Component, Input } from '@angular/core';

@Component({
  selector: 'mymodule-inline',
  template: `
  <div>
    <h1>Inline component</h1>
    <h2 class="title">{{ title }}</h2>
  </div>
  `,
  styles: [`
    div {
      border: 1px solid black;
      padding: 10px;
      margin: 10px;
    }

    .title {
      background-color: green;
      padding: 5px;
    }
  `,
  ],
})
export class InlineComponent {
  @Input() public title = 'I\'m the inline component';
  constructor() { }
}
