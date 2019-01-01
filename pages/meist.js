import Layout from '../components/layout/default'
import Image from '../components/meist/image'
import Content from '../data/markdown/meist.mdx'
import data from '../data/about.json'
import css from 'styled-jsx/css'

const images = (_ => {
  return data.map((image, index) => (
    <Image src={image.source} caption={image.caption} key={index} />
  ))
})()

const style = css`
  main {
    padding-top: 3.5vh;
    padding-bottom: 7vh;

    display: grid;
    grid-template-columns: 1fr 1.6fr 0.9fr 1fr;
    grid-template-rows: 2fr;
    grid-template-areas: ". title title ." ". . . .";
  }

  main .title {
    grid-area: title;
  }

  aside {
    padding-left: 3vw;
    grid-column: 3;
  }

  section {
    grid-column: 2;
  }

  @media all and (max-width: 68.75em) {
    main {
      grid-template-columns: 1fr 4fr 2.34fr 1fr;
    }
  }

  @media all and (max-width:41.875em) {
    main {
      grid-template-columns: 1fr 10fr 1fr;
    }

    aside {
      grid-column: 2;
      padding-left: 0;
    }
  }
`

export default () => (
  <Layout>
    <main>
      <h1 className='title'>Meist</h1>

      <section>
        <Content />
      </section>

      {/* Mini-gallery of images with captions. */}
      <aside>
        {images}
      </aside>
    </main>

    <style jsx>
      {style}
    </style>
  </Layout>
)
