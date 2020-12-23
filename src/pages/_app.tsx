import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import GlobalStyle from '@styles/GlobalStyle'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Loading from '@components/Loading'
import { DrinkProps } from 'src/functions/transformDrink'
import metatags from '@functions/metatags'

export interface DrinkStateProps {
  drinkList: DrinkProps[]
  setDrinkList: Dispatch<SetStateAction<DrinkProps[]>>
  chosenDrink: DrinkProps
  setChosenDrink: Dispatch<SetStateAction<DrinkProps>>
  loaded: boolean
  setLoaded: Dispatch<SetStateAction<boolean>>
}

function App({ Component, pageProps }: AppProps) {
  const [drinkList, setDrinkList] = useState<DrinkProps[]>([])
  const [chosenDrink, setChosenDrink] = useState()
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
        <Component
          {...pageProps}
          {...{
            drinkList,
            setDrinkList,
            chosenDrink,
            setChosenDrink,
            loaded,
            setLoaded,
          }}
        />
        {!loaded && <Loading />}
      </ThemeProvider>
    </>
  )
}

export default App
