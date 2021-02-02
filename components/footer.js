import css from 'styled-jsx/css'

const styles = css`
  footer {
    padding: 1.5vh 0;

    background-color: white;

    display: grid;
    grid-template-columns: 1fr 2.5fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". . .";
  }

  @media all and (max-width:31.25em) {
    footer {
      grid-template-columns: 1fr 10fr 1fr;
    }
  }

  div {
    grid-column: 2;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-weight: 500;
  }

  p, a {
    margin: 0;
    padding: 0;

    line-height: 2em;
    color: rgba(0,0,0,0.6);
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  footer.dark {
    background-color: #333333;
  }

  .dark p {
    color: rgba(255,255,255,0.6);
    font-weight: 400;
  }

  .dark a {
    color: rgba(255,255,255,0.6);
    font-weight: 400;
  }
`

const Footer = (props) => {
  let classList = []
  classList = classList.concat(props.dark ? 'dark' : '')
  classList = classList.concat(props.className)

  const className = classList.join(' ')

  return (
    <footer className={className}>
      {/* (Copyright Symbol) (Current Year) | Varjupaik*/}
      <div>
        <p>{`\u00A9 ${new Date(Date.now()).getFullYear()} | Varjupaik`}</p>
        <a rel='nofollow' href='https://www.facebook.com/silverstenkruus/'>AXYNOS OÜ</a>
      </div>
      <style jsx>{styles}</style>
    </footer>
)
}

export default Footer
