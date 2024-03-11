import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent
  ],
  selector: 'nx-signal-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-signal-app';
}
