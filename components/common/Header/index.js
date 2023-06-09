import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import ActiveLink from 'components/common/ActiveLink'
import TicketMenu from 'components/tickets/TicketMenu'
import LiveMenu from 'components/live/LiveMenu'
import SocialNetworksLinks from 'components/common/SocialNetworksLinks'

import config from 'config/config'
import menu from 'config/menu'

import './styles.scss'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isOpen: false }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  generateDropDown (component, item, index) {
    return (
      <div key={index} className='navbar-item has-dropdown is-hoverable'>
        {component}
        {item.backgroundColor &&
          <div className='navbar-dropdown' style={{ backgroundColor: `${item.backgroundColor}` }}>
            {item.children.map((item, index) => {
              return this.generateMenuItem(item, index)
            })}
          </div>}
        {!item.backgroundColor &&
          <div className='navbar-dropdown'>
            {item.children.map((item, index) => {
              return this.generateMenuItem(item, index)
            })}
          </div>}
      </div>
    )
  }
  

  generateMenuItem (item, index) {
    if (item.type === undefined) return null

    if (item.type === 'config') {
      if (item.id === undefined) return null

      switch (item.id) {
        case 'live':
          if (item.children) {
            return this.generateDropDown(<LiveMenu color={item.color} backgroundColor={item.backgroundColor} className='navbar-link is-uppercase has-text-weight-bold' />, item, index)
          } else {
            return <LiveMenu key={index} color={item.color} backgroundColor={item.backgroundColor} className='navbar-item is-uppercase has-text-weight-bold' />
          }
        case 'tickets':
          if (item.children) {
            return this.generateDropDown(<TicketMenu color={item.color} backgroundColor={item.backgroundColor} className='navbar-link is-uppercase has-text-weight-bold' />, item, index)
          } else {
            return <TicketMenu key={index} color={item.color} backgroundColor={item.backgroundColor} className='navbar-item is-uppercase has-text-weight-bold' />
          }
          
        default:
          if (item.children) {
            return this.generateDropDown(<ActiveLink color={item.color} backgroundColor={item.backgroundColor} label={config[item.id].navTitle || config[item.id].title} className='navbar-link is-uppercase has-text-weight-bold' path={`/${item.id}`} as={config[item.id].link} />, item, index)
          } else {
            return <ActiveLink key={index} color={item.color} backgroundColor={item.backgroundColor} label={config[item.id].navTitle || config[item.id].title} className='navbar-item is-uppercase has-text-weight-bold' path={`/${item.id}`} as={config[item.id].link} />
          }
      }
    }
      
    

    if (item.type === 'nolink') {
      if (item.children) {
        return this.generateDropDown(<div style={{ backgroundColor: `${item.backgroundColor || 'transparent'}`, color: `${item.color || '#FFFFFF'}` }} className='navbar-link is-uppercase has-text-weight-bold'>{item.title}</div>, item, index)
      } else {
        return <div key={index} style={{ backgroundColor: `${item.backgroundColor || 'transparent'}`, color: `${item.color || '#FFFFFF'}` }} className='navbar-item is-uppercase has-text-weight-bold'>{item.title}</div>
      }
    }
    

    if (item.type === 'page') {
      if (item.link === undefined || item.id === undefined || item.title === undefined) return null
      if (item.children) {
        return this.generateDropDown(<ActiveLink color={item.color} backgroundColor={item.backgroundColor} label={item.navTitle || item.title} className='navbar-link is-uppercase has-text-weight-bold' as={item.link} path={{ pathname: '/page', query: { nid: item.id } }} />, item, index)
      } else {
        return <ActiveLink color={item.color} backgroundColor={item.backgroundColor} key={index} label={item.navTitle || item.title} className='navbar-item is-uppercase has-text-weight-bold' as={item.link} path={{ pathname: '/page', query: { nid: item.id } }} />
      }      
    }

    if (item.type === 'external') {
      if (item.link === undefined || item.title === undefined) return null
      if (item.children) {
        return (this.generateDropDown(<a href={item.link} target='_blank' rel='noopener noreferrer' style={{ backgroundColor: `${item.backgroundColor || 'transparent'}`, color: `${item.color || '#FFFFFF'}` }} className='navbar-link is-uppercase has-text-weight-bold' dangerouslySetInnerHTML={{ __html: item.navTitle || item.title }} />, item, index))
      } else {
        return (<a key={index} href={item.link} target='_blank' rel='noopener noreferrer' style={{ backgroundColor: `${item.backgroundColor || 'transparent'}`, color: `${item.color || '#FFFFFF'}` }} className='navbar-item is-uppercase has-text-weight-bold' dangerouslySetInnerHTML={{ __html: item.navTitle || item.title }} />)
      }
    }    

    return null
  }

  render () {
    return (
      <header className='ga-header'>
        <nav className='navbar'>
          <div className='container'>
            <div className='navbar-brand'>
              <Link href='/'>
                <a>
                  <img alt={`Logo de l'évènement ${config.title}`} src="/static/img/logo-ga.png" />
                </a>
              </Link>
              <button className='button navbar-burger is-dark' onClick={() => this.toggleMenu()}>
                <span />
                <span />
                <span />
              </button>
            </div>
            <div className={classNames('navbar-menu', 'has-text-centered', { 'is-active': this.state.isOpen })}>
              <div className='navbar-start' />
              {menu.map((item, index) => {
                return this.generateMenuItem(item, index)
              })}

              <div className='navbar-end'>
                {config.mainPartner &&
                  <a href={config.mainPartner.url} target='_blank' rel='noopener noreferrer'>
                    <img alt={'Logo du partenaire principal de l\'évènement'} src={config.mainPartner.logo} />
                  </a>}
                {config.mainPartner === undefined && config.social &&
                  <div className='navbar-item'>
                    <SocialNetworksLinks />
                  </div>}
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
