import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { UsersSearchFilterComponent } from './users-search-filter/users-search-filter.component';
import { UsersSearchStore } from './users-search.store';
import { UsersSearhItemComponent } from './users-search-item/users-searh-item.component';


@Component({
  selector: 'lib-users-search',
  standalone: true,
  imports: [
    CommonModule,
    InfiniteScrollModule,
    UsersSearchFilterComponent,
    UsersSearhItemComponent
  ],
  templateUrl: './users-search.component.html',
  styleUrl: './users-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersSearchStore]
})
export class UsersSearchComponent {
  readonly store = inject(UsersSearchStore);
  readonly users = computed(() => this.store.searchResult().items);

}
