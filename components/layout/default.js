import Base from './base'
import Navigation from '../navigation'
import Footer from '../footer'

export default ({children, title, description}) => (
  <Base>
    <Navigation />
      {children}
      <style jsx>{`
        body {
          background-color: white;
        }
      `}</style>
    <Footer />
  </Base>
)
