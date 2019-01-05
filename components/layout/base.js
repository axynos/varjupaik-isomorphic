import Head from '../head/head'
import textBase from '../styles/textBase'
import base from '../styles/base'

const Base = ({
    head,
    children,
    className=''
}) => {

  return (
    <div className={className}>
      <Head head={head}/>

      {children}

      {/* Base Styles */}
      <style jsx>{base}</style>
      <style jsx global>{textBase}</style>

    </div>
  )
}

export default Base
