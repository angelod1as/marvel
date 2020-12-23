import Button from '@components/Button'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import query from 'src/functions/query'
import { DrinkProps } from 'src/functions/transformDrink'
import { Wrapper, Label, Input, Flex, Error } from './styles'

interface SearchProps {
  setLoaded: Dispatch<SetStateAction<boolean>>
  setDrinkList: Dispatch<SetStateAction<DrinkProps[]>>
}

export default function Search({ setLoaded, setDrinkList }: SearchProps) {
  const [drink, setDrink] = useState('')
  const [error, setError] = useState<Error | 'not-found' | null>(null)

  const handleClick = useCallback(async () => {
    setLoaded(false)

    try {
      const response = await query(drink)
      const drinks: DrinkProps[] | null = response?.data?.drinks

      if (drinks && drinks !== null) {
        setDrinkList(drinks)
        setLoaded(true)
      } else {
        setError('not-found')
        setLoaded(true)
      }
    } catch (error) {
      console.log(error)
      setError(error)
      setLoaded(true)
    }
  }, [drink, setLoaded, setDrinkList])

  const handleInputChange = useCallback(({ target: { value } }) => {
    setDrink(value)
  }, [])

  return (
    <Wrapper>
      <Label>What's your drink?</Label>
      <Flex>
        <Input
          placeholder="Margarita"
          value={drink}
          onChange={handleInputChange}
        />
        <Button onClick={handleClick}>Go</Button>
      </Flex>
      {error && (
        <Error>
          {error === 'not-found'
            ? 'Drink not found, try another one'
            : 'Oops, something went wrong, try again'}
        </Error>
      )}
    </Wrapper>
  )
}
