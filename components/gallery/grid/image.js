import css from 'styled-jsx/css'

const style = css`
  img {
    max-width: 100%;
    height: auto;
    transition: opacity 150ms ease-out;

    /*Added to remove weird jitter during hover animation.*/
    backface-visibility: hidden;
  }

  img:hover {
    opacity: 0.8;
  }
`

const Image = (props) => {
  const image = props.data
  const { title, sourceSet } = image

  const [small, medium, large] = Object.keys(sourceSet).map(size => {
    return `/static/images/${sourceSet[size]}`
  })

  return (
    <div className={props.className}>
      <picture>
      <source media="(min-width:75em)" srcSet={large} type="image/jpeg" />
      <source media="(min-width:50em)" srcSet={medium} type="image/jpeg" />
      <source media=""                 srcSet={small} type="image/jpeg" />
      <img src={large} alt={title}/>
      </picture>
      <style jsx>{style}</style>
    </div>
  )
}

export default Image
