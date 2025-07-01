import { Component } from '@angular/core';

import { NgbdCarouselBasic } from './components/ngbd-carousel-basic/ngbd-carousel-basic.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-home',
  imports: [ NgbdCarouselBasic, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
