import { Component, Input } from '@angular/core';

@Component({
  selector: 'mymodule-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent {
  @Input() public title = 'I\'m the template component';
  constructor() {}
}
