import React from 'react'
import PropTypes from 'prop-types'

import config from 'config/config'

import './styles.scss'

const GenericBanner = (props) => (
  <section className='ga-generic-banner'>
    <div className='ga-generic-banner-background'></div>
    <div className="container">
      <div className="columns pt-6 is-vcentered">
        <div className="column is-two-thirds has-text-left is-uppercase ga-generic-banner-content">
          <h1 id="genericbanner-title">{props.title}</h1>
          <span id="genericbanner-subtitle">{props.subtitle}</span>
        </div>
        <div className="column is-one-third has-text-right ga-generic-banner-logo">
          <img alt={`Logo de l'évènement ${config.title}`} src={config.logo} />
        </div>
      </div>
    </div>
  </section>
)

GenericBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imgUrl: PropTypes.string
}

export default GenericBanner
