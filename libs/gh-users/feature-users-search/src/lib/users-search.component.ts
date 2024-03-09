import { ChangeDetectionStrategy, Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersSearchFilterComponent } from './users-search-filter/users-search-filter.component';
import { UsersSearchListComponent } from './users-search-list/users-search-list.component';
import { UsersSearchStore } from './users-search.store';
import { UsersSearhItemComponent } from './users-search-item/users-searh-item.component';

@Component({
  selector: 'lib-users-search',
  standalone: true,
  imports: [
    CommonModule,
    UsersSearchFilterComponent,
    UsersSearchListComponent,
    UsersSearhItemComponent
  ],
  template: `
  <lib-users-search-filter
  [searchParams]="store.searchParams()"
  (paramsChange)="store.updateSearchParams($event)"
  ></lib-users-search-filter>

  @for (user of users(); track user) {
  <lib-users-searh-item
    [user]="user"
  ></lib-users-searh-item>
  }
`,
  styleUrl: './users-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersSearchStore]
})
export class UsersSearchComponent {
  readonly store = inject(UsersSearchStore);
  readonly users = computed(() => this.store.searchResult().items);
}
