import App from 'next/app'
import { BuildMode, PreviewSecret } from '../constants/env'
import '../styles/globals.css'
import Error from 'next/error';

function MyApp({ Component, pageProps }) {

  if (pageProps.isDenied) {
    return <Error statusCode={401} />
  }
  return <Component {...pageProps} />
}

export default MyApp

if (BuildMode.isPreview) {
  const getInitialProps = async (ctx) => {
    const appProps = await App.getInitialProps(ctx);
    const isDenied = !PreviewSecret.isAllowed(ctx.router.query.secret)
    if (isDenied) {
      ctx.ctx.res.statusCode = 401;
    }
    return { ...appProps, pageProps: { ...appProps.pageProps, isDenied: isDenied } }
  }

  MyApp.getInitialProps = getInitialProps
}