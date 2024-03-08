import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-users-search-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-search-list.component.html',
  styleUrl: './users-search-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearchListComponent {}
