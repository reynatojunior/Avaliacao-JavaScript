import { Component, OnInit } from '@angular/core'; // Importe OnInit
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importe HttpClientModule
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Mantenha ReactiveFormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  standalone: true, // Garante que é um componente standalone
  imports: [
    ReactiveFormsModule, // Necessário para usar formGroup e formControlName
    HttpClientModule, // Necessário para usar HttpClient
    CommonModule
  ],
})
export class ContatoComponent implements OnInit { // Implemente OnInit
  contatoForm!: FormGroup; // Declare o FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient) { } // Injete FormBuilder e HttpClient

  ngOnInit(): void {
    // Inicialize o FormGroup aqui, no ngOnInit, pois é o momento certo
    // para configurar dados de inicialização do componente.
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]], // Adicione validação para o CEP
      rua: [{ value: '', disabled: true }], // Campos readonly devem ser disabled no FormGroup
      bairro: [{ value: '', disabled: true }],
      cidade: [{ value: '', disabled: true }],
      estado: [{ value: '', disabled: true }],
      assunto: ['']
    });

    // Subscriba-se às mudanças no campo CEP para acionar a busca
    this.contatoForm.get('cep')?.valueChanges.subscribe(cep => {
      // Garante que o CEP tem 8 dígitos e é composto apenas por números
      if (cep && cep.length === 8 && /^[0-9]+$/.test(cep)) {
        this.buscarCep(cep);
      } else {
        // Limpa os campos de endereço se o CEP for inválido ou incompleto
        this.limparEnderecoCampos();
      }
    });
  }

  buscarCep(cep: string) {
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
      .subscribe({
        next: (data: any) => {
          if (!data.erro) {
            this.contatoForm.patchValue({
              rua: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf
            });
          } else {
            alert('CEP não encontrado.');
            this.limparEnderecoCampos(); // Limpa se o CEP não for encontrado
          }
        },
        error: (error) => {
          console.error('Erro ao buscar CEP:', error);
          alert('Erro ao buscar CEP. Tente novamente.');
          this.limparEnderecoCampos();
        }
      });
  }

  limparEnderecoCampos(): void {
    this.contatoForm.patchValue({
      rua: '',
      bairro: '',
      cidade: '',
      estado: ''
    });
  }

  onSubmit(): void {
    if (this.contatoForm.valid) {
      console.log('Formulário enviado:', this.contatoForm.value);
      // Aqui você pode enviar os dados para seu backend ou fazer outras ações
      alert('Formulário enviado com sucesso!');
      this.contatoForm.reset(); // Opcional: Limpa o formulário após o envio
    } else {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
      this.contatoForm.markAllAsTouched(); // Marca todos os campos como "touched" para exibir erros
    }
  }

  onClear(): void {
    this.contatoForm.reset(); // Limpa o formulário
    this.limparEnderecoCampos(); // Garante que os campos de endereço também são limpos
  }
}