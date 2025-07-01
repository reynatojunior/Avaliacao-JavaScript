import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { NgbdCarouselBasic } from './components/ngbd-carousel-basic/ngbd-carousel-basic.component';
import { GaleriaProdutosComponent } from './components/galeria-produtos/galeria-produtos.component';

@Component({
  selector: 'app-home',
  imports: [NavComponent, NgbdCarouselBasic, GaleriaProdutosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
