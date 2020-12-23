import axios from 'axios'
import MD5 from 'crypto-js/md5'

export default async function personHandler({ query: { query } }, res) {
  if (query === '') {
    res.status(500).json({ message: "The name can't be empty" })
    return
  }
  // const filtered = people.filter((p) => p.id === id)

  const url = 'http://gateway.marvel.com/v1/public/characters'
  const pubkey = process.env.NEXT_PUBLIC_MARVEL_API
  const privkey = process.env.NEXT_SERVER_MARVEL_API

  console.log(privkey)

  const ts = Date.now()
  const hash = MD5(ts + privkey + pubkey).toString()

  try {
    const response = await axios.get(url, {
      params: {
        ts: ts,
        apikey: pubkey,
        hash: hash,
        nameStartsWith: query,
      },
    })
    res.status(200).json({ message: response.data })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error })
  }
}
