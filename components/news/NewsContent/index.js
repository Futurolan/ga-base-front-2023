import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import getConfig from 'next/config'

import Meta from 'components/common/Meta'
import SocialNetworkShare from 'components/common/SocialNetworkShare'

import './styles.scss'

const { publicRuntimeConfig } = getConfig()

function NewsContent ({ data: { loading, error, node } }) {
  if (error || (node && node.type.id !== 'news')) {
    return <div className='notification is-danger'>Une erreur est survenue pendant le chargement de l'actualité !!!</div>
  }

  if (node) {
    // Fix sale tant que j'ai pas compris le soucis de cache ...
    const processedContent = node.content.processed.replace(new RegExp('src="/sites/default/files/inline-images/', 'g'), `src="${publicRuntimeConfig.BACKEND_API_URL}/sites/default/files/inline-images/`)

    // Fix sale... A remplacer par Context ?
    document.getElementById('genericbanner-subtitle').innerHTML = node.title;

    return (
      <div className='ga-news-content'>
        <Meta title={node.title} image={node.image.fullhd.url} description={node.description} />
        <div className='columns is-variable is-8 is-centered is-multiline'>
            <div className='column is-12-tablet is-two-thirds-desktop'>
              <div className='box content'>
                  <figure className='image is-5by1'>
                    <img alt={`Image d'illustration de la news ${node.title}`} src={node.image.mobile.url} srcSet={`${node.image.mobile.url} 705w, ${node.image.desktop.url} 960w, ${node.image.widescreen.url} 1155w, ${node.image.fullhd.url} 1345w`} />
                  </figure>
                <div dangerouslySetInnerHTML={{ __html: processedContent }} />
              </div>
            </div>
            <div className='column is-12-tablet is-one-third-desktop'>
              <div className='box content'>
                <span className="is-uppercase">Publiée le</span><br/>
                <strong><Moment unix locale="fr" format='DD MMMM YYYY à HH:SS'>{node.created}</Moment></strong><br/>
                <br/>
                <span className="is-uppercase">Rédigée par</span><br/>
                <strong>{node.entityOwner.name}</strong><br/>
                <br/>
                <SocialNetworkShare title={node.title} />
              </div>
            </div>
          </div>
      </div>
    )
  }
  return <div className='notification'>Chargement de l'actualité en cours</div>
}

export const news = gql`

  query news($nid:String!) {
    node:nodeById(id: $nid) {
      type {
        id:targetId
      }
      ... on NodeNews {
        title
        entityOwner {
          name
        }
        created,
        content:fieldNewsContent{
          processed
        }
        description:fieldNewsDescription
        image:fieldNewsImage{
          mobile:derivative(style:CROP51705X141){
            url
          }
          desktop:derivative(style:CROP51960X192){
            url
          }
          widescreen:derivative(style:CROP511155X231){
            url
          }
          fullhd:derivative(style:CROP511345X269){
            url
          }
        }
      }
    }
  }

`

NewsContent.propTypes = {
  data: PropTypes.object
}

export default graphql(news, {
  options: ({ nid }) => ({ variables: { nid } })
})(NewsContent)
