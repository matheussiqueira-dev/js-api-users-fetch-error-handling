# JS API Users - Fetch com Tratamento de Erros

Aplicação web em `HTML5 + CSS3 + JavaScript ES6+` (sem frameworks) para listar usuários da API pública:

`https://jsonplaceholder.typicode.com/users`

## Estrutura do projeto

```text
/src
  index.html
  /css
    styles.css
  /js
    main.js
    api.js
    dom.js
    ui.js
```

## Arquitetura adotada

- `src/js/api.js`: camada de comunicação HTTP com `fetch`, valida `response.ok`, converte JSON e normaliza erros de rede/parsing.
- `src/js/dom.js`: camada de renderização e limpeza da lista usando `document.createElement`, `appendChild` e `DocumentFragment`.
- `src/js/ui.js`: camada de estado visual (loading do botão, mensagem de erro amigável).
- `src/js/main.js`: orquestra o fluxo da aplicação (evento de clique, controle de tentativa, chamada da API e renderização).

## Fluxo da aplicação

1. Usuário clica em **Carregar Usuários**.
2. Interface entra em loading:
- botão desabilitado
- texto muda para `Carregando...`
- erro anterior é limpo
- lista anterior é removida
3. A função `fetchUsers()` executa:
- `await fetch(...)`
- validação de `response.ok`
- `await response.json()`
4. Sucesso:
- usuários renderizados na `<ul>`.
5. Falha (HTTP, rede ou parsing):
- exibe `Erro ao carregar os usuários, tente novamente mais tarde.`
6. Finalização:
- botão reabilitado
- texto volta para `Carregar Usuários`

## Estratégia de tratamento de erros

- **HTTP inválido**: quando `response.ok === false`, a aplicação lança `new Error("Falha na requisição HTTP")`.
- **Falha de rede**: erros de `fetch` são tratados via `try...catch` e normalizados.
- **Erro de parsing**: falhas no `response.json()` também são capturadas e normalizadas.
- A camada de UI sempre mostra uma mensagem amigável única para o usuário final.

## Diagrama de fluxo (simples)

```text
[Click no botão]
      |
      v
[Limpa erro e lista] -> [Ativa loading]
      |
      v
   [fetchUsers]
      |
      +--> (HTTP !ok) --------+
      |                       |
      +--> (Erro rede/json) --+--> [Exibe mensagem amigável]
      |
      +--> (Sucesso) ---------> [Renderiza lista]
                                  |
                                  v
                            [Desativa loading]
```

## Como executar

1. Abra `src/index.html` no navegador.
2. Clique em **Carregar Usuários**.

Para evitar limitações de CORS/arquivo local em alguns ambientes, prefira um servidor estático simples:

```bash
npx serve src
```

## Diferencial opcional

- Adicione um GIF de demonstração em `docs/demo.gif` e inclua no README:

```md
![Demonstração](docs/demo.gif)
```
