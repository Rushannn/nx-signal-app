import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-users-search-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-search-filter.component.html',
  styleUrl: './users-search-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearchFilterComponent {}
