import css from 'styled-jsx/css'

const style = css`
  div {
    display: flex;
    max-height: 100%;
    width: 100%;

  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
