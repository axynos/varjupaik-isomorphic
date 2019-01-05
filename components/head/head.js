import {default as NextHead} from 'next/head'
import { withRouter } from 'next/router'

const Head = ({ router, head = {} }) => {

  const {
    title = 'Varjupaik',
    subpage,
    description = `Pakume tugiisikuteenust ja peavarjuta jäänud täiskasvanutele
                   ajutist peavarju ning tagame nende turvalisuse.`,
    image = '/static/images/small/varjupaik-2.jpg'
  } = head;

  const calculatedTitle = subpage ? `${title} | ${subpage}` : `${title}`
  const baseUrl = 'https://tartuvarjupaik.ee'
  const url = `${baseUrl}${router.asPath}`
  const imageUrl = `${baseUrl}${image}`

  return (
    <NextHead>
      <title key='title'>{calculatedTitle}</title>
      <meta key='description' name='description' content={description} />

      <link key='material-icons' href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link key='roboto-font' href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" />

      <meta key='charset' charSet='utf-8' />
      <meta key='viewport' name='viewport' content='initial-scale=1, width=device-width' />

      {/*Open Graph*/}
      <meta key='og:title' property="og:title" content={calculatedTitle} />
      <meta key='og:description' property="og:description" content={description} />
      <meta key='og:url' property="og:url" content={url} />
      <meta key='og:image' property="og:image" content={imageUrl} />

      {/*Twitter Card*/}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@Varjupaik' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imageUrl} />

      {/*Themeing*/}
      <meta name="theme-color" content="#252525" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/*Mobile Icons & Favicon*/}
      {/* TODO */}
    </NextHead>
  )
}

export default withRouter(Head)
