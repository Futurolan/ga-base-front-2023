import React from 'react'
import PropTypes from 'prop-types'

import config from 'config/config'

import './styles.scss'

const Banner = (props) => (
  <section className='ga-banner'>
    <div className='ga-banner-background'></div>
    <div className="container">
      <div className="columns pt-6 is-vcentered">
        <div className="column has-text-left is-uppercase ga-banner-event">
          <h1>{config.title}</h1>
          <span>{config.subtitle}</span>
        </div>
        <div className="column has-text-centered ga-banner-logo">
          <img alt={`Logo de l'évènement ${config.title}`} src={config.logo} />
        </div>
        <div className="column has-text-right is-uppercase ga-banner-info">
          <p>La Hune - Saint Benoit</p>
          <p>15 & 16 novembre 2023</p>
        </div>
      </div>
    </div>
  </section>
)

Banner.propTypes = {
  imgUrl: PropTypes.string
}

export default Banner
