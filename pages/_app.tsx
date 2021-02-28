import App from 'next/app'
import { BuildMode, PreviewSecret } from '../constants/env'
import '../styles/globals.css'
import Error from 'next/error';
import querystring from "querystring"

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
    // TODO: なぜかここではctx.router.queryがemptyになるので調べる
    const query = querystring.parse(ctx.router.asPath.split("?")[1])
    const isDenied = !PreviewSecret.isAllowed(query.secret as any)
    if (isDenied) {
      ctx.ctx.res.statusCode = 401;
    }
    return { ...appProps, pageProps: { ...appProps.pageProps, isDenied: isDenied } }
  }

  MyApp.getInitialProps = getInitialProps
}