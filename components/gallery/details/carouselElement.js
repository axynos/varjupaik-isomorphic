import Image from './carouselImage'
import Link from 'next/link'
import { withRouter } from 'next/router'
import css from 'styled-jsx/css'

const style = css`
  a {
    display: block;
    height: max-content;
  }
`

const CarouselElement = ({ router, clickHandler, data, active=false }) => {

  return (
    <a onClick={(e) => clickHandler(e, data.id)}>
      <Image active={active} data={data}/>
      <style jsx>{style}</style>
    </a>
  )
}

export default withRouter(CarouselElement)
