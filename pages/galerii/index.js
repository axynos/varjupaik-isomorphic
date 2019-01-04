import Layout from '../../components/layout/gallery/gallery'
import GridView from '../../components/gallery/grid/view'
import images from '../../data/gallery.json'
import css from 'styled-jsx/css'

const imageGrid = css.resolve`
  section {
    grid-area: image-grid;
  }
`

const style = css`
  main {
    display: grid;
    grid-template-columns: 1fr 2.5fr 1fr;
    grid-template-rows: 2fr;
    grid-template-areas: ". title ." ". image-grid .";

    padding-top: 5vh;
    padding-bottom: 7vh;
  }

  h1 {
    grid-area: title;
  }

  @media all and (max-width:60em) {
    main {
      grid-template-columns: 1fr 5fr 1fr;
    }
  }

  @media all and (max-width:50em) {
    main {
      grid-template-columns: 1fr 10fr 1fr;
    }
  }
`


export default () => (
  <Layout>
    <main>
      <h1>Galerii</h1>
      <GridView className={imageGrid.className} images={images}/>

      <style jsx>{style}</style>
      {imageGrid.styles}
    </main>
  </Layout>
)
