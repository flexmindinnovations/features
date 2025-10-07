import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-theme-test',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <div class="p-4">
      <p-button label="Test Primary Color" styleClass="p-button-primary"></p-button>
    </div>
  `
})
export class ThemeTestComponent {}