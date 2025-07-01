import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdutosService } from '../../../../service/produtos.service';
@Component({
	selector: 'ngbd-carousel-basic',
	imports: [NgbCarouselModule],
	templateUrl: './ngbd-carousel-basic.component.html',
})
export class NgbdCarouselBasic {

	constructor(private produtosService: ProdutosService) { }

	produto: any[] = [];

	ngOnInit() {
		this.produto = this.produtosService.getProdutos();
		console.log(this.produto[0].imagem);
	}



}