import Button from '@components/Button'
import Logo from '@components/Logo'
import { DrinkStateProps } from '@pages/_app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import query from 'src/functions/query'
// URGENT: query
import transformDrink, {
  newDrinkProps,
  DrinkProps,
} from 'src/functions/transformDrink'
import {
  Error,
  Container,
  Img,
  DrinkInfo,
  Title,
  Ingredients,
  Line,
  Ingredient,
  Instructions,
  Quantity,
  Alternates,
} from './style'

export default function Drink({ chosenDrink, setLoaded }: DrinkStateProps) {
  const [drink, setDrink] = useState<newDrinkProps>()
  const [error, setError] = useState<Error | 'not-found' | null>(null)
  const router = useRouter()

  useEffect(() => {
    setLoaded(false)

    const fetchData = async (queryDrink: string) => {
      try {
        // const response = await query(queryDrink)
        const response = null
        const drinks: DrinkProps[] | null = response

        if (drinks && drinks !== null) {
          const foundDrink = drinks.find(each => each.strDrink === queryDrink)
          const newDrink = transformDrink(foundDrink)
          setDrink(newDrink)
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

    console.log(chosenDrink)
    if (!chosenDrink) {
      const drink = router.query.drink
      if (Array.isArray(drink)) {
        router.push('/')
      } else {
        fetchData(drink)
      }
    } else {
      const newDrink = transformDrink(chosenDrink)
      setDrink(newDrink)
      setLoaded(true)
    }
  }, [setLoaded, chosenDrink, router])

  return (
    <Container>
      <Logo />
      {!error && drink ? (
        <DrinkInfo>
          <Title>{drink.name}</Title>
          {drink.alternateName && (
            <Alternates>Also know as: {drink.alternateName}</Alternates>
          )}
          <Img src={drink.thumbnail} alt={`picture of a ${drink.name}`} />
          <h3>Ingredients</h3>
          <Ingredients>
            {drink.ingredients.map((each, i) => {
              return (
                <Line key={`ingr${i}`}>
                  <Ingredient>{each.ingredient}</Ingredient>
                  <Quantity>{each.quantity}</Quantity>
                </Line>
              )
            })}
          </Ingredients>
          <h3>Instructions</h3>
          <Instructions>{drink.instructions}</Instructions>
          <Button onClick={() => router.push('/')}>
            Let's drink another one
          </Button>
        </DrinkInfo>
      ) : (
        <Error>
          <h2>Oops, something went wrong.</h2>
          <Button onClick={() => router.push('/')}>
            Let's drink another one
          </Button>
        </Error>
      )}
    </Container>
  )
}
