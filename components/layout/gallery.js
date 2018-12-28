import Base from './base'

import Navigation from '../navigation'
import Footer from '../footer'

export default ({children, title='Varjupaik | Galerii', description}) => (
  <Base>
    <Navigation />
      {children}
    <Footer />
  </Base>
)
