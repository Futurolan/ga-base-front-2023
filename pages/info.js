import React from 'react'

import Layout from 'components/common/Layout'
import Meta from 'components/common/Meta'
import InfosContent from 'components/info/InfosContent'
import GenericBanner from 'components/common/GenericBanner'

import config from 'config/config'

class InfosPage extends React.Component {
  render () {
    return (
      <Layout name='infos-page has-bg-star'>
        <GenericBanner title={config.title + " : " + config.subtitle} subtitle="Informations pratiques" imgUrl={config.home.banner} />
        <div className='section has-bg-star'>
          <Meta title={config.info.title} description={config.info.description} />
          <div className='container'>
            <InfosContent />
          </div>
        </div>
      </Layout>
    )
  }
}

export default InfosPage
