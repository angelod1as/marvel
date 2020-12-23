import axios from 'axios'
import { DrinkProps } from './transformDrink'

export default async function query(drink: string) {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
  const fullUrl = `${url}?s=${drink}`

  try {
    const response = await axios.get(fullUrl)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
