import { Component } from '@angular/core';
import { ProdutosService } from '../../../../service/produtos.service';
import { CardProdutoComponent } from '../card-produto/card-produto.component';

@Component({
  selector: 'app-galeria-produtos',
  imports: [CardProdutoComponent],
  templateUrl: './galeria-produtos.component.html',
  styleUrls: ['./galeria-produtos.component.css'],
})
export class GaleriaProdutosComponent {

  constructor(private produtosService: ProdutosService) { }

  produtos: any[] = [];

  ngOnInit() {
    this.produtos = this.produtosService.getProdutos();
  }



}
