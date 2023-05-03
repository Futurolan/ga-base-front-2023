import React from 'react'

import Layout from 'components/common/Layout'
import NewsList from 'components/news/NewsList'
import Meta from 'components/common/Meta'
import GenericBanner from 'components/common/GenericBanner'

import config from 'config/config'

class NewsPage extends React.Component {
  render () {
    return (
      <Layout name='news-page has-bg-star'>
      <GenericBanner title="Actualités" subtitle="Toutes les actualités" imgUrl={config.home.banner} />
        <div className='section has-bg-star'>
          <Meta title={config.news.title} description={config.news.description} />
          <div className='container'>
            <NewsList />
          </div>
        </div>
      </Layout>
    )
  }
}

export default NewsPage
