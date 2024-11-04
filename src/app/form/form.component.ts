import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  submitted: boolean = false;
  errors: { [key: string]: string } = {}; // A chave é uma string

  onSubmit() {
    this.submitted = true;
    this.errors = {};

    if (!this.nome) {
      this.errors['nome'] = 'Nome é obrigatório.'; // Usando a notação de colchetes
    }

    if (!this.email) {
      this.errors['email'] = 'Email é obrigatório.'; // Usando a notação de colchetes
    } else if (!/\S+@\S+\.\S+/.test(this.email)) {
      this.errors['email'] = 'Email inválido.'; // Usando a notação de colchetes
    }

    if (!this.senha) {
      this.errors['senha'] = 'Senha é obrigatória.'; // Usando a notação de colchetes
    } else if (this.senha.length < 6) {
      this.errors['senha'] = 'A senha deve ter pelo menos 6 caracteres.'; // Usando a notação de colchetes
    }

    if (Object.keys(this.errors).length === 0) {
      console.log('Formulário enviado:', {
        nome: this.nome,
        email: this.email,
        senha: this.senha,
      });
      // Aqui você pode fazer o que quiser com os dados do formulário, como enviar para um servidor
    }
  }
}
