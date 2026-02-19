# Assets para o site Dibase

Coloque os arquivos na pasta `public/`:

- **background.jpg.jpeg** – imagem de fundo (ex.: mina a céu aberto)
- **logo.png.jpeg** – logotipo circular da Mineração Dibase
- **produtos/1.jpg**, **produtos/2.jpg**, … – fotos dos produtos (até 6)

Se alguma foto em `produtos/` não existir, o site exibe um card de vidro com placeholder.

Para GitHub Pages em repositório de projeto (ex.: `usuario.github.io/projeto-dibase`), adicione em `next.config.mjs`:

```js
const nextConfig = {
  basePath: '/projeto-dibase',
  assetPrefix: '/projeto-dibase/',
  output: 'export',
  images: { unoptimized: true },
};
```
