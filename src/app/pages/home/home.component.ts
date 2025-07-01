import { Component } from '@angular/core';

import { NgbdCarouselBasic } from './components/ngbd-carousel-basic/ngbd-carousel-basic.component';
@Component({
  selector: 'app-home',
  imports: [ NgbdCarouselBasic],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
