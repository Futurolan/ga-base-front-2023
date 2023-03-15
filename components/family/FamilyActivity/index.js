import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const FamilyActivity = (props) => (
  <div className='box family-card'>
    <div className='columns'>
      {(props.imageUrl || props.url) && <div className='column is-3 is-3-tablet'>
        <div className='has-text-centered'>
          <img src={props.imageUrl} />
          {props.url && <a className='button is-primary is-fullwidth' target='_blank' href={props.url}>Site web</a>}
        </div>
      </div>}
      <div className={`column ${props.imageUrl || props.url ? 'is-9' : 'is-12'}`} >
        <div className='description'>
          <h2 className='title is-5 is-marginless'>{props.title}</h2>
          {props.description && <div className='content has-text-justified' dangerouslySetInnerHTML={{ __html: props.description }} />}
        </div>
      </div>
    </div>
  </div >
)

FamilyActivity.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string
}

export default FamilyActivity
