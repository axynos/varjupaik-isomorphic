import React from 'react'

const Error = ( {statusCode} ) => {
  const message = (statusCode) => {
    if (statusCode) {
      switch (true) {
        case (statusCode >= 500):
          return `${statusCode} | Veebilehe serveris tekkis viga.`
          break;
        case (statusCode == 404):
          return `${statusCode} | Seda lehte ei leitud.`
          break;
        default:
          return `${statusCode} | Veebilehes tekkis viga.`
          break;
      }
    } else {
      return `Tekkis ootamatu viga.`
    }
  }

  return (
    <p>
      {message(statusCode)}
    </p>
  )
}

Error.getInitialProps = async ({res, err}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode: statusCode }
}

export default Error
