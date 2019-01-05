import React from 'react'
import css from 'styled-jsx/css'

const globalStyle = css.global`
  body {
    margin: 0;
    padding: 0;
  }

  html {
    margin: 0;
    padding: 0;
  }
`

const style = css`
  main {
    height: 98vh;
    width: 98vw;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
  }

  span:first-of-type {
    padding-right: 0.5em;
    border-right: 3px solid black;
  }

  span:last-of-type {
    padding-left: 0.5em;
  }
`

const Error = ( {statusCode} ) => {
  const message = (statusCode) => {
    if (statusCode) {
      switch (true) {
        case (statusCode >= 500):
          return `Veebilehe serveris tekkis viga.`
          break;
        case (statusCode == 404):
          return `Seda lehte ei leitud.`
          break;
        default:
          return `Veebilehes tekkis viga.`
          break;
      }
    } else {
      return `Tekkis ootamatu viga.`
    }
  }

  return (
    <main>
      <h1>
        <span>{statusCode}</span><span>{message(statusCode)}</span>
      </h1>
      <style jsx>{style}</style>
      <style jsx global>{globalStyle}</style>
    </main>
  )
}

Error.getInitialProps = async ({res, err}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode: statusCode }
}

export default Error
