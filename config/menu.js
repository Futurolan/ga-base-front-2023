const menu = [
  { type: 'config', id: 'news' },
  { type: 'config', id: 'info' },
  { type: 'config', id: 'partners' },
  { type: 'config', id: 'tournaments' },
  {
    type: 'nolink',
    title: 'Infos',
    children: [
      { type: 'config', id: 'info' },
      { type: 'page', title: 'Location2022', id: 203052, link: '/location' },
      { type: 'page', title: 'Presse2022', id: 203051, link: '/espace-presse' },
      { type: 'config', id: 'schedule' },
      { type: 'config', id: 'exhibitors' },
      { type: 'config', id: 'family' },
      { type: 'config', id: 'influencers' },
      { type: 'page', title: 'Cosplay2019', id: 2673, link: '/cosplay' },
      { type: 'page', title: 'Les Offs2019', id: 2727, link: '/offs' },
      { type: 'page', title: 'Grand Poitiers2019', id: 1246, link: '/grand-poitiers' }
    ]
  }
]

module.exports = menu
