import Drink from '@components/Pages/Drink'
import { DrinkStateProps } from '@pages/_app'

export default function DrinkSlug(props: DrinkStateProps) {
  return <Drink {...props} />
}
