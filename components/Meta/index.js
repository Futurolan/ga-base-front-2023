import React from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

const Meta = (props) => {
  const title = props.title ? `${props.title} | Galloween 2018` : 'Galloween 2018'
  const description = props.description ? props.description : 'Retrouvez la Gamers Assembly Halloween Edition 2018"'
  const image = props.image ? props.image : `${process.env.BASE_URL}/static/img/logo.png`
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='image' content={image} />
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      <meta itemProp='image' content={image} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='og:image' content={image} />
      <meta name='og:url' content={`${process.env.BASE_URL}${props.router.asPath}`} />
      <meta name='og:site_name' content={title} />
      <meta name='og:locale' content='fr_FR' />
      <meta name='og:type' content='website' />
    </Head>
  )
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  router: PropTypes.object
}

export default withRouter(Meta)