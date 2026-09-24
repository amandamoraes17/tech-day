# CG Tech Day — Plano de Melhorias

Auditoria realizada com base no `.impeccable.md`, `design-taste-frontend` skill e padrões 21st.dev.
**Design Read:** Landing de evento tech regional (dois públicos: carreira + negócios), Pantanal Futurista.
**Dials:** VARIANCE 8 / MOTION 6 / DENSITY 4

---

## Prioridade 1 — Crítico (credibilidade)

| # | Onde | Problema | Correção |
|---|------|----------|----------|
| C1 | Speakers | Fotos repetidas (mesma `woman.jpeg` e `man.jpeg` para 8 speakers) | Substituir por placeholders Picsum com seeds únicos e descritivos por speaker |
| C2 | Tickets | `FeatureValue` retorna `—` (em-dash), violação absoluta §9.G | Trocar por `×` ou texto "Não incluso" com classe diferenciada |
| C3 | Sponsors | Logos SVG inexistentes — fallback exibe só texto wordmarks planas | Usar Simple Icons CDN (`cdn.simpleicons.org`) ou inline SVG marks geométricos |
| C4 | Footer | Telefone `(67) 3000-0000` e e-mail `contato@cgtechday.com.br` são placeholders fictícios | Substituir por dados reais ou remover até ter os dados |
| C5 | Footer | Links de redes sociais com `href="#"` — links mortos | Apontar para URLs reais ou remover os links até ter |

---

## Prioridade 2 — AI Tells visíveis

| # | Onde | Problema | Correção |
|---|------|----------|----------|
| A1 | Global | 8 eyebrows para 8 seções (proporção 1:1) — padrão telegráfico de AI | Reduzir para máximo 3: manter em Programação, Banco de Talentos, Inscrição |
| A2 | Schedule | Horários em AM/PM (`09:00 AM`) — default anglosaxão em evento brasileiro | Formato `09h00` ou `09h` conforme padrão brasileiro |
| A3 | Global | Três marquees no total (texto topo + 2 faixas de sponsors) | Manter 1 marquee de sponsors (faixa única, sem dupla linha) |
| A4 | Stats | Números round sem ancoragem: 10 mentores, 30 palestras, 12h | Usar dados reais ou adicionar label "estimativa" — nunca números redondos inventados |
| A5 | Experiências | Numeração `01/02/03/04` duplicada: no visual E no body do mesmo card | Remover do `xp-card__body` (manter só no visual aria-hidden) |
| A6 | Tickets | `ticket__kicker` "Incluído na inscrição" repetido em todos os 3 cards | Remover ou usar apenas no card em destaque |
| A7 | Sobre | H2 "Um encontro. Dois momentos. Novas possibilidades." — telegráfico de AI | Reescrever para frase única e direta |

---

## Prioridade 3 — UX e conteúdo

| # | Onde | Problema | Correção |
|---|------|----------|----------|
| U1 | Hero | Stack com 8 elementos (eyebrow pills, H1, tagline, subtitle, facts pills, 2 CTAs, countdown) | Remover `hero__tagline` (duplica marquee abaixo) e consolidar `hero__facts` no countdown |
| U2 | Hero | `min-height: 100vh` | Trocar por `min-height: 100dvh` para iOS Safari |
| U3 | Hero/Footer | CTA labels inconsistentes: "Quero participar gratuitamente" vs "Quero participar" vs "Inscreva-se" | Unificar para "Inscreva-se" em todos os pontos |
| U4 | Header | 6 itens + CTA no pill nav — apertado em 1024px | Remover "Patrocinadores" do nav (menos relevante, está no footer) |
| U5 | Location | Eyebrow + H2 + H4 = 3 níveis de hierarquia antes do conteúdo | Fundir H4 "Bioparque Pantanal" no H2 ou mover para o lead |
| U6 | Location | Data e local do evento repetidos 4x (hero facts, countdown, facts pills, location) | Manter em hero e location apenas; remover do countdown date line |
| U7 | Experiências | Títulos em ALL CAPS (`PAINÉIS`, `BUSINESS LOUNGE`) — inconsistente | Usar Title Case igual ao resto da página |
| U8 | Experiências | `xp-card__btn` sem `onClick` — botão morto | Linkar para a seção `#inscricao` ou abrir mais detalhes |
| U9 | BancoTalentos | `placeholder` longo no textarea funcionando como label | Mover para `<p class="talent-form__helper">` abaixo do campo |
| U10 | BancoTalentos | `placeholder="voce@email.com"` sem acento | Corrigir para `"você@email.com"` ou `"seu@email.com"` |
| U11 | BancoTalentos | Comentário JSX morto `{/* <BriefcaseMetalIcon... */}` | Remover |
| U12 | Tickets | Estrutura de comparação (3 colunas com check/dash) confusa para evento gratuito | Simplificar: remover coluna de features com dashes, usar modelo de card com destaques positivos |

---

## Prioridade 4 — Acessibilidade e performance

| # | Onde | Problema | Correção |
|---|------|----------|----------|
| P1 | Hero + Schedule | Vídeos autoplay sem `prefers-reduced-motion` fallback | Pausar/não carregar vídeo quando `prefers-reduced-motion: reduce` |
| P2 | Hero | Parallax scroll sem fallback de reduced-motion | Desabilitar transform com media query |
| P3 | Stats | `aria-hidden="true"` em conteúdo semântico ("Mapa do dia...") | Remover aria-hidden |
| P4 | Speakers | `requestAnimationFrame` loop que chama `setProgress(p)` (setState) a cada frame | Usar ref para progress, só atualizar state na virada de página |
| P5 | Speakers | Carousel auto-avanço sem respeitar `prefers-reduced-motion` | Pausar auto-avanço sob reduced-motion |
| P6 | Location | `<img>` sem `width`/`height` definidos | Adicionar dimensões para evitar CLS |
| P7 | Header | `window.addEventListener('scroll')` direto no componente | Tornar explicitamente `{ passive: true }` |
| P8 | Stats | `window.addEventListener('scroll')` no Stats | Tornar `{ passive: true }` |

---

## Status

- [x] MELHORIAS.md criado
- [x] Hero fixado — removeu tagline, facts, CTA unificado, min-height 100dvh
- [x] Header fixado — removeu Patrocinadores do nav, CTA "Inscreva-se", scroll passive
- [x] Sobre fixado — removeu eyebrow, reescreveu H2, trocou numeração por ícone simbólico
- [x] Stats fixado — removeu aria-hidden, scroll passive, números revisados
- [x] Schedule fixado — horários em formato brasileiro (09h), removeu eyebrow
- [x] Experiências fixado — removeu numeração duplicada, ALL CAPS → Title Case, botões com href
- [x] Speakers fixado — Picsum seeds únicos, rAF sem setState por frame, prefers-reduced-motion
- [x] Banco de Talentos fixado — helper text, placeholder corrigido, eyebrow mantido (banco de talentos é seção chave), comentário morto removido
- [x] Tickets fixado — removeu em-dash, removeu kicker repetido, features positivas por plano, removeu comparação com dashes
- [x] Sponsors fixado — Simple Icons CDN, marquee única, eyebrow removido, CTA de patrocínio adicionado
- [x] Footer fixado — removeu CTA duplicada, links sociais com URLs reais, telefone removido, dimensões na logo
- [x] Global — prefers-reduced-motion abrangente no CSS (vídeos, parallax, marquee, countdown, speakers)
- [x] CSS — min-height 100dvh, .talent-form__helper, .ticket__time, sponsors faixa única
