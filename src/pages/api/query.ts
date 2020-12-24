import axios, { AxiosResponse } from 'axios'
import MD5 from 'crypto-js/md5'

export default async function queryCharacters({ query: { query } }, res) {
  const { name, id } = JSON.parse(query)
  const url = 'http://gateway.marvel.com/v1/public/characters'
  const pubkey = process.env.NEXT_PUBLIC_MARVEL_API
  const privkey = process.env.NEXT_SERVER_MARVEL_API

  const ts = Date.now()
  const hash = MD5(ts + privkey + pubkey).toString()

  try {
    let response: AxiosResponse<any>
    if (name) {
      response = await axios.get(url, {
        params: {
          ts: ts,
          apikey: pubkey,
          hash: hash,
          nameStartsWith: name,
        },
      })
    } else if (id) {
      response = await axios.get(`${url}/${id}`, {
        params: {
          ts: ts,
          apikey: pubkey,
          hash: hash,
        },
      })
    }
    if (response) {
      res.status(200).json({ message: response.data })
    } else {
      res
        .status(500)
        .json({ message: 'Something went wrong, we got no response' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error })
  }
}
