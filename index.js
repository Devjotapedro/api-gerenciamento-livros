const express = require('express');
// instanciando o express
const app = express();
// importando o dotenv
const dotenv = require('dotenv');
// configurando as variaveis
dotenv.config();
// criando a porta
const port = process.env.PORTA;
// configurando o middleware
app.use(express.json());

// bd
const bancoDeDados = [];

// rota para listar os livros
app.get('/livros', (req, res) => {
    res.json(bancoDeDados);
  });

  // rota para cadastrar os livros
app.post('/livros', (req, res) => {

  // passando na requisicao o id, título, autor, ano de publicação, gênero e sinopse
      const { id, titulo, autor, anoPublicacao, genero, sinopse } = req.body;
    // adicionando à variavel os dados enviados no body
    const novoLivro = {id, titulo, autor, anoPublicacao, genero, sinopse};
    // adicionando ao array
    bancoDeDados.push(novoLivro);
     // resposta de sucesso 
        res.status(201).json({mensagem: "Livro cadastrado com sucesso"});
})



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});