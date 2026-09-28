# Superflix

Frontend de streaming em **React + Vite**, com interface inspirada em serviços modernos de vídeo.

## O que já funciona

- Login demonstrativo persistido no navegador
- Home com destaque e catálogo
- Busca por título, tipo e gênero
- Página de detalhes
- Filmes e séries com temporadas/episódios
- Player HTML5
- Minha lista usando `localStorage`
- Layout responsivo
- Estrutura preparada para Firebase/API externa

Os vídeos de demonstração são amostras públicas usadas apenas para validar o player. Para produção, conecte apenas fontes para as quais você tenha autorização/licença.

## Rodar localmente

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado pelo Vite (normalmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview
```

## Próximos passos sugeridos

1. Firebase Authentication real
2. Banco Firestore para usuários, favoritos e histórico
3. API/backend para catálogo
4. Área administrativa para filmes, séries, temporadas e episódios
5. Histórico/progresso de reprodução
6. Deploy automatizado em VPS Ubuntu + Apache/Nginx

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha conforme a infraestrutura escolhida.
