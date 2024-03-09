import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@gh-users/data-access';

@Component({
  selector: 'lib-users-searh-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-searh-item.component.html',
  styleUrl: './users-searh-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearhItemComponent {
  @Input() user!:User;
  // readonly user = input<User>()
}
