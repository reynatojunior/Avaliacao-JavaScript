import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() {  }

  produtos = [
    { id: 1, produto: 'Notebook', preço: 3500, detalhe: 'Notebook Dell Inspiron 15', imagem: 'notebook.jpg' },
    { id: 2, produto: 'Smartphone', preço: 2200, detalhe: 'Smartphone Samsung Galaxy S21', imagem: 'smartphone.jpg' },
    { id: 3, produto: 'Fone de Ouvido', preço: 300, detalhe: 'Fone Bluetooth JBL', imagem: 'fone.jpg' },
    { id: 4, produto: 'Monitor', preço: 900, detalhe: 'Monitor LG 24"', imagem: 'monitor.jpg' },
    { id: 5, produto: 'Teclado', preço: 150, detalhe: 'Teclado Mecânico Redragon', imagem: 'teclado.jpg' },
  ];


}
