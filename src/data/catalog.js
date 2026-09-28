const bunny = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
const sintel = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
const elephants = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'

export const catalog = [
  {
    id: 'big-buck-bunny',
    title: 'Big Buck Bunny',
    type: 'Filme',
    year: 2008,
    rating: 'L',
    duration: '10 min',
    genres: ['Animação', 'Comédia'],
    description: 'Um coelho tranquilo decide reagir depois que três pequenos encrenqueiros perturbam sua floresta.',
    accent: 'linear-gradient(135deg,#173b2a,#4f8b5f 55%,#c0d683)',
    video: bunny,
    featured: true,
  },
  {
    id: 'sintel',
    title: 'Sintel',
    type: 'Filme',
    year: 2010,
    rating: '10',
    duration: '15 min',
    genres: ['Fantasia', 'Aventura'],
    description: 'Uma jovem guerreira parte em uma jornada para reencontrar um pequeno dragão que salvou.',
    accent: 'linear-gradient(135deg,#1f2633,#8a4a39 55%,#d3aa6a)',
    video: sintel,
  },
  {
    id: 'elephants-dream',
    title: 'Elephants Dream',
    type: 'Filme',
    year: 2006,
    rating: '12',
    duration: '11 min',
    genres: ['Ficção científica', 'Animação'],
    description: 'Dois personagens percorrem uma máquina gigantesca e misteriosa em um mundo surreal.',
    accent: 'linear-gradient(135deg,#111822,#385b68 55%,#a6b6aa)',
    video: elephants,
  },
  {
    id: 'oficina-zero',
    title: 'Oficina Zero',
    type: 'Série',
    year: 2026,
    rating: '12',
    duration: '1 temporada',
    genres: ['Documentário', 'Automotivo'],
    description: 'Série demonstrativa para testar temporadas e episódios no Superflix.',
    accent: 'linear-gradient(135deg,#101010,#0f5f32 55%,#d4ff4f)',
    seasons: [
      { number: 1, episodes: [
        { id: 'oficina-zero-s1e1', title: 'Diagnóstico', duration: '10 min', description: 'Começando um diagnóstico do zero.', video: bunny },
        { id: 'oficina-zero-s1e2', title: 'Sinal e sincronismo', duration: '15 min', description: 'Entendendo sinais e sincronismo.', video: sintel },
        { id: 'oficina-zero-s1e3', title: 'Teste final', duration: '11 min', description: 'Validação do reparo e teste final.', video: elephants },
      ]}
    ]
  },
  {
    id: 'rota-urbana',
    title: 'Rota Urbana',
    type: 'Série',
    year: 2026,
    rating: '10',
    duration: '1 temporada',
    genres: ['Viagem', 'Lifestyle'],
    description: 'Conteúdo demonstrativo para o catálogo do projeto.',
    accent: 'linear-gradient(135deg,#18111f,#613b75 55%,#de8d84)',
    seasons: [{ number: 1, episodes: [
      { id: 'rota-urbana-s1e1', title: 'Primeira rota', duration: '10 min', description: 'O começo da jornada.', video: bunny },
      { id: 'rota-urbana-s1e2', title: 'Noite na cidade', duration: '15 min', description: 'Uma nova parada.', video: sintel },
    ]}]
  },
]

export function findPlayable(id) {
  for (const item of catalog) {
    if (item.id === id && item.video) return { ...item, parent: item }
    for (const season of item.seasons || []) {
      const episode = season.episodes.find((ep) => ep.id === id)
      if (episode) return { ...episode, parent: item, season: season.number }
    }
  }
  return null
}
