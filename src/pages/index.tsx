import Home from '@components/Pages/Home'
import { HeroStateProps } from './_app'

export default function Index(props: HeroStateProps) {
  return <Home {...props} />
}
