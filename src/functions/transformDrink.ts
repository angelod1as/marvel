export interface DrinkProps {
  idDrink: string
  strAlcoholic: string
  strCategory: string
  strDrink: string
  strDrinkAlternate?: any
  strDrinkThumb: string
  strGlass: string
  strIBA: string
  strImageAttribution: string
  strImageSource: string
  strIngredient1: string
  strIngredient2: string
  strIngredient3: string
  strIngredient4: string
  strIngredient5?: any
  strIngredient6?: any
  strIngredient7?: any
  strIngredient8?: any
  strIngredient9?: any
  strIngredient10?: any
  strIngredient11?: any
  strIngredient12?: any
  strIngredient13?: any
  strIngredient14?: any
  strIngredient15?: any
  strInstructions: string
  strMeasure1: string
  strMeasure2: string
  strMeasure3: string
  strMeasure4?: any
  strMeasure5?: any
  strMeasure6?: any
  strMeasure7?: any
  strMeasure8?: any
  strMeasure9?: any
  strMeasure10?: any
  strMeasure11?: any
  strMeasure12?: any
  strMeasure13?: any
  strMeasure14?: any
  strMeasure15?: any
  strTags: string
  strVideo?: any
}

export interface newDrinkProps {
  id: string
  name: string
  alternateName: string
  thumbnail: string
  glass: string
  instructions: string
  ingredients: {
    ingredient?: string
    quantity?: string
  }[]
}

export default function transformDrink(drink: DrinkProps) {
  const newDrink: newDrinkProps = {
    id: drink.idDrink,
    name: drink.strDrink,
    alternateName: drink.strDrinkAlternate,
    thumbnail: drink.strDrinkThumb,
    glass: drink.strGlass,
    instructions: drink.strInstructions,
    ingredients: [],
  }

  Object.keys(drink).forEach(each => {
    if (each.includes('strIngredient')) {
      const number = each.split('strIngredient')[1]
      const ingredient = drink[each]
      const quantity = drink[`strMeasure${number}`]
      if (ingredient) {
        newDrink.ingredients.push({
          ingredient,
          quantity,
        })
      }
    }
  })

  return newDrink
}
