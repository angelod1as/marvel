import Button from '@components/Button'
import Logo from '@components/Logo'
import { HeroStateProps } from '@pages/_app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import {
  Error,
  Container,
  Img,
  HeroInfo,
  Title,
  Ingredients,
  Line,
  Ingredient,
  Instructions,
  Quantity,
  Alternates,
} from './style'
// import query from 'src/functions/query'
// URGENT: query

export interface HeroProps {
  id: number
  name: string
  description: string
  modified: Date
  resourceURI: string
  urls: [
    {
      type: string
      url: string
    }
  ]
  thumbnail: {
    path: string
    extension: string
  }
  comics: {
    available: number
    returned: number
    collectionURI: string
    items: [
      {
        resourceURI: string
        name: string
      }
    ]
  }
  stories: {
    available: number
    returned: number
    collectionURI: string
    items: [
      {
        resourceURI: string
        name: string
        type: string
      }
    ]
  }
  events: {
    available: number
    returned: number
    collectionURI: string
    items: [
      {
        resourceURI: string
        name: string
      }
    ]
  }
  series: {
    available: number
    returned: number
    collectionURI: string
    items: [
      {
        resourceURI: string
        name: string
      }
    ]
  }
}

export default function Hero({ chosenHero, setLoaded }: HeroStateProps) {
  const [hero, setHero] = useState<HeroProps>()
  const [error, setError] = useState<Error | 'not-found' | null>(null)
  const router = useRouter()

  useEffect(() => {
    setLoaded(false)

    const fetchData = async (heroId: number) => {
      try {
        // const response = await query(queryHero)
        const response = null
        const heroes: HeroProps[] | null = response

        if (heroes && heroes !== null) {
          const foundHero = heroes.find(each => each.id === heroId)
          setHero(foundHero)
          setLoaded(true)
        } else {
          router.push('/')
        }
      } catch (error) {
        console.log(error)
        setError(error)
        setLoaded(true)
      }
    }

    console.log(chosenHero)
    if (!chosenHero) {
      const heroId = +router.query.heroId
      if (!heroId) {
        router.push('/')
      } else {
        fetchData(heroId)
      }
    } else {
      setHero(chosenHero)
      setLoaded(true)
    }
  }, [setLoaded, chosenHero, router])

  return (
    <Container>
      HERO
      {/* <Logo />
      {!error && hero ? (
        <HeroInfo>
          <Title>{hero.name}</Title>
          {hero.alternateName && (
            <Alternates>Also know as: {hero.alternateName}</Alternates>
          )}
          <Img src={hero.thumbnail} alt={`picture of a ${hero.name}`} />
          <h3>Ingredients</h3>
          <Ingredients>
            {hero.ingredients.map((each, i) => {
              return (
                <Line key={`ingr${i}`}>
                  <Ingredient>{each.ingredient}</Ingredient>
                  <Quantity>{each.quantity}</Quantity>
                </Line>
              )
            })}
          </Ingredients>
          <h3>Instructions</h3>
          <Instructions>{hero.instructions}</Instructions>
          <Button onClick={() => router.push('/')}>
            Let's hero another one
          </Button>
        </HeroInfo>
      ) : (
        <Error>
          <h2>Oops, something went wrong.</h2>
          <Button onClick={() => router.push('/')}>
            Let's hero another one
          </Button>
        </Error>
      )} */}
    </Container>
  )
}
