import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import getConfig from 'next/config'
import InnerHTML from 'dangerously-set-html-content'
import Accordion from 'components/common/Accordion'
import Meta from 'components/common/Meta'

import './styles.scss'

const { publicRuntimeConfig } = getConfig()

function PageContent ({ data: { loading, error, node } }) {
  if (error) {
    return (
      <div className='notification is-danger'>Une erreur est survenue pendant le chargement de la page
        <Accordion icon='fa-calendar-alt' title='Erreur' text='Erreur' />
      </div>
    )
  }

  if (node) {
    // Fix sale tant que j'ai pas compris le soucis de cache ...
    const processedContent = node.content.processed.replace(new RegExp('src="/sites/default/files/inline-images/', 'g'), `src="${publicRuntimeConfig.BACKEND_API_URL}/sites/default/files/inline-images/`)
    
    // Fix sale... A remplacer par Context ?
    document.getElementById('genericbanner-subtitle').innerHTML = node.title;

    return (
      <div className='ga-page-content'>
        <Meta title={node.title} description={node.description} />

        <div className='box'>
          <div className='content has-text-justified'>
            <InnerHTML html={processedContent} />
          </div>
        </div>
      </div>
    )
  }
  return <div className='notification'>Chargement de la page en cours</div>
}

export const page = gql`

  query page($nid:String!) {
    node:nodeById(id: $nid) {
      ... on NodePage {
        title
        entityOwner {
          name
        }
        created,
        content:fieldPageContent{
          processed
        }
        description:fieldPageDescription
      }
    }
  }
`

PageContent.propTypes = {
  data: PropTypes.object
}

export default graphql(page, {
  options: ({ nid }) => ({ variables: { nid } })
})(PageContent)
