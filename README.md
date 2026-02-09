# Checklist - Plano de Estudos

Uma aplicação web moderna para gerenciar seu plano de estudos de forma simples e intuitiva. Organize suas tarefas de estudo, marque como concluídas e acompanhe seu progresso.

## Características

- ✅ Adicionar novos itens de estudo
- ✏️ Editar itens existentes
- 🗑️ Remover itens
- ✓ Marcar itens como concluídos
- 💾 Persistência de dados com localStorage
- 📱 Design responsivo
- 🎨 Interface moderna e intuitiva

## Tecnologias

- **React 19** - Biblioteca JavaScript para construir interfaces
- **Vite** - Build tool rápido e moderno
- **CSS3** - Estilização com design responsivo
- **localStorage** - Armazenamento de dados no navegador

## Requisitos

- Node.js >= 22.0.0
- npm ou yarn

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd checklist
```

2. Instale as dependências:

```bash
npm install
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build para produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter para verificar a qualidade do código
- `npm test` - Executa os testes
- `npm run test:ui` - Executa os testes com interface visual
- `npm run test:coverage` - Gera relatório de cobertura de testes

## Como Usar

1. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

2. Abra seu navegador e acesse `http://localhost:5173`

3. Use a aplicação:
   - Clique no botão **+** para adicionar um novo item
   - Digite a descrição do item que deseja estudar
   - Clique em "Salvar item"
   - Marque a caixa de seleção para indicar que concluiu o item
   - Use o ícone de lápis para editar um item
   - Use o ícone de lixeira para remover um item

## Estrutura do Projeto

```
src/
├── components/
│   ├── Button/
│   ├── ChecklistsWrapper/
│   ├── Container/
│   ├── Dialog/
│   ├── FabButton/
│   ├── Footer/
│   ├── FormToDo/
│   ├── Header/
│   ├── Heading/
│   ├── icons/
│   ├── SubHeading/
│   ├── TextInput/
│   ├── ToDoGroup/
│   ├── ToDoItem/
│   ├── ToDoList/
│   └── TodoProvider/
├── App.jsx
├── main.jsx
└── index.css
```

## Gerenciamento de Estado

A aplicação utiliza React Context API para gerenciar o estado global dos todos. O `TodoProvider` fornece as seguintes funcionalidades:

- `todos` - Lista de todos
- `upsertTodo` - Adicionar ou atualizar um todo
- `removeTodo` - Remover um todo
- `toggleItemCompleted` - Marcar/desmarcar como concluído
- `openTodoFormModal` - Abrir modal de formulário
- `closeTodoFormModal` - Fechar modal de formulário
- `selectTodoForEdit` - Selecionar todo para edição
