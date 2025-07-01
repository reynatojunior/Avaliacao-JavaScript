import { Component, OnInit } from '@angular/core'; 
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  standalone: true, 
  imports: [
    ReactiveFormsModule, 
    HttpClientModule ,
    CommonModule
  ],
})
export class ContatoComponent implements OnInit { 
  contatoForm!: FormGroup; 

  constructor(private fb: FormBuilder, private http: HttpClient) { } 

  ngOnInit(): void {
    
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]], 
      rua: [{ value: '', disabled: true }], 
      bairro: [{ value: '', disabled: true }],
      cidade: [{ value: '', disabled: true }],
      estado: [{ value: '', disabled: true }],
      assunto: ['']
    });

    
    this.contatoForm.get('cep')?.valueChanges.subscribe(cep => {
      
      if (cep && cep.length === 8 && /^[0-9]+$/.test(cep)) {
        this.buscarCep(cep);
      } else {
        
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
            this.limparEnderecoCampos(); 
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
      
      alert('Formulário enviado com sucesso!');
      this.contatoForm.reset(); 
    } else {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
      this.contatoForm.markAllAsTouched(); 
    }
  }

  onClear(): void {
    this.contatoForm.reset(); 
    this.limparEnderecoCampos(); 
  }
}