import Base from '../base'

import Navigation from '../../navigation'
import Footer from '../../footer'

import css from 'styled-jsx/css'

const base = css.resolve`
  div {
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
const navigation = css.resolve`
  nav {

  }
`

const footer = css.resolve`
  footer {

  }
`

const ImageLayout = ({props, children, title='Varjupaik | Galerii', description}) => (
  <Base className={base.className}>
    <Navigation className={navigation.className}/>
    {children}
    <Footer className={footer.className} dark/>
    {base.styles}
    {navigation.styles}
    {footer.styles}
  </Base>
)

export default ImageLayout
