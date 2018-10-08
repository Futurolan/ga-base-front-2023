import React from 'react'

import Layout from 'components/Layout'
import HomeNewsList from 'components/HomeNewsList'
import HomeInfoBlocks from 'components/HomeInfo/index'
import Meta from 'components/Meta'
import config from '../config/config'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

import '../styles/styles.scss'
import TwitchCarousel from '../components/TwitchCarousel'

class HomePage extends React.Component {
  render () {
    return (
      <Layout name='home-page'>
        <div>
          <Meta title='Accueil' />
          <TwitchCarousel channelList={['w_lapin', 'sco', 'shroud', 'drdisrespectlive', 'lestream', 'gotaga', 'blitzstream']} />
          {config.home.hero && <Hero title={config.home.hero.title} subtitle={config.home.hero.subtitle} imgUrl={config.home.hero.background} />}
          {config.home.banner && <Banner imgUrl={config.home.banner} />}
          <HomeInfoBlocks />
          <HomeNewsList />
        </div>
      </Layout>
    )
  }
}

export default HomePage
