import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" /> 
        <meta name="mobile-web-app-capable" content="yes" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="flex flex-col max-w-screen-2xl mx-auto p-4 font-sans">{children}</main>
    </>
  )
}