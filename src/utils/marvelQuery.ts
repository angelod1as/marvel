import axios from 'axios'
// import md5 from 'blueimp-md5'

const marvelQuery = async (character: string) => {
  const url = 'https://gateway.marvel.com/v1/public/characters'
  const apiKey = process.env.NEXT_PUBLIC_MARVEL_API

  const fullUrl = `${url}?name=${character}&apikey=${apiKey}`

  console.log(fullUrl)

  try {
    const response = await axios.get(fullUrl)
    console.log('axios', await axios.get(fullUrl))
    console.log('res', response)
    return response
  } catch (error) {
    console.log('err', error)
    console.log('errmsg', error.message)
    return error
  }
}

export default marvelQuery
