import css from 'styled-jsx/css'
import ActiveLink from '../navigation/activeLink';
import MobileMenuButton from '../navigation/menuButton'
import Link from 'next/link'
import React from 'react'
import { withRouter } from 'next/router'

const style = css`
  div {
    position: fixed;
    z-index: 2;

    width: 100vw;
    height: 100vh;

    background-color: #252525;

    transition: all 250ms cubic-bezier(0.0, 0.0, 0.2, 1);

    transform: translateX(100%);

    display: grid;
    grid-template-columns: 1fr 10 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: ". button ." ". links .";

    will-change: transform;
  }

  .links {
    grid-area: links;

    display: flex;
    flex-direction: column;
    justify-content:center;
  }

  .links a {
    padding: 1.5vh 0vw;
    margin: 1.5vh 0vw;
    font-size: 2.5em;
    font-style: bold;

    text-decoration: none;
    color: white;

    display: flex;
    justify-content: flex-end;

    opacity: 0.6;
    transition: opacity 150ms ease-out;
  }

  .links a:visited {
    color: white;
  }

  .links a:hover {
    opacity: 1;
  }

  .links a.active {
    color: #51c5ff;
  }

  div.active {
    position: fixed;
    transform: translateX(0);
  }
`

const Mobile = (props) => {
  const active = (href) => (
    props.router.pathname == href ? 'active' : ''
  )

  return (
    <div className={props.active ? 'active' : null}>
      <MobileMenuButton active mobile clickHandler={props.clickHandler}/>
      <section className='links'>
        <Link href='/'>
          <a className={active('/')}>Avaleht</a>
        </Link>
        <Link href='/meist'>
          <a className={active('/meist')}>Meist</a>
        </Link>
        <Link href='/teenused'>
          <a className={active('/teenused')}>Teenused</a>
        </Link>
        <Link href='/galerii'>
          <a className={active('/galerii')}>Galerii</a>
        </Link>
        <Link href='/kontakt'>
          <a className={active('/kontakt')}>Kontakt</a>
        </Link>
      </section>
      <style jsx>{style}</style>
    </div>
  )
}

export default withRouter(Mobile)
