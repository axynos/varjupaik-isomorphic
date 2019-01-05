import ActiveLink from './navigation/activeLink'
import Link from 'next/link'
import css from 'styled-jsx/css'
import Mobile from './navigation/mobile'
import MobileMenuButton from '../components/navigation/menuButton'
import React from 'react'

const styles = css`
  nav {
    position: relative;
    width: 100%;
    z-index: 1;

    display: grid;
    grid-template-columns: 1fr 1.15fr 1.35fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". left right .";

    background-color: rgba(0, 0, 0, 0.4);
    background-color: #252525;
  }

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
    display: flex;
    justify-content: space-between;

  }

  @media all and (max-width:59.375em) {
    nav {
      grid-template-columns: 1fr 0.75fr 1.75fr 1fr;
    }
  }

  @media all and (max-width:50em) {
    .right {
      display: none;
    }
  }
`

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileMenuActive: false
    }

    this.toggleMobileNavigation = this.toggleMobileNavigation.bind(this)
  }

  toggleMobileNavigation() {
    this.setState(previous => ({
      mobileMenuActive: !previous.mobileMenuActive
    }))
  }

  render() {
    return (
      <nav className={this.props.className}>
        <div className='left'>
          <ActiveLink href='/' disabled>
            Varjupaik
          </ActiveLink>
        </div>
        <div className='right'>
          <ActiveLink href='/meist'>
            Meist
          </ActiveLink>
          <ActiveLink href='/teenused'>
            Teenused
          </ActiveLink>
          <ActiveLink href='/galerii'>
            Galerii
          </ActiveLink>
          <ActiveLink href='/kontakt'>
            Kontakt
          </ActiveLink>
        </div>
        <style jsx>{styles}</style>

        <MobileMenuButton clickHandler={this.toggleMobileNavigation}/>
        <Mobile clickHandler={this.toggleMobileNavigation} active={this.state.mobileMenuActive}/>
      </nav>
    )
  }
}

export default Navigation
