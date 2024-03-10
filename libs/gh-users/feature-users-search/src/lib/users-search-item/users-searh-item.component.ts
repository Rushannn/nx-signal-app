import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '@gh-users/data-access';


@Component({
  selector: 'lib-users-searh-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './users-searh-item.component.html',
  styleUrl: './users-searh-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearhItemComponent {
  @Input() user!:User;
}
