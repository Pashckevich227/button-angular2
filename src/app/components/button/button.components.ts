import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
selector: 'button-component',
templateUrl: './button.components.html'
})
export class ButtonComponent {
@Input() name: string = '';
@Output() successChanged = new EventEmitter<any>()

title = 'button'
isLoading: boolean = false

constructor() {}

toggleButton () {
this.isLoading = true

setTimeout(() => {
this.isLoading = false
this.successChanged.emit()
}, 3000);
}
}