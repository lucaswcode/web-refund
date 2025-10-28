# Refund Web App

Aplicação front-end para gerenciamento de reembolsos empresariais. Funcionários podem submeter solicitações com comprovantes; gerentes visualizam, aprovam ou rejeitam pedidos. Implementa autenticação, upload de arquivos, validação de formulários e um dashboard com paginação.

## Descrição Técnica

- Cliente SPA em React + TypeScript construído com Vite.
- Fluxos principais: autenticação (context + hook), criação de reembolso com upload de comprovante, listagem paginada, e aprovação/rejeição por papéis (employee/manager).
- Comunicação com API via um serviço central (`src/services/api.ts`). Validação de entrada com esquemas (Zod) antes do envio.

## Principais Bibliotecas e responsabilidades

- **React**: UI declarativa.
- **TypeScript**: tipagem estática e segurança em tempo de compilação.
- **Vite**: dev server e build rápido.
- **React Router**: definição de rotas e proteção por perfil.
- **Axios**: cliente HTTP usado em `src/services/api.ts` para chamadas à API.
- **Zod**: validação e parsing de dados de formulários antes de enviar para a API.
- **Tailwind CSS**: estilização utilitária.
- **clsx** e **tailwind-merge**: composição condicional e mesclagem segura de classes Tailwind.

## Padrão de organização do código

Estrutura principal em `src/` com separação clara entre camadas:

```
src/
├── components/    # Componentes reutilizáveis (UI)
├── pages/         # Páginas/rotas (Dashboard, Refund, SignIn, SignUp, etc.)
├── routes/        # Definição de rotas públicas/protegidas por perfil
├── contexts/      # Contextos (ex.: AuthContext)
├── hooks/         # Hooks customizados (ex.: useAuth)
├── services/      # Serviços de integração (ex.: api.ts com axios)
├── utils/         # Utilitários (formatação, helpers)
└── assets/        # Imagens e recursos estáticos
```

- Separação entre apresentação e lógica: componentes puros na pasta `components` e lógica de chamadas/estado em `services` / `contexts` / `hooks`.
- Validação de dados com Zod antes de chamadas de rede.

## Variáveis de ambiente

Crie um arquivo `.env` ou `.env.local` na raiz com pelo menos:

```
VITE_API_URL=https://api.exemplo.com
```

## Setup e execução

1. Instalar dependências:

```bash
npm install
```

2. Rodar em desenvolvimento:

```bash
npm run dev
```

3. Build para produção:

```bash
npm run build
```

4. Preview do build:

```bash
npm run preview
```

O servidor de desenvolvimento padrão do Vite usa `http://localhost:5173`.

---

Arquivo relevante:

- `src/services/api.ts` — cliente axios central
- `src/contexts/AuthContext.tsx` e `src/hooks/useAuth.tsx` — autenticação e controle de sessão
- `src/pages/` — páginas expostas (Dashboard, Refund, SignIn, SignUp, Confirm)

## Backend/API

- https://github.com/lucaswcode/api-refund
