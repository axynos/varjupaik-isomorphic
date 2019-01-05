import CarouselElement from './carouselElement'
import css from 'styled-jsx/css'
import images from '../../../data/gallery.json'

const style = css`
  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fit, auto);

    column-gap: 10px;
    row-gap: 10px;
  }

  @media all and (max-width:60em) {
    section {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: auto;
    }
  }

  @media all and (max-width:40em) {
    section {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto;
    }
  }
`

const Carousel = ({clickHandler, className, id}) => {
  const handleClick = (e, id) => {
    clickHandler(e, id)
  }

  const elements = images.map((image, index) => {
    return (
      <CarouselElement clickHandler={handleClick} active={id == index} key={index} data={image}/>
    )
  })

  return (
    <div className={className}>
      <section>
        {elements}
      </section>
      <style jsx>{style}</style>
    </div>
  )
}

export default Carousel
