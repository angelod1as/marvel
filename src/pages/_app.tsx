import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import GlobalStyle from '@styles/GlobalStyle'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Loading from '@components/Loading'
import metatags from '@functions/metatags'
import { HeroProps } from '@components/Pages/Hero'
import Container from '@components/Container'

export interface HeroStateProps {
  heroList: HeroProps[]
  setHeroList: Dispatch<SetStateAction<HeroProps[]>>
  chosenHero: HeroProps
  setChosenHero: Dispatch<SetStateAction<HeroProps>>
  loaded: boolean
  setLoaded: Dispatch<SetStateAction<boolean>>
}

function App({ Component, pageProps }: AppProps) {
  const [heroList, setHeroList] = useState<HeroProps[]>([])
  const [chosenHero, setChosenHero] = useState()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [setLoaded])

  return (
    <>
      <Head>
        {metatags()}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,300;0,500;0,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Component
            {...pageProps}
            {...{
              heroList,
              setHeroList,
              chosenHero,
              setChosenHero,
              loaded,
              setLoaded,
            }}
          />
        </Container>
        {!loaded && <Loading />}
      </ThemeProvider>
    </>
  )
}

export default App
