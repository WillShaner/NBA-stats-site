import Head from 'next/head'

export default function HeadInfo() {
  return (
    <Head>
      <title>NBA Stats</title>
      <meta name="description" content="Stats of NBA teams and players" />
      <meta name="keywords" content="NBA, sports, basketball" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin="anonymous"
      />
    </Head>)
}
