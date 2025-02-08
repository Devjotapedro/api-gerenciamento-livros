# API de Gerenciamento de Livros

Esta é uma API simples desenvolvida com **Node.js** e **Express.js** que permite gerenciar um banco de dados de livros.

## Funcionalidades

- **Listar livros**: Retorna todos os livros cadastrados.
- **Cadastrar livros**: Permite adicionar novos livros ao banco de dados.

---

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Dotenv** (para configuração de variáveis de ambiente)

---

## Configuração do Ambiente

1. **Clonar o Repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DA_PASTA>
   ```

2. **Instalar Dependências**:
   Certifique-se de que o Node.js esteja instalado em sua máquina. Em seguida, instale as dependências com o npm:
   ```bash
   npm install
   ```

3. **Configurar Variáveis de Ambiente**:
   Crie um arquivo chamado `.env` na raiz do projeto e adicione a seguinte configuração:
   ```env
   PORTA=SUA_PORTA
   ```

4. **Iniciar o Servidor**:
   Execute o seguinte comando para iniciar o servidor:
   ```bash
   node index.js
   ```

5. O servidor estará rodando em: `http://localhost:PORTA`

---

## Endpoints da API

### **1. Listar Livros**
- **Rota**: `/livros`
- **Método**: `GET`
- **Descrição**: Retorna todos os livros cadastrados no banco de dados.
- **Exemplo de Resposta**:
  ```json
  [
    {
      "id": 1,
      "titulo": "As Sombras do Amanhã",
      "autor": "Helena Martins",
      "anoPublicacao": 2015,
      "genero": "Ficção Científica",
      "sinopse": "Em um futuro distópico, uma jovem cientista luta contra um governo autoritário enquanto tenta desvendar um segredo que pode mudar o destino da humanidade."
    }
  ]
  ```

### **2. Cadastrar Livros**
- **Rota**: `/livros`
- **Método**: `POST`
- **Descrição**: Adiciona um novo livro ao banco de dados.
- **Exemplo de Requisição**:
  ```json
  {
    "id": 2,
    "titulo": "Memórias do Subsolo",
    "autor": "Sofia Costa",
    "anoPublicacao": 2013,
    "genero": "Drama",
    "sinopse": "Após um trágico acidente, uma jornalista começa a explorar os segredos de sua própria família e descobre verdades que mudarão sua visão da vida."
  }
  ```
- **Exemplo de Resposta**:
  ```json
  {
    "mensagem": "Livro cadastrado com sucesso"
  }
  ```

---

## Testando a API

Você pode testar a API utilizando ferramentas como:
- **Postman**
- **Insomnia**
- **Extensão REST Client no VSCode** (com arquivos `.http`)

### Arquivo de Teste `.http`
```http
### Listar Livros
GET http://localhost:4000/livros

### Cadastrar Livro
POST http://localhost:4000/livros
Content-Type: application/json

{
  "id": 3,
  "titulo": "O Enigma das Estrelas",
  "autor": "Lucas Andrade",
  "anoPublicacao": 2020,
  "genero": "Mistério",
  "sinopse": "Um grupo de jovens descobre mensagens misteriosas escondidas em um observatório astronômico abandonado."
}
```

---

## Possíveis Melhorias Futuras

- Adicionar um banco de dados real (como PostgreSQL).
- Implementar validações nos dados enviados.
- Adicionar uma rota para atualizar ou deletar livros.

---

Se encontrar qualquer problema, sinta-se à vontade para abrir uma _issue_ no repositório ou entrar em contato! 😊

