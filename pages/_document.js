import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html className="bg-gray-100 dark:bg-zinc-800">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="https://accounts.google.com/gsi/client" strategy="beforeInteractive" async defer/>
      </body>
    </Html>
  )
}