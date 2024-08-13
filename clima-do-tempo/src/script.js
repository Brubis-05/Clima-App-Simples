let chave = "cebcd482eda57fa9a6714c1c2ba91885" /*pego desse site em API call e API key (no codigozinho): https://openweathermap.org/current*/

/*essa função pega as informações que a API pegou e coloca na tela */
function colocarNaTela(dados){
    console.log(dados)

    /*ir no HTML e procura a class "cidade" e troque pelo = (informação a ser trocada) */
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"

}

/*essa função busca a cidade informada pelo usuario e as informações do clima da cidade*/
async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json())
    //esse cod. da API ta em farenheit (que é a temperatura em americano) e pra mudar para graus (temperatura brasileira) é adicionado no final do codigo "&units=metric" (mostrado acima no codigo) o metric é a informação dada pelo proprio site da API

    //"+ cidade +" ta assim para a API pegar a cidade que o usuario for escrever e pegar as informações dela para assim o site ficar dinâmico 

    //await = espere
    //fetcha > ferramenta do JS para acessar servidores
    //then = então
    //JSON = JavaScript Object Notation (o formato que javascrip entende)
    console.log(dados)
    colocarNaTela(dados)
}

/*essa função pega as dados (ou seja a cidade) informada pelo usario no INPUT */
function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}

/*
Clica no BOTÃO
    -> CHAMA A FUNÇÃO cliqueiNoBotao()
    -> Vai no INPUT e pega o que está lá dentro
    -> PASSAR a cidade para o servidor (é pra isso que "+ cidade +" faz)

    Math.floor -> Ferramenta do JavaScript para arredonddar valores
*/
