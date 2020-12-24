import BackgroundHeroes from '@components/BackgroundHeroes'
import { HeroStateProps } from '@pages/_app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Title, Container, List, Hero, Img, Name } from './styles'

export default function Home({ heroList }: HeroStateProps) {
  const router = useRouter()

  useEffect(() => {
    if (heroList.length === 0) {
      router.push('/')
    }
  }, [heroList.length, router])

  return (
    <>
      <Container>
        <Title>Choose your hero</Title>
        <List>
          {heroList.map(hero => {
            const {
              id,
              name,
              thumbnail: { path, extension },
            } = hero
            return (
              <Link href={id.toString()} key={id}>
                <Hero>
                  {path ? (
                    <Img src={`${path}/standard_xlarge.${extension}`} />
                  ) : (
                    ''
                  )}
                  <Name>{name}</Name>
                </Hero>
              </Link>
            )
          })}
        </List>
      </Container>
      <BackgroundHeroes />
    </>
  )
}
