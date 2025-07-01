import { Component } from '@angular/core';
import { ProdutosService } from '../../../../service/produtos.service';

@Component({
  selector: 'app-galeria-produtos',
  imports: [],
  templateUrl: './galeria-produtos.component.html',
})
export class GaleriaProdutosComponent {

  constructor(private produtosService: ProdutosService) { }

  produtos: any[] = [];

  ngOnInit() {
    this.produtos = this.produtosService.getProdutos();
  }



}
