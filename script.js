const challenges = [
  {
    id: 1,
    title: 'Quique parado',
    category: 'Coordenação',
    difficulty: 'Fácil',
    place: 'Ambos',
    age: '3-5 anos',
    time: '2 min',
    goal: 'Sentir o ritmo da bola quicando com controle.',
    materials: ['1 bola macia'],
    steps: ['Fique parado com os pés afastados.', 'Quique a bola 5 vezes com a mesma mão.', 'Troque de mão e repita.', 'Conte os quiques em voz alta.'],
    safety: 'Use bola leve e mantenha distância de móveis.',
    variation: 'Tentar quicar sem olhar para a bola por 2 segundos.'
  },
  {
    id: 2,
    title: 'Quique andando',
    category: 'Coordenação',
    difficulty: 'Médio',
    place: 'Ao ar livre',
    age: '5-8 anos',
    time: '3 min',
    goal: 'Controlar a bola enquanto se movimenta.',
    materials: ['1 bola'],
    steps: ['Marque uma linha de ida e volta.', 'Quique a bola caminhando devagar.', 'Chegue até o final sem perder o controle.', 'Volte usando a outra mão.'],
    safety: 'Escolha uma superfície plana e sem escorregar.',
    variation: 'Aumentar a velocidade no retorno.'
  },
  {
    id: 3,
    title: 'Passe sentado',
    category: 'Coordenação',
    difficulty: 'Fácil',
    place: 'Dentro de casa',
    age: '3-6 anos',
    time: '4 min',
    goal: 'Melhorar força de braços e noção de direção.',
    materials: ['1 bola'],
    steps: ['Sente de frente para a criança.', 'Role a bola devagar.', 'Receba e devolva com as duas mãos.', 'Repita aumentando a distância.'],
    safety: 'Afaste objetos frágeis ao redor.',
    variation: 'Passar a bola falando cores ou animais.'
  },
  {
    id: 4,
    title: 'Passe em pé com palmas',
    category: 'Coordenação',
    difficulty: 'Médio',
    place: 'Ambos',
    age: '5-9 anos',
    time: '4 min',
    goal: 'Trabalhar tempo de reação e atenção.',
    materials: ['1 bola'],
    steps: ['Fiquem em pé um de frente para o outro.', 'Jogue a bola em arco leve.', 'Antes de pegar, a criança deve bater 1 palma.', 'Repita 10 vezes.'],
    safety: 'Use bola macia no começo.',
    variation: 'Aumentar para 2 palmas antes de pegar.'
  },
  {
    id: 5,
    title: 'Rolar pelo túnel',
    category: 'Precisão',
    difficulty: 'Fácil',
    place: 'Dentro de casa',
    age: '3-6 anos',
    time: '3 min',
    goal: 'Ajustar força e direção do lançamento.',
    materials: ['1 bola', '2 cadeiras ou almofadas'],
    steps: ['Monte um túnel pequeno.', 'A criança deve rolar a bola por dentro.', 'Conte quantas vezes a bola atravessa sem tocar nas laterais.', 'Repita por 5 tentativas.'],
    safety: 'Mantenha o espaço livre para a bola passar.',
    variation: 'Fazer o túnel mais estreito.'
  },
  {
    id: 6,
    title: 'Acerta o alvo no chão',
    category: 'Precisão',
    difficulty: 'Fácil',
    place: 'Ambos',
    age: '4-8 anos',
    time: '5 min',
    goal: 'Melhorar mira e percepção espacial.',
    materials: ['1 bola', 'fita ou folha para marcar alvo'],
    steps: ['Marque um alvo no chão.', 'Afaste-se alguns passos.', 'Role a bola tentando parar em cima do alvo.', 'Some pontos por acerto.'],
    safety: 'Evite superfícies inclinadas.',
    variation: 'Criar 3 alvos com pontuações diferentes.'
  },
  {
    id: 7,
    title: 'Bola na cesta',
    category: 'Precisão',
    difficulty: 'Médio',
    place: 'Ambos',
    age: '4-9 anos',
    time: '5 min',
    goal: 'Treinar lançamento por cima e cálculo de distância.',
    materials: ['1 bola pequena', '1 cesto ou caixa'],
    steps: ['Posicione o cesto no chão.', 'A criança faz 5 arremessos.', 'Conte quantas bolas entraram.', 'Afaste o cesto e recomece.'],
    safety: 'Deixe o cesto longe de objetos quebráveis.',
    variation: 'Arremessar usando só a mão não dominante.'
  },
  {
    id: 8,
    title: 'Equilíbrio com bola na cabeça',
    category: 'Equilíbrio',
    difficulty: 'Médio',
    place: 'Dentro de casa',
    age: '5-9 anos',
    time: '3 min',
    goal: 'Controlar postura, tronco e passos lentos.',
    materials: ['1 bola leve ou almofada redonda'],
    steps: ['Coloque a bola na cabeça.', 'Caminhe até um ponto marcado.', 'Volte sem deixar cair.', 'Repita 3 vezes.'],
    safety: 'Escolha uma bola leve e macia.',
    variation: 'Caminhar sobre uma linha reta marcada no chão.'
  },
  {
    id: 9,
    title: 'Ponte de um pé',
    category: 'Equilíbrio',
    difficulty: 'Médio',
    place: 'Ambos',
    age: '5-10 anos',
    time: '3 min',
    goal: 'Sustentar o corpo em uma base só.',
    materials: ['1 bola'],
    steps: ['Fique em um pé só.', 'Segure a bola à frente do corpo.', 'Conte 10 segundos.', 'Troque de perna e repita.'],
    safety: 'Faça perto de uma parede se precisar de apoio.',
    variation: 'Passar a bola ao redor da cintura sem perder o equilíbrio.'
  },
  {
    id: 10,
    title: 'Sentar e levantar segurando a bola',
    category: 'Equilíbrio',
    difficulty: 'Fácil',
    place: 'Dentro de casa',
    age: '4-7 anos',
    time: '3 min',
    goal: 'Fortalecer pernas e coordenação do tronco.',
    materials: ['1 bola'],
    steps: ['Segure a bola com as duas mãos.', 'Agache até tocar em um banco ou almofada.', 'Levante sem deixar a bola cair.', 'Repita 8 vezes.'],
    safety: 'Faça o movimento com calma.',
    variation: 'Levantar com a bola acima da cabeça.'
  },
  {
    id: 11,
    title: 'Passe por baixo da perna',
    category: 'Coordenação',
    difficulty: 'Fácil',
    place: 'Ambos',
    age: '4-7 anos',
    time: '3 min',
    goal: 'Melhorar lateralidade e troca de mãos.',
    materials: ['1 bola'],
    steps: ['Fique em pé com as pernas afastadas.', 'Passe a bola por baixo de uma perna.', 'Receba com a outra mão.', 'Repita alternando os lados.'],
    safety: 'Mantenha os joelhos semiflexionados.',
    variation: 'Fazer o movimento andando devagar.'
  },
  {
    id: 12,
    title: 'Giro com bola ao redor da cintura',
    category: 'Coordenação',
    difficulty: 'Fácil',
    place: 'Ambos',
    age: '4-8 anos',
    time: '2 min',
    goal: 'Treinar rotação e troca rápida de mãos.',
    materials: ['1 bola'],
    steps: ['Passe a bola ao redor da cintura.', 'Faça 10 voltas para um lado.', 'Troque o sentido.', 'Tente aumentar a fluidez.'],
    safety: 'Use bola de tamanho confortável para as mãos.',
    variation: 'Fazer o mesmo ao redor dos joelhos.'
  },
  {
    id: 13,
    title: 'Giro com bola ao redor da cabeça',
    category: 'Coordenação',
    difficulty: 'Fácil',
    place: 'Ambos',
    age: '4-8 anos',
    time: '2 min',
    goal: 'Aumentar coordenação fina de mãos e braços.',
    materials: ['1 bola'],
    steps: ['Segure a bola à frente do rosto.', 'Passe ao redor da cabeça devagar.', 'Complete 8 voltas.', 'Troque o sentido.'],
    safety: 'Não pressione a bola no rosto.',
    variation: 'Alternar cabeça, cintura e joelhos em sequência.'
  },
  {
    id: 14,
    title: 'Corrida do zigue-zague com bola',
    category: 'Velocidade',
    difficulty: 'Médio',
    place: 'Ao ar livre',
    age: '6-10 anos',
    time: '5 min',
    goal: 'Trabalhar agilidade e controle em deslocamento.',
    materials: ['1 bola', '4 cones ou garrafas'],
    steps: ['Monte um zigue-zague com 4 marcas.', 'A criança conduz a bola pelos obstáculos.', 'Vá e volte.', 'Tente fazer mais rápido sem perder o controle.'],
    safety: 'Prefira área plana e sem buracos.',
    variation: 'Fazer com o pé menos dominante.'
  },
  {
    id: 15,
    title: 'Bola e volta correndo',
    category: 'Velocidade',
    difficulty: 'Fácil',
    place: 'Ao ar livre',
    age: '5-9 anos',
    time: '4 min',
    goal: 'Acelerar, frear e retornar com foco.',
    materials: ['1 bola'],
    steps: ['Coloque a bola no chão a alguns metros.', 'Ao sinal, corra até a bola.', 'Pegue e volte rapidamente.', 'Repita 6 vezes.'],
    safety: 'Respeite o ritmo da criança.',
    variation: 'Na volta, trazer a bola acima da cabeça.'
  },
  {
    id: 16,
    title: 'Bola no pé e parada congelada',
    category: 'Equilíbrio',
    difficulty: 'Médio',
    place: 'Ambos',
    age: '6-10 anos',
    time: '3 min',
    goal: 'Equilibrar o corpo em pausa após movimento.',
    materials: ['1 bola'],
    steps: ['Role a bola com o pé.', 'Ao sinal, pare e congele com um pé sobre a bola.', 'Segure por 3 segundos.', 'Repita 8 vezes.'],
    safety: 'Faça perto de apoio nas primeiras tentativas.',
    variation: 'Trocar o pé de apoio a cada rodada.'
  },
  {
    id: 17,
    title: 'Arco no ar e pega',
    category: 'Coordenação',
    difficulty: 'Médio',
    place: 'Ambos',
    age: '5-9 anos',
    time: '3 min',
    goal: 'Melhorar percepção de trajetória da bola.',
    materials: ['1 bola leve'],
    steps: ['Jogue a bola para cima em arco baixo.', 'Observe a subida e descida.', 'Pegue com as duas mãos.', 'Repita 10 vezes.'],
    safety: 'Comece com altura baixa.',
    variation: 'Bater uma palma antes de pegar.'
  },
  {
    id: 18,
    title: 'Arco no ar e gira',
    category: 'Coordenação',
    difficulty: 'Desafiador',
    place: 'Ambos',
    age: '6-10 anos',
    time: '3 min',
    goal: 'Unir orientação espacial e reação.',
    materials: ['1 bola leve'],
    steps: ['Jogue a bola para cima.', 'Faça meia volta no próprio eixo.', 'Volte para a posição.', 'Pegue antes de cair.'],
    safety: 'Use bola macia e espaço livre.',
    variation: 'Tentar a volta completa.'
  },
  {
    id: 19,
    title: 'Bola na parede',
    category: 'Precisão',
    difficulty: 'Médio',
    place: 'Ambos',
    age: '5-10 anos',
    time: '5 min',
    goal: 'Treinar força, mira e recepção.',
    materials: ['1 bola', 'parede livre'],
    steps: ['Jogue a bola contra a parede.', 'Pegue na volta.', 'Conte quantas vezes seguidas consegue.', 'Tente bater em uma marca específica.'],
    safety: 'Use parede segura e sem vidro por perto.',
    variation: 'Receber com uma mão e trocar de lado.'
  },
  {
    id: 20,
    title: 'Bola por cima e por baixo',
    category: 'Cooperação',
    difficulty: 'Fácil',
    place: 'Ambos',
    age: '4-8 anos',
    time: '4 min',
    goal: 'Criar sequência corporal com ritmo e parceria.',
    materials: ['1 bola'],
    steps: ['Em dupla, passe a bola por cima da cabeça.', 'Depois passe por baixo entre as pernas.', 'Repita a sequência 10 vezes.', 'Tente manter o ritmo.'],
    safety: 'Flexione os joelhos ao passar por baixo.',
    variation: 'Fazer em fila com 3 pessoas.'
  },
  {
    id: 21,
    title: 'Desafio do espelho',
    category: 'Cooperação',
    difficulty: 'Médio',
    place: 'Dentro de casa',
    age: '5-9 anos',
    time: '4 min',
    goal: 'Imitar movimentos e desenvolver atenção conjunta.',
    materials: ['1 bola'],
    steps: ['O adulto faz um movimento com a bola.', 'A criança imita como se fosse espelho.', 'Troquem os papéis.', 'Façam 8 movimentos diferentes.'],
    safety: 'Escolha movimentos simples no início.',
    variation: 'Incluir movimentos sentados e ajoelhados.'
  },
  {
    id: 22,
    title: 'Siga a cor',
    category: 'Precisão',
    difficulty: 'Fácil',
    place: 'Dentro de casa',
    age: '3-6 anos',
    time: '4 min',
    goal: 'Associar comando visual com direção da bola.',
    materials: ['1 bola', '3 papéis coloridos'],
    steps: ['Espalhe as cores no chão.', 'Diga uma cor.', 'A criança deve rolar a bola até ela.', 'Troque a ordem várias vezes.'],
    safety: 'Não deixe papéis escorregarem.',
    variation: 'Dizer a cor e uma ação, como bater palma.'
  },
  {
    id: 23,
    title: 'Caminho da fita',
    category: 'Equilíbrio',
    difficulty: 'Fácil',
    place: 'Dentro de casa',
    age: '4-8 anos',
    time: '4 min',
    goal: 'Seguir linha reta com controle corporal.',
    materials: ['1 bola', 'fita adesiva'],
    steps: ['Faça uma linha no chão com fita.', 'Caminhe sobre a linha segurando a bola.', 'Volte de costas ou lateralmente.', 'Repita sem sair da linha.'],
    safety: 'Cole bem a fita no chão.',
    variation: 'Levar a bola acima da cabeça.'
  },
  {
    id: 24,
    title: 'Lançamento ajoelhado',
    category: 'Precisão',
    difficulty: 'Médio',
    place: 'Ambos',
    age: '5-9 anos',
    time: '4 min',
    goal: 'Ajustar força sem usar o impulso das pernas.',
    materials: ['1 bola', 'alvo'],
    steps: ['Ajoelhe em um tapete ou gramado.', 'Arremesse a bola em direção ao alvo.', 'Faça 5 tentativas.', 'Observe a distância ideal.'],
    safety: 'Proteja os joelhos com apoio macio.',
    variation: 'Alternar entre alvo baixo e alvo alto.'
  },
  {
    id: 25,
    title: 'Pega e senta',
    category: 'Coordenação',
    difficulty: 'Médio',
    place: 'Dentro de casa',
    age: '5-9 anos',
    time: '3 min',
    goal: 'Ligar recepção da bola a um comando corporal.',
    materials: ['1 bola', '1 almofada'],
    steps: ['Jogue a bola para a criança.', 'Depois de pegar, ela deve sentar na almofada.', 'Levantar e devolver a bola.', 'Repetir 8 vezes.'],
    safety: 'A almofada deve estar firme no chão.',
    variation: 'Trocar sentar por tocar o chão.'
  },
  {
    id: 26,
    title: 'Pega e gira',
    category: 'Coordenação',
    difficulty: 'Desafiador',
    place: 'Ambos',
    age: '6-10 anos',
    time: '3 min',
    goal: 'Juntar recepção, equilíbrio e rotação.',
    materials: ['1 bola leve'],
    steps: ['Receba a bola com as duas mãos.', 'Faça um giro completo.', 'Devolva ao parceiro.', 'Repita por 1 minuto.'],
    safety: 'Gire devagar para evitar tontura.',
    variation: 'Trocar o sentido do giro a cada rodada.'
  },
  {
    id: 27,
    title: 'Rolamento lateral',
    category: 'Precisão',
    difficulty: 'Fácil',
    place: 'Dentro de casa',
    age: '3-6 anos',
    time: '3 min',
    goal: 'Explorar controle de força em diferentes direções.',
    materials: ['1 bola'],
    steps: ['Sente no chão com as pernas abertas.', 'Role a bola para o lado direito.', 'Puxe de volta.', 'Repita para o lado esquerdo.'],
    safety: 'Evite superfícies muito lisas.',
    variation: 'Fazer em dupla, um de cada lado.'
  },
  {
    id: 28,
    title: 'Bola no túnel do corpo',
    category: 'Coordenação',
    difficulty: 'Fácil',
    place: 'Dentro de casa',
    age: '3-6 anos',
    time: '3 min',
    goal: 'Reconhecer o corpo e organizar movimentos simples.',
    materials: ['1 bola'],
    steps: ['Fique de quatro apoios.', 'Empurre a bola para passar por baixo do corpo.', 'Pegue do outro lado.', 'Repita 8 vezes.'],
    safety: 'Faça sobre tapete ou EVA.',
    variation: 'Cronometrar quantas passagens faz em 30 segundos.'
  },
  {
    id: 29,
    title: 'Pula e segura',
    category: 'Velocidade',
    difficulty: 'Médio',
    place: 'Ambos',
    age: '5-9 anos',
    time: '3 min',
    goal: 'Treinar impulsão leve e recepção.',
    materials: ['1 bola'],
    steps: ['Jogue a bola um pouco acima da cabeça.', 'A criança salta e segura.', 'Aterre com os dois pés.', 'Repita 8 vezes.'],
    safety: 'Evite piso escorregadio.',
    variation: 'Fazer com um mini salto lateral antes.'
  },
  {
    id: 30,
    title: 'Salta sobre a bola parada',
    category: 'Equilíbrio',
    difficulty: 'Médio',
    place: 'Ao ar livre',
    age: '5-9 anos',
    time: '3 min',
    goal: 'Controlar impulso e aterrissagem.',
    materials: ['1 bola'],
    steps: ['Coloque a bola parada no chão.', 'Salte por cima com os dois pés.', 'Volte para trás e repita.', 'Faça 10 saltos.'],
    safety: 'Use bola firme e espaço com boa aderência.',
    variation: 'Fazer saltos laterais sobre a bola.'
  },
  {
    id: 31,
    title: 'Toque com joelhos',
    category: 'Coordenação',
    difficulty: 'Médio',
    place: 'Ambos',
    age: '6-10 anos',
    time: '3 min',
    goal: 'Desenvolver coordenação entre membros superiores e inferiores.',
    materials: ['1 bola leve'],
    steps: ['Jogue a bola para cima.', 'Toque os joelhos com as mãos.', 'Pegue a bola antes de cair.', 'Repita 6 vezes.'],
    safety: 'Comece com lançamentos baixos.',
    variation: 'Tocar ombros em vez de joelhos.'
  },
  {
    id: 32,
    title: 'Bola escondida',
    category: 'Cooperação',
    difficulty: 'Fácil',
    place: 'Dentro de casa',
    age: '3-7 anos',
    time: '5 min',
    goal: 'Criar brincadeira de atenção e busca.',
    materials: ['1 bola'],
    steps: ['Um adulto esconde a bola em local seguro.', 'Dê pistas simples.', 'A criança procura e encontra.', 'Depois troquem os papéis.'],
    safety: 'Esconda em locais acessíveis e seguros.',
    variation: 'Usar pistas quentes e frias.'
  },
  {
    id: 33,
    title: 'Corrida do leva e traz',
    category: 'Velocidade',
    difficulty: 'Fácil',
    place: 'Ao ar livre',
    age: '4-8 anos',
    time: '4 min',
    goal: 'Estimular deslocamento rápido com foco.',
    materials: ['1 bola', '2 marcas no chão'],
    steps: ['Leve a bola até a marca.', 'Volte sem a bola.', 'Corra novamente para buscá-la.', 'Repita 5 vezes.'],
    safety: 'Respeite pausas entre as rodadas.',
    variation: 'Levar a bola com as duas mãos acima da cabeça.'
  },
  {
    id: 34,
    title: 'Condução com o pé',
    category: 'Precisão',
    difficulty: 'Médio',
    place: 'Ao ar livre',
    age: '5-10 anos',
    time: '5 min',
    goal: 'Controlar pequenos toques com os pés.',
    materials: ['1 bola'],
    steps: ['Marque um caminho curto.', 'Conduza a bola com toques leves.', 'Chegue ao final sem sair da rota.', 'Volte usando o outro pé.'],
    safety: 'Escolha calçado confortável.',
    variation: 'Fazer slalom entre obstáculos.'
  },
  {
    id: 35,
    title: 'Gol de almofada',
    category: 'Precisão',
    difficulty: 'Fácil',
    place: 'Dentro de casa',
    age: '4-8 anos',
    time: '4 min',
    goal: 'Criar um mini jogo de chute com objetivo claro.',
    materials: ['1 bola macia', '2 almofadas'],
    steps: ['Monte um gol com almofadas.', 'Posicione a bola a alguns passos.', 'Chute tentando fazer o gol.', 'Conte 10 tentativas.'],
    safety: 'Use bola de espuma ou bem leve.',
    variation: 'Chutar com o pé não dominante.'
  },
  {
    id: 36,
    title: 'Basquete de joelhos',
    category: 'Precisão',
    difficulty: 'Médio',
    place: 'Dentro de casa',
    age: '5-9 anos',
    time: '4 min',
    goal: 'Ajustar lançamento com menos impulso corporal.',
    materials: ['1 bola pequena', 'cesto'],
    steps: ['Fique de joelhos sobre tapete.', 'Arremesse a bola no cesto.', 'Some os acertos em 8 tentativas.', 'Tente superar a pontuação anterior.'],
    safety: 'Proteja os joelhos e mantenha distância do cesto.',
    variation: 'Mudar a posição do cesto para o lado.'
  },
  {
    id: 37,
    title: 'Toca e troca de lugar',
    category: 'Cooperação',
    difficulty: 'Médio',
    place: 'Ao ar livre',
    age: '6-10 anos',
    time: '4 min',
    goal: 'Sincronizar passe com deslocamento.',
    materials: ['1 bola'],
    steps: ['Em dupla, passem a bola.', 'Depois do passe, cada um troca de lugar.', 'Continuem a sequência sem deixar cair.', 'Façam por 1 minuto.'],
    safety: 'Comecem em distância curta.',
    variation: 'Usar três pessoas em triângulo.'
  },
  {
    id: 38,
    title: 'Bola no ombro',
    category: 'Equilíbrio',
    difficulty: 'Médio',
    place: 'Dentro de casa',
    age: '5-9 anos',
    time: '3 min',
    goal: 'Ajustar postura e passos controlados.',
    materials: ['1 bola leve'],
    steps: ['Apoie a bola sobre um ombro.', 'Dê 5 passos sem deixar cair.', 'Troque de lado.', 'Repita 4 vezes.'],
    safety: 'Use bola leve para evitar desconforto.',
    variation: 'Passar por um caminho com curvas.'
  },
  {
    id: 39,
    title: 'Bola entre os tornozelos',
    category: 'Equilíbrio',
    difficulty: 'Desafiador',
    place: 'Dentro de casa',
    age: '6-10 anos',
    time: '3 min',
    goal: 'Fortalecer controle de pernas e salto curto.',
    materials: ['1 bola pequena ou almofada'],
    steps: ['Prenda a bola entre os tornozelos.', 'Dê pequenos pulos para frente.', 'Chegue até uma marca.', 'Volte andando para repetir.'],
    safety: 'Faça em piso macio e com supervisão.',
    variation: 'Competir contra o próprio tempo.'
  },
  {
    id: 40,
    title: 'Sequência 1-2-3',
    category: 'Coordenação',
    difficulty: 'Médio',
    place: 'Ambos',
    age: '5-9 anos',
    time: '4 min',
    goal: 'Memorizar e executar uma pequena rotina motora.',
    materials: ['1 bola'],
    steps: ['Faça 3 ações: quicar, jogar para cima e pegar.', 'Repita a sequência 5 vezes.', 'Conte em voz alta 1, 2 e 3.', 'Tente sem parar.'],
    safety: 'Mantenha o ritmo confortável.',
    variation: 'Criar uma nova sequência com a criança.'
  },
  {
    id: 41,
    title: 'Ritmo com música',
    category: 'Cooperação',
    difficulty: 'Fácil',
    place: 'Dentro de casa',
    age: '3-8 anos',
    time: '5 min',
    goal: 'Associar som, corpo e bola em uma brincadeira leve.',
    materials: ['1 bola', 'música'],
    steps: ['Coloque uma música animada.', 'Passem a bola no ritmo.', 'Quando a música parar, todos congelam.', 'Recomece várias vezes.'],
    safety: 'Use espaço com boa circulação.',
    variation: 'Na pausa, fazer pose com a bola.'
  },
  {
    id: 42,
    title: 'Bola na caixa certa',
    category: 'Precisão',
    difficulty: 'Médio',
    place: 'Dentro de casa',
    age: '4-8 anos',
    time: '5 min',
    goal: 'Treinar direção com objetivos diferentes.',
    materials: ['1 bola', '2 caixas'],
    steps: ['Posicione duas caixas.', 'Diga qual caixa vale o ponto.', 'A criança deve acertar a escolhida.', 'Troque o alvo a cada rodada.'],
    safety: 'Mantenha as caixas estáveis.',
    variation: 'Pontuação diferente para cada caixa.'
  },
  {
    id: 43,
    title: 'Vai e volta rasteiro',
    category: 'Precisão',
    difficulty: 'Fácil',
    place: 'Ambos',
    age: '4-8 anos',
    time: '3 min',
    goal: 'Manter a bola sempre baixa e controlada.',
    materials: ['1 bola'],
    steps: ['Role a bola para o parceiro.', 'Receba e devolva rasteiro.', 'Façam 15 trocas seguidas.', 'Tentem sem deixar sair da linha imaginária.'],
    safety: 'Escolha piso uniforme.',
    variation: 'Aumentar gradualmente a distância.'
  },
  {
    id: 44,
    title: 'Mini circuito com bola',
    category: 'Velocidade',
    difficulty: 'Desafiador',
    place: 'Ao ar livre',
    age: '6-10 anos',
    time: '6 min',
    goal: 'Misturar várias habilidades em sequência.',
    materials: ['1 bola', 'cones, fita ou marcas'],
    steps: ['Monte 3 estações: correr, quicar e arremessar.', 'Passe por todas na ordem.', 'Cronometre o tempo.', 'Tente melhorar na próxima rodada.'],
    safety: 'Separe bem as estações para evitar tropeços.',
    variation: 'Deixar a criança desenhar o próprio circuito.'
  },
  {
    id: 45,
    title: 'Respira e segura',
    category: 'Equilíbrio',
    difficulty: 'Fácil',
    place: 'Dentro de casa',
    age: '4-8 anos',
    time: '2 min',
    goal: 'Trabalhar pausa, atenção e controle corporal.',
    materials: ['1 bola'],
    steps: ['Segure a bola na frente do peito.', 'Inspire contando até 3.', 'Expire contando até 3 sem mexer os pés.', 'Repita 5 vezes.'],
    safety: 'Faça de forma leve, sem prender a respiração.',
    variation: 'Fazer em um pé só por 3 segundos.'
  },
  {
    id: 46,
    title: 'Passe com nomes',
    category: 'Cooperação',
    difficulty: 'Fácil',
    place: 'Ambos',
    age: '3-8 anos',
    time: '4 min',
    goal: 'Misturar linguagem, atenção e interação.',
    materials: ['1 bola'],
    steps: ['Passe a bola dizendo o nome de um animal, cor ou fruta.', 'Quem recebe devolve dizendo outro nome.', 'Continue por 2 minutos.', 'Evite repetir palavras.'],
    safety: 'Faça passes leves e combinados.',
    variation: 'Escolher apenas palavras de uma categoria.'
  },
  {
    id: 47,
    title: 'Alvo na parede com fita',
    category: 'Precisão',
    difficulty: 'Médio',
    place: 'Ambos',
    age: '5-10 anos',
    time: '5 min',
    goal: 'Ter um objetivo visual claro para arremessar.',
    materials: ['1 bola', 'fita adesiva'],
    steps: ['Marque um quadrado na parede com fita.', 'Arremesse a bola tentando acertar dentro.', 'Conte os acertos em 10 tentativas.', 'Troque a distância.'],
    safety: 'Não use em paredes com quadros ou vidro perto.',
    variation: 'Criar 3 alturas diferentes de alvo.'
  },
  {
    id: 48,
    title: 'Desafio silencioso',
    category: 'Equilíbrio',
    difficulty: 'Médio',
    place: 'Dentro de casa',
    age: '4-8 anos',
    time: '3 min',
    goal: 'Executar o movimento com calma e atenção.',
    materials: ['1 bola'],
    steps: ['Segure a bola com as duas mãos.', 'Caminhe até a marca sem fazer barulho.', 'Volte ainda mais devagar.', 'Repita 4 vezes.'],
    safety: 'Prefira ambiente sem obstáculos.',
    variation: 'Fazer na ponta dos pés.'
  },
  {
    id: 49,
    title: '3 passes e gol',
    category: 'Cooperação',
    difficulty: 'Médio',
    place: 'Ao ar livre',
    age: '5-10 anos',
    time: '5 min',
    goal: 'Criar mini jogo com objetivo coletivo.',
    materials: ['1 bola', '2 marcas para gol'],
    steps: ['Façam 3 passes seguidos.', 'Depois tentem finalizar no gol.', 'Se a bola cair, recomeça a contagem.', 'Tentem fazer 5 gols.'],
    safety: 'Deixe o gol longe de janelas.',
    variation: 'Exigir que todos toquem na bola antes do gol.'
  },
  {
    id: 50,
    title: 'Desafio livre em família',
    category: 'Cooperação',
    difficulty: 'Desafiador',
    place: 'Ambos',
    age: 'Todas as idades',
    time: '6 min',
    goal: 'Criar autonomia e imaginação com a bola.',
    materials: ['1 bola', 'itens opcionais da casa'],
    steps: ['Escolham juntos 3 movimentos favoritos do site.', 'Montem uma sequência única.', 'Apresentem um para o outro.', 'Deem um nome ao desafio criado.'],
    safety: 'Mantenha apenas movimentos adequados à idade da criança.',
    variation: 'Registrar a sequência em desenho ou foto.'
  }
];

