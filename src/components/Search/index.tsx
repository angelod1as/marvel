import Button from '@components/Button'
import { HeroProps } from '@components/Pages/Hero'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { Wrapper, Label, Input, Flex, Error } from './styles'

interface SearchProps {
  setLoaded: Dispatch<SetStateAction<boolean>>
  setHeroList: Dispatch<SetStateAction<HeroProps[]>>
}

export default function Search({ setLoaded, setHeroList }: SearchProps) {
  const router = useRouter()
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
      const heroes: HeroProps[] | null = response?.data?.message?.data?.results

      if (heroes && heroes.length > 0) {
        setHeroList(heroes)
        setLoaded(true)
        router.push(`/choose?hero=${hero}`)
      } else {
        setError('not-found')
        setLoaded(true)
      }
    } catch (error) {
      console.log(error)
      setError(error)
      setLoaded(true)
    }
  }, [hero, setLoaded, setHeroList, router])

  const handleInputChange = useCallback(({ target: { value } }) => {
    setHero(value)
  }, [])

  const handleKeyUp = useCallback(
    ({ keyCode }) => {
      if (keyCode === 13) {
        handleClick()
      }
    },
    [handleClick]
  )

  return (
    <Wrapper>
      <Label>Search hero name</Label>
      <Flex>
        <Input
          placeholder="Spider-Man"
          value={hero}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
        />
        <Button onClick={handleClick}>Go</Button>
      </Flex>
      <Error>
        {error
          ? error === 'not-found'
            ? 'Hero not found, try another one'
            : 'Oops, something went wrong, try again'
          : ''}
      </Error>
    </Wrapper>
  )
}
