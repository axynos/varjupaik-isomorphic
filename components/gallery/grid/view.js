import React from 'react'
import css from 'styled-jsx/css'
import GridElement from './element'

const style = css`
  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: ". . .";

    column-gap: 30px;
    row-gap: 30px;
  }

  @media all and (max-width:75em) {
	  section {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: ". .";
    }
  }

  @media all and (max-width:50em) {
    section {
      grid-template-columns: 1fr;
      grid-template-areas: ".";
    }
  }
`

const GridView = (props) => {
  const elements = props.images.map((data, index) => {
    return (
      <GridElement key={index} data={data}/>
    )
  })

  return (
    <React.Fragment>
      <section className={props.className}>
        {elements}
      </section>

      <style jsx>{style}</style>
    </React.Fragment>
  )
}

export default GridView
