import Layout from '../../components/layout/gallery/details'
import css from 'styled-jsx/css'

import Information from '../../components/gallery/details/information'
import Carousel from '../../components/gallery/details/carousel'
import LightBox from '../../components/gallery/details/lightbox'

import React from 'react'

import data from '../../data/gallery.json'

{/* Import the query object for use in the page. */}
import Router, { withRouter } from 'next/router'

const information = css.resolve`
  div {
    grid-area: information;
  }
`

const carousel = css.resolve`
  div {
    grid-area: carousel;
  }
`

const lightbox = css.resolve`
  div {
    grid-area: lightbox;
  }
`

const style = css`
  main {
    padding-top: 5vh;
    padding-bottom: 7vh;

    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 100%;
    grid-template-areas: ". content .";

    background: #1A1A1A;

    flex: 1;
  }

  section {
    grid-area: content;

    display: grid;
    grid-template-columns: 2fr 0.75fr;
    grid-template-rows: 0.5fr 2fr;
    grid-template-areas: "information ." "lightbox carousel";
    column-gap: 30px;
  }

  @media all and (max-width:87.5em) {
    main {
      grid-template-columns: 1fr 8fr 1fr;
    }
  }

  @media all and (max-width:75em) {
    main {
      grid-template-columns: 1fr 10fr 1fr;
    }
  }

  @media all and (max-width:60em) {
    section {
      grid-template-columns: 1fr;
      grid-template-rows: 0.8fr 0.3fr 1fr;
      grid-template-areas: "lightbox" "information" "carousel";
    }
  }

  @media all and (max-width:40em) {
    section {
      grid-template-columns: 1fr;
      grid-template-rows: 0.8fr 0.5fr 1fr;
      grid-template-areas: "lightbox" "information" "carousel";
    }
  }
`

const ImagePage = (props) => {
  let id = props.router.query.id
  let image = data[id]

  const clickHandler = (e, newId) => {
    e.preventDefault()
    props.router.push(`/galerii/details?id=${newId}`, `/galerii/image/${newId}`, {shallow: true})
  }

  const metaImageUrl = `/static/images/${image.sourceSet.small}`
  const head = {
    subpage: image.title,
    description: image.description,
    image: metaImageUrl
  }

  return (
    <Layout head={head}>
      <main>
        <section>
          <Information className={information.className}
                       title={image.title}
                       description={image.description} />
          <Carousel    className={carousel.className}
                       id={id}
                       clickHandler={clickHandler} />
          <LightBox    className={lightbox.className}
                       data={data[id]} />
        </section>
      </main>
      <style jsx>{style}</style>
      {information.styles}
      {carousel.styles}
      {lightbox.styles}
    </Layout>
  )
}

ImagePage.getInitialProps = async ({ query: {id} }) => {
  const image = data[id]

  if (image == null) {
    const err = new Error();
    err.code = 'ENOENT'
    throw err
  }
  return { image }
}

export default withRouter(ImagePage)
