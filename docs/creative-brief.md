# Direção criativa — Malu

O pedido atual autoriza desenvolver o site. Serviços: Social Media, Storymaker e Videomaker Móbile. Conceito: diário visual editorial com fotos reais desmontadas da prancha e recompostas em movimento. Sem novos retratos gerados, vídeos simulados ou clientes/resultados inventados. Os anexos são referências de briefing; a dispensa de Higgsfield expressa pelo usuário prevalece.

## Elementos e função narrativa

| Elemento | Posição/uso | Comportamento | Função |
| --- | --- | --- | --- |
| Retrato de roupa bege | Abertura | Máscara de entrada e escala no scroll | Presença |
| Assinatura original | Menu/rodapé | Link de retorno | Identidade |
| Naturalmente criativa | Abertura | Linhas em sentidos opostos | Personalidade |
| Tarja lima | Essência/posts | Destaque tipográfico | Continuidade de marca |
| Retrato de roupa clara | Faixa visual | Arraste horizontal | Imagem |
| Fotografia de evento | Faixa/Storymaker | Camada em velocidade própria | Energia |
| Praia rochosa | Faixa visual | Swipe | Respiro |
| Esporte na areia | Faixa visual | Swipe | Movimento |
| Papagaio/viagem | Faixa visual | Swipe | Descoberta |
| Foto com cachorros | Faixa visual | Swipe | Afeto |
| Retrato na água | Faixa visual | Swipe | Leveza |
| Mar visto de cima | Videomaker | Escala lenta em palco fixo no desktop | Mudança de ritmo |
| Frases dos templates | Social Media | Papéis sobrepostos em rotação | Estratégia e voz |
| Asterisco | Abertura/manifesto | Rotação vinculada ao scroll | Pontuação visual |
| Laranja | Storymaker | Mudança de capítulo | Intensidade |
| Creme | Introdução/manifesto | Composição com espaços livres | Pausa |

A abertura usa 0,35 viewport de movimento fixo no desktop. Videomaker usa 0,45. As demais áreas fluem normalmente; o diário é arrastável. No celular não há pin; a galeria usa swipe. Reduced motion mantém o conteúdo sem animações. Não existe creative-brief anterior: este documento registra a direção implementada.

## Hero editorial — 24/09/2026
- Escolha: retrato 01, braços cruzados; maior presença facial e dos cachos. Retrato com livro acrescenta um foco secundário; corpo inteiro reduz o destaque do rosto.
- Fotografia original preservada. Fundo de estúdio separado por filtro SVG no navegador; proteção localizada do sorriso. Não foi usado o retrato regenerado por IA.
- Camadas HTML/CSS independentes: papel, tipografia, retrato, traços SVG, post-it e detalhes. GSAP coordena entrada, parallax discreto e saída por scroll; respeita movimento reduzido.
- Mobile recomposto com título acima do rosto, post-it à esquerda e CTA inferior.
- Verificado em 1440×900, 390×844 e 360×780; sem overflow horizontal nos dois tamanhos mobile. CTA navega para universo; menu abre; scroll modifica as camadas. Nenhum erro de console observado no teste de 390×844. Sintaxe de hero.js validada.
- Instrument Serif e Caveat são substituições web; Silver Garden não foi fornecida como fonte licenciada.
