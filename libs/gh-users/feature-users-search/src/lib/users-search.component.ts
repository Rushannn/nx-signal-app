import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersSearchFilterComponent } from './users-search-filter/users-search-filter.component';
import { UsersSearchListComponent } from './users-search-list/users-search-list.component';
import { UsersSearchStore } from './users-search.store';

@Component({
  selector: 'lib-users-search',
  standalone: true,
  imports: [
    CommonModule,
    UsersSearchFilterComponent,
    UsersSearchListComponent
  ],
  template: `
  <lib-users-search-filter
  [searchParams]="store.searchParams()"
  (paramsChange)="store.updateSearchParams($event)"
  ></lib-users-search-filter>
  <lib-users-search-list></lib-users-search-list>`,
  styleUrl: './users-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersSearchStore]
})
export class UsersSearchComponent {
  readonly store = inject(UsersSearchStore);
}
