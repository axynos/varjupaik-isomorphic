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
    this.state = {
      loaded: false
    }
  }

  render() {
    let props = this.props
    let state = this.state

    return (
      <div>
        <img src={this.props.src} onLoad={() => this.setState( {loaded: true} )}/>
        <p>{props.caption}</p>

        <style jsx>{style}</style>
        <style jsx>{`
          div {
            display: ${state.loaded ? 'block' : 'none'}
          }
        `}</style>
      </div>
    )
  }
}

export default Image;
