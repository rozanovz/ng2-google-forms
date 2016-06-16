import {Component} from '@angular/core';
import {FormElementType} from './app.form-element.lib';
import {FormElement} from './app.from-element';

@Component({
    selector: 'app',
    directives: [FormElement],
    template: `
    <h3>Angular 2 Google Form</h3>
    <form-element *ngFor="let elem of data" [data]="elem" (remove)="handleRemove($event)"></form-element>
    <button (click)="addFormElement()">+</button>`
})
export class AppComponent {
  data = [new FormElementType(`Hey! Question # 0`)];

  addFormElement() {
    this.data = [...this.data, new FormElementType(`Hey! Question # ${this.data.length}`)];
  }

  handleRemove(el) {
    this.data = this.data.filter(item => item !== el);
  }
}
