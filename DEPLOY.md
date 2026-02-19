# Por que o site ficou todo escuro? (e como corrigir)

## O que você viu

- **Tudo preto:** fundo sem foto da mina  
- **Logo:** só o texto “DIBASE” (ou “eração Diba” / “cia e Brita”) e o círculo dourado subindo/descendo — a **imagem da logo não carrega**  
- **Produtos:** só o ícone 石 e “Produto 1, 2, 3” — **fotos dos produtos não carregam**

Ou seja: **as imagens (logo, fundo, produtos) não estão sendo encontradas** pelo navegador. Por isso o site cai no fallback: fundo preto, texto da logo e placeholders.

---

## Por que isso acontece?

O site usa a URL do GitHub Pages: **`https://seu-usuario.github.io/dibase-hub/`**.

Antes, os arquivos eram pedidos com caminho **absoluto** tipo:

- `/dibase-hub/logo.png.jpeg`
- `/dibase-hub/background.jpg.jpeg`
- `/dibase-hub/produtos/1.jpg`

No GitHub Pages, o “teto” do site é **`/dibase-hub/`**. Ou seja:

- A **página** está em: `https://seu-usuario.github.io/dibase-hub/` (ou `.../dibase-hub/index.html`)
- Os arquivos que você sobe ficam na **raiz do repositório**, ou seja, em:  
  `https://seu-usuario.github.io/dibase-hub/logo.png.jpeg`,  
  `https://seu-usuario.github.io/dibase-hub/background.jpg.jpeg`, etc.

Se o deploy for feito de um jeito em que **não** exista `logo.png.jpeg` e `background.jpg.jpeg` **nessa mesma “raiz” do site** (por exemplo, você subiu só o código fonte e não a pasta `out`, ou a pasta errada), o navegador pede algo como:

`https://seu-usuario.github.io/dibase-hub/logo.png.jpeg`

e o GitHub responde **404**. Aí:

- A logo não aparece → o código mostra o fallback (“DIBASE” + animação).
- O fundo não carrega → o CSS usa só a cor de fallback → **tudo preto**.
- As fotos dos produtos também 404 → aparecem só os placeholders (石 + “Produto N”).

Resumindo: **ficou tudo escuro e “sem imagens” porque os caminhos dos arquivos não batiam com o que realmente está publicado no GitHub Pages** (ou os arquivos nem estavam no build/deploy).

---

## O que foi alterado no projeto

Para evitar esse problema de caminho:

1. **Caminhos relativos**  
   - Logo, fundo e produtos passaram a usar **caminhos relativos à página** (ex.: `logo.png.jpeg`, `background.jpg.jpeg`, `produtos/1.jpg`).  
   - Assim, o navegador monta o endereço certo a partir da URL da página (`.../dibase-hub/`), e os arquivos são pedidos em `.../dibase-hub/logo.png.jpeg`, etc., que é onde o GitHub Pages serve o conteúdo do repo.

2. **Fundo no próprio componente**  
   - A imagem de fundo não depende mais de um caminho absoluto no CSS; ela é definida no componente com a URL relativa `background.jpg.jpeg`, para funcionar junto com o deploy no GitHub Pages.

3. **`BASE_PATH` vazio para assets**  
   - Em `lib/basePath.ts`, o `BASE_PATH` usado para essas imagens e para o PDF foi deixado vazio, para que os caminhos relativos funcionem quando o conteúdo de `out/dibase-hub/` é colocado na raiz do repositório.

Assim, **desde que você faça o build com as imagens em `public/` e faça o deploy da pasta certa**, o site deixa de ficar todo escuro e passa a mostrar logo, fundo e fotos.

---

## O que você precisa fazer (deploy correto)

1. **Ter as imagens em `public/` antes do build**  
   - `public/logo.png.jpeg`  
   - `public/background.jpg.jpeg`  
   - (Opcional) `public/produtos/1.jpg` … `6.jpg`

2. **Gerar o build**  
   - `npm run build`  
   - Isso gera a pasta **`out/dibase-hub/`** com `index.html`, `logo.png.jpeg`, `background.jpg.jpeg`, `_next/`, etc.

3. **Publicar no GitHub Pages o conteúdo dessa pasta**  
   - O que o GitHub Pages precisa “ver” é a **raiz do site** igual ao **conteúdo** de **`out/dibase-hub/`**.  
   - Ou seja: tudo que está **dentro** de `out/dibase-hub/` (incluindo `index.html`, `logo.png.jpeg`, `background.jpg.jpeg`, pasta `_next/`, etc.) deve ser o que está na **raiz** do branch (ou da pasta) que você configurou no GitHub Pages.  
   - Não crie uma pasta `dibase-hub` dentro do repo e coloque os arquivos lá; coloque os arquivos **diretamente** na raiz do branch/pasta do deploy.

4. **Configuração do GitHub Pages**  
   - Em **Settings → Pages**: escolha o branch (e a pasta, se for “docs”) onde você colocou esse conteúdo.  
   - A URL do site será `https://seu-usuario.github.io/dibase-hub/`.

Depois disso, ao abrir o link do GitHub, o site deve aparecer com o visual da referência: fundo com foto da mina, logo e fotos dos produtos (quando existirem em `public/produtos/`), sem ficar tudo preto.
