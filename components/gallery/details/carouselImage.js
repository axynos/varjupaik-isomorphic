import css from 'styled-jsx/css'

const style = css`
  img {
    max-width: 100%;
    max-height: 100%;

    opacity: 0.5;
    transition: opacity 150ms ease-out;

    /*Added to remove weird jitter during hover animation.*/
    backface-visibility: hidden;
  }

  img:hover {
    opacity: 1;
    cursor: pointer;
  }

  .active {
    box-shadow: 0px 0px 0px 3px rgba(255,255,255,1);
    opacity: 1;
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
        <source srcSet={small} type="image/jpeg" />
        <img onClick={props.clickHandler} className={props.active ? 'active' : ''} src={small} alt={title}/>
      </picture>
      <style jsx>{style}</style>
    </div>
  )
}

export default Image
