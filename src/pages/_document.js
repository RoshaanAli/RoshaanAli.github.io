import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Syed Roshaan Ali - React Native | ReactJS | NextJS Dev" />
          <meta name="description" content="Hey there, This is Syed Roshaan Ali. Inquisitive and Highly-motivated software engineer, with strong web and mobile application skills. Forward-thinker by nature and loves to code. Spends most of my time learning and experimenting with anything that looks promising.   " />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Syed Roshaan Ali - React Native, ReactJS & NextJS Dev" />
          <meta property="og:url" content="https://media.licdn.com/dms/image/D4D16AQHXEauQgkrKWg/profile-displaybackgroundimage-shrink_200_800/0/1693477880196?e=2147483647&v=beta&t=iZxCi3nYVrPYkcKO2XFAqfi4MR3zNmifL3btPczPmgA" />
          <meta property="og:image" content="https://media.licdn.com/dms/image/D4D16AQHXEauQgkrKWg/profile-displaybackgroundimage-shrink_200_800/0/1693477880196?e=2147483647&v=beta&t=iZxCi3nYVrPYkcKO2XFAqfi4MR3zNmifL3btPczPmgA" />
          <meta property="og:logo" content="https://media.licdn.com/dms/image/D4D16AQHXEauQgkrKWg/profile-displaybackgroundimage-shrink_200_800/0/1693477880196?e=2147483647&v=beta&t=iZxCi3nYVrPYkcKO2XFAqfi4MR3zNmifL3btPczPmgA" />
          <meta property="og:description" content="Hey there, This is Roshaan. Inquisitive and Highly-motivated software engineer, with strong web and mobile application skills. Forward-thinker by nature and loves to code. Spends most of my time learning and experimenting with anything that looks promising.   " />
          <meta property="twitter:card" content="https://media.licdn.com/dms/image/D4D16AQHXEauQgkrKWg/profile-displaybackgroundimage-shrink_200_800/0/1693477880196?e=2147483647&v=beta&t=iZxCi3nYVrPYkcKO2XFAqfi4MR3zNmifL3btPczPmgA" />
          <meta property="twitter:title" content="Syed Roshaan Ali - React Native, ReactJS & NextJS Dev" />
          <meta property="twitter:description" content="Hey there, This is Roshaan. Inquisitive and Highly-motivated software engineer, with strong web and mobile application skills. Forward-thinker by nature and loves to code. Spends most of my time learning and experimenting with anything that looks promising.   " />
          <meta name="author" content="Roshaan"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
