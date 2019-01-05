import Base from '../base'

import Navigation from '../../navigation'
import Footer from '../../footer'

const GalleryLayout = ({children, head}) => (
  <Base head={head}>
    <Navigation />
      {children}
    <Footer/>
  </Base>
)


export default GalleryLayout
