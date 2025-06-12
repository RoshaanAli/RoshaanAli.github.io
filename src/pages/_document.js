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
          <meta name="title" content="Syed Roshaan Ali | Senior React Native Developer | Mobile App Developer" />
          <meta name="description" content="Experienced React Native and MERN Stack Developer specializing in mobile app development, React.js, and part-time freelance projects" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Syed Roshaan Ali | Senior React Native Developer | Mobile App Developer" />
          <meta property="og:url" content="https://media.licdn.com/dms/image/D4D16AQHXEauQgkrKWg/profile-displaybackgroundimage-shrink_200_800/0/1693477880196?e=2147483647&v=beta&t=iZxCi3nYVrPYkcKO2XFAqfi4MR3zNmifL3btPczPmgA" />
          <meta property="og:image" content="https://media.licdn.com/dms/image/D4D16AQHXEauQgkrKWg/profile-displaybackgroundimage-shrink_200_800/0/1693477880196?e=2147483647&v=beta&t=iZxCi3nYVrPYkcKO2XFAqfi4MR3zNmifL3btPczPmgA" />
          <meta property="og:logo" content="https://media.licdn.com/dms/image/D4D16AQHXEauQgkrKWg/profile-displaybackgroundimage-shrink_200_800/0/1693477880196?e=2147483647&v=beta&t=iZxCi3nYVrPYkcKO2XFAqfi4MR3zNmifL3btPczPmgA" />
          <meta property="og:description" content="Experienced React Native and MERN Stack Developer specializing in mobile app development, React.js, and part-time freelance projects" />
          <meta property="twitter:card" content="https://media.licdn.com/dms/image/D4D16AQHXEauQgkrKWg/profile-displaybackgroundimage-shrink_200_800/0/1693477880196?e=2147483647&v=beta&t=iZxCi3nYVrPYkcKO2XFAqfi4MR3zNmifL3btPczPmgA" />
          <meta property="twitter:title" content="Syed Roshaan Ali | Senior React Native Developer | Mobile App Developer" />
          <meta property="twitter:description" content="Experienced React Native and MERN Stack Developer specializing in mobile app development, React.js, and part-time freelance projects" />
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
