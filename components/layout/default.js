import Base from './base'
import Navigation from '../navigation'
import Footer from '../footer'

const Default = ({children, head}) => (
  <Base head={head}>
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

export default Default
