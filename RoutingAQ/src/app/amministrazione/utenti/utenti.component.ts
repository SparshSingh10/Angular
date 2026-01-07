import { Component } from '@angular/core';

@Component({
  selector: 'app-utenti',
  template: `
    <div class="component-container">
      <h2>Gestione Utenti</h2>
      <p>This component is loaded dynamically via lazy loading.</p>
    </div>
  `,
  styles: [`
    .component-container {
      padding: 20px;
    }
  `]
})
export class UtentiComponent {}