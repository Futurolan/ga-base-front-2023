import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

function WeezeventPlayerList ({ size, reservedSlot, data: { loading, error, nodeQuery } }) {
  if (error || (nodeQuery && nodeQuery.entities.length === 1 && nodeQuery.entities[0].type && nodeQuery.entities[0].type.id !== 'weezevent')) {
    return <div className='notification is-danger'>Une erreur est survenue pendant le chargement des inscris !!!</div>
  }
  if (loading) { return <div className='notification'>Chargement des inscrits en cours</div> }

  let dataWeezevent = { type: 'team', data: [] }
  let countWeezevent = 0
  if (nodeQuery && nodeQuery.entities.length === 1) {
    dataWeezevent = JSON.parse(nodeQuery.entities[0].data)
    countWeezevent = nodeQuery.entities[0].count
  }

  return (
    <div className='ga-weezevent-players-list'>


      <div className='box content'>
        <h2 className='title title-line is-size-5 is-uppercase'><span><i className='fas fa-users' />&nbsp;&nbsp;Inscrits <span className="has-text-weight-normal">{reservedSlot + countWeezevent}/{size}</span></span></h2>
        <table className='table is-fullwidth'>
          <tbody>
            {[...Array(reservedSlot)].map((x, index) =>
              <tr key={`reserved${index}`}>
                <td>
                  <i className='fas fa-lock' />&nbsp;&nbsp;Slot réservé
                </td>
                <td />
              </tr>
            )}

            {dataWeezevent.type === 'team' && dataWeezevent.data.map((object, index) => (
              <tr key={index}>
                <td className="has-text-weight-medium">
                  {object.name}
                </td>
                <td>
                  {object.players.sort().join(', ')}
                </td>
              </tr>
            ))}

            {dataWeezevent.type === 'solo' && dataWeezevent.data.map((object, index) => (
              <tr key={index}>
                <td className="has-text-weight-medium">
                  {object.team}
                </td>
                <td>
                  {(object.pseudo && object.pseudo !== '') ? object.pseudo : <span className='is-size-7 is-italic has-text-grey-light'>Information manquante</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {size - reservedSlot - countWeezevent > 0 &&
          <div className="notification is-primary">
            <i className="fa-solid fa-ticket-simple fa-beatt fa-rotate-by" style={{"--fa-rotate-angle": "-20deg"}}></i>&nbsp; Il reste encore {size - reservedSlot - countWeezevent} places disponibles sur ce tournoi. <span className='has-text-weight-medium'>Inscrivez-vous !</span>
          </div>} 
      </div>
    </div>
  )
}

export const weezevent = gql`
query weezevent($tournamentNid: String!) {
  nodeQuery(filter: {conditions: [{field: "field_weezevent_tournament", value: [$tournamentNid]}, {field: "type", value: ["weezevent"], operator: EQUAL}, {field: "status", value: ["1"]}]}, limit: 1, sort: {field:"created"}) {
    entities {
      ... on NodeWeezevent{
        data:fieldWeezeventData
        type {
          id:targetId
        }
        count:fieldWeezeventCount
      }
    }
  }
}

`

WeezeventPlayerList.propTypes = {
  data: PropTypes.object,
  size: PropTypes.number,
  reservedSlot: PropTypes.number
}

export default graphql(weezevent, {
  options: ({ tournamentNid }) => ({ variables: { tournamentNid } })
})(WeezeventPlayerList)
