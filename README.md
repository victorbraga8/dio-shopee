# 🛒 Dio Shopee Cart

Este projeto é uma simulação de carrinho de compras desenvolvida para estudos de JavaScript, com foco em manipulação de arrays, objetos e funções assíncronas.  
O objetivo é praticar operações básicas como **adicionar**, **remover** e **deletar** itens de um carrinho, além de exibir o conteúdo atualizado no console.

---

## 🚀 Funcionalidades

- **Adicionar item** ao carrinho.
- **Remover 1 unidade** de um item (se a quantidade for maior que 0).
- **Deletar item** completamente do carrinho pelo nome.
- **Exibir carrinho** com nome, preço, quantidade e total calculado.

---

## 📂 Estrutura do Projeto

```
src/
 ├── index.js      # Ponto de entrada do projeto
 └── services/
      └── cart.js  # Funções para manipulação do carrinho
package.json       # Configurações do projeto e scripts
```

---

## 🛠 Tecnologias Utilizadas

- **JavaScript (Node.js)**
- Módulos ES (ECMAScript Modules)

---

## ▶️ Como Executar

1. **Clone o repositório**
```bash
git clone https://github.com/victorbraga8/dio-shopee.git
cd dio-shopee
```

2. **Executar o projeto**  
Como não há dependências, basta rodar:
```bash
npm run dev
```

> O comando `npm run dev` executa o projeto com `node --watch`, permitindo que alterações sejam refletidas automaticamente sem reiniciar manualmente.

---

## 📋 Exemplos de Uso

```javascript
await addItem(cart, { name: "hotwheels red", price: 20.99, quantity: 1 });
await addItem(cart, { name: "hotwheels white", price: 39.99, quantity: 2 });

await removeItem(cart, { name: "hotwheels red" }); // Reduz quantidade em 1
await deleteItem(cart, "hotwheels white"); // Remove completamente
```

---

## 📜 Licença

Este projeto está sob a licença **ISC**.  
Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
