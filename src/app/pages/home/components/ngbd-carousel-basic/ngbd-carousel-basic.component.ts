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

	// images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

	// images = ["./img/monitor.png",
	// 	 "./img/notebook.png",
	// 	 "./img/phone.png",
	// 	 "./img/smartphone.png",
	// 	 "./img/teclado.png",
	produto: any[] = [];

	ngOnInit() {
		this.produto = this.produtosService.getProdutos();
		console.log(this.produto[0].imagem);
	}



}