# Prompt de auditoria — fidelidade de página/template

Use este prompt sempre que uma página/template composta a partir deste design system parecer "bagunçada" (cards sobrepostos, seções desalinhadas, texto/logo errado, scroll onde não devia) mesmo com o código do template aparentando correto. Na maioria das vezes o bug está no COMPONENTE reutilizado, não no template.

## Passo 1 — Comparar com a referência
Se houver imagem de referência (uploads/*.png), abra a página renderizada e compare seção por seção: sidebar, topbar, hero, grids de cards, coluna lateral. Note qualquer: sobreposição, corte, elemento fora do lugar, texto/ícone/logo errado, borda dobrada, scroll inesperado.

## Passo 2 — Medir, não só olhar
Screenshots em viewport pequeno mentem por compressão. Para cada suspeita de sobreposição/desalinhamento, confirme com `eval_js` medindo `getBoundingClientRect()` dos elementos vizinhos (ex.: comparar `right` de um card com o `left` do próximo — se `right > left` do vizinho, é sobreposição real).

## Passo 3 — Checar se a prop realmente chega no componente
Neste sistema de Design Components, `style="..."` num `<x-import>` só aplica ao DIV do MOUNT (wrapper), nunca é passado como prop `style` para o componente React montado. Então:
- `width:100%`/`align-self:stretch` no `style` de um `<x-import>` NÃO força um componente com largura fixa em pixel (`width: 300` hardcoded no .jsx) a encolher/crescer — ele sempre renderiza no tamanho fixo do Figma, podendo sobrepor o próximo item de um grid/flex.
- Para confirmar o que o componente realmente recebeu, ande pela fiber: `el.__reactFiber$...` subindo `.return` até achar `fiber.type.name === 'NomeDoComponente'`, e leia `fiber.memoizedProps`.
- Se o prop chega mas o valor renderizado está errado, o bug é dentro do `.jsx` do componente (ex.: variantes diferentes lendo props diferentes para a mesma coisa — ver Passo 4).

## Passo 4 — Bugs recorrentes de extração do Figma (procure estes primeiros)
- **Largura fixa em componente usado em grid/flex fluido**: componente "card" (`width: <n>` em px no root) usado dentro de `display:grid`/`flex:1` sem respeitar o container → sobreposição. Fix: trocar `width: <n>` por `width: "100%"` no root do componente, mantendo a altura fixa.
- **Prop duplicada com nomes diferentes por variante**: mesma informação (ex. texto de fallback) lida como `props.fallback` em algumas variantes e `props.text1` em outras dentro do mesmo componente → passar um prop não afeta metade das variantes. Fix: normalizar no merge de props (`text1: _p.text1 ?? _p.fallback ?? default`).
- **Valor hardcoded ignorando prop recebida**: ex. avatar com iniciais `"RS"` fixas em vez de derivar de `props.name`. Fix: calcular a partir da prop real, com fallback sensato.
- **Borda/raio duplicados**: um componente "self-contained" (com sua própria borda/box-shadow) usado como só um pedaço de um painel maior que também tem borda → duas bordas, visual fragmentado. Fix: prop `bordered`/similar para desligar a borda própria quando composto.
- **Seções/rodapés do componente sem toggle**: componente carrega blocos que só fazem sentido num contexto (ex. "Voltar ao Portal" só em produto embutido) sem prop para desligar em outro contexto → altura/conteúdo indevido. Fix: adicionar prop `showX` (default preservando comportamento atual) e desligar no template que não precisa.

## Passo 5 — Corrigir na fonte, não no template
Corrija o `.jsx` do componente (o bug se repete em toda página que o reutiliza), não tente compensar no template com overrides que não chegam a lugar nenhum (lembrar do Passo 3). Depois de editar um componente:
1. `check_design_system` para confirmar que compilou sem novos erros.
2. A recompilação do bundle acontece ao final do turno — não dá para confirmar visualmente no mesmo turno em que o componente foi editado; avise o usuário que a mudança aparece ao recarregar.
3. Documentar a mudança em `readme.md` (seção do componente) para não ser revertida por engano depois.

## Passo 6 — Fechar o ciclo
`ready_for_verification` na página afetada. Resumo para o usuário: causa raiz (qual componente, qual prop/linha), não só "corrigido".
