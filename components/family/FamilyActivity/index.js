import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const FamilyActivity = (props) => (
  <div className='box family-card'>
    <div className='columns'>
      <div className='column is-3 is-3-tablet'>
        <div className='has-text-centered'>
          <img src={props.imageUrl} />
          <a className='button is-primary is-fullwidth' target='_blank' href={props.url}>Site web</a>
        </div>
      </div>
      <div className='column is-9'>
        <div className='description'>
          <h2 className='title is-5 is-marginless'>{props.title}</h2>
          <div className='content has-text-justified' dangerouslySetInnerHTML={{ __html: props.description }} />
        </div>
      </div>
    </div>
  </div>
)

FamilyActivity.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string
}

export default FamilyActivity
