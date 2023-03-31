class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    
    // validando formulario
    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();
    }
    
    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres.');
        }
        
        return valid;

    }

    camposSaoValidos() {
        let valid = true; // valida se o campo do formulario esta certo

        for(let errorText of this.formulario.querySelectorAll('.error-text')){ // remove a mensagem de erro
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText; // elemento irmao anterior
            
            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" nao pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }
            
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) { //expressão regular conteudo a parte
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e números.');
            valid = false;
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }
        return true;
    }

    criaErro(campo, msg){
        const div = document.createElement('div'); // crio o elemento div no html
        div.innerHTML = msg; // div vai receber o valor da mensagem para exibir
        div.classList.add('error-text'); // div tem uma classe css chamada error-text
        campo.insertAdjacentElement('afterend', div); // definindo onde vai ser exibido a mensagem
    }

}
const valida = new ValidaFormulario();