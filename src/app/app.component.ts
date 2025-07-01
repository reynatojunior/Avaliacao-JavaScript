import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './pages/home/components/nav/nav.component';
import { FooterComponent } from './pages/home/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'avaliacao-fullstack';
}
