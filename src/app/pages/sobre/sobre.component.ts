import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})

export class SobreComponent implements OnInit {
  currentSlide = 0;
  carouselItems = [
    { 
      image: 'https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_tecnologia-da-informacao1.jpg',
      caption: 'Nosso time de atendimento, sempre pronto para ajudar'
    },
    { 
      image: 'https://www.intelipost.com.br/wp-content/uploads/2018/11/original-1cabaede22acaac039b68a8e33a6dfb6.jpg',
      caption: 'Setor de embalagem, cuidando com carinho de cada pedido'
    },
    { 
      image: 'assets/images/team/team3.jpg',
      caption: 'Nossa equipe de tecnologia, mantendo a plataforma sempre no ar'
    }
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}