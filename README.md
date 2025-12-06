# 📋 Gerenciador de Tarefas em React

Uma aplicação **React** para gerenciar tarefas (to-do list), utilizando **React Router**, **Context API**, **Hooks** e **localStorage** para persistência.  
Este projeto foi desenvolvido como exercício prático para consolidar conceitos de **estado global**, **efeitos colaterais** e **navegação entre páginas**.

---

## 🚀 Funcionalidades

- ➕ Adicionar novas tarefas
- ✏️ Editar tarefas existentes
- 🗑 Excluir tarefas
- ✔ Marcar tarefas como concluídas
- 💾 Persistência automática no **localStorage**
- 🌐 Navegação entre páginas com **React Router**
- 📦 Estado global com **Context API**

---

## 🛠 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- Context API
- Hooks (`useState`, `useEffect`, `useContext`)
- localStorage para persistência

---

## ⚙️ Instalação e Execução

1. Clone este repositório:
   ```bash
   git clone https://github.com/Lukas-leimann/todo-app.git
   cd todo-app
   ```
2. Instale as dependências: 
```bash
   npm install
```
3. Execute a aplicação: 
```bash
npm start
```
4. Acesse o navegador:
```bash
http://localhost:3000
```

📖 Uso
-
Na Home, você verá a lista de tarefas cadastradas.

Clique em ➕ Adicionar Tarefa para criar uma nova.

Use os botões:

- ✔ para marcar como concluída

- 🗑 para excluir

- ✏️ para editar

Todas as alterações são salvas automaticamente no localStorage.

---

## 📂 Estrutura do Projeto
```
todo-app/
├── public/
│   └── index.html
├── src/
│   ├── context/
│   │   └── TaskContext.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── AddTask.js
│   │   └── EditTask.js
│   ├── components/
│   │   └── TaskList.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
├── package-lock.json
```
