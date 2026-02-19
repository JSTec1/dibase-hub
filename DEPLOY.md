# Por que o site ficou com fundo preto e logo vazio?

## 1. Logo e background não carregam

**Causa:** Os arquivos **`logo.png.jpeg`** e **`background.jpg.jpeg`** não estão na pasta **`public/`** (ou não estavam no momento do build).

- O Next só copia para o build o que está em `public/`.
- Se eles não estiverem em `public/` quando você roda `npm run build`, não entram em `out/dibase-hub/` e no GitHub Pages o navegador recebe 404 para `/dibase-hub/logo.png.jpeg` e `/dibase-hub/background.jpg.jpeg`.
- Resultado: círculo dourado vazio (logo quebrada) e fundo preto (background que não carrega).

**O que fazer:**

1. Coloque **`logo.png.jpeg`** e **`background.jpg.jpeg`** dentro de **`public/`**.
2. Rode de novo: `npm run build`.
3. Faça o deploy da pasta **`out`** como na seção 2 abaixo.

---

## 2. Deploy no GitHub Pages (caminhos certos)

Com **basePath: '/dibase-hub'**, o build gera a pasta **`out/dibase-hub/`**.

Para o site em **`https://seu-usuario.github.io/dibase-hub/`** funcionar:

- O repositório precisa ter a **pasta `dibase-hub`** na raiz, com tudo dentro dela.
- Ou seja: faça deploy do conteúdo de **`out/`** (e não do conteúdo de `out/dibase-hub/` para a raiz).

**Estrutura correta no repositório:**

```
dibase-hub/          ← pasta com o nome do repo
  index.html
  logo.png.jpeg
  background.jpg.jpeg
  _next/
  produtos/
  ...
```

**Erro comum:** Colocar só o conteúdo de `out/dibase-hub/` na raiz do repo (index.html e logo na raiz). Aí o HTML pede `/dibase-hub/logo.png.jpeg` e o arquivo está em `/logo.png.jpeg` → 404.

**Certo:** Enviar a pasta **`out`** inteira, para que exista **`dibase-hub/`** no repo com **index.html**, **logo.png.jpeg**, **background.jpg.jpeg**, **\_next/**, etc.

---

## 3. Efeito de vidro (glass) pouco visível

Com o **background** em 404, o fundo fica **preto**. O efeito de vidro (backdrop-blur) embaça o que está atrás; se atrás só tem preto, continua tudo preto.

Quando **background.jpg.jpeg** existir em `public/`, for incluído no build e o deploy estiver correto, o fundo da mina aparece e o blur dos cards fica visível.

Resumo: **coloque as imagens em `public/`**, **build de novo** e **deploy da pasta `out`** como acima.
