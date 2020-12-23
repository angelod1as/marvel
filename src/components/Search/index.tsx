import Button from '@components/Button'
import { HeroProps } from '@components/Pages/Hero'
import axios from 'axios'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { Wrapper, Label, Input, Flex, Error } from './styles'

interface SearchProps {
  setLoaded: Dispatch<SetStateAction<boolean>>
  setHeroList: Dispatch<SetStateAction<HeroProps[]>>
}

export default function Search({ setLoaded, setHeroList }: SearchProps) {
  const [hero, setHero] = useState('')
  const [error, setError] = useState<Error | 'not-found' | null>(null)

  const handleClick = useCallback(async () => {
    setLoaded(false)

    try {
      const response = await axios.get(`/api/query`, {
        params: {
          query: hero,
        },
      })
      console.log(response)
      const heros: HeroProps[] | null = response?.data?.heros

      if (heros && heros !== null) {
        setHeroList(heros)
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
  }, [hero, setLoaded, setHeroList])

  const handleInputChange = useCallback(({ target: { value } }) => {
    setHero(value)
  }, [])

  return (
    <Wrapper>
      <Label>What's your hero?</Label>
      <Flex>
        <Input
          placeholder="Margarita"
          value={hero}
          onChange={handleInputChange}
        />
        <Button onClick={handleClick}>Go</Button>
      </Flex>
      {error && (
        <Error>
          {error === 'not-found'
            ? 'Hero not found, try another one'
            : 'Oops, something went wrong, try again'}
        </Error>
      )}
    </Wrapper>
  )
}
