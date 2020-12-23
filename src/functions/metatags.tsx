export default function metatags() {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>Choose Your Poison, search your drinks!</title>
      <meta name="title" content="Choose Your Poison, search your drinks!" />
      <meta
        name="description"
        content="Choose your drink and see it's recipe and ingredients"
      />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://chooseyourpoison.vercel.app/" />
      <meta
        property="og:title"
        content="Choose Your Poison, search your drinks!"
      />
      <meta
        property="og:description"
        content="Choose your drink and see it's recipe and ingredients"
      />
      <meta
        property="og:image"
        content="https://media.giphy.com/media/l3fQaE2lbSAPUnB04/giphy.gif"
      />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://chooseyourpoison.vercel.app/"
      />
      <meta
        property="twitter:title"
        content="Choose Your Poison, search your drinks!"
      />
      <meta
        property="twitter:description"
        content="Choose your drink and see it's recipe and ingredients"
      />
      <meta
        property="twitter:image"
        content="https://media.giphy.com/media/l3fQaE2lbSAPUnB04/giphy.gif"
      />
      <meta name="keywords" content="drinks, api, react" />
      <meta name="author" content="Angelo Dias <oiangelodias@gmail.com>" />
      <meta name="url" content="https://chooseyourpoison.vercel.app/" />
    </>
  )
}
