let nomeUsuario = prompt ("Insira o seu nome.");
alert (`Olá, ${nomeUsuario}, Bem vindo!`)

let idade;
do{
    idade = prompt ("Insira a sua idade.")
}while(isNaN(idade) || idade <= 0 )
