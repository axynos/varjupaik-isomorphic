import css from 'styled-jsx/css'

const style = css`
  h2 {
    color: white;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`

const Information = ({className, title='Pealkiri puudub', description=''}) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{description}</p>
      <style jsx>{style}</style>
    </div>
  )
}

export default Information
