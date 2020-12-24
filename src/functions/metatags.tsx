export default function metatags() {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>mysuperhero</title>
      <meta name="title" content="mysuperhero" />
      <meta
        name="description"
        content="Find information about your favourite Marvel character"
      />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mysuperhero.vercel.app/" />
      <meta property="og:title" content="mysuperhero" />
      <meta
        property="og:description"
        content="Find information about your favourite Marvel character"
      />
      <meta
        property="og:image"
        content="https://media.giphy.com/media/eR0GYL4J8UxEI/giphy.gif"
      />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mysuperhero.vercel.app/" />
      <meta property="twitter:title" content="mysuperhero" />
      <meta
        property="twitter:description"
        content="Find information about your favourite Marvel character"
      />
      <meta
        property="twitter:image"
        content="https://media.giphy.com/media/eR0GYL4J8UxEI/giphy.gif"
      />
      <meta name="keywords" content="marvel, api, react" />
      <meta name="author" content="Angelo Dias <oiangelodias@gmail.com>" />
      <meta name="url" content="https://mysuperhero.vercel.app/" />
    </>
  )
}
