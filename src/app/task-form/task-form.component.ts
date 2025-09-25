import { Component, EventEmitter, ChangeDetectionStrategy, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="addTask()" class="pixel-form">
      <input
        [(ngModel)]="newTask"
        name="taskInput"
        type="text"
        placeholder="Ej: Comprar leche..."
        aria-label="Nueva tarea"
        required
      />
      <button type="submit" class="btn-add">➕ Añadir</button>
    </form>
  `,
  styles: [`
    .pixel-form {
      display: flex;
      gap: 12px;
      margin-bottom: 24px;
    }
    .pixel-form input {
      flex: 1;
      padding: 14px;
      font-size: 1rem;
      border: 2px solid #ddd;
      border-radius: 8px;
      outline: none;
    }
    .pixel-form input:focus {
      border-color: #4a6cf7;
    }
    .btn-add {
      padding: 14px 20px;
      background: #00c853;
      color: white;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    .btn-add:hover {
      background: #009624;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFormComponent {
  newTask = '';
  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim()) {
      this.taskAdded.emit(this.newTask.trim());
      this.newTask = '';
    }
  }
}
