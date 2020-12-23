import { forwardRef, Dispatch, SetStateAction, useCallback } from 'react'
import Button from '@components/Button'
import { ModalWrapper, Modal, Inner, List, Close } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DrinkStateProps } from '@pages/_app'

interface DrinkListProps {
  drinkList: DrinkStateProps['drinkList']
  setDrinkList: DrinkStateProps['setDrinkList']
  setChosenDrink: DrinkStateProps['setChosenDrink']
}

export default function DrinkList({
  drinkList,
  setDrinkList,
  setChosenDrink,
}: DrinkListProps) {
  const router = useRouter()
  const handleClose = useCallback(() => {
    setDrinkList([])
  }, [setDrinkList])

  const handleClick = useCallback(
    strDrink => {
      const chosen = drinkList.find(drink => drink.strDrink === strDrink)
      setChosenDrink(chosen)
      router.push(strDrink)
    },
    [router]
  )

  return (
    <ModalWrapper>
      <Modal>
        <Inner>
          <Close onClick={handleClose}>×</Close>
          <h2>Menu</h2>

          <List>
            {drinkList.map(({ strDrink }, i) => {
              return (
                <Button key={i} onClick={() => handleClick(strDrink)}>
                  {strDrink}
                </Button>
              )
            })}
          </List>
        </Inner>
      </Modal>
    </ModalWrapper>
  )
}
