function carregar() {
    var texto = window.document.getElementById('texto')
    var sexo = '';
    var idade = window.document.getElementById('idade').value
    idade = parseInt(idade)
    if (window.document.getElementById('homem').checked) {
        var sexo = 'homem';
    } else if (window.document.getElementById('mulher').checked) {
        var sexo = 'mulher';
    }
    texto.innerText = 'Você é um ' + sexo + ' com ' + idade + ' anos de idade'
    if (sexo == 'homem') {
        texto.innerText = 'Você é um ' + sexo + ' com ' + idade + ' anos de idade'
    } else if (sexo =='mulher') {
        texto.innerText = 'Você é uma ' + sexo + ' com ' + idade + ' anos de idade'
    }
    var img = window.document.getElementById('imagem')
    if (idade > 0 && idade <= 12) {
        if (sexo == 'homem'){
            img.src = 'kidboy.jpg'
        } else if (sexo == 'mulher') {
            img.src = 'kidgirl.jpg'
        }
    } else if (idade > 12 && idade < 50){
        if (sexo == 'homem') {
            img.src = 'youngman.jpg'
        } else if (sexo == 'mulher') {
            img.src = 'youngwoman.jpg'
        }
    } else if (idade >= 50 && idade < 150) {
        if (sexo == 'homem') {
            img.src = 'oldman.jpg'
        } else if (sexo == 'mulher'){
            img.src = 'oldwoman.jpg'
        }
    } else {
        texto.innerText = 'Não deve estar vivo'
    }
}
