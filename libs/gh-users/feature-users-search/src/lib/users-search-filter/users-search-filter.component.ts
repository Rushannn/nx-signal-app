import { ChangeDetectionStrategy, Component, EventEmitter, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { LanguagesMap } from '@gh-users/data-access';
import { CommonModule } from '@angular/common';

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
  readonly query = input('');
  readonly order = input<any>('asc');

  public languagesMap = Object.values(LanguagesMap);

  @Output() readonly queryChange = new EventEmitter<string>();
  @Output() readonly orderChange = new EventEmitter<any>();

  onQueryChange(query: string) {
    this.queryChange.emit(query.trim().toLowerCase());
  }

  onChange(event:any){
    console.log('event', event)
  }
}
