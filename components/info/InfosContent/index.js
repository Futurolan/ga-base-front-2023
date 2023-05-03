import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import getConfig from 'next/config'

import Accordion from 'components/common/Accordion'

import './styles.scss'

const { publicRuntimeConfig } = getConfig()

function InfosContent ({
  data: { loading, error, nodeQuery }
}) {
  if (error) {
    return <div className='notification is-danger'>Une erreur est survenue pendant le chargement des informations !!!</div>
  }

  if (nodeQuery && nodeQuery.entities && nodeQuery.entities.length > 0) {
    const node = nodeQuery.entities[0]
    return (
      <div className='ga-infos-content'>
        <div className='box content'>
          <div dangerouslySetInnerHTML={{ __html: node.description.value }} />
        </div>

        


        <div class="columns">
          {node.planning &&
          <div class="column">
            <div className='box content'>
              <h2 className='title title-line is-size-5 is-uppercase'><span><i className='fas fa-calendar-alt' />&nbsp;&nbsp;Planning</span></h2>
              <div className='content' dangerouslySetInnerHTML={{ __html: node.planning.value }} />
            </div>
          </div>}
          
          {node.pricing &&
          <div class="column">
            <div className='box content'>
              <h2 className='title title-line is-size-5 is-uppercase'><span><i className='fas fa-euro-sign' />&nbsp;&nbsp;Tarifs</span></h2>
              <div className='content' dangerouslySetInnerHTML={{ __html: node.pricing.value }} />
            </div>
          </div>}
        </div>
        
        {node.access &&
        <div class="columns">
          <div class="column">
            <div className='box content'>
              <h2 className='title title-line is-size-5 is-uppercase'><span><i className='fas fa-car' />&nbsp;&nbsp;Accès</span></h2>
              <div class="columns">
                <div class="column">
                  {node.placeId &&
                <iframe
                  width='100%' height='450' frameBorder='0'
                  src={`https://www.google.com/maps/embed/v1/place?q=place_id:${node.placeId}&key=AIzaSyDxn9buXacF0h2mlroZlamJRDIsEIyDxYA`}
                  allowFullScreen=''
                />}
                </div>
                <div class="column">
                  <div className='content' dangerouslySetInnerHTML={{ __html: node.access.value }} />
                </div>
              </div>
            </div>
          </div>
        </div>}

        <div class="columns">
        {node.accommodation &&
          <div class="column">
            <div className='box content'>
              <h2 className='title title-line is-size-5 is-uppercase'><span><i className='fas fa-bed' />&nbsp;&nbsp;Hébergement</span></h2>
              <div className='content' dangerouslySetInnerHTML={{ __html: node.accommodation.value }} />
            </div>
          </div>}
          
          {node.catering &&
          <div class="column">
            <div className='box content'>
              <h2 className='title title-line is-size-5 is-uppercase'><span><i className='fas fa-utensils' />&nbsp;&nbsp;Restauration</span></h2>
              <div className='content' dangerouslySetInnerHTML={{ __html: node.catering.value }} />
            </div>
          </div>}
        </div>

        <div class="columns">
          {node.equipment &&
          <div class="column">
            <div className='box content'>
              <h2 className='title title-line is-size-5 is-uppercase'><span><i className='fas fa-headphones' />&nbsp;&nbsp;Matériel à apporter</span></h2>
              <div className='content' dangerouslySetInnerHTML={{ __html: node.equipment.value }} />
             </div>
          </div>}
          <div class="column">
          </div>
        </div>

      </div>
    )
  }
  return <div className='notification'>Chargement des informations en cours.</div>
}

export const infos = gql`
{
  nodeQuery(
  filter:{
    conditions:[
      {field:"type",value:["information"],operator:EQUAL},
      {field:"field_information_edition",value:["${publicRuntimeConfig.EDITION_ID}"]},
      {field:"status",value:["1"]}
    ]},
  sort:[{field:"created",direction:DESC}],
  limit:1) {
    entities {
      ... on NodeInformation{
        placeId:fieldInformationGmapPlaceId
        description:fieldInformationDescription{
          value:processed
        }
        planning:fieldInformationPlanning{
          value:processed
        }
        pricing:fieldInformationPricing{
          value:processed
        }
        access:fieldInformationAccess{
          value:processed
        }
        accommodation:fieldInformationAccommodation{
          value:processed
        }
        equipment:fieldInformationEquipment{
          value:processed
        }
        catering:fieldInformationCatering{
          value:processed
        }
      }
    }
  }
}
`

InfosContent.propTypes = {
  data: PropTypes.object
}

export default graphql(infos)(InfosContent)
