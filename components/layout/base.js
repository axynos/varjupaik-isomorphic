import Head from 'next/head'
import textBase from '../styles/textBase'
import base from '../styles/base'

const Base = ({
    children,
    title='Varjupaik',
    description=`Pakume peavarjuta jäänud täiskasvanutele ajutist peavarju ning tagame nende turvalisuse.
      Lisaks osutame me ka tugiisikuteenust.`,
    className=''} ) => {

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} key='description'/>
        <meta charSet='utf-8' key='utf-8'/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport'/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" key='material-icons' />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" key='roboto-font' />
      </Head>

      {children}

      {/* Base Styles */}
      <style jsx>{base}</style>
      <style jsx global>{textBase}</style>

    </div>
  )
}

export default Base