const grid = document.getElementById('challengeGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const difficultyFilter = document.getElementById('difficultyFilter');
const placeFilter = document.getElementById('placeFilter');
const progressLabel = document.getElementById('progressLabel');
const progressBar = document.getElementById('progressBar');
const doneCountHero = document.getElementById('doneCountHero');
const toast = document.getElementById('toast');
const missionBoard = document.getElementById('missionBoard');
const dailyChallengeText = document.getElementById('dailyChallengeText');
const themeToggle = document.getElementById('themeToggle');

const storageKeys = {
  done: 'ballChallengesDone',
  favorites: 'ballChallengesFavorites',
  theme: 'ballChallengesTheme'
};

let quickFilter = 'all';
let doneSet = new Set(JSON.parse(localStorage.getItem(storageKeys.done) || '[]'));
let favoriteSet = new Set(JSON.parse(localStorage.getItem(storageKeys.favorites) || '[]'));

function saveState() {
  localStorage.setItem(storageKeys.done, JSON.stringify([...doneSet]));
  localStorage.setItem(storageKeys.favorites, JSON.stringify([...favoriteSet]));
}

function applyTheme() {
  const savedTheme = localStorage.getItem(storageKeys.theme);
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    themeToggle.textContent = '🌙';
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem(storageKeys.theme, isDark ? 'dark' : 'light');
  applyTheme();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function difficultyClass(level) {
  if (level === 'Fácil') return 'easy';
  if (level === 'Médio') return 'medium';
  return 'hard';
}

function populateCategories() {
  const categories = [...new Set(challenges.map(item => item.category))].sort();
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function getFilteredChallenges() {
  const term = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const difficulty = difficultyFilter.value;
  const place = placeFilter.value;

  return challenges.filter(item => {
    const matchesSearch = !term || [
      item.title,
      item.category,
      item.goal,
      item.age,
      item.place,
      item.materials.join(' '),
      item.steps.join(' '),
      item.variation
    ].join(' ').toLowerCase().includes(term);

    const matchesCategory = category === 'all' || item.category === category;
    const matchesDifficulty = difficulty === 'all' || item.difficulty === difficulty;
    const matchesPlace = place === 'all' || item.place === place;

    const matchesQuick = (
      quickFilter === 'all' ||
      (quickFilter === 'favorites' && favoriteSet.has(item.id)) ||
      (quickFilter === 'done' && doneSet.has(item.id)) ||
      (quickFilter === 'pending' && !doneSet.has(item.id))
    );

    return matchesSearch && matchesCategory && matchesDifficulty && matchesPlace && matchesQuick;
  });
}

function renderProgress() {
  const doneCount = doneSet.size;
  const percent = (doneCount / challenges.length) * 100;
  progressLabel.textContent = `${doneCount} de ${challenges.length} concluídos`;
  doneCountHero.textContent = doneCount;
  progressBar.style.width = `${percent}%`;
}

function renderChallenges() {
  const list = getFilteredChallenges();

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>Nenhum desafio encontrado</h3>
        <p class="muted">Tente trocar os filtros ou limpar a busca para ver mais opções.</p>
      </div>
    `;
    renderProgress();
    return;
  }

  grid.innerHTML = list.map(item => {
    const isDone = doneSet.has(item.id);
    const isFavorite = favoriteSet.has(item.id);

    return `
      <article class="challenge-card">
        <div class="card-top">
          <div class="card-title-wrap">
            <div class="card-number">${item.id}</div>
          </div>
          <div class="card-title">
            <h3>${item.title}</h3>
            <div class="badges">
              <span class="badge ${difficultyClass(item.difficulty)}">${item.difficulty}</span>
              <span class="badge">${item.category}</span>
              ${isDone ? '<span class="badge done">✔ Concluído</span>' : ''}
              ${isFavorite ? '<span class="badge favorite">★ Favorito</span>' : ''}
            </div>
          </div>
        </div>

        <p>${item.goal}</p>

        <div class="meta-row">
          <span class="meta-pill">👧 ${item.age}</span>
          <span class="meta-pill">⏱ ${item.time}</span>
          <span class="meta-pill">📍 ${item.place}</span>
        </div>

        <details>
          <summary>Ver passo a passo</summary>
          <div class="detail-grid">
            <div class="detail-block">
              <strong>Materiais</strong>
              <ul>${item.materials.map(material => `<li>${material}</li>`).join('')}</ul>
            </div>
            <div class="detail-block">
              <strong>Passos</strong>
              <ol>${item.steps.map(step => `<li>${step}</li>`).join('')}</ol>
            </div>
            <div class="detail-block">
              <strong>Segurança</strong>
              <p>${item.safety}</p>
            </div>
            <div class="detail-block">
              <strong>Variação</strong>
              <p>${item.variation}</p>
            </div>
          </div>
        </details>

        <div class="card-footer">
          <button class="action-btn ${isDone ? 'active' : ''}" data-action="done" data-id="${item.id}">
            ${isDone ? 'Desmarcar' : 'Marcar como concluído'}
          </button>
          <button class="action-btn ${isFavorite ? 'active' : ''}" data-action="favorite" data-id="${item.id}">
            ${isFavorite ? 'Remover favorito' : 'Salvar favorito'}
          </button>
        </div>
      </article>
    `;
  }).join('');

  renderProgress();
}

function toggleDone(id) {
  const numericId = Number(id);
  if (doneSet.has(numericId)) {
    doneSet.delete(numericId);
    showToast('Desafio removido dos concluídos.');
  } else {
    doneSet.add(numericId);
    showToast('Boa! Desafio marcado como concluído.');
  }
  saveState();
  renderChallenges();
}

function toggleFavorite(id) {
  const numericId = Number(id);
  if (favoriteSet.has(numericId)) {
    favoriteSet.delete(numericId);
    showToast('Favorito removido.');
  } else {
    favoriteSet.add(numericId);
    showToast('Desafio salvo nos favoritos.');
  }
  saveState();
  renderChallenges();
}

function pickRandomChallenge() {
  const list = getFilteredChallenges();
  if (!list.length) {
    showToast('Não há desafios disponíveis com os filtros atuais.');
    return;
  }
  const item = list[Math.floor(Math.random() * list.length)];
  missionBoard.classList.remove('hidden');
  missionBoard.innerHTML = `
    <h3>🎲 Desafio sorteado</h3>
    <div class="mission-list">
      <div class="mission-item">
        <strong>#${item.id} • ${item.title}</strong>
        <p>${item.goal}</p>
        <p><strong>Dificuldade:</strong> ${item.difficulty}</p>
        <p><strong>Local:</strong> ${item.place}</p>
      </div>
    </div>
  `;
  missionBoard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function generateDailyMission() {
  const shuffled = [...challenges].sort(() => Math.random() - 0.5).slice(0, 3);
  missionBoard.classList.remove('hidden');
  missionBoard.innerHTML = `
    <h3>🌟 Missão do dia</h3>
    <p class="muted">Escolha a ordem ou tente cumprir os 3 desafios na sequência.</p>
    <div class="mission-list">
      ${shuffled.map(item => `
        <div class="mission-item">
          <strong>#${item.id} • ${item.title}</strong>
          <p>${item.goal}</p>
          <p><strong>Tempo:</strong> ${item.time}</p>
        </div>
      `).join('')}
    </div>
  `;
  dailyChallengeText.textContent = `${shuffled[0].title}, ${shuffled[1].title} e ${shuffled[2].title}.`;
  missionBoard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetProgress() {
  if (!confirm('Deseja apagar o progresso e os favoritos salvos neste navegador?')) return;
  doneSet = new Set();
  favoriteSet = new Set();
  saveState();
  renderChallenges();
  showToast('Progresso resetado com sucesso.');
}

function setupEvents() {
  [searchInput, categoryFilter, difficultyFilter, placeFilter].forEach(element => {
    element.addEventListener('input', renderChallenges);
    element.addEventListener('change', renderChallenges);
  });

  document.querySelectorAll('[data-quick]').forEach(button => {
    button.addEventListener('click', () => {
      quickFilter = button.dataset.quick;
      document.querySelectorAll('[data-quick]').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      renderChallenges();
    });
  });

  grid.addEventListener('click', event => {
    const target = event.target.closest('[data-action]');
    if (!target) return;

    const { action, id } = target.dataset;
    if (action === 'done') toggleDone(id);
    if (action === 'favorite') toggleFavorite(id);
  });

  document.getElementById('randomBtn').addEventListener('click', pickRandomChallenge);
  document.getElementById('randomHeroBtn').addEventListener('click', pickRandomChallenge);
  document.getElementById('dailyMissionBtn').addEventListener('click', generateDailyMission);
  document.getElementById('resetBtn').addEventListener('click', resetProgress);
  themeToggle.addEventListener('click', toggleTheme);
}

populateCategories();
applyTheme();
setupEvents();
renderChallenges();
