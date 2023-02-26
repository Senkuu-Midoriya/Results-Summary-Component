import Component from 'components/component'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Results Summary Component | Hyoaku</title>
        <meta name="description" content="Results Summary Component | FEM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>       
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&display=swap" rel="stylesheet"/>
      </Head>
      <main>
        <Component/>
      </main>
    </>
  )
}
