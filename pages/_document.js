import withTwindDocument from '@twind/next/shim/document'
import twindConfig from '../twind.config'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="font-sans bg-background-app text-base text-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default withTwindDocument(twindConfig, MyDocument);