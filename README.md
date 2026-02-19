# Mineração Dibase – Site

Site institucional em estilo Glassmorphism, otimizado para Mobile First e acesso via QR Code.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build para GitHub Pages

```bash
npm run build
```

A pasta **`out`** conterá o site estático. No GitHub:

1. Repositório → **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main` (ou `gh-pages`), pasta **`/ (root)`** ou **`/docs`**
4. Se usar subpasta (ex.: `docs`), mova o conteúdo de `out` para a pasta `docs` e faça commit.

Para publicar na raiz do repositório, use uma branch só com o conteúdo de `out` ou um workflow de GitHub Actions que faça deploy da pasta `out`.

### GitHub Pages em repositório de projeto

Se a URL for `usuario.github.io/projeto-dibase`, configure em **next.config.mjs**:

```js
basePath: '/projeto-dibase',
assetPrefix: '/projeto-dibase/',
```

Gere o build de novo e publique a pasta `out`.

## Assets necessários

Coloque em **`public/`**:

- `background.jpg.jpeg` – imagem de fundo
- `logo.png.jpeg` – logotipo
- `produtos/1.jpg`, `produtos/2.jpg`, … – fotos dos produtos (até 6)

Detalhes em **`public/README-assets.md`**.

## Estrutura

- **`app/`** – rotas (App Router)
- **`_components/`** – componentes (import com alias `@/`)
- **`public/`** – arquivos estáticos

## Tecnologias

- Next.js (export estático)
- Tailwind CSS
- Framer Motion
- Lucide React
