import Head from 'next/head'

export default ({
    children,
    title='Varjupaik',
    description=`Pakume peavarjuta jäänud täiskasvanutele ajutist peavarju ning tagame nende turvalisuse.
      Lisaks osutame me ka tugiisikuteenust.`} ) => {

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} key='description'/>
        <meta charSet='utf-8' key='utf-8'/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport'/>
      </Head>

      {children}
    </div>
  )
}
