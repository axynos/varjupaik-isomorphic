import Link from 'next/link'
import Image from './image'
import css from 'styled-jsx/css'
import React from 'react'

const image = css.resolve`
  div {
    max-width: 100%;
    height: auto;
  }
`

const style = css`
  p {
    margin-top: 0.25vh;
    margin-bottom: 0vh;
  }
`

const GridElement = (props) => {


  return (
    <div>
      <Link href="/galerii/image">
        <a>
        <Image className={image.className} data={props.data} />
        {image.styles}
        </a>
      </Link>
      <p>{props.data.title}</p>
      <style jsx>{style}</style>
    </div>
  )
}

export default GridElement
