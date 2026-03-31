let pesoImc = document.getElementById("peso")
let alturaImc = document.getElementById("altura")
let resultado = document.getElementById("resultado-imc")
let classificacao = document.getElementById("classificacao")
let btn = document.getElementById("btn")
let form = document.getElementById("form-val")

form.addEventListener("submit", (event) => {
    
    event.preventDefault()
     
    const erro = document.getElementById("erro")
    const peso = parseFloat(pesoImc.value)
    const altura = parseFloat(alturaImc.value)

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        erro.hidden = false
        return
    }

    erro.hidden = true

    const alturaMetros = altura / 100
    const imc = peso / (alturaMetros * alturaMetros)
    
    resultado.textContent = `Seu IMC: ${imc.toFixed(2)}`

    if (imc < 18.5)
    {
        classificacao.textContent = "Sua Classificação é: Abaixo do Peso"
    }
    else if (imc < 25)
    {
        classificacao.textContent = "Sua Classificação é: Peso Normal"
    }
    else if (imc < 30)
    {
        classificacao.textContent = "Sua Classificação é: Sobrepeso"
    }
    else if (imc < 35)
    {
        classificacao.textContent = "Sua Classificação é: Obesidade Grau 1"
    }
    else if (imc < 40)
    {
        classificacao.textContent = "Sua Classificação é: Obesidade Grau 2"
    }
    else
    {
        classificacao.textContent = "Sua Classificação é: Obesidade Grau 3"
    }

    const ponteiro = document.getElementById("ponteiro")

    const imcMin = 10
    const imcMax = 40
    const anguloMin = -90
    const anguloMax = 90

    const angulo = ((imc - imcMin) / (imcMax - imcMin)) * (anguloMax - anguloMin) + anguloMin
    const anguloLimitado = Math.min(Math.max(angulo, anguloMin), anguloMax)
    const rad = (anguloLimitado * Math.PI) / 180

    const x2 = 100 + 80 * Math.sin(rad)
    const y2 = 100 - 80 * Math.cos(rad)

    ponteiro.setAttribute("x2", x2)
    ponteiro.setAttribute("y2", y2)
})

