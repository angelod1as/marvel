import { useCallback } from 'react'
import Button from '@components/Button'
import { ModalWrapper, Modal, Inner, List, Close } from './styles'
import { useRouter } from 'next/router'
import { HeroStateProps } from '@pages/_app'

interface HeroListProps {
  heroList: HeroStateProps['heroList']
  setHeroList: HeroStateProps['setHeroList']
  setChosenHero: HeroStateProps['setChosenHero']
}

export default function HeroList({
  heroList,
  setHeroList,
  setChosenHero,
}: HeroListProps) {
  const router = useRouter()
  const handleClose = useCallback(() => {
    setHeroList([])
  }, [setHeroList])

  const handleClick = useCallback(
    strHero => {
      const chosen = heroList.find(hero => hero.strHero === strHero)
      setChosenHero(chosen)
      router.push(strHero)
    },
    [router, heroList, setChosenHero]
  )

  return (
    <ModalWrapper>
      <Modal>
        <Inner>
          <Close onClick={handleClose}>×</Close>
          <h2>Menu</h2>

          <List>
            {heroList.map(({ strHero }, i) => {
              return (
                <Button key={i} onClick={() => handleClick(strHero)}>
                  {strHero}
                </Button>
              )
            })}
          </List>
        </Inner>
      </Modal>
    </ModalWrapper>
  )
}
