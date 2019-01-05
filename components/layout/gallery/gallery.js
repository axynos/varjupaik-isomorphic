import Base from '../base'

import Navigation from '../../navigation'
import Footer from '../../footer'

const GalleryLayout = ({children, title='Varjupaik | Galerii', description}) => (
  <Base>
    <Navigation />
      {children}
    <Footer/>
  </Base>
)


export default GalleryLayout
