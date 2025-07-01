import { Component } from '@angular/core';
import { GaleriaProdutosComponent } from './components/galeria-produtos/galeria-produtos.component';

import { NgbdCarouselBasic } from './components/ngbd-carousel-basic/ngbd-carousel-basic.component';
@Component({
  selector: 'app-home',
  imports: [ NgbdCarouselBasic, GaleriaProdutosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
