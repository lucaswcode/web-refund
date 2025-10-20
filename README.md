# Refund Web App

Sistema web para gerenciamento de reembolsos desenvolvido com React, TypeScript e Vite.

## Descrição Técnica

Aplicação front-end para gerenciamento de solicitações de reembolso com diferentes níveis de acesso (funcionários e gerentes). Implementa autenticação de usuários, upload de comprovantes, dashboard para visualização de solicitações e fluxo de aprovação/rejeição.

## Principais Bibliotecas

- **React (v19)**: Framework JavaScript para construção da interface
- **TypeScript**: Adiciona tipagem estática ao JavaScript
- **Vite**: Build tool e dev server otimizado
- **React Router (v7)**: Gerenciamento de rotas e navegação
- **TailwindCSS**: Framework CSS utilitário para estilização
- **clsx + tailwind-merge**: Utilitários para composição condicional de classes CSS

## Padrão de Projeto

O projeto segue uma arquitetura modular organizada em:

```
src/
├── components/    # Componentes reutilizáveis
├── pages/        # Componentes de página
├── routes/       # Configuração de rotas e proteção de acesso
├── utils/        # Funções utilitárias
└── assets/       # Recursos estáticos
```

- Utiliza TypeScript para type-safety
- Implementa roteamento protegido por perfil de usuário
- Componentização para reusabilidade
- Separação clara entre lógica de negócio e apresentação

## Setup e Execução

1. Instale as dependências:

```bash
npm install
```

2. Execute o projeto em modo desenvolvimento:

```bash
npm run dev
```

3. Para build de produção:

```bash
npm run build
```

4. Para preview do build:

```bash
npm run preview
```

O servidor de desenvolvimento será iniciado em `http://localhost:5173` por padrão.
