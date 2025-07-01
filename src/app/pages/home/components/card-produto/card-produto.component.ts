import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  imports: [],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {


  @Input() produto: string = "";
  @Input() preco: any = "";
  @Input() detalhe: string = "";
  @Input() imagem: string = "";
  

}
