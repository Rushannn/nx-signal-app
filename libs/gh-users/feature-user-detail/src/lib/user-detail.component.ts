import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { UserDetailStore } from './user-detail.store';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserDetailStore]
})
export class UserDetailComponent {

  @Input()
  set login(username: string | undefined) {
    this.userDetailStore.getUser(username);
  }

  readonly userDetailStore = inject(UserDetailStore);

  readonly userData = this.userDetailStore.userProfile;
  readonly status = this.userDetailStore.status;

}
