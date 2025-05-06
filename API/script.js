// Substitua 'SUA_API_KEY_AQUI' pela sua chave real da OpenWeatherMap
const apiKey = '66dd2f80124393ecb9e61b0405a9431b';

// Função chamada ao clicar no botão "Buscar"
function buscarTemperatura() {
  // Pega a cidade digitada pelo usuário
  const cidade = document.getElementById('cidade').value;

  // Verifica se o campo não está vazio
  if (!cidade) {
    alert("Por favor, digite o nome de uma cidade.");
    return;
  }

  // Monta a URL da API com base na cidade e na chave
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)}&appid=${apiKey}&lang=pt_br&units=metric`;

  // Faz a requisição à API usando fetch
  fetch(url)
    .then(response => {
      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error("Cidade não encontrada");
      }
      return response.json();
    })
    .then(data => {
      // Extrai os dados necessários da resposta JSON
      const temperatura = data.main.temp; // Temperatura em graus Celsius
      const descricao = data.weather[0].description; // Descrição do tempo

      // Exibe o resultado ao usuário
      document.getElementById('resultado').innerHTML = 
        `${data.name} - ${temperatura.toFixed(1)}°C - ${descricao}`;
    })
    .catch(error => {
      // Caso ocorra algum erro, exibe uma mensagem
      document.getElementById('resultado').innerText = "Erro: " + error.message;
    });
}