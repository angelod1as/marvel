import Button from '@components/Button'
import { useCallback, useState } from 'react'
import marvelQuery from 'src/utils/marvelQuery'
import { Wrapper, Label, Input, Flex } from './styles'

export default function Search() {
  const [character, setCharacter] = useState('')

  const handleClick = useCallback(async () => {
    try {
      const response = await marvelQuery(character)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }, [character])

  const handleInputChange = useCallback(({ target: { value } }) => {
    setCharacter(value)
  }, [])

  console.log(process.env.NEXT_PUBLIC_MARVEL_API)
  return (
    <Wrapper>
      <Label>Choose your hero</Label>
      <Flex>
        <Input
          placeholder="Iron Man"
          value={character}
          onChange={handleInputChange}
        />
        <Button onClick={handleClick}>Go</Button>
      </Flex>
    </Wrapper>
  )
}
