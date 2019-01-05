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


const ImageLayout = ({props, children, title='Varjupaik | Galerii', description}) => (
  <Base className={base.className}>
    <Navigation className={navigation.className}/>
    {children}
    <Footer dark/>

    {base.styles}
  </Base>
)

export default ImageLayout
