import { Directive, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'child-selector',
  templateUrl: './child.component.html'
})
export class ChildComponent {  
	@Input() title1:string;
	@Input() dataarr;
	title = 'Search Your Restorant';
	@Output() notify: EventEmitter<string> = new EventEmitter<string>();

	onClick() {
	  this.notify.emit({hello:"it is done"});
	}
}