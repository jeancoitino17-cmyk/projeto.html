let chaveIa = "gsk_6afA6G1JN4kz6R218uLNWGdyb3FYR0hcTim8twHBkfkIwzhKuel"

async function cliqueiNoBotao() {
  // Ajustado para buscar exatamente a classe "intput-cidade" que está no seu HTML
  let cidade = document.querySelector(".intput-cidade").value
  let caixa = document.querySelector(".Caixa-Media")
  let Chave = "4f97eb14d1c3a8982db6e1843064eca4"


  let endereco = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${Chave}&units=metric&lang=pt_br`

  // Primeiro busca a resposta do servidor
  let respostaservidor = await fetch(endereco)

  // Depois traduz a resposta para JSON
  let dadosJson = await respostaservidor.json()

  console.log(dadosJson)


  caixa.innerHTML = `
   <h2 class="Cidade">${dadosJson.name}</h2>
   <p class="temp">${Math.floor(dadosJson.main.temp)}°C</p>
   <img class="icone" src="https://openweathermap.org/img/wn/${dadosJson.weather[0].icon}.png">
   <p class="umidade">Umidade: ${dadosJson.main.humidity}%</p>
   <button class="botao-ia" onclick="pedirsugestaoRoupa()">Sugestão de roupa</button>
   <p class="resposta-ia">Resposta da Ia </p>
  `
}

function detctavoz() {

  let reconhecimento = new window.webkitSpeechRecognition()
  reconhecimento.lang = "pt-BR"
  reconhecimento.start()

  reconhecimento.onresult = function (evento) {
    let textotransCrito = evento.results[0][0].transcript
    document.querySelector(".intput-cidade").value = textotransCrito
    cliqueiNoBotao()
  }
}

async function pedirsugestaoRoupa() {
  let temperatura = document.querySelector(".temp").textContent
  let umidade = document.querySelector(".umidade").textContent
  let cidade = document.querySelector(".Cidade").textContent


  let resposta = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + chaveIa

    },
    body: JSON.stringify({
       model: "meta-llama/llama-4-scout-17b-16e-instruct",
      "messages": [
        {
          "role": "user",
          "content": `Me dê uma sugestão de qual roupa usar hoje. 
            Estou na cidade de : ${cidade}, a temperatura atual é: ${temperatura}
            e a umidade está em: ${umidade}.
           Me de sugestões em 2 frases custas 
          `
        },
      ]
    })
  })
   let dados = await resposta.json()
   document.querySelector(".resposta-ia").innerHTML = dados.choices[0].message.content
   console.log(dados)

}