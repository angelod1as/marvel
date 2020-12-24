import { HeroStateProps } from '@pages/_app'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { Error, Container, Img, HeroInfo, Title, StyledButton } from './style'

import BackgroundHeroes from '@components/BackgroundHeroes'

export interface HeroProps {
  id: number
  name: string
  description: string
  resourceURI: string
  thumbnail: {
    path: string
    extension: string
  }
}

export default function Hero({
  chosenHero,
  setLoaded,
  loaded,
}: HeroStateProps) {
  const [hero, setHero] = useState<HeroProps>()
  const [error, setError] = useState<Error | 'not-found' | null>(null)
  const router = useRouter()

  const fetchData = useCallback(
    async (heroId: number) => {
      try {
        const response = await axios.get(`/api/query`, {
          params: {
            query: {
              id: heroId,
            },
          },
        })
        const hero: HeroProps | null = response?.data?.message?.data?.results[0]

        if (hero && hero !== null) {
          setHero(hero)
          setLoaded(true)
        } else {
          router.push('/')
        }
      } catch (error) {
        console.log(error)
        setError(error)
        setLoaded(true)
      }
    },
    [router, setLoaded]
  )

  useEffect(() => {
    setLoaded(false)

    if (chosenHero) {
      setHero(chosenHero)
      setLoaded(true)
      return
    }

    const heroId = +router.query.heroId

    if (heroId) {
      fetchData(heroId)
    }
  }, [setLoaded, chosenHero, router, fetchData])

  if (loaded && hero) {
    const {
      name,
      description,
      thumbnail: { path, extension },
    } = hero
    return (
      <>
        <Container>
          {!error ? (
            <>
              <Title>{name}</Title>

              <HeroInfo>
                {path ? (
                  <Img src={`${path}/standard_xlarge.${extension}`} />
                ) : (
                  ''
                )}
                <p>{description || 'No description available'}</p>

                <StyledButton onClick={() => router.push('/')}>
                  Let's try another hero
                </StyledButton>
              </HeroInfo>
            </>
          ) : (
            <Error>
              <h2>Oops, something went wrong.</h2>
              <StyledButton onClick={() => router.push('/')}>
                Let's try another hero
              </StyledButton>
            </Error>
          )}
        </Container>
        <BackgroundHeroes />
      </>
    )
  }

  return <Container />
}
