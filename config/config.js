const config = {
  title: 'Gamers Assembly 2020',
  logo: '/static/img/logo.png',
  description: 'Retrouvez la Gamers Assembly 2020 du 10 au 13 avril 2020 pour une 21e édition de folie !',
  metaImagePath: '/static/img/logo.png',
  gaTrackingId: 'UA-128777022-8',
  mainPartner: {
    logo: '/static/img/logo_gp.png',
    url: 'https://www.grandpoitiers.fr/'
  },
  home: {
    banner: '/static/img/banner.png',
    hero: {
      background: '/static/img/bg-grey-area.jpg',
      backgroundVideo: 'https://temp.gamers-assembly.net/ga2018.mp4',
      logo: '/static/img/logo.png',
      title: 'Gamers Assembly',
      subtitle: 'Edition 2020'
    },
    twitterAccount: 'GamersAssembly',
    partners: {
      active: false,
      delay: 10,
      count: 4
    }
  },
  news: {
    title: 'Actualités',
    description: 'Retrouvez toutes les actualités de la Gamers Assembly 2020',
    link: '/news'
  },
  partners: {
    title: 'Partenaires',
    description: 'Retrouvez la liste de tous nos partenaires',
    link: '/partenaires'
  },
  tournaments: {
    title: 'Tournois',
    description: 'Tous les tournois de la Gamers Assembly 2020',
    notification: '<div class="columns is-vcentered"><div class="column is-1"><img src="https://raw.githubusercontent.com/Futurolan/ga-oes-2020/master/public/static/img/logo_ga_oes.png"></div><div class="column">La Gamers Assembly Occitanie Edition vous propose les tournois suivants ! La Gamers Assembly Occitanie Edition vous propose les tournois suivants ! </div></div>',
    link: '/tournois'
  },
  info: {
    title: 'Venir à la GA',
    description: 'Toutes les informations sur la Gamers Assembly 2020',
    link: '/infos'
  },
  schedule: {
    title: 'Programme',
    description: 'Le programme heure par heure',
    link: '/schedule'
  },
  live: {
    title: 'Live',
    description: 'Tous les streams et résultats en direct',
    link: '/live'
  },
  tickets: {
    title: 'Billetterie',
    description: 'Achetez vos places pour la Gamers Assembly 2020',
    link: '/billetterie',
    notification: '<strong>ATTENTION !</strong><br />Jusqu\'au 11 mars, profitez d\'une réduction de 10 € par place joueur avec le code de réduction <strong>#GA2020</strong><br />  (NE PAS OUBLIER dès le début de l\'inscription, à l\'étape 1)',
    pass: {
      title: 'Pass "Manager/Accompagnateur"',
      text: 'Pour obtenir des pass "Manager/Accompagnateur", les équipes inscrites aux tournois peuvent réaliser une demande via le lien ci-dessous.',
      button: 'Obtenir un pass'
    },
    minor: {
      title: 'Informations pour les mineurs',
      text: 'Vous devez télécharger l\'autorisation parentale, l\'imprimer, la remplir et l\'apporter le jour de votre venue avec votre billet.',
      button: 'Télécharger l\'autorisation parentale (format pdf)'
    },
    rules: {
      title: 'Règlement intérieur',
      text: 'L\'acquisition d\'un ticket entraîne l\'adhésion au règlement intérieur disponible ci-dessous.',
      button: 'Télécharger le règlement intérieur (format pdf)'
    }
  },
  staticTickets: {
    title: 'Billetterie',
    iframeUrl: 'https://www.weezevent.com/widget_billeterie.php?id_evenement=583841&lg_billetterie=1&code=37023&width_auto=1&v=2&jsintegration=1',
    description: 'Achetez vos places pour la Gamers Assembly 2020',
    link: '/visiteurs'
  },
  exhibitors: {
    title: 'Exposants',
    description: 'Les exposants que vous pourrez retrouver à la Gamers Assembly',
    link: '/exposants'
  },
  family: {
    title: 'Espace Familles',
    description: 'Les activités à faire en famille durant la Gamers Assembly',
    link: '/espace-familles'
  },
  influencers: {
    title: 'VIPs',
    description: 'Les personnalités qui seront présentes pour la Gamers Assembly',
    link: '/vips'
  },
  contact: {
    active: true,
    pageId: 6
  },
  press: {
    active: true,
    pageId: 199937
  },
  legals: {
    active: true,
    pageId: 8
  },
  recruit: {
    active: true,
    title: 'Recrutement',
    description: 'Devenir bénévole pour la Gamers Assembly, c\'est par ici !!!',
    formUrl: 'https://goo.gl/forms/xMUWgVAxaTTVNDbu1'
  },
  social: {
    twitter: 'https://twitter.com/GamersAssembly',
    facebook: 'https://www.facebook.com/GamersAssembly',
    twitch: 'https://twitch.tv/gamers_assembly',
    youtube: 'https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw',
    flickr: 'https://www.flickr.com/photos/futurolan',
    discord: 'https://discordapp.com/invite/gamersassembly',
    instagram: 'https://www.instagram.com/gamers_assembly/'
  }
}

module.exports = config
