import { Component } from '@angular/core';

@Component({
  selector: 'app-configurazioni',
  template: `
    <div class="component-container">
      <h2>Configurazioni Sistema</h2>
      <p>This component is loaded dynamically via lazy loading.</p>
    </div>
  `,
  styles: [`
    .component-container {
      padding: 20px;
    }
  `]
})
export class ConfigurazioniComponent {}