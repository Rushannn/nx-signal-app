import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersSearchFilterComponent } from './users-search-filter/users-search-filter.component';
import { UsersSearchListComponent } from './users-search-list/users-search-list.component';

@Component({
  selector: 'lib-users-search',
  standalone: true,
  imports: [
    CommonModule,
    UsersSearchFilterComponent,
    UsersSearchListComponent
  ],
  templateUrl: './users-search.component.html',
  styleUrl: './users-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearchComponent {}
