import React from 'react'

import Layout from 'components/common/Layout'
import Meta from 'components/common/Meta'
import TournamentList from 'components/tournaments/TournamentList'
import GenericBanner from 'components/common/GenericBanner'

import config from 'config/config'

class TournoisPage extends React.Component {
  render () {
    return (
      <Layout name='tournois-page has-bg-star'>
      <GenericBanner title={config.tournaments.title} subtitle="Tous les tournois" imgUrl={config.home.banner} />
        <div className='section has-bg-star'>
          <Meta title={config.tournaments.title} description={config.tournaments.description} />
          <div className='container'>
            {config.tournaments.notification && <div className='notification' dangerouslySetInnerHTML={{ __html: config.tournaments.notification }} />}
            <TournamentList />
          </div>
        </div>
      </Layout>
    )
  }
}

export default TournoisPage
