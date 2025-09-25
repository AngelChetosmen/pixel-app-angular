import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="pixel-header">
      <h1>✨ Pixel Tasks</h1>
      <p>Organiza tu día con estilo retro</p>
    </header>
  `,
  styles: [`
    .pixel-header {
      text-align: center;
      margin-bottom: 30px;
      padding: 20px;
      background: #4a00e0;
      color: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .pixel-header h1 {
      font-size: 2.4rem;
      margin: 0 0 10px;
      font-weight: 700;
      text-shadow: 2px 2px 0 #000;
    }
    .pixel-header p {
      font-size: 1.1rem;
      opacity: 0.9;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
