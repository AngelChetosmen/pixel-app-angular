import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TaskFormComponent, TaskListComponent],
  template: `
    <app-header></app-header>
    <main class="container">
      <app-task-form (taskAdded)="onTaskAdded($event)"></app-task-form>
      <app-task-list
        [tasks]="tasks()"
        (taskToggled)="onTaskToggled($event)"
        (taskDeleted)="onTaskDeleted($event)">
      </app-task-list>
    </main>
  `,
  styles: [`
    .container {
      max-width: 650px;
      margin: 0 auto;
      padding: 20px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  tasks = signal<{ text: string; completed: boolean }[]>([]);

  onTaskAdded(text: string) {
    this.tasks.update(tasks => [...tasks, { text, completed: false }]);
  }

  onTaskToggled(index: number) {
    this.tasks.update(tasks => {
      const newTasks = [...tasks];
      newTasks[index] = { ...newTasks[index], completed: !newTasks[index].completed };
      return newTasks;
    });
  }

  onTaskDeleted(index: number) {
    this.tasks.update(tasks => tasks.filter((_, i) => i !== index));
  }
}
