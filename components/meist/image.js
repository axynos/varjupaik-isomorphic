import css from 'styled-jsx/css'
import { Component } from 'react'

const style = css`
  div {
    margin-top: 3vh;
    margin-bottom: 3vh;
  }

  div:first-of-type {
    margin-top: 0vh;
  }

  p {
    font-size: 0.95em;
    margin-top: 0.25vh;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

class Image extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let props = this.props

    return (
      <div>
        <img src={this.props.src}/>
        <p>{props.caption}</p>

        <style jsx>{style}</style>
        <style jsx>{`
          div {
            display: block;
          }
        `}</style>
      </div>
    )
  }
}

export default Image;
