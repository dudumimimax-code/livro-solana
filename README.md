# Análise Quantitativa em DeFi

**Medir finanças descentralizadas com os dados que a blockchain publica — usando a Solana como laboratório.**
Coleção Solana Data Lab · Volume 6 · 1ª edição revisada (novembro de 2026)

Livro aberto, em português, publicado como uma única página HTML (sem dependências de build).
Nove capítulos, mais de 20 gráficos, seis simuladores interativos (swap em CPMM, Health Factor, custo de conversão, comparação histórica e duas trilhas por perfil), um questionário de perfil de investidor, glossários por capítulo e referências em ABNT NBR 6023:2025.

- 📖 **Ler online:** https://dudumimimax-code.github.io/livro-solana/ 
- 📄 **Versão PDF (A4, 107 páginas):** [`docs/analise-quantitativa-defi.pdf`](docs/analise-quantitativa-defi.pdf)

## Conteúdo

| Cap. | Tema |
|---|---|
| 0 | A máquina de registros: blockchain além da criptomoeda (e como a Solana vende infraestrutura a empresas e bancos) |
| 1 | TradFi × DeFi: a evolução dos mercados financeiros |
| 2 | A infraestrutura dos mercados DeFi |
| 3 | Mecânica de mercado: swaps, slippage e price impact |
| 4 | Crédito descentralizado e geração de rendimento |
| 5 | Derivativos, oráculos e eficiência de mercado |
| 6 | Risco, retorno e volatilidade em DeFi |
| 7 | Da teoria à carteira: corretoras após a regulação de 2026, BRL → USDT → cripto com ordem passiva, cold wallet e Earn on-chain |
| 8 | Cripto contra o resto: CDI/CDB, Ibovespa, Nasdaq e IFIX × BTC, ETH e SOL desde 2016, com simulador e trilhas por perfil (conservador, moderado, arrojado) |

**Regra editorial:** todo número carrega um selo — `real` (fonte primária citada, com data), `estimado` (ordem de grandeza com método declarado) ou `simulado` (gerado pelos autores a partir de parâmetros declarados). Os exemplos dos Capítulos 2 a 6 são, em sua maioria, simulados e servem para entender mecanismos, não como evidência empírica. O Capítulo 8 usa séries reais de preço (fechamentos anuais de 2015 a 2025 e 31/10/2026).

## Publicar no GitHub Pages

1. Crie o repositório e envie estes arquivos (`git init && git add . && git commit -m "Livro DeFi quantitativo" && git push`).
2. No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Em ~1 minuto o livro estará em `https://<usuario>.github.io/<repositorio>/`.

O arquivo `.nojekyll` já está incluído. As fontes (Fraunces, Spectral, IBM Plex Mono) são carregadas do Google Fonts; sem internet o livro usa fontes serifadas e monoespaçadas do sistema.

## Estrutura

```
index.html                  ← o livro completo (arquivo final, é o que o Pages serve)
docs/                       ← PDF do livro
src/parts/                  ← fonte editável, um arquivo por seção/capítulo
src/build.sh · build.py     ← reconstroem index.html a partir de src/parts
src/make-pdf.js             ← regera o PDF (Node + Playwright)
```

Para editar: altere o capítulo em `src/parts/`, rode `src/build.sh` e, se quiser, `node src/make-pdf.js`.

## Autores

Andreas Toledo · Carlos Eduardo · Guilherme Meira · Jhordy Santos · Pedro Soares
Fatec Cotia — Tecnologia em Ciência de Dados

## Aviso

Material didático. **Não constitui recomendação de investimento.** Protocolos DeFi envolvem risco de perda total do capital. Os dados de mercado citados têm data e devem ser reverificados antes de qualquer uso prático.

## Licença

Ainda não definida — escolha antes de tornar o repositório público (sugestão para texto: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.pt-br); para o código das figuras/simuladores: MIT).
