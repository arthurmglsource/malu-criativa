# Storyboard aprovado — 24/09/2026

Os prints mais recentes prevalecem sobre todas as direções anteriores. Ordem explicitamente corrigida pelo usuário: hero com retrato central e post-it, depois colagem da mente criativa. As referências ficam em `context/approved-prints/`.

| Print | Reconstrução | Movimento |
|---|---|---|
| 01 | Retrato original, headline HTML atrás/frente, post-it HTML, órbita e asterisco SVG | Reveal de texto, entrada do retrato, parallax leve, saída em velocidades diferentes |
| 02 | Texto HTML; cabeça, câmera, celular, microfone, fones, coração, nuvem, fita e estrela isolados em clipPaths SVG do material aprovado | Objetos emergem em stagger com o scroll |
| 03 | Retrato adesivo fornecido, preservado no acervo | Asset disponível, sem inventar uma seção ausente do storyboard |
| 04 | Quatro referências do manual em janelas independentes, título e texto HTML | Revelação tipográfica; crédito de terceiros explícito |
| 05 | Foto principal e dez imagens da prancha em viewports independentes | Entrada sequenciada e hover |
| 06 | Duas metades verde/creme, textos HTML, mascote, frutas isoladas | Sublinhado desenhado, leve movimento da mascote |
| 07 | Três templates com textos HTML, labels e seta SVG | Entrada dos papéis; swipe nativo no mobile |
| 08 | Capa portfólio verde, assinatura, onda, texto e estrela | Onda desenhada e rotação da estrela |
| 09 | Cinco serviços, tarjas e textos reais | Revelação dos títulos, stagger e hover |
| 10 | Gestão de conteúdo e sete faixas | Entrada sequenciada, onda vinculada ao scroll |
| 11 | Storymaker, tarja, parágrafo, seta e tags | Texto recortado e seta desenhada |
| 12–14 | Essencial, Brand e Malu; inclusões individuais | Travessia horizontal no desktop; sequência vertical no mobile |
| 15 | Oito serviços avulsos | Stagger e links para contato |
| 16 | Cinco etapas em cards e quatro setas | Etapas sequenciais e desenho das setas |
| 17 | Logo, chamada, tarja, texto, onda e contato | Reveal e hover do contato |
| 18 | Mascote original independente | Usada na essência |
| 19–21 | Referências de motion: Story Scroll, SVG Follow Scroll, Horizontal Scroll | Implementação própria em GSAP; não copiam a identidade visual |

## Referências de comportamento
- https://www.trevornoah.com/ — observado no navegador: escala editorial, colagem em camadas, capítulos e objetos independentes.
- https://21st.dev/%40reuno-ui/components/svg-follow-scroll — progressão de traços.
- Prints das demos Story Scroll / Samira Boudjadja e Horizontal Scroll / ui layout: guias de comportamento.

## Asset e conteúdo
- Fotografias originais não são regeneradas. SVG viewports e clipPaths permitem separar fragmentos visuais já aprovados, sem apresentar um print inteiro como seção.
- A foto principal de Várias skins e algumas fotos do manual já contêm inscrições incorporadas na fonte; isso permanece uma limitação dessas fontes. Títulos, serviços, pacotes, post-it e textos editoriais são HTML.
- Fontes web: Anybody e Gayathri do manual; Instrument Serif substitui Silver Garden (arquivo/licença ausente), Caveat para o post-it.
- Nenhum vídeo foi fornecido: não há falso player, poster fictício ou vídeo inventado.
- Contato de exemplo do print final foi substituído por @amalucria, já identificado no branding. Email/telefone não são inventados.
- Loading: creme/logo marrom → expansão verde-lima → laranja/logo branca → reveal, aproximadamente 2 s. Não bloqueia navegação.
- Reduced motion: conteúdo estático completo, sem loading/pinning/parallax. Sem interceptação da roda; ScrollTrigger só usa scroll nativo.

## Verificação da implementação
- Revisão visual em 1440×900, 390×844 e 360×780. Sem overflow horizontal global nas duas larguras mobile.
- Menu acionado por teclado; navegação para Serviços, Universo, Pacotes e Processo; travessia horizontal dos pacotes confirmada no desktop.
- Console sem erros ou avisos após as correções. Assets HTML, âncoras e IDs checados; JavaScript passou em `node --check`.
- Retrato responsivo JPEG: 99 KB, 243 KB e 456 KB; PNG original de 5 MB preservado.
- Reduced motion revisado no código; emulação da preferência não disponível nesta sessão de navegador.


## Rodapé final — 25/09/2026

Atualização isolada do capítulo #contato conforme os três novos prints. Foto original `malu-peek.png` à esquerda, bloco de logo/headline/destaque lima/copy/onda/CTA à direita. No mobile, foto acima e conteúdo abaixo. Mascote na assinatura inferior; @malucria preservado no CTA e Instagram @malu.criare com link explícito. Os dois links de contato apontam para https://www.instagram.com/malu.criare/.

Entrada GSAP da foto, stagger discreto no conteúdo e pequeno movimento do mascote, todos no matchMedia de movimento permitido. Hover apenas em pointer fino; links com foco visível e área de toque mínima de 44 px. Imagens locais com dimensões e lazy loading.

Conferência visual: desktop 1280×720, tablet 820×1180, mobile 390×844. Largura da página e rodapé no mobile: 390 px. Sem erros ou avisos no console. CSS/JS versionados na URL para invalidar cache da versão anterior.
