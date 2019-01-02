import { withRouter } from 'next/router'
import Link from 'next/link'
import css from 'styled-jsx/css'
import React from 'react'

const ActiveLink = ({props, router, href, children, className, disabled=false}) => {
  const active = !disabled ? router.pathname === href : false

  const activeStyle = active ? {
    backgroundColor: 'none',
    color: '#51c5ff'
  } : null

  return (
    <React.Fragment>
      <Link prefetch href={href} {...props}>
        <a className={className} style={activeStyle}>
        {children}
        </a>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          padding: 1.5vh 0;

          color: white;
          text-decoration: none;
          font-size: 1.1em;
        }

        a:visited {
          color: white;
          text-decoration: none;
        }
        `}</style>
    </React.Fragment>
  )
}

export default withRouter(ActiveLink)
