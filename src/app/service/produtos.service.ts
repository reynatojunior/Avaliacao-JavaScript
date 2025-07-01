import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() {  }

  produtos = [
    { id: 1, produto: 'Notebook', preço: 3500, detalhe: 'Notebook Dell Inspiron 15', imagem: '/img/notebook.png' },
    { id: 2, produto: 'Smartphone', preço: 2200, detalhe: 'Smartphone Samsung Galaxy S21', imagem: '/img/smartphone.png' },
    { id: 3, produto: 'Fone de Ouvido', preço: 300, detalhe: 'Fone Bluetooth JBL', imagem: '/img/phone.png' },
    { id: 4, produto: 'Monitor', preço: 900, detalhe: 'Monitor LG 24"', imagem: '/img/monitor.png' },
    { id: 5, produto: 'Teclado', preço: 150, detalhe: 'Teclado Mecânico Redragon', imagem: '/img/teclado.png' },
  ];

  getProdutos() {
    return this.produtos;
  }

}
