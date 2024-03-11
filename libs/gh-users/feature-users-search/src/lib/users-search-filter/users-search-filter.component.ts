import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { LanguagesMap, SearchParams } from '@gh-users/data-access';


@Component({
  selector: 'lib-users-search-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelectModule,
    MatIcon,
  ],
  templateUrl: './users-search-filter.component.html',
  styleUrl: './users-search-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearchFilterComponent {
  readonly searchParams = input<SearchParams>({
    query: '',
    languages: [],
  });

  languagesMap = Object.values(LanguagesMap);

  @Output() readonly paramsChange = new EventEmitter<SearchParams>();

  onQueryChange(query: string): void {
    const newSearchParams: SearchParams = {
      query: query.trim().toLowerCase(),
      languages: this.searchParams()?.languages
    };
    this.paramsChange.emit(newSearchParams);
  }

  onLanguageChange(languages: string[]): void {
    const newSearchParams: SearchParams = {
      query: this.searchParams()?.query,
      languages
    };
    this.paramsChange.emit(newSearchParams);
  }

}
