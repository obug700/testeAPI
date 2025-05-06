function buscarDados() {
    // URL da API pública (retorna dados em formato JSON)
    const url = 'https://jsonplaceholder.typicode.com/posts';
  
    // Fazendo a requisição com fetch
    fetch(url)
      .then(response => {
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error('Erro na resposta da API');
        }
        // Converte a resposta para JSON
        return response.json();
      })
      .then(dados => {
        // Seleciona o elemento onde vamos inserir os dados
        const container = document.getElementById('dados');
  
        // Limpamos qualquer conteúdo anterior
        container.innerHTML = '';
  
        // Exibimos apenas os primeiros 10 posts para não sobrecarregar a tela
        dados.slice(0, 10).forEach(post => {
          // Criamos um elemento HTML para cada post
          const div = document.createElement('div');
          div.className = 'post';
          div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          `;
  
          // Adicionamos o elemento ao container
          container.appendChild(div);
        });
      })
      .catch(error => {
        // Em caso de erro, mostramos a mensagem no console e na tela
        console.error('Ocorreu um erro:', error);
        document.getElementById('dados').innerText = 'Erro ao carregar os dados da API.';
      });
  }