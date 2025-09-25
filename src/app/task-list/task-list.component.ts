import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pixel-list">
      <h2>Tareas ({{ tasks.length }})</h2>
      <ng-container *ngIf="tasks.length === 0; else list">
        <div class="empty-state">
          <div class="pixel-icon">📝</div>
          <p>Aún no tienes tareas.<br>¡Agrega tu primera tarea!</p>
        </div>
      </ng-container>

      <ng-template #list>
        <ul>
          <li *ngFor="let task of tasks; let i = index"
              class="task-item"
              [class.completed]="task.completed">
            <input
              type="checkbox"
              [checked]="task.completed"
              (change)="onToggle(i)"
              class="pixel-checkbox"
            />
            <span class="task-text">{{ task.text }}</span>
            <button (click)="onDelete(i)" class="btn-delete" aria-label="Eliminar">
              ✕
            </button>
          </li>
        </ul>
      </ng-template>
    </div>
  `,
  styles: [`
    .pixel-list h2 {
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: #333;
    }
    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: #777;
    }
    .pixel-icon {
      font-size: 3rem;
      margin-bottom: 16px;
    }
    .task-item {
      display: flex;
      align-items: center;
      padding: 14px;
      background: white;
      border: 2px solid #f0f0f0;
      border-radius: 10px;
      margin-bottom: 12px;
    }
    .task-item.completed {
      opacity: 0.8;
    }
    .pixel-checkbox {
      width: 20px;
      height: 20px;
      margin-right: 14px;
      cursor: pointer;
    }
    .task-text {
      flex: 1;
      font-size: 1.1rem;
      color: #333;
    }
    .task-item.completed .task-text {
      text-decoration: line-through;
      color: #888;
    }
    .btn-delete {
      background: none;
      border: none;
      font-size: 1.6rem;
      color: #ff5252;
      cursor: pointer;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    .btn-delete:hover {
      background: #ffebee;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
  @Input() tasks: { text: string; completed: boolean }[] = [];
  @Output() taskToggled = new EventEmitter<number>();
  @Output() taskDeleted = new EventEmitter<number>();

  onToggle(index: number) {
    this.taskToggled.emit(index);
  }

  onDelete(index: number) {
    this.taskDeleted.emit(index);
  }
}
