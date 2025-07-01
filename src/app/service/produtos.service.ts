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
    { id: 6, produto: 'Mouse', preço: 100, detalhe: 'Mouse Gamer Logitech', imagem: 'mouse.jpg' },
    { id: 7, produto: 'Impressora', preço: 600, detalhe: 'Impressora Multifuncional HP', imagem: 'impressora.jpg' },
    { id: 8, produto: 'Webcam', preço: 200, detalhe: 'Webcam Logitech C920', imagem: 'webcam.jpg' },
    { id: 9, produto: 'Roteador', preço: 250, detalhe: 'Roteador TP-Link Archer A7', imagem: 'roteador.jpg' },
    { id: 10, produto: 'SSD', preço: 400, detalhe: 'SSD Kingston A2000 500GB', imagem: 'ssd.jpg' },
    { id: 11, produto: 'HD Externo', preço: 350, detalhe: 'HD Externo Seagate 1TB', imagem: 'hd_externo.jpg' },
    { id: 12, produto: 'Cadeira Gamer', preço: 800, detalhe: 'Cadeira Gamer DXRacer', imagem: 'cadeira_gamer.jpg' },
    { id: 13, produto: 'Caixa de Som', preço: 450, detalhe: 'Caixa de Som Bluetooth JBL Flip 5', imagem: 'caixa_som.jpg' },
    { id: 14, produto: 'Carregador Portátil', preço: 120, detalhe: 'Carregador Portátil Anker PowerCore', imagem: 'carregador_portatil.jpg' },
    { id: 15, produto: 'Suporte para Notebook', preço: 80, detalhe: 'Suporte para Notebook Ajustável', imagem: 'suporte_notebook.jpg' }
  ];


}
