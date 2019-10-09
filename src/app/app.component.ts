import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container" [ngClass]="{disabled: isDisabled}"></div>
    <block [blockStyles]="{}"></block>
  `,
  styles: []
})
export class AppComponent {
  isDisabled = false;
}
