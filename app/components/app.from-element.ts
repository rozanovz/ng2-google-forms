import {Component, Input, EventEmitter, Output, OnInit} from '@angular/core';
import {FormElementType} from './app.form-element.lib';
import {FormTextAnswer} from './app.form-lement.text-answer';
import {FormSingleAnswer} from './app.form-lement.single-answer';
import {FormMultipleAnswer} from './app.form-lement.multiple-answer';

@Component({
    selector: 'form-element',
    directives: [FormTextAnswer, FormSingleAnswer, FormMultipleAnswer],
    template: `
    <div>
		<div>
			<input [(ngModel)]="_data.question" type="text" placeholder="Provide Your Question"/>
			<select [(ngModel)]="_data.type">
	         	<option *ngFor="let type of types" [value]="type.id">{{type.txt}}</option>
	        </select>
	    </div>
	    <div>
			<div *ngIf="_data.type == 'text'">
				<from-text-answer></from-text-answer>
			</div>
			<div *ngIf="_data.type == 'single'">
				<from-single-answer></from-single-answer>
			</div>
			<div *ngIf="_data.type == 'multiple'">
				<from-multiple-answer></from-multiple-answer>
			</div>
	    </div>
	    <div>
			<button (click)="handleRemoveClick()">Remove</button>
	    </div>
    </div>
    `
})
export class FormElement {
	@Input() data: FormElementType;
	
	@Output() remove = new EventEmitter();

	private types = [
		{ id: 'text', txt: 'Text Answer'},
		{ id: 'single', txt: 'Radio Answer'},
		{ id: 'multiple', txt: 'Checkboxes Answer'}
	];

	private _data = {};

	handleRemoveClick() {
		this.remove.emit(this.data);
	};

	ngOnInit() {
	    this._data = Object.assign({}, this.data);
	}
}
