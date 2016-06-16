import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from "@angular/common";
import {RadioControlValueAccessor} from "./radio_value_accessor";

@Component({
    selector: 'from-single-answer',
	directives: [FORM_DIRECTIVES,RadioControlValueAccessor],
    template: `
		<div>
			<div *ngFor="let option of options, let i = index">
				<label>
					<input type="radio"  [(ngModel)]="model.text" name="text" [value]="option.checked"/>
					<span>{{option.text}}</span>
				</label>
				<button (click)="removeOption(option)">X</button>
			</div>

			<div>
				<button (click)="addOption()">Add Option</button>
			</div>
		</div>
    `
})
export class FormSingleAnswer {
	model;
    constructor() {
      	this.model = {
	    	text: "Option # 1"
	    };
    }

	private options = [
		{
			checked: false,
			text: "Option # 1"
		},{
			checked: false,
			text: "Option # 2"
		},{
			checked: false,
			text: "Option # 3"
		}
	]

	addOption(){
		this.options = [...this.options, {checked: false, text: `Option # ${this.options.length}`}];
	}

	removeOption(option) {
		this.options = this.options.filter(item => item !== option)
	}
}
