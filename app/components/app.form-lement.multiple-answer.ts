import {Component} from '@angular/core';

@Component({
    selector: 'from-multiple-answer',
    template: `
		<div>
			<ul>
				<li *ngFor="let option of options">
					<label>
						<input type="checkbox" [value]="option"/>
						<span>{{option}}</span>
					</label>
					<button (click)="removeOption(option)">X</button>
				</li>
			</ul>

			<div>
				<button (click)="addOption()">Add Option</button>
			</div>
		</div>
    `
})
export class FormMultipleAnswer {
	private options = [
		"0"
	]

	addOption(){
		this.options = [...this.options, `Option # ${this.options.length}`];
	}

	removeOption(option){
		this.options = this.options.filter(item => item !== option)
	}
}
